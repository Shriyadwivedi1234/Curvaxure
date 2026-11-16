import type { APIRoute } from 'astro';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { industries, focusAreas } from '@/config/booking';

export const prerender = false; // this endpoint runs on the server

const env = import.meta.env;
const clean = (v: FormDataEntryValue | null, max: number) => String(v ?? '').trim().slice(0, max);
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[6-9][0-9]{9}$/;
const NAME = /^[A-Za-zÀ-ÖØ-öø-ÿ][A-Za-zÀ-ÖØ-öø-ÿ .'-]{1,119}$/;
const COMPANY = /^[A-Za-z0-9][A-Za-z0-9 &.,'()/-]{1,159}$/;
const RATE_LIMITS = [
  { type: 'ip', value: 5 },
  { type: 'email', value: 3 },
  { type: 'phone', value: 3 },
  { type: 'identity', value: 2 },
] as const;
const RATE_WINDOW_HOURS = 1;

const hashAddress = async (address: string) => {
  const data = new TextEncoder().encode(address);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('');
};
const normalisePhone = (phone: string) => phone.replace(/\D/g, '');

export const POST: APIRoute = async ({ request, redirect, clientAddress }) => {
  const f = await request.formData();

  // Honeypot: real visitors never fill this. Pretend success, store nothing.
  if (clean(f.get('website'), 100)) return redirect('/thank-you', 303);

  const phoneDigits = clean(f.get('phone'), 10).replace(/\s/g, '');
  const lead = {
    name: clean(f.get('name'), 120),
    email: clean(f.get('email'), 200).toLowerCase(),
    phone: `+91${phoneDigits}`,
    company: clean(f.get('company'), 160),
    industry: clean(f.get('industry'), 60),
    focus: clean(f.get('focus'), 60),
    plan: clean(f.get('plan'), 30),
    source: clean(f.get('source'), 40),
    message: clean(f.get('message'), 2000),
  };

  const valid =
    NAME.test(lead.name) &&
    EMAIL.test(lead.email) &&
    PHONE.test(phoneDigits) &&
    COMPANY.test(lead.company) &&
    industries.some((i) => i.value === lead.industry) &&
    focusAreas.some((a) => a.value === lead.focus);
  if (!valid) return redirect('/book-consultation?error=invalid', 303);

  // Cloudflare Turnstile (only enforced when the secret key is configured)
  if (env.TURNSTILE_SECRET_KEY) {
    try {
      const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: clean(f.get('cf-turnstile-response'), 2048),
          remoteip: clientAddress,
        }),
      });
      const out = (await res.json()) as { success: boolean };
      if (!out.success) return redirect('/book-consultation?error=spam', 303);
    } catch {
      return redirect('/book-consultation?error=server', 303);
    }
  }


  // Store the lead. Server-side only.
  try {
    const supabaseUrl = env.SUPABASE_URL;
    const supabaseKey = env.SUPABASE_SECRET_KEY;

    if (
      !supabaseUrl ||
      !supabaseKey ||
      !supabaseKey.startsWith('sb_secret_')
    ) {
      throw new Error('Missing or invalid Supabase secret configuration');
    }

    const db = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const windowStart = new Date(Date.now() - RATE_WINDOW_HOURS * 60 * 60 * 1000).toISOString();
    const identities = [
      { type: 'ip', value: clientAddress },
      { type: 'email', value: lead.email },
      { type: 'phone', value: normalisePhone(lead.phone) },
      { type: 'identity', value: `${lead.email}|${normalisePhone(lead.phone)}` },
    ];
    const rateKeys = await Promise.all(
      identities.map(async ({ type, value }) => ({
        key_type: type,
        key_hash: await hashAddress(`${type}:${value}`),
      })),
    );
    const { data: recentAttempts, error: rateCheckError } = await db
      .from('lead_rate_limit_events')
      .select('key_type')
      .in('key_hash', rateKeys.map(({ key_hash }) => key_hash))
      .gte('created_at', windowStart);

    if (rateCheckError) {
      console.error('Rate-limit check error:', {
        code: rateCheckError.code,
        message: rateCheckError.message,
        hint: rateCheckError.hint,
      });
      throw rateCheckError;
    }

    const attemptCounts = new Map<string, number>();
    for (const attempt of recentAttempts ?? []) {
      attemptCounts.set(attempt.key_type, (attemptCounts.get(attempt.key_type) ?? 0) + 1);
    }
    if (RATE_LIMITS.some(({ type, value }) => (attemptCounts.get(type) ?? 0) >= value)) {
      return redirect('/book-consultation?error=rate', 303);
    }

    const { error: rateInsertError } = await db
      .from('lead_rate_limit_events')
      .insert(rateKeys);

    if (rateInsertError) {
      console.error('Rate-limit record error:', {
        code: rateInsertError.code,
        message: rateInsertError.message,
        hint: rateInsertError.hint,
      });
      throw rateInsertError;
    }

    const { error } = await db
      .from('leads')
      .insert(lead);

    if (error) {
      console.error('Supabase insert error:', {
        code: error.code,
        message: error.message,
        hint: error.hint,
      });
      throw error;
    }

    console.log('Curvaxure lead successfully saved');

  } catch (e) {
    console.error('Lead storage failed:', e);
    return redirect('/book-consultation?error=server', 303);
  }


  // Notify you. Best effort: the lead is already saved if this fails.
  try {
    if (env.RESEND_API_KEY && env.NOTIFY_EMAIL) {
      const rows = Object.entries(lead)
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0"><b>${k}</b></td><td>${esc(v) || '-'}</td></tr>`)
        .join('');
      await new Resend(env.RESEND_API_KEY).emails.send({
        from: env.FROM_EMAIL ?? 'Curvaxure <onboarding@resend.dev>',
        to: env.NOTIFY_EMAIL,
        replyTo: lead.email,
        subject: `New assessment request: ${lead.company}`,
        html: `<table>${rows}</table>`,
      });
    }
  } catch (e) {
    console.error('notify failed', e);
  }

  return redirect('/thank-you', 303);
};

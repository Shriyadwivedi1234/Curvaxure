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

export const POST: APIRoute = async ({ request, redirect, clientAddress }) => {
  const f = await request.formData();

  // Honeypot: real visitors never fill this. Pretend success, store nothing.
  if (clean(f.get('website'), 100)) return redirect('/thank-you', 303);

  const lead = {
    name: clean(f.get('name'), 120),
    email: clean(f.get('email'), 200).toLowerCase(),
    company: clean(f.get('company'), 160),
    industry: clean(f.get('industry'), 60),
    focus: clean(f.get('focus'), 60),
    plan: clean(f.get('plan'), 30),
    source: clean(f.get('source'), 40),
    message: clean(f.get('message'), 2000),
  };

  const valid =
    lead.name.length >= 2 &&
    EMAIL.test(lead.email) &&
    lead.company.length >= 2 &&
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

  // Store the lead. Uses the service-role key, which stays on the server.
  try {
    const db = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
    const { error } = await db.from('leads').insert(lead);
    if (error) throw error;
  } catch (e) {
    console.error('lead insert failed', e);
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

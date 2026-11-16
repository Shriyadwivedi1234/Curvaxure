-- Run once in the Supabase SQL editor.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text not null,
  company text not null,
  industry text not null,
  focus text not null,
  plan text,
  source text,
  message text,
  status text not null default 'new'
);
alter table public.leads add column if not exists phone text;
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- No public access: only the server (service-role key) can read or write.
alter table public.leads enable row level security;

-- Rate-limit form submissions using one-way hashes of multiple identities.
create table if not exists public.lead_rate_limit_events (
  id uuid primary key default gen_random_uuid(),
  key_type text not null,
  key_hash text not null,
  created_at timestamptz not null default now()
);
create index if not exists lead_rate_limit_events_key_created_at_idx
  on public.lead_rate_limit_events (key_hash, created_at desc);
alter table public.lead_rate_limit_events enable row level security;

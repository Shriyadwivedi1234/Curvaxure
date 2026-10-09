-- Run once in the Supabase SQL editor.
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text not null,
  industry text not null,
  focus text not null,
  plan text,
  source text,
  message text,
  status text not null default 'new'
);
create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- No public access: only the server (service-role key) can read or write.
alter table public.leads enable row level security;

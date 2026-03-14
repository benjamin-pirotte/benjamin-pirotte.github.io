create table if not exists email_validations (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  key         text not null,
  is_approved boolean not null default false,
  created_at  timestamptz not null default now()
);

-- Only the service role can read/write this table (Edge Function uses service role key)
alter table email_validations enable row level security;

create policy "service role only"
  on email_validations
  using (false);

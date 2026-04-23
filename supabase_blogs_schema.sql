create table if not exists public.blogs (
  slug text primary key,
  title text not null,
  excerpt text not null,
  cover_image text,
  date text not null,
  tag text not null,
  seo_title text not null,
  seo_description text not null,
  content text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.solar_requests (
  id bigint generated always as identity primary key,
  name text not null,
  phone text not null,
  created_at timestamptz not null default now()
);

alter table public.blogs enable row level security;
alter table public.solar_requests enable row level security;

drop policy if exists "Public read blogs" on public.blogs;
create policy "Public read blogs" on public.blogs
for select
to anon, authenticated
using (true);

drop policy if exists "Public write blogs" on public.blogs;
create policy "Public write blogs" on public.blogs
for all
to anon, authenticated
using (true)
with check (true);

drop policy if exists "Public insert solar requests" on public.solar_requests;
create policy "Public insert solar requests" on public.solar_requests
for insert
to anon, authenticated
with check (true);

drop policy if exists "Public read solar requests" on public.solar_requests;
create policy "Public read solar requests" on public.solar_requests
for select
to anon, authenticated
using (true);


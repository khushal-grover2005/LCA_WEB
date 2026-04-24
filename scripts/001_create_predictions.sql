-- Predictions table: stores each LCA prediction a user runs.
-- Input payload and the full backend response are persisted as JSONB so we
-- can render the detailed results without re-calling the Hugging Face API.

create table if not exists public.predictions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  metal text not null,
  production_route text not null,
  -- Headline metrics extracted from the response for quick list rendering.
  gwp_total numeric,
  circularity_index numeric,
  resource_efficiency numeric,
  recycled_content_est numeric,
  reuse_potential numeric,
  -- Raw request body the user submitted (sparse — only fields they entered).
  input_payload jsonb not null default '{}'::jsonb,
  -- Full response from /predict including technical_profile + sankey_data.
  response jsonb not null default '{}'::jsonb,
  -- Which fields the backend imputed.
  imputed_fields text[] not null default array[]::text[],
  created_at timestamptz not null default now()
);

create index if not exists predictions_user_id_created_idx
  on public.predictions (user_id, created_at desc);

alter table public.predictions enable row level security;

drop policy if exists "predictions_select_own" on public.predictions;
drop policy if exists "predictions_insert_own" on public.predictions;
drop policy if exists "predictions_update_own" on public.predictions;
drop policy if exists "predictions_delete_own" on public.predictions;

create policy "predictions_select_own"
  on public.predictions for select
  using (auth.uid() = user_id);

create policy "predictions_insert_own"
  on public.predictions for insert
  with check (auth.uid() = user_id);

create policy "predictions_update_own"
  on public.predictions for update
  using (auth.uid() = user_id);

create policy "predictions_delete_own"
  on public.predictions for delete
  using (auth.uid() = user_id);

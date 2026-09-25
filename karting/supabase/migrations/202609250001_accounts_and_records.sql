-- Authenticated personal bests. Guests can read the leaderboard but cannot write.
begin;
create table public.karting_records (
  user_id uuid not null references auth.users(id) on delete cascade,
  track text not null check (track in ('lonato','genk','pfi','kristianstad','valley','harbor','neon')),
  cls text not null check (cls in ('junior','ok','kz2')),
  name text not null check (char_length(btrim(name)) between 1 and 30),
  time_ms integer not null check (time_ms between 1000 and 600000),
  updated_at timestamptz not null default now(),
  primary key (user_id, track, cls)
);
create index karting_records_ranking on public.karting_records (track, cls, time_ms, updated_at);
alter table public.karting_records enable row level security;
revoke all on public.karting_records from anon, authenticated;
grant select on public.karting_records to anon, authenticated;
create policy "Public leaderboard" on public.karting_records for select to anon, authenticated using (true);

-- Only this function can write. The owner comes from the verified JWT, never the client.
-- A single atomic upsert prevents a slower concurrent request replacing a faster lap.
create function public.submit_karting_lap(p_track text, p_cls text, p_name text, p_time_ms integer)
returns void language plpgsql security definer set search_path = '' as $$
declare
  player uuid := auth.uid();
begin
  if player is null or coalesce((auth.jwt() ->> 'is_anonymous')::boolean, false) then
    raise exception 'Sign in to publish a lap' using errcode = '42501';
  end if;
  insert into public.karting_records (user_id, track, cls, name, time_ms)
  values (player, p_track, p_cls, btrim(p_name), p_time_ms)
  on conflict (user_id, track, cls) do update
    set time_ms = excluded.time_ms, name = excluded.name, updated_at = now()
    where excluded.time_ms < public.karting_records.time_ms;
end;
$$;
revoke all on function public.submit_karting_lap(text, text, text, integer) from public, anon;
grant execute on function public.submit_karting_lap(text, text, text, integer) to authenticated;
commit;

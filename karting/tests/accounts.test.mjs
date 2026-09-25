import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { PGlite } from '@electric-sql/pglite';

const source = await readFile(new URL('../src/storage.js', import.meta.url), 'utf8');
const { Store } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));
test('guest and two accounts have separate persistent records', () => {
  const memory = new Map();
  globalThis.localStorage = { getItem: k => memory.get(k) || null, setItem: (k,v) => memory.set(k,v) };
  const store = new Store();
  store.saveLap('lonato:ok', 50, null, null, 'driver');
  store.setAccount('alice');
  assert.equal(store.record('lonato:ok').bestLap, null);
  store.saveLap('lonato:ok', 52, null, null, 'driver');
  store.record('lonato:ok').pendingTime = 52; store.save();
  store.setAccount('bob');
  assert.equal(store.record('lonato:ok').bestLap, null);
  store.saveLap('lonato:ok', 53, null, null, 'driver');
  store.setAccount(null);
  assert.equal(store.record('lonato:ok').bestLap, 50);
  const reload = new Store(); reload.setAccount('alice');
  assert.equal(reload.record('lonato:ok').bestLap, 52);
  assert.equal(reload.record('lonato:ok').pendingTime, 52);
  reload.setAccount('bob'); assert.equal(reload.record('lonato:ok').bestLap, 53);
});

test('database enforces authentication, ownership, best time and valid values', async () => {
  const db = new PGlite();
  try {
    await db.exec(`create role anon; create role authenticated; create schema auth;
      create table auth.users(id uuid primary key);
      create function auth.uid() returns uuid language sql as $$ select nullif(current_setting('request.jwt.claim.sub', true),'')::uuid $$;
      create function auth.jwt() returns jsonb language sql as $$ select coalesce(nullif(current_setting('request.jwt.claims',true),''),'{}')::jsonb $$;
      grant usage on schema public, auth to anon, authenticated;
      insert into auth.users values ('00000000-0000-0000-0000-000000000001'), ('00000000-0000-0000-0000-000000000002');`);
    await db.exec(await readFile(new URL('../supabase/migrations/20260925001153_accounts_and_records.sql', import.meta.url), 'utf8'));
    await db.exec('set role anon');
    assert.equal((await db.query('select * from karting_records')).rows.length, 0);
    await assert.rejects(db.query("select submit_karting_lap('lonato','ok','Guest',50000)"));
    await assert.rejects(db.query("insert into karting_records values ('00000000-0000-0000-0000-000000000001','lonato','ok','Guest',50000,now())"));
    await db.exec("reset role; set role authenticated; set request.jwt.claim.sub = '00000000-0000-0000-0000-000000000001'");
    await db.query("select submit_karting_lap('lonato','ok','Alice',50000)");
    await db.query("select submit_karting_lap('lonato','ok','Slower',52000)");
    assert.equal((await db.query('select time_ms from karting_records')).rows[0].time_ms, 50000);
    await db.query("select submit_karting_lap('lonato','ok','Alice',49000)");
    assert.equal((await db.query('select time_ms from karting_records')).rows[0].time_ms, 49000);
    await assert.rejects(db.query("select submit_karting_lap('unknown','ok','Alice',49000)"));
    await assert.rejects(db.query("select submit_karting_lap('lonato','ok','Alice',-1)"));
    await assert.rejects(db.query("select submit_karting_lap('lonato','ok','   ',49000)"));
    await db.exec("set request.jwt.claim.sub = '00000000-0000-0000-0000-000000000002'");
    await assert.rejects(db.query("update karting_records set time_ms = 1000"));
    await assert.rejects(db.query('delete from karting_records'));
    await db.query("select submit_karting_lap('lonato','ok','Bob',51000)");
    assert.equal((await db.query('select * from karting_records')).rows.length, 2);
    await db.exec(`set request.jwt.claims = '{"is_anonymous":true}'`);
    await assert.rejects(db.query("select submit_karting_lap('lonato','ok','Anonymous',48000)"));
    await db.exec("set request.jwt.claims = '{}'; set request.jwt.claim.sub = ''");
    await assert.rejects(db.query("select submit_karting_lap('lonato','ok','No user',48000)"));
    await db.exec('reset role; set role anon');
    assert.deepEqual((await db.query('select name from karting_records order by time_ms')).rows.map(r => r.name), ['Alice','Bob']);
  } finally { await db.close(); }
});

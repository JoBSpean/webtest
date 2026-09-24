// Общая таблица рекордов для публичного сайта (Supabase REST). Настройка — в
// online-config.js: window.APEX_ONLINE = { url: 'https://xxx.supabase.co', key: 'anon-ключ' }.
// Без настройки игра работает на локальных рекордах; в артефакте claude.ai
// таблицу ведёт встроенное хранилище (lab.js).
const cfg = () => { try { const c = window.APEX_ONLINE; return c && c.url && c.key ? c : null; } catch (e) { return null; } };
export const onlineEnabled = () => !!cfg();

async function req(path, opts = {}) {
  const c = cfg();
  const r = await fetch(c.url.replace(/\/$/, '') + '/rest/v1/' + path, {
    ...opts,
    headers: { apikey: c.key, Authorization: 'Bearer ' + c.key, 'Content-Type': 'application/json', ...(opts.headers || {}) },
  });
  if (!r.ok) throw Error('HTTP ' + r.status);
  return r.status === 204 ? null : r.json();
}

// лучший круг игрока: одна строка на (устройство, трасса, класс), обновляется только на более быстрый
export async function pushScore(client, track, cls, name, time) {
  if (!cfg()) return false;
  const t = Math.round(time * 1000) / 1000;
  const old = await req(`lap_records?select=time&client_id=eq.${encodeURIComponent(client)}&track=eq.${track}&cls=eq.${cls}`);
  if (old && old[0] && old[0].time <= t) return false;
  await req('lap_records?on_conflict=client_id,track,cls', {
    method: 'POST',
    headers: { Prefer: 'resolution=merge-duplicates,return=minimal' },
    body: JSON.stringify({ client_id: client, track, cls, name: String(name).slice(0, 30), time: t, date: new Date().toISOString() }),
  });
  return true;
}

export async function pullScores(track, cls, limit = 30) {
  if (!cfg()) return null;
  const rows = await req(`lap_records?select=name,time,date&track=eq.${track}&cls=eq.${cls}&order=time.asc&limit=${limit}`);
  return (rows || []).map((r) => ({ name: String(r.name || 'Игрок'), time: Number(r.time), date: Date.parse(r.date) || 0 })).filter((r) => Number.isFinite(r.time));
}

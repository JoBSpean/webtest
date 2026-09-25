import { createClient } from '@supabase/supabase-js';
let client;
let user = null;
export function getClient() {
  const c = window.APEX_ONLINE;
  if (!c?.url || !c?.key) return null;
  return client || (client = createClient(c.url, c.key));
}
export const onlineEnabled = () => !!getClient();
export const currentUser = () => user;
export function watchAuth(callback) {
  const db = getClient();
  if (!db) { callback(null); return; }
  db.auth.onAuthStateChange((event, session) => {
    user = session?.user || null;
    const next = user;
    // Requests must run outside the auth callback's internal lock.
    setTimeout(() => callback(next, event), 0);
  });
}
export async function pushScore(owner, track, cls, name, time) {
  const db = getClient();
  if (!db || !user || user.id !== owner) return false;
  const { data, error } = await db.auth.getSession();
  if (error) throw error;
  if (data.session?.user.id !== owner || user?.id !== owner) return false;
  // Freeze the token for this lap: switching accounts must not change its owner.
  const config = window.APEX_ONLINE;
  const response = await fetch(config.url.replace(/\/$/, '') + '/rest/v1/rpc/submit_karting_lap', {
    method: 'POST',
    headers: { apikey: config.key, Authorization: 'Bearer ' + data.session.access_token, 'Content-Type': 'application/json' },
    body: JSON.stringify({
    p_track: track, p_cls: cls, p_name: String(name).trim().slice(0, 30) || 'Игрок',
    p_time_ms: Math.round(time * 1000),
    }),
  });
  if (!response.ok) throw new Error('Не удалось сохранить рекорд: ' + response.status);
  return true;
}
const mapRow = (r) => ({ ...r, name: r.name || 'Игрок', time: r.time_ms / 1000, date: Date.parse(r.updated_at) });
export async function pullScores(track, cls, limit = 30) {
  const { data, error } = await getClient().from('karting_records').select('name,time_ms,updated_at')
    .eq('track', track).eq('cls', cls).order('time_ms').order('updated_at').limit(limit);
  if (error) throw error;
  return data.map(mapRow);
}
export async function pullPersonal(owner) {
  const { data, error } = await getClient().from('karting_records').select('track,cls,name,time_ms,updated_at').eq('user_id', owner);
  if (error) throw error;
  return data.map(mapRow);
}

// Лаборатория ИИ (только для админа): обучение нейропилотов на выбранной трассе
// и классе, настройки эволюции, графики, MMR, сохранения (браузер, файл, облако),
// гараж обученных пилотов и таблицы рекордов. Логика доступа, облака и гаража
// перенесена из Velocity Grid; вход — те же логин и пароль.
import * as NN from './neuro.js';
import { TRACKS } from './trackdata.js';
import { CLASSES } from './physics.js';
import { Race, getGeom, recordKey } from './race.js';
import { RaceAI } from './ai.js';
import * as Online from './online.js';
import { fmtTime, clamp } from './util.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const finite = (v, a, b) => typeof v === 'number' && Number.isFinite(v) && v >= a && v <= b;
const r4 = (v) => Math.round(v * 1e4) / 1e4;
const TRACK_IDS = TRACKS.map((t) => t.id);
const CLASS_IDS = Object.keys(CLASSES);
const WORLD_KEY = 'apex.garage.v1';
const labKey = (t, c) => `apex.lab.v1.${t}.${c}`;
const docKey = (t, c) => t + '-' + c;
const trackDef = (id) => TRACKS.find((t) => t.id === id);
const trackShort = (id) => (trackDef(id) || { short: id }).short;
const trackName = (id) => (trackDef(id) || { name: id }).name;
const splitKey = (key) => { const [t, c] = key.split(':'); return { t, c }; };
const validKey = (key) => { const { t, c } = splitKey(String(key)); return TRACK_IDS.includes(t) && !!CLASSES[c]; };
const fmt = (t) => (t == null || !Number.isFinite(t) ? '—' : fmtTime(t));

const ADMIN_HASH = 'd9e6226a2c0cf743aaf0f6d0d421fedb12adbfe2c9ca143b2dde46100b615e77';
const ADMIN_KEY = 'apex.admin.v1';
const ADMIN_SALT = ':velocity-grid-2026';

function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function lsSet(k, v) { localStorage.setItem(k, v); }
function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { /* нет доступа */ } }

// ---------- SHA-256 (без crypto.subtle: он недоступен на file://) ----------
const SHA_K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
export function sha256(str) {
  const bytes = new TextEncoder().encode(str), bitLen = bytes.length * 8;
  const padded = new Uint8Array((((bytes.length + 8) >> 6) + 1) * 64);
  padded.set(bytes); padded[bytes.length] = 0x80;
  new DataView(padded.buffer).setUint32(padded.length - 4, bitLen >>> 0, false);
  const H = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
  const w = new Uint32Array(64), view = new DataView(padded.buffer);
  const rr = (x, n) => (x >>> n) | (x << (32 - n));
  for (let i = 0; i < padded.length; i += 64) {
    for (let t = 0; t < 16; t++) w[t] = view.getUint32(i + t * 4, false);
    for (let t = 16; t < 64; t++) {
      const s0 = rr(w[t - 15], 7) ^ rr(w[t - 15], 18) ^ (w[t - 15] >>> 3), s1 = rr(w[t - 2], 17) ^ rr(w[t - 2], 19) ^ (w[t - 2] >>> 10);
      w[t] = (w[t - 16] + s0 + w[t - 7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, h] = H;
    for (let t = 0; t < 64; t++) {
      const S1 = rr(e, 6) ^ rr(e, 11) ^ rr(e, 25), ch = (e & f) ^ (~e & g), t1 = (h + S1 + ch + SHA_K[t] + w[t]) >>> 0;
      const S0 = rr(a, 2) ^ rr(a, 13) ^ rr(a, 22), maj = (a & b) ^ (a & c) ^ (b & c), t2 = (S0 + maj) >>> 0;
      h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
    }
    const v = [a, b, c, d, e, f, g, h];
    for (let t = 0; t < 8; t++) H[t] = (H[t] + v[t]) >>> 0;
  }
  return H.map((x) => x.toString(16).padStart(8, '0')).join('');
}

function clientID() {
  try {
    let id = localStorage.getItem('apex.client');
    if (!id) { id = 'c' + Math.random().toString(36).slice(2, 10); localStorage.setItem('apex.client', id); }
    return id;
  } catch (e) { return 'c-anon'; }
}

function cleanRows(rows) {
  return (Array.isArray(rows) ? rows : []).filter((r) => r && finite(r.time, 0, 10000) && typeof r.name === 'string' && r.name.length <= 80 && typeof r.note === 'string' && r.note.length <= 100 && finite(r.date, 0, 1e15)).slice(0, 100);
}
function mergeRows(a, b) {
  const out = (a || []).concat(b || []), seen = new Set(), res = [];
  out.sort((x, y) => x.time - y.time);
  for (const r of out) { const k = (r.brainID || r.name) + '|' + r.time.toFixed(3); if (seen.has(k)) continue; seen.add(k); res.push(r); }
  return res.slice(0, 100);
}

// ---------- настройки эволюции ----------
const SET_BY_KEY = Object.fromEntries(NN.SETTINGS.map((s) => [s.k, s]));
function validateConfig(c) {
  if (!c || typeof c !== 'object' || !finite(c.mutation, 0, 1)) throw Error('Неверные настройки');
  for (const s of NN.SETTINGS) {
    const v = c[s.k];
    if (v === undefined) continue;
    if (s.t === 'bool') { if (typeof v !== 'boolean') throw Error('Неверная настройка ' + s.k); }
    else if (s.t === 'sel') { if (!s.opts.includes(v)) throw Error('Неверный режим отбора'); }
    else if (!finite(v, s.min, s.max) || (s.s === 1 && !Number.isInteger(v))) throw Error('Настройка вне диапазона: ' + s.n);
  }
}
const fmtVal = (s, v) => (s.t === 'bool' ? (v ? 'вкл' : 'выкл') : s.t === 'sel' ? s.optLabels[s.opts.indexOf(v)] : String(v));
function controlHTML(s) {
  if (s.t === 'bool') return `<label class="switch"><input id="cfg-${s.k}" type="checkbox" aria-label="${esc(s.n)}"><span class="trk"></span></label>`;
  if (s.t === 'sel') return `<select id="cfg-${s.k}" aria-label="${esc(s.n)}">${s.opts.map((v, i) => `<option value="${v}">${s.optLabels[i]}</option>`).join('')}</select>`;
  return `<input id="rng-${s.k}" class="set-range" type="range" min="${s.min}" max="${s.max}" step="${s.s}" aria-label="${esc(s.n)}">` +
    `<input id="cfg-${s.k}" class="set-num" type="number" min="${s.min}" max="${s.max}" step="${s.s}" aria-label="${esc(s.n)}">`;
}
function readControl(s, el) {
  let v = s.t === 'bool' ? el.checked : s.t === 'sel' ? el.value : Number(el.value);
  if (s.t === 'num') { v = Number.isFinite(v) ? clamp(v, s.min, s.max) : NN.DEFAULTS[s.k]; if (s.s === 1) v = Math.round(v); }
  return v;
}

// ---------- графики ----------
const CH = { grid: '#262c36', text: '#8b93a1', green: '#3ddc84', purple: '#b36bff', yellow: '#ffd23f', red: '#ff7a86' };
function visible(el) { return !!(el && el.offsetParent !== null && el.getBoundingClientRect().width > 0); }
function chart(id, series, maxY, label, xlabel, minY = 0, right = null) {
  const c = $(id);
  if (!visible(c)) return;
  const r = c.getBoundingClientRect(), w = Math.max(220, r.width), h = 132, d = Math.min(devicePixelRatio || 1, 2);
  if (c.width !== Math.round(w * d) || c.height !== h * d) { c.width = Math.round(w * d); c.height = h * d; }
  const z = c.getContext('2d');
  z.setTransform(d, 0, 0, d, 0, 0);
  z.clearRect(0, 0, w, h);
  const left = 36, rgt = w - (right ? 30 : 12), top = 17, bottom = 106;
  z.font = '9px ui-monospace, Menlo, monospace';
  for (let i = 0; i <= 4; i++) {
    const y = bottom - ((bottom - top) * i) / 4;
    z.strokeStyle = CH.grid; z.beginPath(); z.moveTo(left, y); z.lineTo(rgt, y); z.stroke();
    const tick = minY + ((maxY - minY) * i) / 4;
    z.fillStyle = CH.text;
    z.fillText(maxY - minY < 1 ? tick.toFixed(2) : maxY - minY < 10 ? tick.toFixed(1) : String(Math.round(tick)), 3, y + 3);
    if (right) { z.fillStyle = right.color; z.fillText(String(Math.round((right.max * i) / 4)), rgt + 5, y + 3); }
  }
  z.fillStyle = CH.text;
  z.fillText(label, left, 10);
  z.fillText(xlabel, left, 124);
  if (!series.some((s) => s.values.some(Number.isFinite))) { z.fillText('Данные появятся при обучении', left + 8, 65); return; }
  for (const s of series) {
    z.strokeStyle = s.color; z.lineWidth = 1.8; z.beginPath();
    let pen = false;
    s.values.forEach((v, i) => {
      if (!Number.isFinite(v)) { pen = false; return; }
      const px = left + ((rgt - left) * i) / Math.max(1, s.values.length - 1);
      const py = bottom - (bottom - top) * clamp((v - minY) / (maxY - minY || 1), 0, 1);
      if (pen) z.lineTo(px, py); else z.moveTo(px, py);
      pen = true;
    });
    z.stroke();
    if (s.values.length === 1 && Number.isFinite(s.values[0])) { z.fillStyle = s.color; z.fillRect(left - 2, bottom - ((bottom - top) * (s.values[0] - minY)) / (maxY - minY || 1) - 2, 4, 4); }
  }
}

export class Lab {
  constructor(app) {
    this.app = app;
    this.admin = false;
    this.world = { version: 1, nextBrain: 1, library: [], boards: {}, mine: {}, labTrack: 'lonato', labCls: 'ok' };
    this.lab = null; this.geom = null;
    this.cfg = { ...NN.DEFAULTS, goal: NN.defaultGoal('lonato', 'ok') };
    this.track = 'lonato'; this.cls = 'ok';
    this.training = false; this.rate = 12; this.acc = 0;
    this.telemetry = []; this.telT = 0;
    this.rateSteps = 0; this.rateClock = 0; this.actualRate = 0;
    this.uiClock = 0; this.autoClock = 0; this.cloudClock = 0; this.lastRender = 0;
    this.savePending = false;
    this.fpsFrames = 0; this.fpsTime = 0; this.frameMS = 0;
    this.active = false;
    this.db = null; this.downloads = null; this.cloudOwner = false; this.cloudState = 'idle';
    this.cloudDirty = { session: false, world: false };
    this.clientID = clientID();
    this.askResolve = null; this.afterLogin = null;
    this.garageKey = recordKey('lonato', 'ok');
  }

  boot() {
    try { this.admin = lsGet(ADMIN_KEY) === ADMIN_HASH; } catch (e) { this.admin = false; }
    this.loadWorld();
    this.track = TRACK_IDS.includes(this.world.labTrack) ? this.world.labTrack : 'lonato';
    this.cls = CLASSES[this.world.labCls] ? this.world.labCls : 'ok';
    this.buildSelects();
    this.buildSettings();
    this.bindUI();
    this.setCloud('idle');
    this.applyAdminUI();
    this.syncStoreToBoards();
    this.initCloud();
  }

  status(s) { $('dataStatus').textContent = s; }

  // ---------- диалоги ----------
  ask(text, okLabel) {
    return new Promise((res) => {
      $('askText').textContent = text;
      $('askOk').textContent = okLabel || 'Да';
      $('askCard').hidden = false;
      this.askResolve = res;
      setTimeout(() => $('askOk').focus(), 30);
    });
  }
  closeAsk(v) { $('askCard').hidden = true; const r = this.askResolve; this.askResolve = null; if (r) r(v); }
  // Esc закрывает модальные окна; true — событие обработано
  handleEscape() {
    if (!$('askCard').hidden) { this.closeAsk(false); return true; }
    if (!$('loginCard').hidden) { $('loginCard').hidden = true; this.afterLogin = null; return true; }
    if (!$('garage').hidden) { this.closeGarage(); return true; }
    return false;
  }
  modalOpen() { return !$('askCard').hidden || !$('loginCard').hidden || !$('garage').hidden; }

  // ---------- админ-зона ----------
  requestAdmin(after) {
    this.afterLogin = after || null;
    $('loginError').textContent = '';
    $('loginPass').value = '';
    $('loginCard').hidden = false;
    setTimeout(() => ($('loginUser').value ? $('loginPass') : $('loginUser')).focus(), 30);
  }
  submitLogin() {
    const u = $('loginUser').value.trim(), p = $('loginPass').value;
    if (sha256(u + ':' + p + ADMIN_SALT) !== ADMIN_HASH) { $('loginError').textContent = 'Неверный логин или пароль.'; $('loginPass').select(); return; }
    this.admin = true;
    try { if ($('loginRemember').checked) lsSet(ADMIN_KEY, ADMIN_HASH); else lsDel(ADMIN_KEY); } catch (e) { /* без запоминания */ }
    $('loginCard').hidden = true; $('loginPass').value = '';
    this.applyAdminUI();
    this.status('Админ-зона открыта. Лаборатория и гараж доступны.');
    if (this.db) this.cloudSync();
    const f = this.afterLogin; this.afterLogin = null;
    if (f) f();
  }
  logout() {
    this.admin = false;
    lsDel(ADMIN_KEY);
    this.training = false;
    if (this.active) this.leave();
    const r = this.app.race;
    if (r && r.mode === 'watch' && this.app.state !== 'menu') this.app.quitToMenu();
    this.applyAdminUI();
  }
  applyAdminUI() {
    const a = this.admin;
    $('adminBtn').textContent = a ? 'Выйти' : 'Админ-зона';
    $('adminBtn').classList.toggle('accent', !a);
    $('lockChip').textContent = a ? 'Админ · полный доступ' : (Online.currentUser() ? 'Аккаунт пилота' : 'Гостевой режим');
    $('lockChip').className = 'chip ' + (a ? 'ok' : 'warn');
    $('garageBtn').textContent = a ? 'Гараж / рекорды' : 'Рекорды';
    $('garagePilots').hidden = !a;
    $('aiBoardWrap').hidden = !a;
    $('labLock').innerHTML = a ? 'нейроэволюция · ' + esc(trackShort(this.track)) : '<span class="lock">админ</span>';
    this.app.updateWelcome();
  }

  // ---------- гараж: библиотека пилотов и таблицы ----------
  loadWorld() {
    try {
      const p = JSON.parse(lsGet(WORLD_KEY) || 'null');
      if (!p) return;
      if (p.version !== 1 || !Array.isArray(p.library) || p.library.length > 200) throw Error('Формат гаража не поддерживается');
      const w = this.world;
      w.library = p.library.filter((b) => NN.validBrain(b, TRACK_IDS));
      w.nextBrain = Number.isSafeInteger(p.nextBrain) && p.nextBrain > 0 ? p.nextBrain : 1;
      w.boards = {};
      for (const key of Object.keys(p.boards || {})) if (validKey(key)) w.boards[key] = { human: cleanRows(p.boards[key].human), ai: cleanRows(p.boards[key].ai) };
      w.mine = {};
      for (const key of Object.keys(p.mine || {})) if (validKey(key) && finite(p.mine[key], 0, 10000)) w.mine[key] = p.mine[key];
      if (TRACK_IDS.includes(p.labTrack)) w.labTrack = p.labTrack;
      if (CLASSES[p.labCls]) w.labCls = p.labCls;
      for (const b of w.library) { const n = Number(String(b.id).replace('brain-', '')); if (Number.isSafeInteger(n)) w.nextBrain = Math.max(w.nextBrain, n + 1); }
    } catch (e) { this.status('Гараж не загружен: ' + e.message); }
  }
  saveWorld() {
    try { lsSet(WORLD_KEY, JSON.stringify(this.world)); } catch (e) { this.status('Не удалось сохранить гараж: хранилище заполнено. Экспортируйте обучение.'); }
    this.cloudDirty.world = true;
  }
  board(key) { return this.world.boards[key] || (this.world.boards[key] = { human: [], ai: [] }); }
  addResult(key, kind, time, name, brainID = null, note = '', generation = 0, sid = null) {
    if (!finite(time, 0.1, 10000)) return;
    const rows = this.board(key)[kind];
    const old = kind === 'ai' && brainID ? rows.find((r) => r.brainID === brainID) : sid ? rows.find((r) => r.sid === sid) : null;
    if (old && old.time <= time) return;
    if (old) rows.splice(rows.indexOf(old), 1);
    const row = { time, name: String(name).slice(0, 80), brainID, note: String(note).slice(0, 100), date: Date.now(), generation };
    if (sid) row.sid = String(sid).slice(0, 24);
    rows.push(row);
    rows.sort((a, b) => a.time - b.time);
    if (rows.length > 100) rows.length = 100;
  }
  // рекорды, поставленные до появления таблиц, переносим в таблицу игрока
  syncStoreToBoards() {
    let changed = false;
    const recs = this.app.store.data.records || {};
    for (const key of Object.keys(recs)) {
      const r = recs[key];
      if (!validKey(key) || !r || !finite(r.bestLap, 1, 10000)) continue;
      const b = this.board(key);
      if (!b.human.length) { this.addResult(key, 'human', r.bestLap, this.app.playerName(), null, 'Рекорд круга'); changed = true; }
    }
    if (changed) this.saveWorld();
  }

  // личный лучший круг игрока: таблица гаража + облако
  onPlayerLap(key, time, driverName, clsShort, sid) {
    if (this.app.store.accountId) { this.app.account?.lap(key, time); return; }
    this.addResult(key, 'human', time, this.app.playerName(), null, driverName + ' · ' + clsShort, 0, sid);
    this.saveWorld();
    const mine = this.world.mine[key];
    if (mine == null || time < mine) {
      this.world.mine[key] = time;
      this.saveWorld();
      // Guest laps stay in this browser and are never published.
    }
  }

  updateBrain() {
    const lab = this.lab;
    if (!lab || !lab.champion) return;
    const c = lab.champion;
    if (!lab.brainID) lab.brainID = 'brain-' + this.world.nextBrain++;
    lab.knowledge = lab.knowledge || {};
    lab.knowledge[this.track] = { memory: c.wts.slice(NN.GEN).map(r4), generation: lab.generation, bestTime: lab.bestTime, rules: c.rules ? { ...c.rules } : NN.rules(this.cfg) };
    let b = this.world.library.find((x) => x.id === lab.brainID);
    if (!b) {
      if (this.world.library.length >= 200) { this.status('Гараж заполнен (200 пилотов). Удалите лишние через экспорт.'); return; }
      b = { id: lab.brainID };
      this.world.library.push(b);
    }
    Object.assign(b, {
      name: (lab.brainName || 'Пилот ' + trackShort(this.track)).slice(0, 80), sourceMap: this.track, cls: this.cls,
      general: c.wts.slice(0, NN.GEN).map(r4), knowledge: JSON.parse(JSON.stringify(lab.knowledge)),
      mmr: clamp(Math.round(c.mmr), 100, 4000), parent: lab.originBrain || null, updatedAt: Date.now(),
    });
  }

  // ---------- сессия обучения ----------
  payload() { return NN.labPayload(this.lab, this.cfg, { rate: this.rate }); }
  writeSave(explicit) {
    if (!this.lab) return true;
    try {
      this.updateBrain();
      lsSet(labKey(this.track, this.cls), JSON.stringify(this.payload()));
      this.saveWorld();
      this.cloudDirty.session = true;
      this.savePending = false;
      if (explicit) this.status(`Сохранено: ${trackName(this.track)} · ${CLASSES[this.cls].name}, поколение ${this.lab.generation}.`);
      return true;
    } catch (e) {
      this.status('Хранилище браузера заполнено или недоступно. Экспортируйте обучение в файл.');
      return false;
    }
  }
  persist(explicit) {
    if (!this.lab) return true;
    if (this.training && !explicit) { this.savePending = true; return true; }
    return this.writeSave(explicit);
  }
  restore(p) {
    NN.validatePayload(p, TRACK_IDS);
    const cfg = { ...NN.DEFAULTS, ...(p.cfg || {}) };
    validateConfig(cfg);
    this.cfg = cfg;
    this.track = p.track; this.cls = p.cls;
    this.geom = getGeom(p.track);
    this.lab = NN.restoreLab(p, this.geom, cfg);
    if (!this.lab.brainID) this.lab.brainID = 'brain-' + this.world.nextBrain++;
    if (!this.lab.brainName) this.lab.brainName = this.defaultBrainName();
    if (finite(p.rate, 1, 256)) this.rate = p.rate;
    this.telemetry = []; this.training = false; this.acc = 0;
    this.app.labCfg = this.cfg;
    this.syncSettings();
  }
  defaultBrainName() { return 'Пилот ' + trackShort(this.track) + ' · ' + CLASSES[this.cls].short; }
  fresh() {
    this.geom = getGeom(this.track);
    this.lab = NN.freshLab(this.geom, CLASSES[this.cls], this.cfg, this.track, 'brain-' + this.world.nextBrain++, this.defaultBrainName());
    if (this.cfg.teacher !== false) {
      const t0 = performance.now();
      NN.seedFromTeacher(this.lab, this.geom, CLASSES[this.cls], this.cfg, NN.teacherWeights(this.geom, CLASSES[this.cls], RaceAI));
      this.teacherNote = `Старт с учителя: сеть за ${((performance.now() - t0) / 1000).toFixed(1)} с научилась повторять классического ИИ, дальше её доводит эволюция.`;
    } else this.teacherNote = '';
    this.telemetry = []; this.acc = 0;
  }
  load(track, cls) {
    if (this.lab && (track !== this.track || cls !== this.cls)) this.persist(true);
    this.training = false;
    this.track = track; this.cls = cls;
    this.world.labTrack = track; this.world.labCls = cls;
    this.geom = getGeom(track);
    let ok = false;
    try {
      const raw = lsGet(labKey(track, cls));
      if (raw) { this.restore(JSON.parse(raw)); ok = true; }
    } catch (e) { this.status('Сохранение не прочитано: ' + e.message + '. Создана новая популяция.'); }
    if (!ok) {
      this.cfg = { ...this.cfg, goal: NN.defaultGoal(track, cls) };
      this.fresh();
      this.status(`Новая популяция: ${this.cfg.population} пилотов · ${trackName(track)} · ${CLASSES[cls].name}. ${this.teacherNote}`);
    } else this.status(`Загружено поколение ${this.lab.generation}. Нажмите «Обучать», чтобы продолжить.`);
    this.app.labCfg = this.cfg;
    this.syncSettings();
    this.refreshSelects();
  }
  loadSaved() {
    try {
      const raw = lsGet(labKey(this.track, this.cls));
      if (!raw) { this.status('Сохранённого обучения для этой трассы и класса пока нет.'); return; }
      this.restore(JSON.parse(raw));
      this.status('Загружено поколение ' + this.lab.generation + '.');
      this.afterSwap();
    } catch (e) { this.status('Сохранение не загружено: ' + e.message); }
  }
  // после замены популяции: пересобрать сцену при смене трассы и обновить панели
  afterSwap() {
    if (this.active) {
      const r = this.app.race;
      if (!r || r.mode !== 'lab' || r.def.id !== this.track || r.cls.id !== this.cls) this.showRace();
      else r.syncLab(this.lab, this.cfg);
    }
    this.refreshSelects();
    this.updateUI();
    this.charts();
  }

  // ---------- вход и выход ----------
  open() {
    if (!this.admin) { this.requestAdmin(() => this.open()); return; }
    if (!this.lab) this.load(this.track, this.cls);
    this.active = true;
    $('lab').hidden = false;
    $('labCaption').hidden = false;
    $('fpsChip').hidden = false;
    this.app.enterLabView();
    this.showRace();
    this.refreshSelects();
    this.lastRender = 0;
    this.updateUI();
    requestAnimationFrame(() => this.charts());
    this.cloudPullSession(false);
  }
  showRace() {
    const app = this.app;
    app.setRace(new Race(app, { mode: 'lab', trackId: this.track, cls: this.cls }));
    app.race.syncLab(this.lab, this.cfg);
    app.camRig.overview(0, this.geom.bounds(8));
  }
  leave(toMenu = true) {
    this.persist(true);
    this.training = false;
    this.active = false;
    $('lab').hidden = true;
    $('labCaption').hidden = true;
    $('fpsChip').hidden = true;
    this.app.leaveLabView(toMenu);
  }

  // ---------- обучение ----------
  step() {
    const lab = this.lab;
    const allDead = NN.labStep(lab, this.geom, this.cfg);
    this.rateSteps++;
    if (lab.simTime - this.telT >= 0.25) {
      this.telT = lab.simTime;
      const c = NN.leader(lab), alive = lab.pop.reduce((s, x) => s + (x.alive ? 1 : 0), 0);
      this.telemetry.push({ t: lab.simTime, v: Math.abs(c.u) * 3.6, p: clamp((c.max / this.geom.length) * 100, 0, 100), alive: (alive / lab.pop.length) * 100, steer: c.ctl.steer, pedal: c.ctl.pedal });
      const cut = lab.simTime - this.cfg.telemetryWindow;
      while (this.telemetry.length && this.telemetry[0].t < cut) this.telemetry.shift();
    }
    if (allDead) this.nextGen();
  }
  nextGen() {
    const lab = this.lab, g = lab.generation;
    const r = NN.evolve(lab, this.geom, this.cfg);
    if (r.improved) {
      this.updateBrain();
      if (r.top.done) this.addResult(recordKey(this.track, this.cls), 'ai', r.top.t, lab.brainName, lab.brainID, 'поколение ' + g, g);
    }
    this.savePending = true;
    this.cloudDirty.session = true;
    if (this.cfg.autoStop && lab.bestTime != null && lab.bestTime <= this.cfg.goal) {
      this.training = false;
      this.writeSave(false);
      this.status(`Цель ${this.cfg.goal.toFixed(2)} с достигнута: ${fmt(lab.bestTime)}. Обучение остановлено.`);
    }
  }
  toggle() {
    this.training = !this.training;
    this.acc = 0;
    if (!this.training) this.persist(false);
    this.updateUI();
  }

  // вызывается из игрового цикла; возвращает true, если пора рисовать кадр
  frame(dt, raw) {
    const started = performance.now();
    if (this.training && !document.hidden && this.lab) {
      this.acc = Math.min(this.acc + dt * this.rate, this.rate * 0.2);
      const until = started + clamp((dt * 1000 * this.cfg.simBudget) / 100, 2, 80);
      let budget = 200000;
      while (this.training && this.acc >= NN.DT && budget-- > 0 && performance.now() < until) { this.step(); this.acc -= NN.DT; }
    }
    this.rateClock += raw;
    if (this.rateClock >= 1) { this.actualRate = (this.rateSteps * NN.DT) / this.rateClock; this.rateSteps = 0; this.rateClock = 0; }
    this.autoClock += raw;
    if (this.autoClock >= this.cfg.autoSave) { this.autoClock = 0; if (this.savePending || this.training) this.writeSave(false); }
    this.cloudClock += raw;
    if (this.cloudClock >= this.cfg.cloudSave) { this.cloudClock = 0; this.cloudAutoPush(); }
    this.uiClock += raw;
    if (this.uiClock >= 1 / Math.min(this.cfg.uiHz, 5)) { this.uiClock = 0; this.updateUI(); this.charts(); }
    const throttled = this.training && this.rate > 4;
    const drawNow = !throttled || started - this.lastRender >= 1000 / this.cfg.trainFps;
    if (drawNow) {
      this.lastRender = started;
      this.fpsFrames++;
      if (this.app.race && this.app.race.mode === 'lab') this.app.race.syncLab(this.lab, this.cfg);
    }
    this.fpsTime += raw;
    if (this.fpsTime >= 1) {
      $('fpsChip').textContent = Math.round(this.fpsFrames / this.fpsTime) + ' FPS · ' + this.frameMS.toFixed(1) + ' мс';
      this.fpsFrames = 0; this.fpsTime = 0;
    }
    this.frameMS = this.frameMS * 0.9 + (performance.now() - started) * 0.1;
    return drawNow;
  }

  // ---------- интерфейс лаборатории ----------
  buildSelects() {
    const opts = (list) => list.map((t) => `<option value="${t.id}">${esc(t.name)}</option>`).join('');
    const real = TRACKS.filter((t) => t.category === 'real'), fun = TRACKS.filter((t) => t.category !== 'real');
    const html = `<optgroup label="Картодромы">${opts(real)}</optgroup><optgroup label="Фан-трассы">${opts(fun)}</optgroup>`;
    $('labTrack').innerHTML = html;
    $('boardTrack').innerHTML = html;
    const cls = CLASS_IDS.map((id) => `<option value="${id}">${esc(CLASSES[id].name)}</option>`).join('');
    $('labClass').innerHTML = cls;
    $('boardClass').innerHTML = cls;
  }
  refreshSelects() {
    $('labTrack').value = this.track;
    $('labClass').value = this.cls;
    $('rate').value = String(this.rate);
    $('mutation').value = String(this.cfg.mutation);
    if (this.admin) $('labLock').textContent = 'нейроэволюция · ' + trackShort(this.track);
  }
  switchLab(track, cls) {
    if (track === this.track && cls === this.cls && this.lab) return;
    this.load(track, cls);
    this.saveWorld();
    if (this.active) this.showRace();
    this.updateUI(); this.charts();
    this.cloudPullSession(false);
  }

  updateUI() {
    const lab = this.lab;
    if (!lab || !this.active) return;
    const L = this.geom.length;
    const alive = lab.pop.reduce((s, c) => s + (c.alive ? 1 : 0), 0);
    const st = $('labState');
    st.textContent = this.training ? 'ОБУЧЕНИЕ' : 'ПАУЗА';
    st.classList.toggle('on', this.training);
    $('generation').textContent = String(lab.generation);
    $('alive').textContent = alive + ' / ' + lab.pop.length;
    $('record').textContent = lab.bestProgress.toFixed(1) + '%';
    $('aiTime').textContent = fmt(lab.bestTime);
    $('toggle').textContent = this.training ? '❚❚ Пауза' : '▶ Обучать';
    $('watch').disabled = !lab.champion;
    $('actualRate').textContent = this.actualRate.toFixed(1) + '× / ' + this.rate + '×';
    $('plateau').textContent = (lab.stagnation || 0) + ' пок.';
    $('effectiveMutation').textContent = ((lab.effectiveMutation ?? this.cfg.mutation) * 100).toFixed(1) + '%';
    $('targetDelta').textContent = lab.bestTime == null ? '—' : (lab.bestTime - this.cfg.goal >= 0 ? '+' : '−') + Math.abs(lab.bestTime - this.cfg.goal).toFixed(3) + ' с';
    $('targetLabel').textContent = `${trackName(this.track)} · ${CLASSES[this.cls].name} · ${Math.round(L)} м. Ориентир ${this.cfg.goal.toFixed(2)} с (настраивается).`;
    const rec = this.app.store.record(recordKey(this.track, this.cls));
    $('humanRecord').textContent = rec.bestLap ? fmtTime(rec.bestLap) : 'нет сохранённого рекорда';
    $('brainInfo').textContent = `«${lab.brainName}» · ${lab.pop.length} пилотов · ${NN.GENOME} весов: ${NN.GEN} нейросетевых + ${NN.MEM} поправок участков. Физика та же, что у игрока.`;
    const lead = NN.leader(lab);
    $('liveControls').textContent = `Лидер #${lead.id} · MMR ${lead.mmr} · ${Math.round(Math.abs(lead.u) * 3.6)} км/ч · руль ${Math.round(lead.ctl.steer * 100)}% · педаль ${Math.round(lead.ctl.pedal * 100)}%`;
    $('telemetryLabel').textContent = 'последние ' + this.cfg.telemetryWindow + ' с';
    $('labCaption').innerHTML = `Поколение <b>${lab.generation}</b> · в заезде ${alive}/${lab.pop.length} · лидер #${lead.id}: ${Math.round(Math.abs(lead.u) * 3.6)} км/ч, ${clamp((lead.max / L) * 100, 0, 100).toFixed(1)}%` +
      (lab.bestTime != null ? ` · лучший круг <b>${fmtTime(lab.bestTime)}</b>` : '');
    if (visible($('pilotTable'))) {
      $('pilotTable').innerHTML = lab.pop.slice().sort((a, b) => b.mmr - a.mmr).slice(0, 80).map((c) =>
        `<tr><td>#${c.id}<small>род. ${c.parent ? '#' + c.parent : '—'}</small></td><td>${c.mmr}<small>${c.trials ? c.trials + ' попыток' : 'предварительный'}</small></td>` +
        `<td>${c.done ? c.t.toFixed(3) + ' с' : clamp((c.max / L) * 100, 0, 100).toFixed(1) + '%'}</td><td>${c.done ? 'Финиш' : c.alive ? 'В пути' : 'Выбыл'}</td></tr>`).join('');
      $('pilotSummary').textContent = 'MMR учитывает пройденную дистанцию, время круга и сравнение с популяцией. Потомок наследует предварительную оценку родителя; элита сохраняет ID.';
    }
  }

  charts() {
    const lab = this.lab;
    if (!lab || !this.active) return;
    const cfg = this.cfg;
    const h = lab.history.slice(-cfg.chartWindow), gen = h.length ? 'Поколения ' + h[0].g + ' — ' + h[h.length - 1].g : 'Поколения';
    const laps = h.map((q) => q.lap).filter(Number.isFinite);
    const maxT = Math.max(cfg.goal * 1.3, ...laps);
    const minT = Math.max(0, Math.min(cfg.goal, ...h.map((q) => q.recordTime ?? cfg.goal)) * 0.95);
    chart('timeChart', [{ color: CH.green, values: h.map((q) => q.lap ?? null) }, { color: CH.yellow, values: h.map((q) => q.recordTime ?? null) }, { color: CH.red, values: h.map(() => cfg.goal) }], maxT, 'Круг, с · поколения / рекорд / ориентир', gen, minT);
    chart('successChart', [{ color: CH.green, values: h.map((q) => q.success) }], 100, 'Финишировало, %', gen);
    chart('historyChart', [{ color: CH.green, values: h.map((q) => q.best) }, { color: CH.purple, values: h.map((q) => q.mean) }], 100, 'Прогресс круга · %', gen);
    const T = this.telemetry;
    chart('liveChart', [{ color: CH.green, values: T.map((q) => q.v) }, { color: CH.purple, values: T.map((q) => q.p * 1.4) }], 140, 'км/ч (0–140) · прогресс (0–100%)', T.length ? 'Симуляция ' + T[0].t.toFixed(0) + ' — ' + T[T.length - 1].t.toFixed(0) + ' с' : 'Время · с', 0, { color: CH.purple, max: 100 });
    chart('mmrChart', [{ color: CH.green, values: h.map((q) => q.mmr ?? null) }, { color: CH.purple, values: h.map((q) => q.meanMMR ?? null) }], Math.max(1500, ...h.map((q) => q.mmr || 0)), 'MMR · лучший / средний', gen);
    chart('diversityChart', [{ color: CH.purple, values: h.map((q) => q.diversity ?? null) }], Math.max(0.1, ...h.map((q) => q.diversity || 0)), 'Разброс весов · ст. отклонение', gen);
    chart('mutationChart', [{ color: CH.yellow, values: h.map((q) => (q.mutation == null ? null : q.mutation * 100)) }], 100, 'Эффективная вероятность мутации, %', gen);
    chart('aliveChart', [{ color: CH.green, values: T.map((q) => q.alive) }], 100, 'Карты в заезде, %', 'Время симуляции');
    chart('controlChart', [{ color: CH.green, values: T.map((q) => 50 + q.steer * 50) }, { color: CH.purple, values: T.map((q) => 50 + q.pedal * 50) }], 100, 'Руль / педаль · 0 = −1, 50 = 0, 100 = +1', 'Время симуляции');
  }

  // ---------- панель настроек ----------
  buildSettings() {
    const groups = [...new Set(NN.SETTINGS.map((s) => s.g))];
    $('setTabs').innerHTML = groups.map((g, i) => `<button class="set-tab${i ? '' : ' on'}" data-g="${g}">${g}</button>`).join('');
    $('setPanels').innerHTML = groups.map((g, i) => `<div class="set-panel"${i ? ' hidden' : ''} data-g="${g}">` +
      NN.SETTINGS.filter((s) => s.g === g).map((s) => `<div class="set-row${s.key ? ' key' : ''}" data-k="${s.k}" data-find="${esc((s.n + ' ' + s.h).toLowerCase())}">` +
        `<div class="set-head"><span class="set-name">${s.key ? '<i>★</i>' : ''}${esc(s.n)}</span><button class="set-def" id="def-${s.k}" title="Вернуть значение по умолчанию"></button></div>` +
        `<div class="set-ctl">${controlHTML(s)}</div><p class="set-hint">${esc(s.h)}</p></div>`).join('') + '</div>').join('');
    const n = NN.SETTINGS.length, t = n % 10, h = n % 100;
    $('settingsCount').textContent = n + ' ' + (t === 1 && h !== 11 ? 'параметр' : t >= 2 && t <= 4 && (h < 12 || h > 14) ? 'параметра' : 'параметров');
    Array.from($('setTabs').children).forEach((b) => b.addEventListener('click', () => {
      Array.from($('setTabs').children).forEach((x) => x.classList.toggle('on', x === b));
      Array.from($('setPanels').children).forEach((p) => (p.hidden = p.dataset.g !== b.dataset.g));
      $('setFilter').value = '';
      this.filterSettings('');
    }));
    for (const s of NN.SETTINGS) {
      const el = $('cfg-' + s.k), rng = $('rng-' + s.k);
      el.addEventListener('change', (e) => this.setValue(s, readControl(s, e.target)));
      if (rng) {
        rng.addEventListener('input', (e) => { const v = readControl(s, e.target); el.value = String(v); this.cfg[s.k] = v; this.paintDefaults(); });
        rng.addEventListener('change', (e) => this.setValue(s, readControl(s, e.target)));
      }
      $('def-' + s.k).addEventListener('click', () => this.setValue(s, this.defaultOf(s.k), `«${s.n}» сброшено к значению по умолчанию.`));
    }
    $('setFilter').addEventListener('input', (e) => this.filterSettings(e.target.value.trim().toLowerCase()));
    this.syncSettings();
  }
  defaultOf(k) { return k === 'goal' ? NN.defaultGoal(this.track, this.cls) : NN.DEFAULTS[k]; }
  filterSettings(q) {
    const panels = Array.from($('setPanels').children), tabs = Array.from($('setTabs').children);
    if (!q) {
      const on = tabs.find((t) => t.classList.contains('on')) || tabs[0];
      panels.forEach((p) => { p.hidden = p.dataset.g !== on.dataset.g; Array.from(p.children).forEach((r) => (r.hidden = false)); });
      $('setCount').textContent = '';
      return;
    }
    let n = 0;
    panels.forEach((p) => {
      let any = false;
      Array.from(p.children).forEach((r) => { const hit = r.dataset.find.includes(q); r.hidden = !hit; if (hit) { any = true; n++; } });
      p.hidden = !any;
    });
    $('setCount').textContent = n ? 'Найдено: ' + n : 'Ничего не найдено';
  }
  paintDefaults() {
    for (const s of NN.SETTINGS) {
      const b = $('def-' + s.k);
      if (!b) continue;
      const def = this.defaultOf(s.k);
      const changed = this.cfg[s.k] !== def;
      b.textContent = changed ? 'по умолч. ' + fmtVal(s, def) : 'по умолчанию';
      b.classList.toggle('changed', changed);
      b.disabled = !changed;
    }
  }
  syncSettings() {
    for (const s of NN.SETTINGS) {
      const e = $('cfg-' + s.k);
      if (!e) continue;
      if (s.t === 'bool') e.checked = !!this.cfg[s.k]; else e.value = String(this.cfg[s.k]);
      const r = $('rng-' + s.k);
      if (r) r.value = String(this.cfg[s.k]);
    }
    $('mutation').value = String(this.cfg.mutation);
    this.paintDefaults();
  }
  setValue(s, v, note) {
    this.cfg[s.k] = v;
    this.syncSettings();
    this.status(note || `«${s.n}» — ${fmtVal(s, v)}. Применится со следующего поколения.`);
    this.persist(false);
  }
  applySettings() {
    const next = { ...this.cfg };
    for (const s of NN.SETTINGS) { const el = $('cfg-' + s.k); if (el) next[s.k] = readControl(s, el); }
    try { validateConfig(next); } catch (e) { this.status(e.message); return; }
    this.cfg = next;
    this.app.labCfg = this.cfg;
    this.syncSettings();
    this.persist(false);
    this.status('Настройки применены и сохранены. Отбор и правила заезда — со следующего поколения.');
  }
  preset(which) {
    const c = this.cfg;
    if (which === 'fine') Object.assign(c, { fine: 0.7, fineStrength: 0.008, mutation: 0.03, strength: 0.04, sectorMutation: 0.04, crossover: 0.05, immigrants: 0.03, adaptive: true, patience: 25, memory: true });
    else if (which === 'explore') Object.assign(c, { fine: 0.25, fineStrength: 0.04, mutation: 0.35, strength: 0.6, sectorMutation: 0.25, crossover: 0.25, immigrants: 0.2, adaptive: true, patience: 8, memory: true });
    else if (which === 'turbo') { Object.assign(c, { simBudget: 92, trainFps: 8, uiHz: 2, trail: false, ghost: false, dead: false, telemetryWindow: 20 }); this.rate = 256; $('rate').value = '256'; }
    else this.cfg = { ...NN.DEFAULTS, population: c.population, goal: c.goal };
    this.app.labCfg = this.cfg;
    this.syncSettings();
    this.persist(false);
    this.status(which === 'turbo' ? 'Максимум скорости: картинка обновляется реже, почти весь кадр уходит в расчёт.' : 'Профиль применён. Следующее поколение использует новые настройки.');
  }

  // ---------- просмотр ----------
  watchCfg() { return { ...NN.DEFAULTS, ...this.cfg, memory: true }; }
  watchChampion() {
    const lab = this.lab;
    if (!lab || !lab.champion) return;
    this.persist(true);
    this.training = false;
    const ch = JSON.parse(JSON.stringify(lab.champion));
    const track = this.track, cls = this.cls, cfg = this.watchCfg();
    this.leave(false);
    this.app.startWatch({
      trackId: track, cls, labCfg: cfg, bestTime: lab.bestTime, back: 'lab',
      pilotName: `${lab.brainName} · #${ch.id}`, brainID: lab.brainID, brainName: lab.brainName,
      makeCar: () => {
        const c = NN.newCar(getGeom(track), CLASSES[cls], ch.wts, null, false, ch.rules || NN.rules(cfg));
        c.id = ch.id; c.mmr = ch.mmr;
        return c;
      },
    });
  }
  onWatchDone(spec, c) {
    if (!c.done || !spec.brainID) return;
    this.addResult(recordKey(spec.trackId, spec.cls), 'ai', c.t, spec.brainName || spec.pilotName, spec.brainID, spec.back === 'garage' ? 'проверка из гаража' : 'просмотр чемпиона');
    this.saveWorld();
  }

  // ---------- гараж ----------
  openGarage(trackId, cls) {
    if (this.lab && this.admin) this.persist(true);
    if (this.training) { this.training = false; this.updateUI(); }
    const key = trackId && cls ? recordKey(trackId, cls) : this.garageKey;
    const { t, c } = splitKey(key);
    $('boardTrack').value = t;
    $('boardClass').value = c;
    this.garageKey = key;
    this.refreshGarage();
    this.refreshBoards();
    this.cloudPullBoards();
    if (this.admin && this.cloudOwner) this.cloudPullWorld();
    this.applyAdminUI();
    $('garage').hidden = false;
    setTimeout(() => $('closeGarage').focus(), 30);
  }
  closeGarage() { $('garage').hidden = true; }
  garageChanged() {
    this.garageKey = recordKey($('boardTrack').value, $('boardClass').value);
    this.refreshBoards();
    this.brainInfo();
    this.cloudPullBoards();
  }
  refreshGarage() {
    const sel = $('brainSelect'), prev = sel.value;
    const lib = this.world.library.slice().sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0));
    sel.innerHTML = lib.length ? lib.map((b) => `<option value="${esc(b.id)}">${esc(b.name)} · ${esc(trackShort(b.sourceMap))} · ${esc(CLASSES[b.cls].short)} · MMR ${b.mmr}</option>`).join('') : '<option value="">Сохранённых пилотов пока нет</option>';
    sel.value = lib.some((b) => b.id === prev) ? prev : lib[0] ? lib[0].id : '';
    this.brainInfo();
  }
  brainInfo() {
    const b = this.world.library.find((x) => x.id === $('brainSelect').value);
    const t = $('boardTrack').value;
    $('testBrain').disabled = $('adaptBrain').disabled = !b;
    $('snapshotBrain').disabled = !this.lab || !this.lab.champion;
    if (!b) { $('brainInfoText').textContent = 'Обучите популяцию в лаборатории: лучший пилот автоматически появится здесь. Можно сохранять отдельные именованные снимки.'; return; }
    const k = b.knowledge[t];
    $('brainInfoText').textContent = `Класс ${CLASSES[b.cls].name} · MMR ${b.mmr}. Цель: ${trackName(t)}. ` +
      (k ? (b.sourceMap === t ? 'Обучался здесь' : 'Есть опыт этой трассы') + `: поколений ${k.generation}, лучший круг ${fmt(k.bestTime)}.` : `Не обучен на этой трассе: общие веса сети (${NN.GEN}) сохраняются, поправки ${NN.SECTORS} участков начинаются с нуля.`) +
      ' Дообучение создаёт отдельную копию.';
  }
  testBrain() {
    const b = this.world.library.find((x) => x.id === $('brainSelect').value);
    if (!b) return;
    const t = $('boardTrack').value, cfg = this.watchCfg(), copy = JSON.parse(JSON.stringify(b));
    this.closeGarage();
    if (this.active) this.leave(false);
    this.app.startWatch({
      trackId: t, cls: b.cls, labCfg: cfg, bestTime: b.knowledge[t] ? b.knowledge[t].bestTime : null, back: 'garage',
      pilotName: b.name, brainID: b.id, brainName: b.name,
      makeCar: () => NN.carFromBrain(copy, getGeom(t), t, cfg),
    });
  }
  async adaptBrain() {
    const src = this.world.library.find((x) => x.id === $('brainSelect').value);
    if (!src) return;
    const t = $('boardTrack').value, cls = src.cls;
    const hasSave = !!lsGet(labKey(t, cls));
    if (hasSave && !(await this.ask(`Начать отдельное дообучение на «${trackName(t)}» (${CLASSES[cls].name})? Текущая популяция этой трассы и класса будет заменена. Пилоты в гараже останутся.`, 'Дообучать'))) return;
    if (this.lab) this.persist(true);
    const original = JSON.parse(JSON.stringify(src));
    this.track = t; this.cls = cls;
    this.world.labTrack = t; this.world.labCls = cls;
    this.cfg = { ...this.cfg, goal: NN.defaultGoal(t, cls) };
    this.fresh();
    const lab = this.lab;
    lab.brainName = (original.name + ' → ' + trackShort(t)).slice(0, 80);
    lab.originBrain = original.id;
    lab.knowledge = JSON.parse(JSON.stringify(original.knowledge));
    const base = NN.carFromBrain(original, this.geom, t, this.cfg).wts;
    const R = NN.rules(this.cfg);
    lab.pop = lab.pop.map((c, i) => {
      const w = base.slice();
      if (i > 3) for (let j = 0; j < NN.GEN; j++) if (NN.rnd() < 0.25) w[j] = clamp(w[j] + (NN.rnd() - 0.5) * 0.2, -8, 8);
      return NN.newCar(this.geom, CLASSES[cls], w, null, false, R);
    });
    this.app.labCfg = this.cfg;
    this.syncSettings();
    this.writeSave(false);
    this.closeGarage();
    this.status(`Копия «${lab.brainName}» готова. Общие навыки перенесены, исходный пилот сохранён. Нажмите «Обучать».`);
    if (this.active) this.afterSwap(); else this.open();
  }
  snapshotBrain() {
    if (!this.lab || !this.lab.champion) return;
    this.updateBrain();
    const parent = this.world.library.find((b) => b.id === this.lab.brainID);
    if (!parent) return;
    if (this.world.library.length >= 200) { this.status('Гараж заполнен.'); return; }
    const b = JSON.parse(JSON.stringify(parent));
    b.id = 'brain-' + this.world.nextBrain++;
    b.parent = parent.id;
    b.name = ($('brainName').value.trim() || parent.name + ' · снимок ' + this.lab.generation).slice(0, 80);
    b.updatedAt = Date.now();
    this.world.library.push(b);
    this.saveWorld();
    this.refreshGarage();
    $('brainSelect').value = b.id;
    this.brainInfo();
    $('brainName').value = '';
  }
  refreshBoards() {
    const key = this.garageKey, b = this.board(key), { t, c } = splitKey(key);
    const rowHTML = (r, i) => `<tr><td>${i + 1}</td><td>${esc(r.name)}<small>${esc(r.note)}${r.generation ? ' · поколение ' + r.generation : ''}</small></td><td>${fmtTime(r.time)}</td><td>${new Date(r.date).toLocaleDateString('ru-RU')}</td></tr>`;
    const personal = this.app.store.record(key);
    const human = this.app.store.accountId ? (personal.bestLap ? [{ name: personal.cloudName || this.app.playerName(), time: personal.bestLap, date: personal.cloudDate || Date.now(), note: personal.pendingTime ? 'Ожидает отправки' : 'Личный рекорд' }] : []) : b.human;
    for (const kind of ['human', 'ai']) {
      const rows = kind === 'human' ? human : b.ai;
      $('board-' + kind).innerHTML = rows.length ? rows.slice(0, 30).map(rowHTML).join('') : '<tr><td colspan="4">На этой трассе в этом классе ещё нет результатов.</td></tr>';
    }
    $('boardMap').textContent = 'Рекорды · ' + trackName(t) + ' · ' + CLASSES[c].name;
  }
  async clearBoard() {
    const { t, c } = splitKey(this.garageKey);
    if (!(await this.ask(`Удалить все локальные результаты «${trackName(t)}» в классе ${CLASSES[c].name}? Обучение и пилоты останутся.`, 'Очистить'))) return;
    if (!this.app.store.accountId) {
      this.world.boards[this.garageKey] = { human: [], ai: [] };
      delete this.world.mine[this.garageKey];
    }
    const rec = this.app.store.record(this.garageKey);
    Object.assign(rec, { bestLap: null, ghost: null, trace: null, bestSectors: [null, null, null], bestRace: {} });
    this.app.store.save();
    this.saveWorld();
    this.refreshBoards();
    this.cloudPushWorld();
  }

  // ---------- файл ----------
  async exportFile() {
    if (!this.lab) return;
    const name = `apex-${this.track}-${this.cls}-gen${this.lab.generation}.json`, text = JSON.stringify(this.payload());
    if (this.downloads) {
      try { await this.downloads.save({ filename: name, data: text }); this.status('Файл обучения сохранён.'); }
      catch (err) { this.status(err && err.code === 'declined' ? 'Сохранение отменено.' : 'Не удалось сохранить файл: ' + ((err && err.message) || 'ошибка')); }
      return;
    }
    const blob = new Blob([text], { type: 'application/json' }), url = URL.createObjectURL(blob), a = document.createElement('a');
    a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    this.status('Экспортирован снимок обучения.');
  }
  async importFile(f) {
    try {
      if (f.size > 20000000) throw Error('Файл больше 20 МБ');
      const p = NN.validatePayload(JSON.parse(await f.text()), TRACK_IDS);
      if (!(await this.ask(`Заменить обучение «${trackName(p.track)}» (${CLASSES[p.cls].name}) сохранением из файла (поколение ${p.lab.generation})?`, 'Заменить'))) return;
      if (this.lab) this.persist(true);
      this.restore(p);
      this.world.labTrack = p.track; this.world.labCls = p.cls;
      this.writeSave(false);
      this.status('Импортировано поколение ' + this.lab.generation + '.');
      this.afterSwap();
    } catch (err) { this.status('Импорт отклонён: ' + err.message); }
  }
  async deleteSession() {
    if (!(await this.ask(`Удалить обучение ИИ для «${trackName(this.track)}» (${CLASSES[this.cls].name}): поколения, веса и графики? Пилоты в гараже и рекорды останутся. Без экспортированного файла это не отменить.`, 'Удалить'))) return;
    this.training = false;
    lsDel(labKey(this.track, this.cls));
    this.fresh();
    this.status('Создана новая случайная популяция. Старое обучение удалено.');
    this.afterSwap();
  }

  // ---------- облако ----------
  setCloud(state, note) {
    this.cloudState = state;
    const label = { idle: 'Облако: подключение…', local: 'Только локально', owner: 'Облако · синхронизировано', guest: 'Облако · рекорды', online: 'Общие рекорды · онлайн', error: 'Облако недоступно' }[state] || state;
    const chip = $('cloudChip');
    chip.textContent = note ? label + ' · ' + note : label;
    chip.className = 'chip' + (state === 'owner' || state === 'online' ? ' ok' : state === 'error' ? ' warn' : '');
    const off = state !== 'owner';
    $('cloudPush').disabled = off; $('cloudPull').disabled = off;
  }
  async initCloud() {
    let api = null;
    try { api = window.claude && typeof window.claude.use === 'function' ? window.claude : null; } catch (e) { api = null; }
    if (!api) {
      if (Online.onlineEnabled()) this.setCloud('online');
      else this.setCloud('local');
      return;
    }
    const [db, dl] = await Promise.all([api.use('db').catch(() => null), api.use('downloads').catch(() => null)]);
    this.db = db; this.downloads = dl;
    if (!db) { this.setCloud('local'); return; }
    try { await db.doc('system/probe').set({ at: Date.now(), client: this.clientID }); this.cloudOwner = true; } catch (e) { this.cloudOwner = false; }
    this.setCloud(this.cloudOwner ? 'owner' : 'guest');
    if (!$('garage').hidden) this.cloudPullBoards();
    // рекорды, поставленные до подключения облака
    // Guest records are never uploaded.
    await this.cloudSync();
  }
  async cloudSync() {
    if (!this.db || !this.cloudOwner || !this.admin) return;
    await this.cloudPullWorld();
    if (this.lab) await this.cloudPullSession(false);
  }
  sessionJSON() {
    const p = this.payload();
    if (p.lab.champion) p.lab.champion.trail = (p.lab.champion.trail || []).filter((_, i) => i % 2 === 0).slice(0, 800);
    p.lab.history = p.lab.history.slice(-300);
    let s = JSON.stringify(p);
    if (s.length > 230000) { p.lab.history = p.lab.history.slice(-100); s = JSON.stringify(p); }
    if (s.length > 230000) { p.lab.pop = p.lab.pop.slice(0, 24); s = JSON.stringify(p); }
    return s;
  }
  async cloudPushSession(explicit) {
    if (!this.db || !this.cloudOwner || !this.lab) return false;
    try {
      await this.db.doc('sessions/' + docKey(this.track, this.cls)).set({ savedAt: Date.now(), generation: this.lab.generation, track: this.track, cls: this.cls, json: this.sessionJSON() });
      this.cloudDirty.session = false;
      this.setCloud('owner', 'обучение ' + new Date().toLocaleTimeString('ru-RU'));
      if (explicit) this.status('Обучение выгружено в облако.');
      return true;
    } catch (e) {
      this.setCloud('owner', 'ошибка выгрузки');
      if (explicit) this.status('Облако отклонило запись: ' + ((e && (e.code || e.message)) || 'ошибка'));
      return false;
    }
  }
  async cloudPullSession(explicit) {
    if (!this.db || !this.cloudOwner || !this.admin) return false;
    const track = this.track, cls = this.cls;
    try {
      const snap = await this.db.doc('sessions/' + docKey(track, cls)).get();
      if (!snap.exists) { if (explicit) this.status('В облаке нет обучения для этой трассы и класса.'); return false; }
      if (track !== this.track || cls !== this.cls) return false;
      const doc = snap.data(), cloudAt = Number(doc.savedAt) || 0;
      let localAt = 0;
      try { const raw = lsGet(labKey(track, cls)); if (raw) localAt = Number(JSON.parse(raw).savedAt) || 0; } catch (e) { /* нет локального */ }
      if (!explicit && (this.training || localAt >= cloudAt)) return false;
      if (explicit && localAt > cloudAt && !(await this.ask(`В облаке сохранение старше локального (поколение ${doc.generation}). Всё равно загрузить?`, 'Загрузить'))) return false;
      this.restore(JSON.parse(doc.json));
      this.writeSave(false);
      this.status(`Загружено из облака: поколение ${this.lab.generation} (${new Date(cloudAt).toLocaleString('ru-RU')}).`);
      this.afterSwap();
      return true;
    } catch (e) {
      if (explicit) this.status('Не удалось прочитать облако: ' + ((e && e.message) || 'ошибка'));
      return false;
    }
  }
  async cloudPushWorld() {
    if (!this.db || !this.cloudOwner) return false;
    try {
      const packBrain = (b) => ({ ...b, general: b.general.map(r4), knowledge: Object.fromEntries(Object.entries(b.knowledge || {}).map(([k, v]) => [k, { ...v, memory: (v.memory || []).map(r4) }])) });
      const boards = {};
      for (const key of Object.keys(this.world.boards)) { const b = this.world.boards[key]; boards[key] = { human: b.human.slice(0, 30), ai: b.ai.slice(0, 30) }; }
      let lib = this.world.library.slice().sort((a, b) => (a.updatedAt || 0) - (b.updatedAt || 0)).slice(-60).map(packBrain);
      let json = JSON.stringify({ version: 1, nextBrain: this.world.nextBrain, library: lib, boards });
      while (json.length > 230000 && lib.length > 5) { lib = lib.slice(Math.ceil(lib.length / 4)); json = JSON.stringify({ version: 1, nextBrain: this.world.nextBrain, library: lib, boards }); }
      await this.db.doc('garage/world').set({ savedAt: Date.now(), json });
      this.cloudDirty.world = false;
      return true;
    } catch (e) { this.setCloud('owner', 'гараж не выгружен'); return false; }
  }
  async cloudPullWorld() {
    if (!this.db || !this.cloudOwner) return false;
    try {
      const snap = await this.db.doc('garage/world').get();
      if (!snap.exists) return false;
      const p = JSON.parse(snap.data().json || 'null');
      if (!p || !Array.isArray(p.library)) return false;
      const w = this.world, known = new Set(w.library.map((b) => b.id));
      for (const b of p.library.filter((x) => NN.validBrain(x, TRACK_IDS))) if (!known.has(b.id) && w.library.length < 200) w.library.push(b);
      w.nextBrain = Math.max(w.nextBrain || 1, Number(p.nextBrain) || 1);
      for (const key of Object.keys(p.boards || {})) {
        if (!validKey(key)) continue;
        const cb = p.boards[key] || {}, lb = this.board(key);
        w.boards[key] = { human: mergeRows(lb.human, cleanRows(cb.human)), ai: mergeRows(lb.ai, cleanRows(cb.ai)) };
      }
      this.saveWorld();
      this.cloudDirty.world = false;
      if (!$('garage').hidden) { this.refreshGarage(); this.refreshBoards(); }
      return true;
    } catch (e) { return false; }
  }
  async cloudPullBoards() {
    const body = $('board-cloud');
    const key = this.garageKey, { t, c } = splitKey(key);
    const paint = (rows) => { body.innerHTML = rows.length ? rows.map((r, i) => `<tr><td>${i + 1}</td><td>${esc(r.name.slice(0, 40))}</td><td>${fmtTime(r.time)}</td><td>${new Date(r.date || 0).toLocaleDateString('ru-RU')}</td></tr>`).join('') : '<tr><td colspan="4">В общей таблице пока нет результатов этой трассы и класса.</td></tr>'; };
    if (!this.db && Online.onlineEnabled()) {
      try { const rows = await Online.pullScores(t, c); if (key === this.garageKey) paint(rows); } catch (e) { body.innerHTML = '<tr><td colspan="4">Общая таблица недоступна.</td></tr>'; }
      return;
    }
    if (!this.db) { body.innerHTML = `<tr><td colspan="4">${this.cloudState === 'idle' ? 'Подключение к облаку…' : 'Общая таблица не подключена: показаны только результаты этого браузера.'}</td></tr>`; return; }
    try {
      const snap = await this.db.collection('scores/' + docKey(t, c) + '/rows').orderBy('time', 'asc').limit(30).get();
      if (key !== this.garageKey) return;
      const rows = snap.docs.map((d) => d.data()).filter((r) => r && Number.isFinite(r.time) && typeof r.name === 'string');
      body.innerHTML = rows.length ? rows.map((r, i) => `<tr><td>${i + 1}</td><td>${esc(r.name.slice(0, 40))}</td><td>${fmtTime(r.time)}</td><td>${new Date(r.date || 0).toLocaleDateString('ru-RU')}</td></tr>`).join('') : '<tr><td colspan="4">В облаке пока нет результатов этой трассы и класса.</td></tr>';
    } catch (e) { body.innerHTML = '<tr><td colspan="4">Облачная таблица недоступна.</td></tr>'; }
  }
  cloudAutoPush() {
    if (!this.db || !this.cloudOwner) return;
    if (this.cloudDirty.session && this.lab && this.admin) this.cloudPushSession(false);
    if (this.cloudDirty.world) this.cloudPushWorld();
  }
  flush() {
    if (this.lab) this.writeSave(false);
    else this.saveWorld();
    this.cloudAutoPush();
  }

  // ---------- кнопки ----------
  bindUI() {
    const on = (id, fn) => $(id).addEventListener('click', fn);
    on('loginOk', () => this.submitLogin());
    on('loginCancel', () => { $('loginCard').hidden = true; this.afterLogin = null; });
    $('loginPass').addEventListener('keydown', (e) => { if (e.key === 'Enter') this.submitLogin(); });
    $('loginUser').addEventListener('keydown', (e) => { if (e.key === 'Enter') $('loginPass').focus(); });
    on('askOk', () => this.closeAsk(true));
    on('askCancel', () => this.closeAsk(false));
    on('adminBtn', () => (this.admin ? this.logout() : this.requestAdmin()));
    on('toggle', () => this.toggle());
    on('watch', () => this.watchChampion());
    on('labExit', () => { this.leave(); });
    $('labTrack').addEventListener('change', (e) => this.switchLab(e.target.value, this.cls));
    $('labClass').addEventListener('change', (e) => this.switchLab(this.track, e.target.value));
    $('rate').addEventListener('change', (e) => { this.rate = clamp(Number(e.target.value), 1, 256); this.acc = 0; this.persist(false); });
    $('mutation').addEventListener('change', (e) => { this.cfg.mutation = clamp(Number(e.target.value) || 0, 0, 1); this.syncSettings(); this.persist(false); });
    on('presetBalanced', () => this.preset('balanced'));
    on('presetFine', () => this.preset('fine'));
    on('presetExplore', () => this.preset('explore'));
    on('presetTurbo', () => this.preset('turbo'));
    on('applySettings', () => this.applySettings());
    on('saveNow', () => this.persist(true));
    on('load', () => this.loadSaved());
    on('cloudPush', async () => { this.status('Выгрузка в облако…'); if (this.lab) this.writeSave(false); await this.cloudPushSession(true); await this.cloudPushWorld(); });
    on('cloudPull', () => this.cloudPullSession(true));
    on('export', () => this.exportFile());
    on('import', () => $('file').click());
    $('file').addEventListener('change', async (e) => { const f = e.target.files[0]; if (f) await this.importFile(f); e.target.value = ''; });
    on('delete', () => this.deleteSession());
    on('teacherBtn', async () => {
      if (!(await this.ask(`Начать обучение «${trackName(this.track)}» (${CLASSES[this.cls].name}) заново со старта с учителя? Текущая популяция будет заменена, пилоты в гараже останутся.`, 'Заново'))) return;
      this.training = false;
      this.cfg.teacher = true;
      this.status('Учитель проезжает круги и обучает сеть…');
      setTimeout(() => { this.fresh(); this.writeSave(false); this.status(this.teacherNote + ' Нажмите «Обучать».'); this.afterSwap(); }, 30);
    });
    on('closeGarage', () => this.closeGarage());
    $('boardTrack').addEventListener('change', () => this.garageChanged());
    $('boardClass').addEventListener('change', () => this.garageChanged());
    $('brainSelect').addEventListener('change', () => this.brainInfo());
    on('testBrain', () => this.testBrain());
    on('adaptBrain', () => this.adaptBrain());
    on('snapshotBrain', () => this.snapshotBrain());
    on('clearBoard', () => this.clearBoard());
    $('garage').addEventListener('click', (e) => { if (e.target === $('garage')) this.closeGarage(); });
    addEventListener('pagehide', () => this.flush());
    document.addEventListener('visibilitychange', () => { this.acc = 0; if (document.hidden && this.lab && this.active) this.writeSave(false); });
  }
}

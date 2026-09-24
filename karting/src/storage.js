// Настройки и рекорды — в localStorage (если доступен).
const KEY = 'apex-karting-v2';

const DEFAULTS = {
  quality: null,        // выбирается автоматически при первом запуске
  qualityAuto: true,    // снижать качество, если не хватает FPS
  master: 0.8, music: 0.45, sfx: 0.9,
  camera: 1,            // 0 — сверху, 1 — от третьего лица, 2 — третье лицо издалека
  camVer: 2,
  touch: 'auto',
  assist: 1,            // помощь руля: 1 — полная, 0.5 — лёгкая, 0.15 — почти без неё
  gearbox: 'auto',      // KZ2: авто или ручная коробка
  cls: 'ok',
  category: 'real',
  fps: false,
  driverId: 'vikhr',
  trackId: 'lonato',
  difficulty: 'normal',
  laps: 3,
  opponents: 7,
};

export class Store {
  constructor() {
    this.data = { settings: { ...DEFAULTS }, records: {}, cupWins: 0 };
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const d = JSON.parse(raw);
        this.data.settings = { ...DEFAULTS, ...(d.settings || {}) };
        // новая камера по умолчанию — от третьего лица
        if (this.data.settings.camVer !== 2) { this.data.settings.camera = 1; this.data.settings.camVer = 2; }
        this.data.records = d.records || {};
        this.data.cupWins = d.cupWins || 0;
      }
    } catch (e) { /* хранилище недоступно — играем без сохранений */ }
  }
  get settings() { return this.data.settings; }
  save() {
    try { localStorage.setItem(KEY, JSON.stringify(this.data)); } catch (e) { /* нет места или доступа */ }
  }
  setSettings(patch) { Object.assign(this.data.settings, patch); this.save(); }
  // key = 'трасса:класс'
  record(key) {
    return this.data.records[key] || (this.data.records[key] = { bestLap: null, ghost: null, trace: null, driverId: null, bestRace: {}, bestSectors: [null, null, null] });
  }
  saveSector(key, i, t) {
    const r = this.record(key);
    if (!r.bestSectors) r.bestSectors = [null, null, null];
    r.bestSectors[i] = Math.round(t * 1000) / 1000;
    this.save();
  }
  saveLap(trackId, time, frames, trace, driverId) {
    const r = this.record(trackId);
    r.bestLap = time;
    r.ghost = frames && frames.length > 8 ? frames.slice() : null;
    r.trace = trace ? Array.from(trace, (v) => (v === undefined ? null : Math.round(v * 1000) / 1000)) : null;
    r.driverId = driverId;
    this.save();
  }
  saveRace(trackId, laps, time) {
    const r = this.record(trackId);
    const prev = r.bestRace[laps];
    if (prev == null || time < prev) { r.bestRace[laps] = time; this.save(); return true; }
    return false;
  }
}

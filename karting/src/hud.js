// Игровой интерфейс поверх сцены: тайминг по секторам, приборная панель карта,
// позиции, мини-карта с секторами и пит-лейном, стартовые огни, сообщения.
import { fmtTime, fmtDelta, clamp } from './util.js';

const $ = (id) => document.getElementById(id);

export const ITEM_SVG = {
  nitro: `<svg viewBox="0 0 64 64" aria-label="Нитро"><defs><linearGradient id="gN" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fd0ff"/><stop offset="1" stop-color="#1f6fe0"/></linearGradient></defs><path d="M32 60c-9 0-15-6-15-13 0-6 4-9 6-14 1 4 3 6 5 6-1-9 3-17 10-23-1 7 3 11 6 16 3 4 3 7 3 11 0 10-6 17-15 17z" fill="#ff8a00"/><path d="M32 60c-5 0-8-3-8-8 0-4 3-6 4-9 1 3 3 4 5 4 0-4 2-7 4-9 0 4 3 6 3 10 0 7-3 12-8 12z" fill="#ffe14a"/><rect x="22" y="4" width="20" height="30" rx="6" fill="url(#gN)" stroke="#fff" stroke-width="2"/><rect x="27" y="1" width="10" height="5" rx="1.5" fill="#d8dde3"/><text x="32" y="25" text-anchor="middle" font-family="Unbounded,Arial Black,sans-serif" font-weight="900" font-size="10" fill="#fff">N₂O</text></svg>`,
  rocket: `<svg viewBox="0 0 64 64" aria-label="Ракета"><g transform="rotate(45 32 32)"><path d="M32 4c7 7 9 17 9 27v14H23V31c0-10 2-20 9-27z" fill="#eef1f4" stroke="#fff" stroke-width="1.5"/><path d="M32 4c4 4 6.5 9 7.8 14H24.2C25.5 13 28 8 32 4z" fill="#e0322b"/><path d="M23 36l-8 10v6l8-4zM41 36l8 10v6l-8-4z" fill="#e0322b"/><circle cx="32" cy="27" r="4.5" fill="#1f6fe0" stroke="#fff" stroke-width="1.5"/><path d="M26 45h12l-2 7c-1 5-3 9-4 11-1-2-3-6-4-11z" fill="#ffb040"/></g></svg>`,
  oil: `<svg viewBox="0 0 64 64" aria-label="Масло"><ellipse cx="32" cy="50" rx="24" ry="8" fill="#101014"/><ellipse cx="26" cy="49" rx="9" ry="2.5" fill="#6a4dff" opacity=".55"/><path d="M32 4C26 16 18 24 18 34a14 14 0 0 0 28 0C46 24 38 16 32 4z" fill="#15151b" stroke="#8d8dff" stroke-width="2"/><path d="M26 30c0 4 2 7 5 8" stroke="#b6b6ff" stroke-width="3" stroke-linecap="round" fill="none"/></svg>`,
  shield: `<svg viewBox="0 0 64 64" aria-label="Щит"><path d="M32 4l22 8v16c0 15-9 26-22 32C19 54 10 43 10 28V12z" fill="#0e3d52" stroke="#5fd4ff" stroke-width="3"/><path d="M32 12l14 5v11c0 10-5 18-14 22z" fill="#5fd4ff" opacity=".55"/><path d="M24 31l6 6 11-12" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};
ITEM_SVG.nitro3 = ITEM_SVG.nitro;
const ROULETTE = ['nitro', 'rocket', 'oil', 'shield'];
const SECTOR_TINT = ['rgba(255,208,0,0.95)', 'rgba(95,212,255,0.95)', 'rgba(242,243,245,0.95)'];

export class HUD {
  constructor() {
    this.root = $('hud');
    this.el = {
      pos: $('hudPos'), posBig: $('pos-big'), posNum: $('pos-num'), posOf: $('pos-of'), lapLine: $('lapLine'),
      watch: $('watchTag'), tower: $('tower'),
      slot: $('item-slot'), icon: $('item-icon'), cnt: $('item-cnt'), fps: $('fps'),
      lights: $('lights'), msgs: $('msgs'), wrong: $('wrongway'), minimap: $('minimap'),
      leds: $('leds'), speed: $('speed'), gear: $('gear'), rpm: $('rpm'), classTag: $('classTag'),
      ltNow: $('lt-now'), ltDelta: $('lt-delta'), ltLast: $('lt-last'), ltBest: $('lt-best'), ltRec: $('lt-rec'),
      timing: $('timing'), sectors: $('sectors'),
      lines: $('speedlines'), hitflash: $('hitflash'), touch: $('touch'),
    };
    this.el.leds.innerHTML = Array.from({ length: 12 }, (_, i) => `<i class="${i < 6 ? 'g' : i < 10 ? 'y' : 'r'}"></i>`).join('');
    this.ledEls = Array.from(this.el.leds.children);
    this.secEls = Array.from(this.el.sectors.children).map((s) => ({ root: s, b: s.querySelector('b') }));
    this.cache = {};
    this.lastRoulette = 0;
    this.fpsAcc = 0; this.fpsN = 0;
    this.touchEnabled = false;
  }

  show(v) { this.root.hidden = !v; if (!v) this.showTouch(false); }
  showTouch(v) {
    const on = !!(v && this.touchEnabled && this.race && this.race.player);
    this.el.touch.hidden = !on;
    document.body.classList.toggle('touch-on', on);
    const it = this.el.touch.querySelector('[data-touch=item]');
    if (it) it.hidden = !(this.race && this.race.itemsOn);
  }
  showFps(v) { this.el.fps.hidden = !v; }

  set(key, el, val, prop = 'textContent') {
    if (this.cache[key] === val) return;
    this.cache[key] = val;
    el[prop] = val;
  }

  setupRace(race) {
    this.race = race;
    this.cache = {};
    this.el.msgs.innerHTML = '';
    this.el.wrong.hidden = true;
    this.el.lights.hidden = true;
    const watch = race.mode === 'watch';
    const multi = race.karts.length > 1 && !watch;
    this.el.tower.hidden = !multi;
    this.el.posBig.hidden = !multi;
    this.el.pos.hidden = watch;
    this.el.watch.hidden = !watch;
    if (watch) this.el.watch.textContent = 'Нейропилот · ' + (race.watchKart ? race.watchKart.name : '');
    this.el.slot.hidden = !race.itemsOn;
    this.el.classTag.textContent = race.cls.short;
    this.el.gear.textContent = race.cls.gears ? '1' : '—';
    this.el.ltRec.textContent = fmtTime(race.rec.bestLap);
    this.el.ltLast.textContent = fmtTime(null);
    this.el.ltBest.textContent = fmtTime(null);
    this.clearSectors(true);
    this.drawMinimapBase(race);
    this.el.tower.innerHTML = race.karts.map(() => '<div class="row"><span class="p"></span><i></i><span class="n"></span><span class="g"></span></div>').join('');
    this.rows = Array.from(this.el.tower.children).map((r) => ({ r, p: r.children[0], i: r.children[1], n: r.children[2], g: r.children[3] }));
    this.boostT = 0;
    this.watchSec = { sector: 0, start: 0, lap: 0 };
  }

  clearSectors(all) {
    this.secEls.forEach((s, i) => {
      if (!all && i === 0) return;
      s.root.className = 'sec';
      s.b.textContent = '—';
    });
  }

  // окраска сектора как в настоящем тайминге: фиолетовый — абсолютный лучший,
  // зелёный — личный лучший, жёлтый — медленнее
  sectorDone(i, t, color) {
    if (i === 0) this.clearSectors(false);
    const s = this.secEls[i];
    s.root.className = 'sec ' + color;
    s.b.textContent = t.toFixed(3);
  }

  drawMinimapBase(race) {
    const g = race.geom;
    const b = g.bounds(12);
    const c = document.createElement('canvas');
    c.width = c.height = 340;
    const ctx = c.getContext('2d');
    const sc = 300 / Math.max(b.maxX - b.minX, b.maxZ - b.minZ);
    const ox = (340 - (b.maxX - b.minX) * sc) / 2, oz = (340 - (b.maxZ - b.minZ) * sc) / 2;
    this.map = { sc, ox, oz, minX: b.minX, minZ: b.minZ };
    const tx = (x) => ox + (x - b.minX) * sc, tz = (z) => oz + (z - b.minZ) * sc;
    ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    // пит-лейн
    if (g.pit) {
      ctx.beginPath();
      for (let i = 0; i <= g.pit.M; i += 2) ctx.lineTo(tx(g.pit.x[i]), tz(g.pit.z[i]));
      ctx.strokeStyle = 'rgba(0,0,0,0.5)'; ctx.lineWidth = 7; ctx.stroke();
      ctx.setLineDash([5, 4]);
      ctx.strokeStyle = 'rgba(200,205,215,0.75)'; ctx.lineWidth = 3; ctx.stroke();
      ctx.setLineDash([]);
    }
    const loop = () => { ctx.beginPath(); for (let i = 0; i <= g.N; i += 2) { const k = i % g.N; ctx.lineTo(tx(g.px[k]), tz(g.pz[k])); } ctx.closePath(); };
    loop();
    ctx.strokeStyle = 'rgba(0,0,0,0.6)'; ctx.lineWidth = 15; ctx.stroke();
    ctx.strokeStyle = '#2a2e36'; ctx.lineWidth = 9; ctx.stroke();
    // секторы — тонкая цветная линия по оси
    for (let sct = 0; sct < 3; sct++) {
      const s0 = g.sectorS[sct], s1 = sct < 2 ? g.sectorS[sct + 1] : g.length;
      ctx.beginPath();
      for (let s = s0; s <= s1; s += 2) { const i = g.sIdx(s); ctx.lineTo(tx(g.px[i]), tz(g.pz[i])); }
      ctx.strokeStyle = SECTOR_TINT[sct]; ctx.lineWidth = 3.2; ctx.stroke();
    }
    // границы секторов и старт/финиш
    for (let sct = 0; sct < 3; sct++) {
      const s = g.sectorS[sct];
      const a = g.pointAt(s, -g.half - 2), bb = g.pointAt(s, g.half + 2);
      ctx.strokeStyle = sct === 0 ? '#ffffff' : 'rgba(255,255,255,0.7)'; ctx.lineWidth = sct === 0 ? 4 : 2;
      ctx.beginPath(); ctx.moveTo(tx(a.x), tz(a.z)); ctx.lineTo(tx(bb.x), tz(bb.z)); ctx.stroke();
      if (sct > 0) {
        const p = g.pointAt(s, g.half + 9);
        ctx.fillStyle = 'rgba(255,255,255,0.8)'; ctx.font = '700 15px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillText('S' + (sct + 1), tx(p.x), tz(p.z));
      }
    }
    this.mapBase = c;
    this.mapCtx = this.el.minimap.getContext('2d');
  }

  drawMinimap(race) {
    const ctx = this.mapCtx, m = this.map;
    ctx.clearRect(0, 0, 340, 340);
    ctx.drawImage(this.mapBase, 0, 0);
    const tx = (x) => m.ox + (x - m.minX) * m.sc, tz = (z) => m.oz + (z - m.minZ) * m.sc;
    for (const h of race.items.hazards) { ctx.fillStyle = '#8d8dff'; ctx.fillRect(tx(h.x) - 3, tz(h.z) - 3, 6, 6); }
    for (const r of race.items.rockets) { ctx.fillStyle = '#ff5a2a'; ctx.beginPath(); ctx.arc(tx(r.x), tz(r.z), 4, 0, 7); ctx.fill(); }
    const focus = race.focus;
    const ks = race.karts.slice().sort((a, b) => (a === focus ? 1 : 0) - (b === focus ? 1 : 0));
    for (const k of ks) {
      const x = tx(k.x), y = tz(k.z), me = k === focus;
      ctx.beginPath();
      ctx.arc(x, y, me ? 8.5 : 6, 0, Math.PI * 2);
      ctx.fillStyle = k.driver.color; ctx.fill();
      ctx.lineWidth = me ? 3.5 : 2;
      ctx.strokeStyle = me ? '#ffd000' : '#0f1115'; ctx.stroke();
    }
  }

  startLights(n) {
    if (n < 0) { this.el.lights.hidden = true; return; }
    this.el.lights.hidden = false;
    Array.from(this.el.lights.children).forEach((c, i) => c.classList.toggle('on', i < n));
  }

  message(text, cls = 'info', dur = 1.5) {
    const d = document.createElement('div');
    d.className = 'msg ' + cls + (text.length > 16 ? ' small' : '');
    d.textContent = text;
    this.el.msgs.appendChild(d);
    while (this.el.msgs.children.length > 3) this.el.msgs.firstChild.remove();
    setTimeout(() => d.classList.add('out'), dur * 1000);
    setTimeout(() => d.remove(), dur * 1000 + 320);
  }

  lapFlash(time, kind, prevRecord) {
    const d = document.createElement('div');
    d.className = 'lapflash ' + kind;
    const label = { record: 'Рекорд трассы', fastest: 'Быстрейший круг', pb: 'Личный лучший', normal: 'Круг', invalid: 'Круг не засчитан' }[kind];
    let extra = '';
    if (kind === 'record' && prevRecord != null) extra = ' ' + fmtDelta(time - prevRecord);
    d.innerHTML = `<small>${label}</small>${fmtTime(time)}${extra}`;
    this.el.msgs.appendChild(d);
    setTimeout(() => d.remove(), 2600);
    if (kind === 'record') this.el.ltRec.textContent = fmtTime(time);
  }

  boostFlash() { this.boostT = 0.5; }

  // секторы нейропилота считаем здесь: у просмотра нет собственного тайминга
  watchTiming(race, k) {
    const g = race.geom, ws = this.watchSec;
    if (ws.lap) return;
    const p = k.progress;
    const bestSec = race.rec.bestSectors || [];
    const mark = (i, t) => {
      const b = bestSec[i];
      this.sectorDone(i, t, b == null || t <= b ? 'purple' : t <= b * 1.02 ? 'green' : 'yellow');
    };
    if (ws.sector === 0 && p >= g.sectorS[1]) { mark(0, race.time - ws.start); ws.sector = 1; ws.start = race.time; }
    if (ws.sector === 1 && p >= g.sectorS[2]) { mark(1, race.time - ws.start); ws.sector = 2; ws.start = race.time; }
    if (ws.sector === 2 && p >= g.length) { mark(2, race.time - ws.start); ws.lap = race.time; }
  }

  update(race, dt) {
    const el = this.el;
    this.fpsAcc += dt; this.fpsN++;
    if (this.fpsAcc > 0.5) { el.fps.textContent = Math.round(this.fpsN / this.fpsAcc) + ' FPS'; this.fpsAcc = 0; this.fpsN = 0; }
    const watch = race.mode === 'watch';
    const P = watch ? race.watchKart : race.player;
    if (!P) return;
    const n = race.karts.length;

    // позиция и круг
    if (!watch) {
      this.set('pos', el.posNum, String(P.rank + 1));
      this.set('of', el.posOf, '/' + n);
      let lapTxt;
      if (P.outLap) lapTxt = 'Круг выхода из боксов';
      else if (P.finished) lapTxt = 'Финиш';
      else lapTxt = 'Круг <b>' + Math.min(race.laps, P.lapTimes.length + 1) + '/' + race.laps + '</b>';
      this.set('lap', el.lapLine, lapTxt, 'innerHTML');
    }

    // таблица позиций
    if (this.rows && n > 1 && !watch) {
      const lead = race.order[0];
      race.order.forEach((k, i) => {
        const r = this.rows[i];
        this.set('tp' + i, r.p, String(i + 1));
        this.set('tc' + i, r.i.style, k.driver.color, 'background');
        this.set('tn' + i, r.n, k.name);
        let gap;
        if (k.finished) gap = i === 0 ? 'Финиш' : '+' + (k.finishTime - lead.finishTime).toFixed(1);
        else if (i === 0) gap = 'Лидер';
        else {
          const dd = (lead.finished ? race.laps * race.geom.length : lead.progress) - k.progress;
          gap = dd > race.geom.length ? '+' + Math.floor(dd / race.geom.length) + ' кр.' : '+' + (dd / Math.max(12, k.speed || 15)).toFixed(1);
        }
        this.set('tg' + i, r.g, gap);
        this.set('tr' + i, r.r, 'row' + (k.isPlayer ? ' me' : '') + (k.finished ? ' done' : ''), 'className');
      });
    }

    // предмет (только фан-трассы)
    if (race.itemsOn) {
      if (P.rouletteT > 0) {
        this.lastRoulette -= dt;
        if (this.lastRoulette <= 0) {
          this.lastRoulette = 0.08;
          el.icon.innerHTML = ITEM_SVG[ROULETTE[Math.floor(Math.random() * ROULETTE.length)]];
          el.slot.className = 'item-slot spin';
          this.cache.item = null;
          if (race.app.audio.ctx) race.app.audio.play('tick');
        }
        this.set('cnt', el.cnt, true, 'hidden');
      } else {
        const key = (P.item || '') + P.itemCount;
        if (this.cache.item !== key) {
          this.cache.item = key;
          el.icon.innerHTML = P.item ? ITEM_SVG[P.item] : '';
          el.slot.className = 'item-slot' + (P.item ? ' ready' : '');
          el.cnt.hidden = !(P.item && P.itemCount > 1);
          el.cnt.textContent = '×' + P.itemCount;
        }
      }
    }

    // приборная панель: км/ч, передача, обороты
    const C = P.cls;
    this.set('spd', el.speed, String(Math.round(Math.abs(P.u) * 3.6)));
    this.set('gear', el.gear, C.gears ? String(P.gear) : '—');
    this.set('rpm', el.rpm, (Math.round((P.rpm || 0) / 100) * 100).toLocaleString('ru-RU') + ' об/мин');
    const rf = clamp(((P.rpm || 0) - C.rpmIdle) / (C.rpmMax - C.rpmIdle), 0, 1);
    const on = Math.round(rf * 12);
    if (this.cache.leds !== on) {
      this.cache.leds = on;
      this.ledEls.forEach((l, i) => l.classList.toggle('on', i < on));
      el.leds.classList.toggle('shift', on >= 11 && !!C.gears);
    }

    // тайминг
    if (watch) {
      this.watchTiming(race, P);
      const t = this.watchSec.lap || race.time;
      this.set('lt', el.ltNow, fmtTime(t));
      this.set('lb', el.ltBest, fmtTime(race.watchBest ?? null));
      this.set('ll', el.ltLast, this.watchSec.lap ? fmtTime(this.watchSec.lap) : fmtTime(null));
      this.set('dl', el.ltDelta, 'Прогресс ' + clamp((P.progress / race.geom.length) * 100, 0, 100).toFixed(1) + '%');
      this.set('dlc', el.ltDelta, 't-delta', 'className');
    } else {
      let lapT;
      if (P.finished) lapT = P.lapTimes[P.lapTimes.length - 1];
      else if (!race.canDrive) lapT = 0;
      else lapT = P.outLap ? race.time : race.time - P.lapStart;
      this.set('lt', el.ltNow, P.outLap && race.canDrive ? 'выезд ' + fmtTime(lapT) : fmtTime(lapT));
      this.set('lti', el.ltNow.style, P.lapInvalid ? 'line-through' : 'none', 'textDecoration');
      const last = P.lapTimes.length ? P.lapTimes[P.lapTimes.length - 1] : undefined;
      this.set('ll', el.ltLast, last === undefined ? fmtTime(null) : last === null ? 'не засчитан' : fmtTime(last));
      this.set('lb', el.ltBest, fmtTime(isFinite(P.bestLap) ? P.bestLap : null));
      const d = race.delta();
      this.set('dl', el.ltDelta, d == null ? '' : fmtDelta(d) + ' к рекорду');
      this.set('dlc', el.ltDelta, 't-delta' + (d == null ? '' : d < 0 ? ' neg' : ' pos'), 'className');
      // текущий сектор подсвечен рамкой
      const live = P.outLap || P.finished || !race.canDrive ? -1 : P.sector;
      if (this.cache.live !== live) {
        this.cache.live = live;
        this.secEls.forEach((s, i) => s.root.classList.toggle('live', i === live));
      }
    }

    // эффекты
    const sf = P.boostT > 0 ? 1 : clamp((Math.abs(P.u) * 3.6 / P.cls.vmaxKmh - 0.72) / 0.28, 0, 1) * 0.75;
    this.set('lines', el.lines.style, sf.toFixed(2), 'opacity');
    this.set('hitf', el.hitflash, P.spinT > 1.0 ? 'hitflash on' : 'hitflash', 'className');
    this.set('wrong', el.wrong, !(P.wrongT > 1.2 && !P.finished && !watch), 'hidden');

    this.mapT = (this.mapT || 0) + dt;
    if (this.mapT > 1 / 30) { this.mapT = 0; this.drawMinimap(race); }
  }
}

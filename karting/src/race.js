// Гонка: сцена, участники, старт, круги, позиции, столкновения, результаты.
import * as THREE from 'three';
import { TRACKS } from './trackdata.js';
import { TrackGeom } from './trackgeom.js';
import { DRIVERS, DIFFICULTY, THEMES } from './config.js';
import { buildTrackMeshes, gridSlot } from './trackmesh.js';
import { buildEnvironment } from './scenery.js';
import { Kart, buildKartMesh } from './kart.js';
import { AIDriver } from './ai.js';
import { ItemSystem } from './items.js';
import { Effects } from './effects.js';
import { blobShadowTexture } from './textures.js';
import { clamp, disposeObject, rng, fmtTime, lerp } from './util.js';

const geomCache = {};
export function getGeom(id) {
  if (!geomCache[id]) geomCache[id] = new TrackGeom(TRACKS.find((t) => t.id === id));
  return geomCache[id];
}

const LIGHT_STEP = 0.8;
const GHOST_HZ = 20;

export class Race {
  constructor(app, cfg) {
    this.app = app;
    this.cfg = cfg;
    this.mode = cfg.mode; // race | tt | cup | attract
    this.def = TRACKS.find((t) => t.id === cfg.trackId);
    this.geom = getGeom(cfg.trackId);
    this.theme = THEMES[this.def.theme];
    this.quality = app.settings.quality;
    this.laps = this.mode === 'attract' ? 999 : cfg.laps;
    this.diff = DIFFICULTY[cfg.difficulty || 'normal'];

    this.scene = new THREE.Scene();
    this.env = buildEnvironment(this.scene, this.geom, this.theme, this.quality);
    this.track = buildTrackMeshes(this.geom, this.theme, this.quality);
    this.scene.add(this.track.group);
    this.fx = new Effects(this.scene, this.quality);
    this.blobMat = new THREE.MeshBasicMaterial({ map: blobShadowTexture(), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
    this.dustColor = this.theme.ground === 'sand' ? [0.86, 0.74, 0.55] : this.theme.ground === 'city' ? [0.5, 0.5, 0.56] : [0.42, 0.52, 0.26];

    this.time = 0;       // время гонки с момента старта
    this.clock = 0;      // время жизни сцены
    this.canDrive = false;
    this.state = 'intro';
    this.stateT = 0;
    this.finishCount = 0;
    this.fastestLap = Infinity;
    this.items = new ItemSystem(this, this.mode !== 'tt');

    this.karts = [];
    this.ais = [];
    this.player = null;
    this.buildField();
    this.order = this.karts.slice();

    // точка обзора: игрок или лидер трансляции
    this.focus = this.player || this.karts[0];
    this.camRig = app.camRig;
    this.camRig.tv.target = null;
    this.camRig.snapChase(this.focus);

    this.lightsOn = 0;
    this.holdT = 1.0 + Math.random() * 0.9;
    this.startPressT = null;
    this.results = null;
    this.hud = app.hud;

    // призрак лучшего круга
    this.rec = app.store.record(this.def.id);
    this.ghostFrames = [];
    this.trace = [];
    this.ghostMesh = null;
    if (this.player && this.rec.ghost && this.mode === 'tt') {
      this.ghostMesh = buildKartMesh(this.player.driver, { ghost: true });
      this.ghostMesh.visible = false;
      this.scene.add(this.ghostMesh);
    }

    if (this.mode === 'attract') {
      this.state = 'racing';
      this.canDrive = true;
      this.track.setLights(0);
      // разгоняем поле, чтобы сразу было движение
      for (const k of this.karts) { k.progress += 0; }
    }
    if (this.mode === 'tt') this.items.give(this.player, 'nitro3');
  }

  buildField() {
    const R = rng((Date.now() & 0xffff) + 17);
    const cfg = this.cfg;
    let field = [];
    if (this.mode === 'attract') {
      field = DRIVERS.slice().sort(() => R() - 0.5).map((d) => ({ d, ai: true }));
    } else if (this.mode === 'tt') {
      field = [{ d: DRIVERS.find((x) => x.id === cfg.driverId), ai: false }];
    } else {
      const me = DRIVERS.find((x) => x.id === cfg.driverId);
      let rivals;
      if (cfg.grid) {
        field = cfg.grid.map((id) => ({ d: DRIVERS.find((x) => x.id === id), ai: id !== me.id }));
      } else {
        rivals = DRIVERS.filter((x) => x.id !== me.id).sort(() => R() - 0.5).slice(0, cfg.opponents);
        field = rivals.map((d) => ({ d, ai: true }));
        const slot = Math.min(5, field.length);
        field.splice(slot, 0, { d: me, ai: false });
      }
    }
    field.forEach((f, i) => {
      const k = new Kart(this, f.d, { isPlayer: !f.ai, index: i });
      const slot = gridSlot(this.geom, i);
      k.place(slot.s, slot.d);
      this.scene.add(k.mesh);
      this.karts.push(k);
      const diff = this.mode === 'attract' ? DIFFICULTY.hard : this.diff;
      const ai = new AIDriver(this, k, f.ai ? diff : DIFFICULTY.normal, 1000 + i * 77 + Math.floor(R() * 1000));
      k.ai = ai;
      if (f.ai) this.ais.push(ai);
      else this.player = k;
    });
    if (this.mode === 'attract') {
      // разносим карты по трассе
      this.karts.forEach((k, i) => {
        const s = this.geom.wrapS(i * 23 + 40);
        k.place(s, ((i % 3) - 1) * 3);
        k.progress = s;
        const f = Math.sin(k.h), c = Math.cos(k.h);
        k.vx = f * 22; k.vz = c * 22;
      });
    }
  }

  // ---------- события от картов и предметов ----------
  sound(name, kart, level = 0, pos = null) {
    if (this.mode === 'attract' || !this.app.audio.ctx) return;
    let vol = 1;
    if (kart && kart !== this.player) {
      const x = pos ? pos.x : kart.x, z = pos ? pos.z : kart.z;
      const c = this.app.camera.position;
      const dist = Math.hypot(x - c.x, z - c.z);
      vol = clamp(1 - dist / 70, 0, 1) * 0.8;
      if (name === 'pickup' || name === 'itemReady' || name === 'driftLevel') vol *= 0.3;
    }
    this.app.audio.play(name, level, vol);
  }
  onPlayerBoost(pow) {
    this.camRig.shake(0.08 * pow);
    this.hud.boostFlash();
  }
  onKartHit(k, kind, by) {
    if (k === this.player) {
      this.camRig.shake(kind === 'rocket' ? 0.6 : 0.25);
      this.sound('hit', k);
      this.hud.message(kind === 'rocket' ? 'Прямое попадание' : 'Занесло на масле', 'bad', 1.4);
    } else if (by && by === this.player) {
      this.hud.message('Попадание: ' + k.name, 'good', 1.4);
    }
  }
  onWallHit(k, strength, x, z) {
    const n = Math.min(24, strength * 3);
    for (let i = 0; i < n; i++) {
      this.fx.spark(x, k.y + 0.4, z, (Math.random() - 0.5) * 8, 1 + Math.random() * 4, (Math.random() - 0.5) * 8, 1, 0.75, 0.35, 0.18, 0.4);
    }
    this.sound('wall', k, strength);
    if (k === this.player) this.camRig.shake(Math.min(0.5, strength * 0.035));
  }
  nearCamera(k) {
    const c = this.app.camera.position;
    return (k.x - c.x) ** 2 + (k.z - c.z) ** 2 < 90 * 90;
  }

  // ---------- главный цикл ----------
  update(dt, inp) {
    this.clock += dt;
    this.stateT += dt;
    const P = this.player;

    if (this.state === 'intro') {
      const dur = this.mode === 'tt' ? 2.2 : 3.4;
      this.camRig.intro(Math.min(1, this.stateT / dur), this.focus);
      if (this.stateT >= dur || inp.item || inp.driftPressed) {
        this.setState('countdown');
        this.camRig.snapChase(this.focus);
        this.hud.startLights(0);
      }
    } else if (this.state === 'countdown') {
      const n = Math.min(5, Math.floor(this.stateT / LIGHT_STEP) + 1);
      if (n !== this.lightsOn && this.stateT < LIGHT_STEP * 5) {
        this.lightsOn = n;
        this.track.setLights(n);
        this.hud.startLights(n);
        this.app.audio.play('light');
      }
      // отслеживаем момент нажатия газа
      // на телефоне газ автоматический — там нет ни штрафа, ни бонуса за старт
      if (P && !this.app.hud.touchEnabled) {
        if (inp.throttle > 0.5) { if (this.startPressT === null) this.startPressT = this.stateT; }
        else this.startPressT = null;
      }
      if (this.stateT >= LIGHT_STEP * 5 + this.holdT) this.go();
    } else if (this.state === 'finished') {
      if (this.stateT > 3.2 && !this.results) {
        this.results = this.buildResults();
        this.app.onRaceFinished(this.results, this);
      }
    }

    // физика: подшаги по 1/120 с
    const n = Math.max(1, Math.ceil(dt / (1 / 120)));
    const h = dt / n;
    for (const ai of this.ais) ai.update(dt);
    const pInp = P && !P.finished ? inp : P ? P.ai.update(dt) : null;
    for (let s = 0; s < n; s++) {
      for (const k of this.karts) {
        const ki = k === P ? pInp : k.ai.inp;
        k.step(h, ki);
        if (s === 0) ki.driftPressed = false;
      }
      this.collide();
      if (this.canDrive) this.time += h;
      for (const k of this.karts) this.checkLap(k);
    }
    // предметы
    for (const k of this.karts) {
      const ki = k === P ? pInp : k.ai.inp;
      if (ki && ki.item && this.canDrive) this.items.use(k);
      this.items.checkPads(k, this.track.pads, dt);
    }
    this.items.update(dt, this.clock);

    // сброс на трассу (R)
    if (P && inp.reset && this.canDrive && !P.finished) P.respawn();

    // визуал
    for (const k of this.karts) k.syncMesh(dt, this.clock);
    this.fx.update(dt);
    this.track.update(dt);
    for (const u of this.env.updaters) u(dt, this.clock);
    this.rank();
    this.updateGhost(dt);

    // камера
    if (this.mode === 'attract') {
      this.camRig.broadcast(dt, this.karts, this.geom);
    } else if (this.state === 'finished') {
      this.camRig.orbit(dt, this.focus);
    } else if (this.state !== 'intro') {
      if (inp.camera) this.camRig.mode = 1 - this.camRig.mode;
      this.camRig.chase(dt, this.focus, inp.look);
    }
    // соперник между камерой и игроком не должен закрывать обзор
    const cp = this.app.camera.position;
    const camK = this.mode === 'attract' ? (this.camRig.tv.target || this.focus) : this.focus;
    for (const k of this.karts) {
      if (k === camK) { k.mesh.visible = true; continue; }
      k.mesh.visible = (k.x - cp.x) ** 2 + (k.z - cp.z) ** 2 + (k.y + 0.6 - cp.y) ** 2 > 2.6 * 2.6;
    }
    const followK = this.mode === 'attract' ? (this.camRig.tv.target || this.focus) : this.focus;
    this.env.follow(followK.mesh.position);
    this.fx.setScale(this.app.renderer.domElement.height / (2 * Math.tan((this.app.camera.fov * Math.PI) / 360)));

    this.updateAudio(dt, pInp);
    if (this.mode !== 'attract') this.hud.update(this, dt);
  }

  setState(s) { this.state = s; this.stateT = 0; }

  go() {
    this.setState('racing');
    this.canDrive = true;
    this.lightsOn = 0;
    this.track.setLights(0);
    this.hud.startLights(-1);
    this.app.audio.play('go');
    this.hud.message('Старт!', 'go', 1.0);
    for (const k of this.karts) k.lapStart = 0;
    const P = this.player;
    if (P) {
      const t = this.startPressT;
      if (t !== null && t >= LIGHT_STEP * 4) {
        P.boost(1.1, 0.9);
        this.hud.message('Идеальный старт', 'good', 1.4);
        this.sound('nitro', P);
      } else if (t !== null && t < LIGHT_STEP * 2) {
        P.stallT = 0.9;
        this.hud.message('Пробуксовка', 'bad', 1.2);
      }
    }
    for (const ai of this.ais) {
      const r = Math.random();
      if (r < ai.diff.drift * 0.4) ai.kart.boost(1.0, 0.8);
      else if (r > 0.9) ai.kart.stallT = 0.4;
    }
  }

  collide() {
    const K = this.karts;
    const R2 = 2.1;
    for (let i = 0; i < K.length; i++) {
      const a = K[i];
      for (let j = i + 1; j < K.length; j++) {
        const b = K[j];
        const dx = b.x - a.x, dz = b.z - a.z;
        const d2 = dx * dx + dz * dz;
        if (d2 >= R2 * R2 || Math.abs(a.y - b.y) > 1.5) continue;
        const d = Math.sqrt(d2) || 0.001;
        const nx = dx / d, nz = dz / d;
        const ov = R2 - d;
        const ma = a.p.mass * (a.shieldT > 0 ? 3 : 1), mb = b.p.mass * (b.shieldT > 0 ? 3 : 1);
        const tot = ma + mb;
        a.x -= nx * ov * (mb / tot); a.z -= nz * ov * (mb / tot);
        b.x += nx * ov * (ma / tot); b.z += nz * ov * (ma / tot);
        const rel = (b.vx - a.vx) * nx + (b.vz - a.vz) * nz;
        if (rel < 0) {
          const jimp = (-(1 + 0.45) * rel) / (1 / ma + 1 / mb);
          a.vx -= (jimp * nx) / ma; a.vz -= (jimp * nz) / ma;
          b.vx += (jimp * nx) / mb; b.vz += (jimp * nz) / mb;
          if (-rel > 2.5) {
            const cx = (a.x + b.x) / 2, cz = (a.z + b.z) / 2;
            this.fx.burst(cx, a.y + 0.4, cz, 1, 0.8, 0.4, 8, 4, 0.16);
            this.sound('bump', a === this.player || b === this.player ? this.player : a, 0, { x: cx, z: cz });
            if (a === this.player || b === this.player) this.camRig.shake(Math.min(0.35, -rel * 0.03));
          }
        }
      }
    }
  }

  checkLap(k) {
    if (k.finished || !this.canDrive) return;
    const L = this.geom.length;
    const laps = Math.floor(k.progress / L);
    // трасса дельты для игрока: время на каждые 10 м круга
    if (k === this.player) {
      const lapDist = k.progress - k.lapsDone * L;
      const bin = Math.floor(lapDist / 10);
      if (bin >= 0 && this.trace[bin] === undefined) this.trace[bin] = this.time - k.lapStart;
    }
    if (laps <= k.lapsDone) return;
    k.lapsDone = laps;
    const lapTime = this.time - k.lapStart;
    k.lapStart = this.time;
    k.lapTimes.push(lapTime);
    const pb = lapTime < k.bestLap;
    if (pb) k.bestLap = lapTime;
    const overall = lapTime < this.fastestLap;
    if (overall) this.fastestLap = lapTime;
    if (k === this.player) this.onPlayerLap(lapTime, pb, overall);
    if (k.lapsDone >= this.laps) this.finish(k);
  }

  onPlayerLap(lapTime, pb, overall) {
    const P = this.player;
    const record = this.rec.bestLap == null || lapTime < this.rec.bestLap;
    const kind = record ? 'record' : overall ? 'fastest' : pb ? 'pb' : 'normal';
    this.hud.lapFlash(lapTime, kind, this.rec.bestLap);
    if (record) {
      this.app.store.saveLap(this.def.id, lapTime, this.ghostFrames, this.trace, P.driver.id);
      this.rec = this.app.store.record(this.def.id);
      this.sound('best', P);
    } else this.sound('lap', P);
    this.ghostFrames = [];
    this.trace = [];
    this.ghostT = 0;
    if (P.lapsDone === this.laps - 1 && this.laps > 1) {
      this.hud.message('Финальный круг', 'final', 2);
      this.sound('finalLap', P);
    } else if (P.lapsDone < this.laps) {
      this.hud.message('Круг ' + (P.lapsDone + 1), 'info', 1.2);
    }
  }

  finish(k) {
    k.finished = true;
    k.finishTime = this.time;
    k.finishPos = this.finishCount++;
    if (k === this.player) {
      this.setState('finished');
      const pos = k.finishPos + 1;
      this.hud.message(this.mode === 'tt' ? 'Финиш' : `Финиш: ${pos}-е место`, pos === 1 ? 'final' : 'info', 3);
      this.sound('finish', k);
      this.hud.showTouch(false);
      if (this.mode === 'tt' || this.karts.length === 1) {
        // гонка на время закончена
      }
    }
  }

  rank() {
    const s = this.karts.slice().sort((a, b) => {
      if (a.finished && b.finished) return a.finishTime - b.finishTime;
      if (a.finished) return -1;
      if (b.finished) return 1;
      return b.progress - a.progress;
    });
    s.forEach((k, i) => (k.rank = i));
    this.order = s;
    // лёгкая «резинка» для соперников относительно игрока
    const P = this.player;
    for (const ai of this.ais) {
      const k = ai.kart;
      let scale = ai.diff.speed;
      if (P && !P.finished) {
        const gap = k.progress - P.progress;
        scale *= 1 + clamp(-gap / 250, -1, 1) * ai.diff.rubber;
      }
      k.speedScale = scale;
    }
  }

  updateGhost(dt) {
    const P = this.player;
    if (!P || this.state !== 'racing' || !this.canDrive) return;
    // запись
    this.recAcc = (this.recAcc || 0) + dt;
    while (this.recAcc >= 1 / GHOST_HZ) {
      this.recAcc -= 1 / GHOST_HZ;
      this.ghostFrames.push(Math.round(P.x * 100) / 100, Math.round(P.y * 100) / 100, Math.round(P.z * 100) / 100, Math.round(P.h * 1000) / 1000);
    }
    // воспроизведение
    const gm = this.ghostMesh;
    const g = this.rec.ghost;
    if (!gm || !g) return;
    this.ghostT = (this.ghostT || 0) + dt;
    const f = this.ghostT * GHOST_HZ;
    const i = Math.floor(f);
    const cnt = g.length / 4;
    if (i >= cnt - 1) { gm.visible = false; return; }
    const t = f - i;
    const a = i * 4, b = a + 4;
    gm.visible = true;
    gm.position.set(lerp(g[a], g[b], t), lerp(g[a + 1], g[b + 1], t), lerp(g[a + 2], g[b + 2], t));
    let dh = g[b + 3] - g[a + 3];
    if (dh > Math.PI) dh -= Math.PI * 2; if (dh < -Math.PI) dh += Math.PI * 2;
    gm.rotation.y = g[a + 3] + dh * t;
  }

  // дельта к рекордному кругу, с
  delta() {
    const P = this.player;
    const tr = this.rec.trace;
    if (!P || !tr || !this.canDrive || P.finished) return null;
    const L = this.geom.length;
    const lapDist = P.progress - P.lapsDone * L;
    if (lapDist < 20) return null;
    const f = lapDist / 10;
    const i = Math.floor(f);
    if (i + 1 >= tr.length || tr[i] == null || tr[i + 1] == null) return null;
    const ref = tr[i] + (tr[i + 1] - tr[i]) * (f - i);
    return this.time - P.lapStart - ref;
  }

  updateAudio(dt, pInp) {
    const au = this.app.audio;
    if (!au.ctx) return;
    if (this.mode === 'attract' || this.app.paused) { au.silenceEngines(); return; }
    const P = this.focus;
    const thr = pInp ? pInp.throttle : 0;
    const base = clamp(P.speed / (P.p.maxSpeed * 1.25), 0, 1);
    let rpm = 0.1 + base * 0.88;
    if (!this.canDrive && thr > 0) rpm = 0.45 + Math.sin(this.clock * 30) * 0.05 + 0.2;
    if (P.stallT > 0) rpm = 0.9;
    au.setEngine(0, clamp(rpm, 0, 1), thr, 1);
    // два ближайших соперника
    const c = this.app.camera.position;
    const others = this.karts.filter((k) => k !== P).map((k) => ({ k, d: Math.hypot(k.x - c.x, k.z - c.z) })).sort((a, b) => a.d - b.d);
    for (let i = 0; i < 2; i++) {
      const o = others[i];
      if (!o) { au.setEngine(i + 1, 0, 0, 0); continue; }
      const r = 0.1 + clamp(o.k.speed / (o.k.p.maxSpeed * 1.25), 0, 1) * 0.88;
      au.setEngine(i + 1, r, 1, clamp(1 - o.d / 50, 0, 1) * 0.9);
    }
    let skid = 0;
    if (P.drifting) skid = 0.55 + P.driftLevel * 0.1;
    else if (Math.abs(P.vl) > 4 && !P.onGrass) skid = 0.35;
    if (P.spinT > 0 || P.stallT > 0) skid = 0.7;
    au.setSkid(skid);
    au.setWind(clamp((P.speed / 34) ** 2, 0, 1));
  }

  buildResults() {
    const L = this.geom.length;
    const rows = this.order.map((k) => {
      let time = k.finished ? k.finishTime : null;
      if (!k.finished) {
        const remaining = this.laps * L - k.progress;
        const avg = Math.max(12, k.progress / Math.max(1, this.time));
        time = this.time + remaining / avg;
      }
      return { driver: k.driver, name: k.name, isPlayer: k.isPlayer, time, est: !k.finished, bestLap: k.bestLap, laps: k.lapTimes.slice() };
    });
    rows.sort((a, b) => a.time - b.time);
    rows.forEach((r, i) => (r.pos = i + 1));
    return { mode: this.mode, trackId: this.def.id, trackName: this.def.name, laps: this.laps, rows, fastestLap: this.fastestLap };
  }

  dispose() {
    disposeObject(this.scene);
    this.scene.clear();
  }
}

export { fmtTime };

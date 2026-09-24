// Карт: модель, аркадная физика, визуальные эффекты.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { kartParams } from './config.js';
import { clamp, damp, dampAngle, wrapAngle } from './util.js';
import { numberTexture } from './textures.js';

// ---------- общие геометрии ----------
let G = null;
function geoms() {
  if (G) return G;
  G = {
    frame: new THREE.BoxGeometry(1.05, 0.05, 1.7),
    pod: new RoundedBoxGeometry(0.26, 0.2, 0.95, 3, 0.07),
    nose: new RoundedBoxGeometry(1.08, 0.2, 0.5, 3, 0.08),
    bumper: new RoundedBoxGeometry(1.3, 0.13, 0.16, 2, 0.05),
    seat: new RoundedBoxGeometry(0.44, 0.46, 0.42, 3, 0.1),
    engine: new RoundedBoxGeometry(0.3, 0.3, 0.36, 2, 0.05),
    pipe: new THREE.CylinderGeometry(0.05, 0.06, 0.55, 10),
    column: new THREE.CylinderGeometry(0.022, 0.022, 0.42, 6),
    wheelRing: new THREE.TorusGeometry(0.16, 0.022, 6, 18),
    torso: new THREE.CapsuleGeometry(0.19, 0.3, 4, 10),
    arm: new THREE.CapsuleGeometry(0.06, 0.34, 3, 6),
    leg: new THREE.CapsuleGeometry(0.075, 0.5, 3, 6),
    helmet: new THREE.SphereGeometry(0.2, 18, 14),
    visor: new THREE.SphereGeometry(0.203, 18, 10, -1.1, 2.2, 1.05, 0.75),
    stripe: new THREE.TorusGeometry(0.2, 0.025, 6, 20, Math.PI),
    tireF: new THREE.CylinderGeometry(0.25, 0.25, 0.2, 20).rotateZ(Math.PI / 2),
    tireR: new THREE.CylinderGeometry(0.28, 0.28, 0.3, 20).rotateZ(Math.PI / 2),
    rimF: new THREE.CylinderGeometry(0.15, 0.15, 0.21, 12).rotateZ(Math.PI / 2),
    rimR: new THREE.CylinderGeometry(0.17, 0.17, 0.31, 12).rotateZ(Math.PI / 2),
    plate: new THREE.PlaneGeometry(0.34, 0.25),
    flame: new THREE.ConeGeometry(0.09, 0.7, 10, 1, true).rotateX(-Math.PI / 2).translate(0, 0, -0.35),
    shield: new THREE.SphereGeometry(1.35, 24, 16),
    lamp: new THREE.SphereGeometry(0.06, 8, 6),
    blob: new THREE.PlaneGeometry(2.2, 2.8).rotateX(-Math.PI / 2),
  };
  return G;
}

const SHIELD_VERT = `
varying vec3 vN; varying vec3 vV;
void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix*viewMatrix*wp; }`;
const SHIELD_FRAG = `
uniform float time; uniform vec3 color; uniform float alpha;
varying vec3 vN; varying vec3 vV;
void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 2.2); float band = 0.5 + 0.5*sin(vN.y*18.0 - time*6.0);
 gl_FragColor = vec4(color*(0.6+f*1.8), (f*0.9 + band*0.08)*alpha); }`;

export function buildKartMesh(driver, { ghost = false, night = false, shadows = true } = {}) {
  const g = geoms();
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);

  const std = (color, rough = 0.5, metal = 0.1) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal });
    if (ghost) { m.transparent = true; m.opacity = 0.35; m.depthWrite = false; }
    return m;
  };
  const M = {
    paint: std(driver.color, 0.32, 0.25),
    accent: std(driver.accent, 0.4, 0.1),
    dark: std('#1b1d21', 0.7, 0.2),
    metal: std('#9aa2ad', 0.35, 0.85),
    tire: std('#161616', 0.92, 0),
    rim: std('#c9ced6', 0.3, 0.9),
    suit: std(driver.suit, 0.75, 0),
    visor: std('#0d1520', 0.08, 0.6),
    pipe: std('#6f6258', 0.4, 0.8),
  };
  const add = (geo, mat, x, y, z, parent = body) => {
    const m = new THREE.Mesh(geo, mat);
    m.position.set(x, y, z);
    m.castShadow = shadows && !ghost;
    parent.add(m);
    return m;
  };

  add(g.frame, M.metal, 0, 0.17, 0);
  add(g.pod, M.paint, 0.62, 0.26, -0.05);
  add(g.pod, M.paint, -0.62, 0.26, -0.05);
  const nose = add(g.nose, M.paint, 0, 0.3, 0.86);
  nose.rotation.x = 0.18;
  // номер на передней панели
  const plateMat = new THREE.MeshStandardMaterial({ map: numberTexture(driver.num, driver.accent, driver.color), roughness: 0.5 });
  if (ghost) { plateMat.transparent = true; plateMat.opacity = 0.35; }
  const plate = add(g.plate, plateMat, 0, 0.47, 0.64);
  plate.rotation.x = -0.95;
  plate.castShadow = false;
  add(g.bumper, M.dark, 0, 0.27, -0.98);
  const seat = add(g.seat, M.dark, 0, 0.42, -0.28);
  seat.rotation.x = -0.28;
  add(g.engine, M.metal, -0.47, 0.42, -0.5);
  const pipe = add(g.pipe, M.pipe, -0.47, 0.5, -0.84);
  pipe.rotation.x = Math.PI / 2 - 0.25;
  const col = add(g.column, M.dark, 0, 0.44, 0.44);
  col.rotation.x = -0.9;
  const wheel = add(g.wheelRing, M.dark, 0, 0.6, 0.28);
  wheel.rotation.x = -0.55;

  // пилот
  const torso = add(g.torso, M.suit, 0, 0.74, -0.2);
  torso.rotation.x = -0.35;
  const head = new THREE.Group();
  head.position.set(0, 1.1, -0.1);
  body.add(head);
  const helmet = add(g.helmet, M.paint, 0, 0, 0, head);
  helmet.scale.set(1, 1.02, 1.08);
  const visor = add(g.visor, M.visor, 0, 0.0, 0.0, head);
  visor.rotation.y = 0;
  const stripe = add(g.stripe, M.accent, 0, 0, 0, head);
  stripe.rotation.y = Math.PI / 2;
  const armL = add(g.arm, M.suit, 0.2, 0.8, 0.02);
  armL.rotation.set(1.05, 0, -0.35);
  const armR = add(g.arm, M.suit, -0.2, 0.8, 0.02);
  armR.rotation.set(1.05, 0, 0.35);
  const legL = add(g.leg, M.suit, 0.13, 0.4, 0.26);
  legL.rotation.x = 1.35;
  const legR = add(g.leg, M.suit, -0.13, 0.4, 0.26);
  legR.rotation.x = 1.35;

  // колёса
  const wheels = [];
  const mkWheel = (x, z, front) => {
    const pivot = new THREE.Group();
    pivot.position.set(x, front ? 0.25 : 0.28, z);
    body.add(pivot);
    const spin = new THREE.Group();
    pivot.add(spin);
    const t = new THREE.Mesh(front ? g.tireF : g.tireR, M.tire);
    t.castShadow = shadows && !ghost;
    spin.add(t);
    const r = new THREE.Mesh(front ? g.rimF : g.rimR, M.rim);
    spin.add(r);
    // спицы-метки, чтобы было видно вращение
    const mark = new THREE.Mesh(new THREE.BoxGeometry(front ? 0.212 : 0.312, 0.05, 0.26), M.dark);
    spin.add(mark);
    wheels.push({ pivot, spin, front, r: front ? 0.25 : 0.28 });
  };
  mkWheel(0.6, 0.6, true); mkWheel(-0.6, 0.6, true);
  mkWheel(0.64, -0.6, false); mkWheel(-0.64, -0.6, false);

  // пламя турбо
  const flameMat = new THREE.MeshBasicMaterial({ color: 0xffa040, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false });
  const flame = new THREE.Mesh(g.flame, flameMat);
  flame.position.set(-0.47, 0.44, -1.1);
  flame.rotation.x = 0.25;
  flame.visible = false;
  body.add(flame);
  const flame2 = new THREE.Mesh(g.flame, flameMat);
  flame2.scale.set(1.8, 1.8, 0.6);
  flame.add(flame2);

  // щит
  const shieldMat = new THREE.ShaderMaterial({
    vertexShader: SHIELD_VERT, fragmentShader: SHIELD_FRAG,
    uniforms: { time: { value: 0 }, color: { value: new THREE.Color('#5fd4ff') }, alpha: { value: 1 } },
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const shield = new THREE.Mesh(g.shield, shieldMat);
  shield.position.y = 0.6;
  shield.scale.set(1, 0.8, 1.15);
  shield.visible = false;
  root.add(shield);

  // фары ночью
  let lamps = null;
  if (night && !ghost) {
    const lm = new THREE.MeshBasicMaterial({ color: 0xfff4d0 });
    lamps = [add(g.lamp, lm, 0.35, 0.33, 1.1), add(g.lamp, lm, -0.35, 0.33, 1.1)];
    const tm = new THREE.MeshBasicMaterial({ color: 0xff2020 });
    add(g.lamp, tm, 0.5, 0.3, -1.05); add(g.lamp, tm, -0.5, 0.3, -1.05);
  }

  root.userData = { body, wheels, head, wheel, flame, flameMat, shield, shieldMat, M };
  return root;
}

// ---------- физика ----------
const BOOST_LEVELS = [0, 0.6, 1.1, 1.7];
export const DRIFT_COLORS = [[1, 1, 1], [0.35, 0.7, 1], [1, 0.55, 0.12], [0.8, 0.35, 1]];

export class Kart {
  constructor(race, driver, { isPlayer = false, index = 0 } = {}) {
    this.race = race;
    this.geom = race.geom;
    this.driver = driver;
    this.name = driver.name;
    this.isPlayer = isPlayer;
    this.index = index;
    this.p = kartParams(driver.stats);
    this.mesh = buildKartMesh(driver, { night: race.theme.night, shadows: race.quality !== 'low' });
    this.ud = this.mesh.userData;
    if (race.quality === 'low') {
      const blob = new THREE.Mesh(geoms().blob, race.blobMat);
      blob.position.y = 0.04;
      blob.renderOrder = 1;
      this.mesh.add(blob);
    }

    this.x = 0; this.y = 0; this.z = 0; this.h = 0;
    this.vx = 0; this.vz = 0;
    this.vf = 0; this.vl = 0; this.speed = 0;
    this.steer = 0; this.throttleVis = 0;
    this.drifting = false; this.driftDir = 0; this.driftCharge = 0; this.driftLevel = 0;
    this.driftArmed = false; this.hopT = 0; this.hopH = 0.22;
    this.boostT = 0; this.boostPow = 0;
    this.spinT = 0; this.spinAng = 0; this.spinRate = 0;
    this.shieldT = 0;
    this.stallT = 0;
    this.item = null; this.itemCount = 0; this.rouletteT = 0; this.rouletteItem = null;
    this.speedScale = 1;
    this.proj = {};
    this.trackIdx = -1;
    this.s = 0; this.d = 0; this.lastS = 0;
    this.onGrass = false;
    this.progress = 0; this.lapsDone = 0; this.lapStart = 0; this.lapTimes = []; this.bestLap = Infinity;
    this.finished = false; this.finishTime = 0; this.rank = 0;
    this.wrongT = 0;
    this.pitch = 0; this.roll = 0; this.visYaw = 0;
    this.wheelRot = 0;
    this.skidPrev = [null, null];
    this.lastWallHit = 0;
    this.airY = 0; this.airV = 0;
    this.lapTrace = [];
  }

  place(s, d) {
    const pt = this.geom.pointAt(s, d);
    this.x = pt.x; this.z = pt.z; this.y = pt.y;
    this.h = this.geom.headingAt(s);
    this.vx = this.vz = 0;
    const pr = this.geom.project(this.x, this.z, -1, null, this.proj);
    this.trackIdx = pr.idx; this.s = pr.s; this.d = pr.d; this.lastS = pr.s;
    this.progress = this.geom.deltaS(pr.s, 0);
    this.syncMesh(0);
  }

  respawn() {
    const s = this.geom.wrapS(this.s);
    const d = clamp(this.d, -this.geom.half + 2, this.geom.half - 2) * 0.3;
    const pt = this.geom.pointAt(s, d);
    this.x = pt.x; this.z = pt.z; this.y = pt.y;
    this.h = this.geom.headingAt(s);
    this.vx = this.vz = 0;
    this.drifting = false; this.spinT = 0; this.spinAng = 0; this.boostT = 0;
    this.skidPrev = [null, null];
    this.race.fx.burst(this.x, this.y + 0.8, this.z, 0.5, 0.8, 1, 20, 4, 0.3);
  }

  boost(dur, pow) {
    if (this.boostT <= 0) this.boostPow = pow; else this.boostPow = Math.max(this.boostPow, pow);
    this.boostT = Math.max(this.boostT, dur);
    if (this.isPlayer) this.race.onPlayerBoost(pow);
  }

  hit(kind, by = null) {
    if (this.spinT > 0) return false;
    if (this.shieldT > 0) {
      this.shieldT = 0;
      this.race.fx.burst(this.x, this.y + 0.8, this.z, 0.4, 0.85, 1, 30, 7, 0.35);
      this.race.sound('shieldBreak', this);
      return false;
    }
    this.drifting = false; this.driftCharge = 0; this.driftLevel = 0;
    this.boostT = 0;
    const heavy = kind === 'rocket';
    this.spinT = heavy ? 1.5 : 1.15;
    this.spinRate = (heavy ? 13 : 10) * (Math.random() < 0.5 ? -1 : 1);
    const k = heavy ? 0.3 : 0.55;
    this.vx *= k; this.vz *= k;
    if (heavy) { this.airV = 5.5; }
    this.race.onKartHit(this, kind, by);
    return true;
  }

  step(dt, inp) {
    const P = this.p;
    const geom = this.geom;
    const canDrive = this.race.canDrive && this.spinT <= 0;
    let throttle = canDrive ? inp.throttle : 0;
    let brake = canDrive ? inp.brake : 0;
    const steerIn = canDrive ? inp.steer : 0;
    if (this.stallT > 0) { this.stallT -= dt; throttle *= 0.15; }

    const fx = Math.sin(this.h), fz = Math.cos(this.h);
    const rx = -fz, rz = fx;
    let vf = this.vx * fx + this.vz * fz;
    let vl = this.vx * rx + this.vz * rz;

    this.steer = damp(this.steer, steerIn, 11, dt);
    this.throttleVis = damp(this.throttleVis, throttle, 8, dt);

    const boosting = this.boostT > 0;
    const grass = this.onGrass && !boosting;
    let vmax = P.maxSpeed * this.speedScale;
    if (grass) vmax *= P.grassPenalty;
    if (boosting) vmax *= 1 + 0.3 * this.boostPow;

    // продольная динамика
    if (boosting) {
      if (vf < vmax) vf = Math.min(vmax, vf + (P.accel * 1.3 + 16 * this.boostPow) * dt);
      this.boostT -= dt;
      if (this.boostT <= 0) this.boostPow = 0;
    } else if (throttle > 0.01 && vf < vmax) {
      const k = Math.max(0, vf) / vmax;
      vf = Math.min(vmax, vf + P.accel * throttle * (1 - 0.8 * k * k) * dt);
    }
    if (vf > vmax) vf = damp(vf, vmax, grass ? 2.4 : 0.9, dt);
    if (brake > 0.01) {
      if (vf > 0.3) vf = Math.max(0, vf - 30 * brake * dt);
      else vf = Math.max(-8, vf - 11 * brake * dt);
    }
    if (throttle <= 0.01 && brake <= 0.01 && !boosting) {
      const dec = (grass ? 9 : 3.2) * dt;
      vf = Math.abs(vf) < dec ? 0 : vf - Math.sign(vf) * dec;
    }
    if (this.spinT > 0) vf = damp(vf, 0, 1.6, dt);

    const sp = Math.abs(vf);
    const vr = clamp(sp / P.maxSpeed, 0, 1.4);

    // занос
    if (canDrive && inp.driftPressed && sp > 6 && this.hopT <= 0 && !this.drifting && this.airY <= 0.01) {
      this.hopT = 0.3; this.driftArmed = true;
      this.race.sound('hop', this);
    }
    if (!inp.drift) this.driftArmed = false;
    if (this.driftArmed && canDrive && !this.drifting && Math.abs(steerIn) > 0.3 && sp > 8) {
      this.drifting = true; this.driftDir = Math.sign(steerIn);
      this.driftCharge = 0; this.driftLevel = 0; this.driftArmed = false;
    }
    if (this.drifting) {
      const stop = !inp.drift || sp < 6 || !canDrive || (grass && sp < 9);
      if (stop) {
        if (this.driftLevel > 0 && inp.drift === false && canDrive) {
          this.boost(BOOST_LEVELS[this.driftLevel], 0.55 + this.driftLevel * 0.15);
          this.race.sound('miniturbo', this, this.driftLevel);
        }
        this.drifting = false; this.driftCharge = 0; this.driftLevel = 0;
      } else {
        const tight = clamp(this.steer * this.driftDir, -1, 1);
        this.driftCharge += dt * P.driftCharge * (0.65 + 0.55 * Math.max(0, tight)) * (grass ? 0.3 : 1);
        const lvl = this.driftCharge > 3.0 ? 3 : this.driftCharge > 1.9 ? 2 : this.driftCharge > 0.9 ? 1 : 0;
        if (lvl > this.driftLevel) {
          this.driftLevel = lvl;
          this.race.sound('driftLevel', this, lvl);
          const c = DRIFT_COLORS[lvl];
          this.race.fx.burst(this.x - fx * 0.9, this.y + 0.3, this.z - fz * 0.9, c[0], c[1], c[2], 14, 4, 0.25);
        }
      }
    }

    // рыскание
    const lowK = clamp(sp / 5, 0, 1);
    let yaw;
    if (this.drifting) {
      const tight = clamp(this.steer * this.driftDir, -1, 1);
      yaw = this.driftDir * P.turnRate * lowK * (0.55 + 0.45 * tight) * (1 - 0.16 * vr * vr);
    } else {
      yaw = this.steer * P.turnRate * lowK * (1 - 0.42 * vr * vr);
      if (vf < 0) yaw = -yaw;
    }
    if (grass) yaw *= 0.85;
    this.h -= yaw * dt;

    // боковое сцепление: гасим снос, сохраняя часть энергии
    const grip = this.drifting ? 7.5 : grass ? 4.5 : 9;
    const before = Math.hypot(vf, vl);
    vl *= Math.exp(-grip * dt);
    const after = Math.hypot(vf, vl);
    if (vf > 0) vf += (before - after) * (this.drifting ? 0.85 : 0.55);
    if (grass && sp > 3) vf -= vf * 0.35 * dt;

    // пересобираем вектор скорости в новом курсе
    const nfx = Math.sin(this.h), nfz = Math.cos(this.h);
    const nrx = -nfz, nrz = nfx;
    this.vx = nfx * vf + nrx * vl;
    this.vz = nfz * vf + nrz * vl;
    this.vf = vf; this.vl = vl;

    this.x += this.vx * dt;
    this.z += this.vz * dt;

    // трасса: отбойники
    const pr = geom.project(this.x, this.z, this.trackIdx, this.y, this.proj);
    this.trackIdx = pr.idx;
    const lim = geom.barrier - 0.9;
    if (Math.abs(pr.d) > lim) {
      const sg = Math.sign(pr.d);
      const pen = Math.abs(pr.d) - lim;
      this.x -= pr.nx * sg * pen; this.z -= pr.nz * sg * pen;
      const vn = (this.vx * pr.nx + this.vz * pr.nz) * sg;
      if (vn > 0) {
        this.vx -= pr.nx * sg * vn * 1.35;
        this.vz -= pr.nz * sg * vn * 1.35;
        const fr = clamp(1 - vn * 0.035, 0.55, 0.985);
        this.vx *= fr; this.vz *= fr;
        // разворачиваем вдоль стены, чтобы не застревать
        const th = pr.head;
        const along = Math.cos(this.h - th) >= 0 ? th : th + Math.PI;
        this.h = dampAngle(this.h, along, 2.5 + vn * 0.3, dt);
        if (vn > 2.5 && this.race.time - this.lastWallHit > 0.25) {
          this.lastWallHit = this.race.time;
          this.race.onWallHit(this, vn, this.x + pr.nx * sg * 0.8, this.z + pr.nz * sg * 0.8);
        }
        if (vn > 6 && this.drifting) { this.drifting = false; this.driftCharge = 0; this.driftLevel = 0; }
      }
    }
    this.s = pr.s; this.d = pr.d;
    this.onGrass = Math.abs(pr.d) > geom.half + 0.35;
    this.trackHead = pr.head;
    this.slope = pr.slope;

    // высота: дорога + прыжки
    this.airV -= 22 * dt;
    this.airY = Math.max(0, this.airY + this.airV * dt);
    if (this.airY <= 0) this.airV = 0;
    this.y = pr.y;

    // прогресс и круги
    const ds = geom.deltaS(pr.s, this.lastS);
    this.lastS = pr.s;
    this.progress += ds;
    this.speed = Math.hypot(this.vx, this.vz);

    // неверное направление
    const cosDir = Math.cos(this.h - pr.head);
    if (cosDir < -0.3 && vf > 2) this.wrongT += dt; else this.wrongT = Math.max(0, this.wrongT - dt * 2);

    if (this.spinT > 0) {
      this.spinT -= dt;
      this.spinAng += this.spinRate * dt;
      if (this.spinT <= 0) this.spinRate = 0;
    }
    if (this.shieldT > 0) this.shieldT -= dt;
    if (this.hopT > 0) this.hopT -= dt;
  }

  // визуализация и частицы (раз в кадр)
  syncMesh(dt, time = 0) {
    const ud = this.ud;
    const m = this.mesh;
    const hop = this.hopT > 0 ? Math.sin((1 - this.hopT / 0.3) * Math.PI) * this.hopH : 0;
    m.position.set(this.x, this.y + hop + this.airY, this.z);

    // визуальный курс: небольшое «перекручивание» в заносе
    const slipTarget = this.drifting ? this.driftDir * -0.42 : 0;
    this.visYaw = dt ? damp(this.visYaw, slipTarget, 6, dt) : slipTarget;
    if (this.spinT <= 0 && this.spinAng !== 0) {
      const target = Math.round(this.spinAng / (Math.PI * 2)) * Math.PI * 2;
      this.spinAng = dt ? damp(this.spinAng, target, 10, dt) : target;
      if (Math.abs(this.spinAng - target) < 0.01) this.spinAng = 0;
    }
    m.rotation.set(0, this.h + this.visYaw + this.spinAng, 0);

    // тангаж по уклону, крен от поворота
    const slopeAlong = (this.slope || 0) * Math.cos(this.h - (this.trackHead || this.h));
    const pitchT = -Math.atan(slopeAlong) - clamp(this.throttleVis * 0.015 - (this.vf < 0 ? 0 : 0), -0.05, 0.05);
    const rollT = clamp(this.steer * this.speed * 0.0042 + (this.drifting ? this.driftDir * 0.06 : 0), -0.14, 0.14);
    this.pitch = dt ? damp(this.pitch, pitchT, 10, dt) : pitchT;
    this.roll = dt ? damp(this.roll, rollT, 8, dt) : rollT;
    ud.body.rotation.set(this.pitch, 0, this.roll, 'YXZ');
    if (this.airY > 0.01 && this.spinT > 0) ud.body.rotation.x += Math.sin(time * 20) * 0.1;

    // колёса
    this.wheelRot += (this.vf * dt) / 0.27;
    for (const w of ud.wheels) {
      w.spin.rotation.x = this.wheelRot * (w.front ? 1.1 : 1);
      if (w.front) w.pivot.rotation.y = -this.steer * 0.42;
    }
    ud.wheel.rotation.z = this.steer * 1.2;
    ud.head.rotation.y = -this.steer * 0.25;
    ud.head.rotation.z = -this.roll * 1.5;

    // турбо
    const boosting = this.boostT > 0;
    ud.flame.visible = boosting;
    if (boosting) {
      const f = 0.8 + Math.random() * 0.5 + this.boostPow * 0.4;
      ud.flame.scale.set(1, 1, f);
      ud.flameMat.color.setHSL(0.07 + Math.random() * 0.04, 1, 0.55);
    }
    ud.shield.visible = this.shieldT > 0;
    if (this.shieldT > 0) {
      ud.shieldMat.uniforms.time.value = time;
      ud.shieldMat.uniforms.alpha.value = this.shieldT < 1.2 ? (Math.sin(time * 30) > 0 ? 1 : 0.3) : 1;
    }

    if (!dt) return;
    this.emitFx(dt);
  }

  emitFx(dt) {
    const fx = this.race.fx;
    const sh = Math.sin(this.h), ch = Math.cos(this.h);
    const rx = -ch, rz = sh;
    const sp = this.speed;
    const near = this.race.nearCamera(this);

    // задние колёса в мировых координатах
    const rear = [];
    for (const side of [-1, 1]) {
      rear.push([this.x - sh * 0.62 + rx * side * 0.64, this.y + 0.05, this.z - ch * 0.62 + rz * side * 0.64]);
    }

    // искры заноса
    if (this.drifting && near) {
      const c = DRIFT_COLORS[this.driftLevel];
      const n = this.driftLevel > 0 ? 3 : 1;
      for (const w of rear) {
        for (let i = 0; i < n; i++) {
          if (!fx.chance(0.9)) continue;
          const a = Math.random() * 6.28;
          fx.spark(w[0], w[1] + 0.1, w[2],
            -sh * 3 + Math.cos(a) * 2 + rx * this.driftDir * 2, 1.5 + Math.random() * 2.5, -ch * 3 + Math.sin(a) * 2 + rz * this.driftDir * 2,
            c[0], c[1], c[2], this.driftLevel > 0 ? 0.26 : 0.14, 0.25 + Math.random() * 0.2);
        }
        if (fx.chance(0.35)) fx.smoke(w[0], w[1] + 0.2, w[2], -sh * 2 + (Math.random() - 0.5), 0.6, -ch * 2 + (Math.random() - 0.5), 0.88, 0.9, 0.8, 0.22);
      }
    }
    // пыль на траве / песке
    if (this.onGrass && sp > 4 && near) {
      const col = this.race.dustColor;
      for (const w of rear) if (fx.chance(0.5)) fx.dust(w[0], w[1] + 0.2, w[2], -sh * 2 + (Math.random() - 0.5) * 2, 1 + Math.random() * 1.5, -ch * 2 + (Math.random() - 0.5) * 2, col[0], col[1], col[2], 1.0);
    }
    // пламя и дым выхлопа
    // выхлоп справа сзади (локальный x = -0.47 — это правая сторона)
    const ex = this.x - sh * 1.15 + rx * 0.47, ez = this.z - ch * 1.15 + rz * 0.47;
    if (this.boostT > 0 && near) {
      for (let i = 0; i < 2; i++) fx.flame(ex, this.y + 0.5, ez, -sh * 4 + (Math.random() - 0.5), 0.5 + Math.random(), -ch * 4 + (Math.random() - 0.5), 1 + this.boostPow * 0.5);
    }
    if (this.stallT > 0 && near) {
      for (const w of rear) fx.smoke(w[0], w[1] + 0.2, w[2], (Math.random() - 0.5) * 2, 1, (Math.random() - 0.5) * 2, 0.9, 1.2, 1.0, 0.4);
    }
    if (this.spinT > 0 && near && fx.chance(0.6)) {
      fx.smoke(this.x, this.y + 0.3, this.z, (Math.random() - 0.5) * 3, 1, (Math.random() - 0.5) * 3, 0.8, 1.1, 0.9, 0.35);
    }

    // следы шин
    const skid = (this.drifting || Math.abs(this.vl) > 4.5 || this.spinT > 0 || this.stallT > 0) && !this.onGrass && this.airY <= 0.01 && sp > 2;
    for (let k = 0; k < 2; k++) {
      const w = rear[k];
      if (!skid) { this.skidPrev[k] = null; continue; }
      const hw = 0.14;
      const l = [w[0] - rx * hw, w[1] - 0.02, w[2] - rz * hw];
      const r = [w[0] + rx * hw, w[1] - 0.02, w[2] + rz * hw];
      const p = this.skidPrev[k];
      if (p) {
        const dd = (p[0][0] - l[0]) ** 2 + (p[0][2] - l[2]) ** 2;
        if (dd > 0.25 && dd < 16) {
          fx.skids.add(p[0][0], p[0][1], p[0][2], p[1][0], p[1][1], p[1][2], l[0], l[1], l[2], r[0], r[1], r[2]);
          this.skidPrev[k] = [l, r];
        } else if (dd >= 16) this.skidPrev[k] = [l, r];
      } else this.skidPrev[k] = [l, r];
    }
  }
}

export { wrapAngle };

// Камеры: погоня за картом, облёт перед стартом, облёт на финише, «телетрансляция» в меню.
import * as THREE from 'three';
import { clamp, damp, dampAngle, wrapAngle } from './util.js';

const V = new THREE.Vector3();

export class CameraRig {
  constructor(camera) {
    this.cam = camera;
    this.pos = new THREE.Vector3();
    this.look = new THREE.Vector3();
    this.yaw = 0;
    this.shakeAmt = 0;
    this.fov = 70;
    this.mode = 0; // 0 — сверху (2.5D), 1 — погоня, 2 — погоня издалека
    this.tv = { t: 0, kind: 0, anchor: new THREE.Vector3(), target: null, switchT: 0 };
    this.orbitA = 0;
  }

  shake(a) { this.shakeAmt = Math.max(this.shakeAmt, a); }

  follow(dt, k, lookBack = false) {
    if (this.mode === 0) this.top(dt, k, 1, lookBack);
    else this.chase(dt, k, lookBack);
  }

  // вид сверху с лёгкой перспективой: камера высоко над картом, чуть позади
  top(dt, k, zoom = 1, lookBack = false) {
    const u = Math.abs(k.u || 0);
    const moving = u > 3;
    const course = moving && k.vx !== undefined ? Math.atan2(k.vx, k.vz) : k.h;
    const target = k.h + wrapAngle(course - k.h) * 0.5;
    this.yaw = dampAngle(this.yaw, target, 2.2, dt);
    const yaw = lookBack ? this.yaw + Math.PI : this.yaw;
    const hgt = (17 + clamp(u / 30, 0, 1.3) * 4) * zoom, back = 7.5 * zoom;
    const ahead = 4 + u * 0.25;
    V.set(k.x - Math.sin(yaw) * back, k.y + hgt, k.z - Math.cos(yaw) * back);
    this.pos.lerp(V, 1 - Math.exp(-dt * 8));
    V.set(k.x + Math.sin(yaw) * ahead, k.y, k.z + Math.cos(yaw) * ahead);
    this.look.lerp(V, 1 - Math.exp(-dt * 10));
    this.fov = damp(this.fov, 52, 3, dt);
    this.apply(dt);
  }

  // обзор всей трассы (лаборатория ИИ)
  overview(dt, b) {
    const cx = (b.minX + b.maxX) / 2, cz = (b.minZ + b.maxZ) / 2;
    const w = b.maxX - b.minX, h = b.maxZ - b.minZ;
    const aspect = this.cam.aspect || 1.6;
    const fov = 45, t = Math.tan((fov * Math.PI) / 360);
    const dist = Math.max(h / 2 / t, w / 2 / (t * aspect)) * 1.05;
    V.set(cx, dist * 0.94, cz + dist * 0.34);
    if (dt === 0 || this.pos.distanceTo(V) > 400) this.pos.copy(V); else this.pos.lerp(V, 1 - Math.exp(-dt * 3));
    V.set(cx, 0, cz + dist * 0.02);
    this.look.lerp(V, dt === 0 ? 1 : 1 - Math.exp(-dt * 3));
    this.fov = fov;
    this.apply(dt);
  }

  snapChase(k) {
    this.yaw = k.h;
    if (this.mode === 0) {
      this.pos.set(k.x - Math.sin(k.h) * 7.5, k.y + 17, k.z - Math.cos(k.h) * 7.5);
      this.look.set(k.x + Math.sin(k.h) * 4, k.y, k.z + Math.cos(k.h) * 4);
      return;
    }
    const [dist, hgt] = this.mode === 2 ? [5.6, 2.4] : [3.7, 1.5];
    this.pos.set(k.x - Math.sin(k.h) * dist, k.y + hgt, k.z - Math.cos(k.h) * dist);
    this.look.set(k.x + Math.sin(k.h) * 4, k.y + 0.7, k.z + Math.cos(k.h) * 4);
  }

  // камера от третьего лица, как в обычных гоночных играх: низко за картом,
  // с пружинной задержкой по курсу, наклоном горизонта в повороте и FOV от скорости
  chase(dt, k, lookBack = false) {
    const u = Math.abs(k.u);
    const moving = u > 3 && k.u > 0;
    const velYaw = moving ? Math.atan2(k.vx, k.vz) : k.h;
    const target = k.h + wrapAngle(velYaw - k.h) * 0.45;
    this.yaw = dampAngle(this.yaw, k.spinT > 0 ? this.yaw : target, 5.5, dt);
    const yaw = lookBack ? this.yaw + Math.PI : this.yaw;
    const far = this.mode === 2;
    const vr = clamp(u / (k.cls.vmaxKmh / 3.6), 0, 1.2);
    const dist = (far ? 5.6 : 3.7) + vr * (far ? 0.6 : 0.45) + (k.boostT > 0 ? 0.3 : 0);
    const hgt = (far ? 2.4 : 1.5) + vr * 0.1;
    this.camY = this.camY === undefined ? k.y : damp(this.camY, k.y, 6, dt);
    V.set(k.x - Math.sin(yaw) * dist, this.camY + hgt, k.z - Math.cos(yaw) * dist);
    this.pos.lerp(V, 1 - Math.exp(-dt * 14));
    this.pos.y = Math.max(this.pos.y, k.y + 1.0);
    const ahead = 4 + vr * 3;
    V.set(k.x + Math.sin(yaw) * ahead, this.camY + 0.7, k.z + Math.cos(yaw) * ahead);
    this.look.lerp(V, 1 - Math.exp(-dt * 16));
    this.roll = damp(this.roll || 0, clamp(-(k.w || 0) * u * 0.004, -0.05, 0.05), 5, dt);
    const fovT = 66 + vr * 12 + (k.boostT > 0 ? 5 : 0);
    this.fov = damp(this.fov, fovT, 3, dt);
    this.rollOn = true;
    this.apply(dt);
  }

  // облёт стартовой решётки: t 0..1
  intro(t, k, center) {
    const e = t * t * (3 - 2 * t);
    const a0 = k.h + 2.4, a1 = k.h + Math.PI;
    const a = a0 + (a1 - a0) * e;
    const r = 34 - 28.6 * e;
    const h = 14 - 11.75 * e;
    this.pos.set(k.x - Math.sin(a) * -r, k.y + h, k.z - Math.cos(a) * -r);
    const lx = k.x + Math.sin(k.h) * 3 * e, lz = k.z + Math.cos(k.h) * 3 * e;
    this.look.set(lx, k.y + 1 * e, lz);
    this.yaw = k.h;
    this.fov = 60 + 8 * e;
    this.apply(0);
  }

  orbit(dt, k) {
    this.orbitA += dt * 0.35;
    const a = k.h + Math.PI * 0.75 + this.orbitA;
    V.set(k.x + Math.sin(a) * 7, k.y + 2.4, k.z + Math.cos(a) * 7);
    this.pos.lerp(V, 1 - Math.exp(-dt * 3));
    V.set(k.x, k.y + 0.8, k.z);
    this.look.lerp(V, 1 - Math.exp(-dt * 6));
    this.fov = damp(this.fov, 55, 2, dt);
    this.apply(dt);
  }

  // трансляция: придорожные камеры, вертолёт, камера на борту соседа
  broadcast(dt, karts, geom) {
    const tv = this.tv;
    tv.switchT -= dt;
    if (!tv.target || tv.switchT <= 0) {
      tv.kind = (tv.kind + 1) % 3;
      tv.switchT = 6 + Math.random() * 3;
      const lead = karts.slice().sort((a, b) => b.progress - a.progress);
      tv.target = lead[Math.floor(Math.random() * Math.min(4, lead.length))];
      if (tv.kind === 0) this.placeTrackside(tv.target, geom);
      this.orbitA = Math.random() * 6;
    }
    const k = tv.target;
    if (tv.kind === 0) {
      if (geom.deltaS(k.s, tv.anchorS) > 18) this.placeTrackside(k, geom);
      this.pos.copy(tv.anchor);
      V.set(k.x, k.y + 0.8, k.z);
      this.look.lerp(V, 1 - Math.exp(-dt * 8));
      const dist = this.pos.distanceTo(V);
      this.fov = damp(this.fov, clamp(900 / Math.max(dist, 8), 14, 55), 3, dt);
    } else if (tv.kind === 1) {
      const a = k.h + Math.PI + Math.sin(this.orbitA + performance.now() * 0.0002) * 0.6;
      V.set(k.x + Math.sin(a) * 16, k.y + 11, k.z + Math.cos(a) * 16);
      this.pos.lerp(V, 1 - Math.exp(-dt * 2));
      V.set(k.x + Math.sin(k.h) * 6, k.y, k.z + Math.cos(k.h) * 6);
      this.look.lerp(V, 1 - Math.exp(-dt * 4));
      this.fov = damp(this.fov, 50, 2, dt);
    } else {
      const a = k.h + 2.6;
      V.set(k.x + Math.sin(a) * 4.5, k.y + 1.3, k.z + Math.cos(a) * 4.5);
      this.pos.lerp(V, 1 - Math.exp(-dt * 6));
      V.set(k.x - Math.sin(k.h) * 1.5, k.y + 0.7, k.z - Math.cos(k.h) * 1.5);
      this.look.lerp(V, 1 - Math.exp(-dt * 10));
      this.fov = damp(this.fov, 62, 3, dt);
    }
    this.apply(dt);
  }

  placeTrackside(k, geom) {
    const s = geom.wrapS(k.s + 32 + Math.random() * 12);
    const side = Math.random() < 0.5 ? -1 : 1;
    const p = geom.pointAt(s, side * (geom.barrier + 4));
    this.tv.anchor.set(p.x, p.y + 2.5 + Math.random() * 3, p.z);
    this.tv.anchorS = s;
  }

  apply(dt) {
    const c = this.cam;
    c.position.copy(this.pos);
    if (this.shakeAmt > 0.001) {
      const s = this.shakeAmt;
      c.position.x += (Math.random() - 0.5) * s;
      c.position.y += (Math.random() - 0.5) * s;
      c.position.z += (Math.random() - 0.5) * s;
      this.shakeAmt *= Math.exp(-dt * 7);
    }
    c.lookAt(this.look);
    if (this.rollOn) { c.rotateZ(this.roll || 0); this.rollOn = false; }
    if (Math.abs(c.fov - this.fov) > 0.01) { c.fov = this.fov; c.updateProjectionMatrix(); }
  }
}

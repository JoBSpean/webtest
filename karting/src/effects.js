// Частицы (искры, дым, пламя, пыль) и следы шин.
import * as THREE from 'three';

const VERT = `
attribute float size;
attribute vec4 pcolor;
varying vec4 vColor;
uniform float scale;
void main() {
  vColor = pcolor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = size * scale / max(0.1, -mv.z);
  gl_Position = projectionMatrix * mv;
}`;
const FRAG = `
varying vec4 vColor;
uniform float soft;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c) * 2.0;
  float a = 1.0 - smoothstep(soft, 1.0, d);
  if (a <= 0.001) discard;
  gl_FragColor = vec4(vColor.rgb, vColor.a * a);
}`;

class ParticlePool {
  constructor(max, additive, soft) {
    this.max = max;
    this.n = 0;
    const f = () => new Float32Array(max);
    this.px = f(); this.py = f(); this.pz = f();
    this.vx = f(); this.vy = f(); this.vz = f();
    this.life = f(); this.maxLife = f();
    this.s0 = f(); this.s1 = f();
    this.cr = f(); this.cg = f(); this.cb = f(); this.a0 = f();
    this.grav = f(); this.drag = f();
    const g = new THREE.BufferGeometry();
    this.pos = new THREE.BufferAttribute(new Float32Array(max * 3), 3).setUsage(THREE.DynamicDrawUsage);
    this.size = new THREE.BufferAttribute(new Float32Array(max), 1).setUsage(THREE.DynamicDrawUsage);
    this.col = new THREE.BufferAttribute(new Float32Array(max * 4), 4).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.pos);
    g.setAttribute('size', this.size);
    g.setAttribute('pcolor', this.col);
    g.setDrawRange(0, 0);
    this.mat = new THREE.ShaderMaterial({
      vertexShader: VERT, fragmentShader: FRAG,
      uniforms: { scale: { value: 400 }, soft: { value: soft } },
      transparent: true, depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 3 : 2;
  }
  spawn(x, y, z, vx, vy, vz, life, s0, s1, r, g, b, a, grav = 0, drag = 0) {
    let i = this.n;
    if (i >= this.max) i = Math.floor(Math.random() * this.max); else this.n++;
    this.px[i] = x; this.py[i] = y; this.pz[i] = z;
    this.vx[i] = vx; this.vy[i] = vy; this.vz[i] = vz;
    this.life[i] = life; this.maxLife[i] = life;
    this.s0[i] = s0; this.s1[i] = s1;
    this.cr[i] = r; this.cg[i] = g; this.cb[i] = b; this.a0[i] = a;
    this.grav[i] = grav; this.drag[i] = drag;
  }
  update(dt) {
    const P = this.pos.array, S = this.size.array, C = this.col.array;
    let i = 0;
    while (i < this.n) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        const j = --this.n;
        if (i !== j) {
          this.px[i] = this.px[j]; this.py[i] = this.py[j]; this.pz[i] = this.pz[j];
          this.vx[i] = this.vx[j]; this.vy[i] = this.vy[j]; this.vz[i] = this.vz[j];
          this.life[i] = this.life[j]; this.maxLife[i] = this.maxLife[j];
          this.s0[i] = this.s0[j]; this.s1[i] = this.s1[j];
          this.cr[i] = this.cr[j]; this.cg[i] = this.cg[j]; this.cb[i] = this.cb[j]; this.a0[i] = this.a0[j];
          this.grav[i] = this.grav[j]; this.drag[i] = this.drag[j];
        }
        continue;
      }
      const dr = Math.exp(-this.drag[i] * dt);
      this.vx[i] *= dr; this.vy[i] = this.vy[i] * dr - this.grav[i] * dt; this.vz[i] *= dr;
      this.px[i] += this.vx[i] * dt; this.py[i] += this.vy[i] * dt; this.pz[i] += this.vz[i] * dt;
      const t = 1 - this.life[i] / this.maxLife[i];
      P[i * 3] = this.px[i]; P[i * 3 + 1] = this.py[i]; P[i * 3 + 2] = this.pz[i];
      S[i] = this.s0[i] + (this.s1[i] - this.s0[i]) * t;
      C[i * 4] = this.cr[i]; C[i * 4 + 1] = this.cg[i]; C[i * 4 + 2] = this.cb[i];
      C[i * 4 + 3] = this.a0[i] * (t < 0.1 ? t / 0.1 : 1 - (t - 0.1) / 0.9);
      i++;
    }
    this.points.geometry.setDrawRange(0, this.n);
    this.pos.needsUpdate = true; this.size.needsUpdate = true; this.col.needsUpdate = true;
  }
}

class SkidMarks {
  constructor(max, color = 0x0a0a0a, opacity = 0.42) {
    this.max = max;
    this.head = 0;
    const pos = new Float32Array(max * 4 * 3);
    const idx = [];
    for (let i = 0; i < max; i++) {
      const a = i * 4;
      idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3);
    }
    const g = new THREE.BufferGeometry();
    this.attr = new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.attr);
    g.setIndex(idx);
    this.mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({
      color, transparent: true, opacity, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -4,
    }));
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 1;
    this.dirtyFrom = -1;
  }
  // квадрат из (l0,r0) в (l1,r1)
  add(l0x, l0y, l0z, r0x, r0y, r0z, l1x, l1y, l1z, r1x, r1y, r1z) {
    const P = this.attr.array;
    const b = this.head * 12;
    P[b] = l0x; P[b + 1] = l0y; P[b + 2] = l0z;
    P[b + 3] = r0x; P[b + 4] = r0y; P[b + 5] = r0z;
    P[b + 6] = l1x; P[b + 7] = l1y; P[b + 8] = l1z;
    P[b + 9] = r1x; P[b + 10] = r1y; P[b + 11] = r1z;
    this.head = (this.head + 1) % this.max;
    this.attr.needsUpdate = true;
  }
}

export class Effects {
  constructor(scene, quality) {
    const mult = quality === 'low' ? 0.5 : 1;
    this.mult = mult;
    this.add = new ParticlePool(Math.round(1800 * mult), true, 0.15);
    this.norm = new ParticlePool(Math.round(1400 * mult), false, 0.35);
    this.skids = new SkidMarks(quality === 'low' ? 1200 : 2600);
    scene.add(this.add.points, this.norm.points, this.skids.mesh);
    this.acc = 0;
  }
  setScale(scale) {
    this.add.mat.uniforms.scale.value = scale;
    this.norm.mat.uniforms.scale.value = scale;
  }
  update(dt) {
    this.add.update(dt);
    this.norm.update(dt);
  }
  chance(p) { return Math.random() < p * this.mult; }

  spark(x, y, z, vx, vy, vz, r, g, b, size = 0.22, life = 0.35) {
    this.add.spawn(x, y, z, vx, vy, vz, life, size, size * 0.3, r, g, b, 1, 9, 1.5);
  }
  smoke(x, y, z, vx, vy, vz, gray = 0.85, size = 1.0, life = 0.9, a = 0.35) {
    this.norm.spawn(x, y, z, vx, vy, vz, life, size * 0.5, size * 2.2, gray, gray, gray * 1.02, a, -0.6, 2.2);
  }
  dust(x, y, z, vx, vy, vz, r, g, b, size = 0.9) {
    this.norm.spawn(x, y, z, vx, vy, vz, 0.7, size * 0.5, size * 1.8, r, g, b, 0.5, 1.5, 2.5);
  }
  flame(x, y, z, vx, vy, vz, hot = 1) {
    this.add.spawn(x, y, z, vx, vy, vz, 0.16 + Math.random() * 0.08, 0.55 * hot, 0.1, 1.0, 0.55 + Math.random() * 0.3, 0.15, 0.95, -1, 3);
  }
  burst(x, y, z, r, g, b, n = 24, speed = 6, size = 0.3) {
    for (let i = 0; i < n * this.mult; i++) {
      const a = Math.random() * Math.PI * 2, u = Math.random() * 2 - 1;
      const s = Math.sqrt(1 - u * u);
      const v = speed * (0.4 + Math.random() * 0.6);
      this.add.spawn(x, y, z, Math.cos(a) * s * v, Math.abs(u) * v + 1, Math.sin(a) * s * v, 0.4 + Math.random() * 0.4, size, size * 0.2, r, g, b, 1, 8, 1.2);
    }
  }
  explosion(x, y, z) {
    this.burst(x, y + 0.5, z, 1, 0.6, 0.15, 40, 11, 0.5);
    this.burst(x, y + 0.5, z, 1, 0.9, 0.5, 20, 6, 0.8);
    for (let i = 0; i < 16 * this.mult; i++) {
      this.norm.spawn(x + (Math.random() - 0.5) * 2, y + 0.5 + Math.random(), z + (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 4, 2 + Math.random() * 3, (Math.random() - 0.5) * 4,
        1.4 + Math.random() * 0.6, 1.5, 5, 0.25, 0.23, 0.22, 0.6, -0.5, 1.5);
    }
  }
}

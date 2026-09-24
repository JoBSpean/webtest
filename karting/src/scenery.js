// Окружение: небо, свет, земля, вода, горы, облака, деревья, трибуны, город.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { groundTexture, cloudTexture, windowsTexture, crowdTexture, glowTexture } from './textures.js';
import { rng } from './util.js';
import { placeOnTrack } from './trackmesh.js';

const SKY_VERT = `
varying vec3 vDir;
void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`;
const SKY_FRAG = `
uniform vec3 top; uniform vec3 horizon; uniform vec3 bottom; uniform vec3 glow; uniform vec3 sunDir; uniform float stars;
varying vec3 vDir;
float hash(vec3 p){ p = fract(p*0.3183099+0.1); p *= 17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
void main(){
  vec3 d = normalize(vDir);
  float h = d.y;
  vec3 col = h > 0.0 ? mix(horizon, top, pow(h, 0.55)) : mix(horizon, bottom, pow(-h, 0.4));
  float sd = max(dot(d, normalize(sunDir)), 0.0);
  col += glow * (pow(sd, 6.0) * 0.35 + pow(sd, 60.0) * 0.6);
  col += glow * smoothstep(0.9993, 0.9997, sd) * 3.0;
  if (stars > 0.0 && h > 0.05) {
    vec3 q = floor(d * 380.0);
    float s = hash(q);
    col += vec3(step(0.9975, s)) * (0.6 + 0.4*hash(q+1.7)) * stars * smoothstep(0.05, 0.3, h);
  }
  gl_FragColor = vec4(col, 1.0);
}`;

const WATER_VERT = `
varying vec3 vW;
void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`;
const WATER_FRAG = `
uniform float time; uniform vec3 deep; uniform vec3 shallow; uniform vec3 skyTop; uniform vec3 skyHor; uniform vec3 sunDir; uniform vec3 sunCol;
uniform vec3 fogColor; uniform float fogNear; uniform float fogFar;
varying vec3 vW;
float hh(vec2 p){
  return sin(p.x*0.09+time*0.9)*0.5 + sin(p.y*0.12-time*1.1)*0.5 + sin((p.x+p.y)*0.23+time*1.6)*0.25 + sin((p.x-p.y)*0.41-time*2.3)*0.12 + sin(p.x*0.8+p.y*0.6+time*3.1)*0.05;
}
void main(){
  vec2 p = vW.xz;
  float e = 0.6;
  vec3 n = normalize(vec3(hh(p-vec2(e,0.0))-hh(p+vec2(e,0.0)), 2.2, hh(p-vec2(0.0,e))-hh(p+vec2(0.0,e))));
  vec3 v = normalize(cameraPosition - vW);
  float fr = pow(1.0 - max(dot(n, v), 0.0), 4.0);
  vec3 r = reflect(-v, n);
  vec3 sky = mix(skyHor, skyTop, clamp(r.y*1.5, 0.0, 1.0));
  vec3 col = mix(deep, sky, 0.25 + fr*0.7);
  col += sunCol * pow(max(dot(r, normalize(sunDir)), 0.0), 180.0) * 3.0;
  col += sunCol * pow(max(dot(r, normalize(sunDir)), 0.0), 12.0) * 0.15;
  float dist = length(cameraPosition - vW);
  float f = smoothstep(fogNear, fogFar, dist);
  gl_FragColor = vec4(mix(col, fogColor, f), 1.0);
}`;

export function buildEnvironment(scene, geom, theme, quality) {
  const out = { updaters: [] };
  const shadows = quality !== 'low';
  const R = rng(geom.def.id.length * 977 + geom.N);

  scene.background = new THREE.Color(theme.fog);
  scene.fog = new THREE.Fog(theme.fog, theme.fogNear, theme.fogFar);

  // небо
  const sunDir = new THREE.Vector3(...theme.sunDir).normalize();
  const sky = new THREE.Mesh(new THREE.SphereGeometry(1500, 32, 16), new THREE.ShaderMaterial({
    vertexShader: SKY_VERT, fragmentShader: SKY_FRAG, side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      top: { value: new THREE.Color(theme.skyTop) }, horizon: { value: new THREE.Color(theme.skyHorizon) },
      bottom: { value: new THREE.Color(theme.skyBottom) }, glow: { value: new THREE.Color(theme.sunGlow) },
      sunDir: { value: sunDir }, stars: { value: theme.night ? 1 : 0 },
    },
  }));
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  scene.add(sky);
  out.sky = sky;

  // свет
  const hemi = new THREE.HemisphereLight(theme.hemiSky, theme.hemiGround, theme.hemiIntensity);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(theme.sunColor, theme.sunIntensity);
  sun.position.copy(sunDir).multiplyScalar(150);
  if (shadows) {
    sun.castShadow = true;
    const sz = quality === 'high' ? 2048 : 1024;
    sun.shadow.mapSize.set(sz, sz);
    const c = sun.shadow.camera;
    c.left = -55; c.right = 55; c.top = 55; c.bottom = -55; c.near = 10; c.far = 400;
    sun.shadow.bias = -0.0004;
    sun.shadow.normalBias = 0.03;
  }
  scene.add(sun, sun.target);
  out.sun = sun; out.sunDir = sunDir;

  const b = geom.bounds(0);
  const cx = (b.minX + b.maxX) / 2, cz = (b.minZ + b.maxZ) / 2;
  const rx = (b.maxX - b.minX) / 2, rz = (b.maxZ - b.minZ) / 2;
  out.center = new THREE.Vector3(cx, 0, cz);
  out.radius = Math.max(rx, rz);

  // земля
  const gTex = groundTexture(theme.ground);
  if (theme.water) {
    // остров + море
    const island = new THREE.Mesh(new THREE.CircleGeometry(1, 96).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: gTex, roughness: 1 }));
    const irx = rx + 70, irz = rz + 70;
    island.scale.set(irx, 1, irz);
    island.position.set(cx, -0.02, cz);
    gTex.repeat.set(irx / 12, irz / 12);
    island.receiveShadow = shadows;
    scene.add(island);
    // мокрый песок у кромки
    const wet = new THREE.Mesh(new THREE.RingGeometry(0.97, 1.06, 96).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xa88862, roughness: 0.4 }));
    wet.scale.set(irx, 1, irz);
    wet.position.set(cx, -0.08, cz);
    scene.add(wet);
    const water = new THREE.Mesh(new THREE.PlaneGeometry(4000, 4000).rotateX(-Math.PI / 2), new THREE.ShaderMaterial({
      vertexShader: WATER_VERT, fragmentShader: WATER_FRAG,
      uniforms: {
        time: { value: 0 }, deep: { value: new THREE.Color('#1d4b6b') }, shallow: { value: new THREE.Color('#2f8a9a') },
        skyTop: { value: new THREE.Color(theme.skyTop) }, skyHor: { value: new THREE.Color(theme.skyHorizon) },
        sunDir: { value: sunDir }, sunCol: { value: new THREE.Color(theme.sunGlow) },
        fogColor: { value: new THREE.Color(theme.fog) }, fogNear: { value: theme.fogNear }, fogFar: { value: theme.fogFar },
      },
    }));
    water.position.set(cx, -0.35, cz);
    scene.add(water);
    out.updaters.push((dt, t) => { water.material.uniforms.time.value = t; });
    out.islandRx = irx; out.islandRz = irz;
  } else {
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: gTex, roughness: 1 }));
    gTex.repeat.set(3000 / 18, 3000 / 18);
    ground.position.set(cx, -0.03, cz);
    ground.receiveShadow = shadows;
    scene.add(ground);
  }

  // горы на горизонте
  if (theme.mountains) {
    const mk = (radius, hBase, hVar, color, seed) => {
      const r = rng(seed);
      const segs = 160;
      const pos = [];
      const heights = [];
      for (let i = 0; i <= segs; i++) {
        const a = (i / segs) * Math.PI * 2;
        let h = hBase + Math.sin(a * 3 + seed) * hVar * 0.3 + Math.sin(a * 7 + seed * 2) * hVar * 0.25 + r() * hVar * 0.45;
        heights.push(h);
      }
      heights[segs] = heights[0];
      const idx = [];
      for (let i = 0; i <= segs; i++) {
        const a = (i / segs) * Math.PI * 2;
        const x = cx + Math.cos(a) * radius, z = cz + Math.sin(a) * radius;
        pos.push(x, -20, z, x, heights[i], z);
      }
      for (let i = 0; i < segs; i++) { const a = i * 2; idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3); }
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
      g.setIndex(idx);
      const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide, fog: true }));
      m.renderOrder = -5;
      return m;
    };
    const far = mk(1150, 110, 160, theme.mountains2, 3);
    far.material.fog = false;
    far.material.color.lerp(new THREE.Color(theme.skyHorizon), 0.35);
    scene.add(far);
    const nearM = mk(780, 40, 90, theme.mountains, 11);
    nearM.material.fog = false;
    nearM.material.color.lerp(new THREE.Color(theme.fog), 0.2);
    scene.add(nearM);
  }

  // облака
  if (theme.clouds) {
    const tex = cloudTexture();
    for (let i = 0; i < theme.clouds; i++) {
      const sm = new THREE.SpriteMaterial({ map: tex, color: theme.cloudColor, transparent: true, opacity: 0.85, fog: false, depthWrite: false });
      const s = new THREE.Sprite(sm);
      const a = R() * Math.PI * 2, d = 350 + R() * 650;
      s.position.set(cx + Math.cos(a) * d, 120 + R() * 160, cz + Math.sin(a) * d);
      const k = 140 + R() * 180;
      s.scale.set(k, k * 0.45, 1);
      s.renderOrder = -4;
      scene.add(s);
      const drift = 1 + R() * 2;
      out.updaters.push((dt) => { s.position.x += drift * dt; });
    }
  }

  // свободное место для декораций
  const free = (x, z, margin) => {
    const d = geom.distToCenter(x, z, 3);
    return d > geom.barrier + margin;
  };
  const skirtAt = (x, z) => {
    const pr = geom.project(x, z, -1);
    return 1.5 + pr.y * 1.8;
  };

  // трибуна у старта
  out.stands = buildGrandstand(scene, geom, theme, shadows, R);

  // деревья
  if (theme.trees !== 'none' && theme.treeCount) {
    const count = Math.round(theme.treeCount * (quality === 'low' ? 0.5 : 1));
    const pts = [];
    let tries = 0;
    while (pts.length < count && tries < count * 30) {
      tries++;
      let x, z;
      if (theme.water) {
        const a = R() * Math.PI * 2, rr = Math.sqrt(R()) * 0.95;
        x = cx + Math.cos(a) * rr * (out.islandRx - 8); z = cz + Math.sin(a) * rr * (out.islandRz - 8);
      } else {
        x = cx + (R() * 2 - 1) * (rx + 260); z = cz + (R() * 2 - 1) * (rz + 260);
        // кластеры: лесополосы
        const n = Math.sin(x * 0.021) * Math.cos(z * 0.017) + Math.sin((x + z) * 0.011);
        if (n < -0.2 && R() < 0.8) continue;
      }
      const d = geom.distToCenter(x, z, 3);
      if (d < geom.barrier + 5) continue;
      if (d < geom.barrier + skirtAt(x, z) + 4) continue;
      if (out.stands && out.stands.box.distanceToPoint(new THREE.Vector3(x, 1, z)) < 6) continue;
      pts.push([x, z]);
    }
    buildTrees(scene, pts, theme.trees, shadows && quality === 'high', R);
  }

  // город ночью
  if (theme.night) buildCity(scene, geom, theme, R, free, out, quality);

  // солнце следует за машиной, чтобы тени были чёткими
  out.follow = (target) => {
    sun.position.set(target.x + sunDir.x * 150, target.y + sunDir.y * 150, target.z + sunDir.z * 150);
    sun.target.position.copy(target);
    sky.position.copy(target);
  };
  return out;
}

function buildTrees(scene, pts, kind, castShadow, R) {
  const dummy = new THREE.Object3D();
  if (kind === 'palm') {
    // ствол слегка изогнут
    const trunkG = new THREE.CylinderGeometry(0.18, 0.28, 7, 7, 6);
    trunkG.translate(0, 3.5, 0);
    const p = trunkG.attributes.position;
    for (let i = 0; i < p.count; i++) { const y = p.getY(i); p.setX(i, p.getX(i) + (y / 7) ** 2 * 1.2); }
    trunkG.computeVertexNormals();
    const fronds = [];
    for (let k = 0; k < 7; k++) {
      const f = new THREE.ConeGeometry(0.55, 3.8, 4, 1);
      f.scale(1, 1, 0.18);
      f.rotateZ(-Math.PI / 2 - 0.35);
      f.translate(1.7, -0.3, 0);
      f.rotateY((k / 7) * Math.PI * 2);
      f.translate(1.2, 7, 0);
      fronds.push(f);
    }
    const leafG = mergeGeometries(fronds);
    const trunk = new THREE.InstancedMesh(trunkG, new THREE.MeshStandardMaterial({ color: 0x8a6a48, roughness: 0.9 }), pts.length);
    const leaves = new THREE.InstancedMesh(leafG, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, flatShading: true }), pts.length);
    const c = new THREE.Color();
    pts.forEach(([x, z], i) => {
      const s = 0.8 + R() * 0.5;
      dummy.position.set(x, 0, z); dummy.rotation.set(0, R() * Math.PI * 2, 0); dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      trunk.setMatrixAt(i, dummy.matrix); leaves.setMatrixAt(i, dummy.matrix);
      c.setHSL(0.25 + R() * 0.08, 0.5, 0.28 + R() * 0.1);
      leaves.setColorAt(i, c);
    });
    trunk.castShadow = leaves.castShadow = castShadow;
    scene.add(trunk, leaves);
    return;
  }
  const isPine = kind === 'pine';
  const trunkG = new THREE.CylinderGeometry(0.22, 0.32, 2.4, 6).translate(0, 1.2, 0);
  let crownG;
  if (isPine) {
    crownG = mergeGeometries([
      new THREE.ConeGeometry(2.2, 3.5, 7).translate(0, 3.4, 0),
      new THREE.ConeGeometry(1.7, 3, 7).translate(0, 5.0, 0),
      new THREE.ConeGeometry(1.1, 2.4, 7).translate(0, 6.4, 0),
    ]);
  } else {
    const a = new THREE.IcosahedronGeometry(2.1, 1).translate(0, 4.0, 0);
    const b2 = new THREE.IcosahedronGeometry(1.5, 1).translate(0.9, 4.9, 0.4);
    const c2 = new THREE.IcosahedronGeometry(1.4, 1).translate(-0.8, 4.6, -0.5);
    crownG = mergeGeometries([a, b2, c2]);
  }
  const trunk = new THREE.InstancedMesh(trunkG, new THREE.MeshStandardMaterial({ color: 0x6b4a2f, roughness: 1 }), pts.length);
  const crown = new THREE.InstancedMesh(crownG, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.85, flatShading: true }), pts.length);
  const col = new THREE.Color();
  pts.forEach(([x, z], i) => {
    const s = 0.75 + R() * 0.75;
    dummy.position.set(x, 0, z); dummy.rotation.set(0, R() * Math.PI * 2, 0); dummy.scale.set(s, s * (0.85 + R() * 0.4), s);
    dummy.updateMatrix();
    trunk.setMatrixAt(i, dummy.matrix); crown.setMatrixAt(i, dummy.matrix);
    const autumn = R() < 0.12;
    if (autumn) col.setHSL(0.08 + R() * 0.05, 0.65, 0.42);
    else col.setHSL(0.24 + R() * 0.1, 0.45 + R() * 0.2, 0.26 + R() * 0.12);
    crown.setColorAt(i, col);
  });
  trunk.castShadow = crown.castShadow = castShadow;
  scene.add(trunk, crown);
}

function buildGrandstand(scene, geom, theme, shadows, R) {
  // ищем сторону у стартовой прямой, где есть место
  const s0 = geom.wrapS(-25);
  let side = 1;
  for (const sd of [1, -1]) {
    const p = geom.pointAt(s0, sd * (geom.barrier + 14));
    if (geom.distToCenter(p.x, p.z, 2) > geom.barrier + 8) { side = sd; break; }
  }
  const g = new THREE.Group();
  const len = 46;
  const steps = 5;
  const stepMat = new THREE.MeshStandardMaterial({ color: theme.night ? 0x2a2a3a : 0x9aa3ad, roughness: 0.8 });
  const crowdTex = crowdTexture();
  crowdTex.repeat.set(len / 12, 1);
  const crowdMat = new THREE.MeshStandardMaterial({ map: crowdTex, roughness: 0.9, emissive: theme.night ? 0xffffff : 0x000000, emissiveMap: theme.night ? crowdTex : null, emissiveIntensity: theme.night ? 0.25 : 0 });
  for (let k = 0; k < steps; k++) {
    const st = new THREE.Mesh(new THREE.BoxGeometry(len, 0.6 + k * 0.8, 1.6), stepMat);
    st.position.set(0, (0.6 + k * 0.8) / 2, k * 1.6);
    st.castShadow = shadows; st.receiveShadow = shadows;
    g.add(st);
    const cr = new THREE.Mesh(new THREE.PlaneGeometry(len, 1.1), crowdMat);
    cr.position.set(0, 0.6 + k * 0.8 + 0.5, k * 1.6 - 0.2);
    cr.rotation.y = Math.PI;
    g.add(cr);
  }
  // крыша
  const roof = new THREE.Mesh(new THREE.BoxGeometry(len + 2, 0.3, 9.5), new THREE.MeshStandardMaterial({ color: theme.night ? 0x14141f : 0xe8e8ea, roughness: 0.6 }));
  roof.position.set(0, 8, 3.2);
  roof.rotation.x = -0.06;
  roof.castShadow = shadows;
  g.add(roof);
  for (let k = -2; k <= 2; k++) {
    const pole = new THREE.Mesh(new THREE.BoxGeometry(0.3, 8, 0.3), stepMat);
    pole.position.set(k * (len / 4.4), 4, 7.6);
    g.add(pole);
  }
  // флаги на крыше
  const flagCols = ['#e0322b', '#ffd000', '#1f6fe0', '#2e9e4b', '#ffffff', '#8b3fd9'];
  for (let k = 0; k < 8; k++) {
    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3), new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8, roughness: 0.3 }));
    pole.position.set(-len / 2 + 3 + k * ((len - 6) / 7), 9.6, 0);
    g.add(pole);
    const flag = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.9), new THREE.MeshStandardMaterial({ color: flagCols[k % flagCols.length], side: THREE.DoubleSide, roughness: 0.8 }));
    flag.position.set(pole.position.x + 0.72, 10.6, 0);
    g.add(flag);
  }
  placeOnTrack(g, geom, s0, side * (geom.barrier + 3), 0);
  g.position.y = Math.max(0, g.position.y - 0.3);
  g.rotation.x = 0;
  // трибуна должна «смотреть» на трассу: локальный -z к трассе
  g.rotation.y += side > 0 ? -Math.PI / 2 : Math.PI / 2;
  scene.add(g);
  g.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(g);
  return { group: g, box };
}

function buildCity(scene, geom, theme, R, free, out, quality) {
  const b = geom.bounds(0);
  const geoms = [];
  const tries = quality === 'low' ? 200 : 420;
  for (let i = 0; i < tries; i++) {
    const x = b.minX - 120 + R() * (b.maxX - b.minX + 240);
    const z = b.minZ - 120 + R() * (b.maxZ - b.minZ + 240);
    const w = 10 + R() * 18, d = 10 + R() * 18;
    const inside = x > b.minX + 20 && x < b.maxX - 20 && z > b.minZ + 20 && z < b.maxZ - 20;
    const h = inside ? 6 + R() * 16 : 14 + R() * 60;
    if (!free(x, z, Math.max(w, d) * 0.75 + 16)) continue;
    if (out.stands && out.stands.box.distanceToPoint(new THREE.Vector3(x, 1, z)) < Math.max(w, d)) continue;
    const g = new THREE.BoxGeometry(w, h, d);
    const uv = g.attributes.uv;
    const nrm = g.attributes.normal;
    for (let k = 0; k < uv.count; k++) {
      const ny = Math.abs(nrm.getY(k));
      const horiz = Math.abs(nrm.getX(k)) > 0.5 ? d : w;
      if (ny > 0.5) { uv.setXY(k, 0.01, 0.99); continue; }
      uv.setXY(k, uv.getX(k) * horiz / 12, uv.getY(k) * h / 24);
    }
    g.translate(x, h / 2, z);
    geoms.push(g);
  }
  if (geoms.length) {
    const tex = windowsTexture(5);
    const mesh = new THREE.Mesh(mergeGeometries(geoms), new THREE.MeshStandardMaterial({
      map: tex, emissive: 0xffffff, emissiveMap: tex, emissiveIntensity: 0.55, roughness: 0.7, color: 0x5a5a70,
    }));
    scene.add(mesh);
  }
  // фонари вдоль трассы + световые пятна на асфальте
  const poleG = new THREE.CylinderGeometry(0.1, 0.14, 7, 6).translate(0, 3.5, 0);
  const headG = new THREE.BoxGeometry(1.6, 0.18, 0.45).translate(0, 7, 0);
  const lampPts = [];
  for (let s = 0; s < geom.length; s += 34) {
    const side = Math.floor(s / 34) % 2 ? 1 : -1;
    lampPts.push([s, side]);
  }
  const poles = new THREE.InstancedMesh(poleG, new THREE.MeshStandardMaterial({ color: 0x2b2d36, roughness: 0.5, metalness: 0.6 }), lampPts.length);
  const heads = new THREE.InstancedMesh(headG, new THREE.MeshBasicMaterial({ color: 0xfff0c8 }), lampPts.length);
  const glowTex = glowTexture();
  const pools = new THREE.InstancedMesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({
    map: glowTex, color: 0xffd9a8, transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false,
    polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -4,
  }), lampPts.length);
  pools.renderOrder = 1;
  const dummy = new THREE.Object3D();
  lampPts.forEach(([s, side], i) => {
    const p = geom.pointAt(s, side * (geom.barrier + 1.2));
    const hd = geom.headingAt(s);
    dummy.position.copy(p); dummy.rotation.set(0, hd, 0); dummy.scale.set(1, 1, 1);
    dummy.updateMatrix();
    poles.setMatrixAt(i, dummy.matrix);
    dummy.position.copy(geom.pointAt(s, side * (geom.barrier - 0.2)));
    dummy.rotation.set(0, hd + Math.PI / 2, 0);
    dummy.updateMatrix();
    heads.setMatrixAt(i, dummy.matrix);
    const q = geom.pointAt(s, side * (geom.half - 1.5));
    dummy.position.set(q.x, q.y + 0.03, q.z);
    dummy.rotation.set(0, hd, 0);
    dummy.scale.set(13, 1, 13);
    dummy.updateMatrix();
    pools.setMatrixAt(i, dummy.matrix);
  });
  scene.add(poles, heads, pools);
}

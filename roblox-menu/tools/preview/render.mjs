// render.mjs — node side of the Roblox menu preview.
//
//   node render.mjs manifest <modelsDir>                      -> Lua table describing every .glb (stdout)
//   node render.mjs render <workDir> <modelsDir> <outDir> <scene.json>...  -> one PNG per scene
//
// `manifest` has no dependencies. `render` needs playwright-core (and the browser side needs three
// and @fontsource/montserrat) from the node_modules folder given by PREVIEW_NODE_MODULES.
import fs from 'fs';
import path from 'path';
import http from 'http';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const [cmd, ...args] = process.argv.slice(2);

// ---------------------------------------------------------------- manifest
function readGlbJson(file) {
  const buf = fs.readFileSync(file);
  if (buf.readUInt32LE(0) !== 0x46546c67) throw new Error(`${file}: not a .glb`);
  let off = 12;
  while (off < buf.length) {
    const len = buf.readUInt32LE(off), type = buf.readUInt32LE(off + 4);
    if (type === 0x4e4f534a) return JSON.parse(buf.subarray(off + 8, off + 8 + len).toString('utf8'));
    off += 8 + len;
  }
  throw new Error(`${file}: no JSON chunk`);
}
const mat4 = {
  ident: () => [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], // column-major like glTF
  mul(a, b) {
    const o = new Array(16).fill(0);
    for (let c = 0; c < 4; c++) for (let r = 0; r < 4; r++) for (let k = 0; k < 4; k++) o[c * 4 + r] += a[k * 4 + r] * b[c * 4 + k];
    return o;
  },
  trs(t = [0, 0, 0], q = [0, 0, 0, 1], s = [1, 1, 1]) {
    const [x, y, z, w] = q;
    return [
      (1 - 2 * (y * y + z * z)) * s[0], (2 * (x * y + z * w)) * s[0], (2 * (x * z - y * w)) * s[0], 0,
      (2 * (x * y - z * w)) * s[1], (1 - 2 * (x * x + z * z)) * s[1], (2 * (y * z + x * w)) * s[1], 0,
      (2 * (x * z + y * w)) * s[2], (2 * (y * z - x * w)) * s[2], (1 - 2 * (x * x + y * y)) * s[2], 0,
      t[0], t[1], t[2], 1];
  },
  point: (m, p) => [0, 1, 2].map(r => m[r] * p[0] + m[4 + r] * p[1] + m[8 + r] * p[2] + m[12 + r]),
};
const NORM = { 5120: v => Math.max(v / 127, -1), 5121: v => v / 255, 5122: v => Math.max(v / 32767, -1), 5123: v => v / 65535 };
function manifestOf(file) {
  const j = readGlbJson(file);
  const scene = j.scenes[j.scene ?? 0];
  const nodes = [];
  const visit = (idx, parentM) => {
    const n = j.nodes[idx];
    const local = n.matrix ? n.matrix.slice() : mat4.trs(n.translation, n.rotation, n.scale);
    const world = mat4.mul(parentM, local);
    if (n.mesh !== undefined) {
      const mesh = j.meshes[n.mesh];
      let mn = [Infinity, Infinity, Infinity], mx = [-Infinity, -Infinity, -Infinity];
      for (const prim of mesh.primitives) {
        const acc = j.accessors[prim.attributes.POSITION];
        let a = acc.min, b = acc.max;
        if (acc.normalized && NORM[acc.componentType]) { a = a.map(NORM[acc.componentType]); b = b.map(NORM[acc.componentType]); }
        for (let i = 0; i < 8; i++) {
          const p = mat4.point(world, [i & 1 ? b[0] : a[0], i & 2 ? b[1] : a[1], i & 4 ? b[2] : a[2]]);
          for (let k = 0; k < 3; k++) { mn[k] = Math.min(mn[k], p[k]); mx[k] = Math.max(mx[k], p[k]); }
        }
      }
      const mat = j.materials?.[mesh.primitives[0].material];
      const pbr = mat?.pbrMetallicRoughness ?? {};
      nodes.push({ index: idx, name: n.name || mesh.name || 'Mesh', min: mn, max: mx,
        textured: !!pbr.baseColorTexture, color: (pbr.baseColorFactor ?? [1, 1, 1, 1]).slice(0, 3) });
    }
    for (const c of n.children ?? []) visit(c, world);
  };
  for (const r of scene.nodes) visit(r, mat4.ident());
  return nodes;
}
const luaStr = s => '"' + String(s).replace(/[\\"]/g, m => '\\' + m).replace(/[\x00-\x1f]/g, c => '\\' + c.charCodeAt(0)) + '"';
const luaNum = v => (Number.isFinite(v) ? +v.toFixed(5) : 0).toString();
function manifestLua(dir) {
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => /\.glb$/i.test(f)).sort() : [];
  const out = ['{'];
  for (const f of files) {
    const nodes = manifestOf(path.join(dir, f));
    out.push(`  { name = ${luaStr(f.replace(/\.glb$/i, ''))}, glb = ${luaStr(f)}, nodes = {`);
    for (const n of nodes) {
      out.push(`    { index = ${n.index}, name = ${luaStr(n.name)}, min = { ${n.min.map(luaNum).join(', ')} }, max = { ${n.max.map(luaNum).join(', ')} }, textured = ${n.textured}, color = { ${n.color.map(luaNum).join(', ')} } },`);
    }
    out.push('  } },');
  }
  out.push('}');
  return out.join('\n');
}

// ---------------------------------------------------------------- render
async function render(workDir, modelsDir, outDir, scenes) {
  const NM = process.env.PREVIEW_NODE_MODULES;
  if (!NM || !fs.existsSync(path.join(NM, 'playwright-core'))) {
    throw new Error('PREVIEW_NODE_MODULES must point to a node_modules folder with playwright-core, three and @fontsource/montserrat');
  }
  const require = createRequire(path.join(NM, 'noop.js'));
  const { chromium } = require('playwright-core');
  const roots = { '/tool/': HERE, '/nm/': NM, '/models/': modelsDir, '/work/': workDir };
  const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json',
    '.glb': 'model/gltf-binary', '.woff2': 'font/woff2', '.woff': 'font/woff', '.png': 'image/png', '.jpg': 'image/jpeg' };
  const srv = http.createServer((q, s) => {
    const url = decodeURIComponent(q.url.split('?')[0]);
    const pre = Object.keys(roots).find(p => url.startsWith(p));
    if (!pre) { s.writeHead(404); return s.end(); }
    const file = path.join(roots[pre], url.slice(pre.length));
    if (!file.startsWith(path.resolve(roots[pre]))) { s.writeHead(403); return s.end(); }
    fs.readFile(file, (e, d) => {
      if (e) { s.writeHead(404); s.end(); return; }
      s.writeHead(200, { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' });
      s.end(d);
    });
  });
  await new Promise(r => srv.listen(0, '127.0.0.1', r));
  const port = srv.address().port;
  const exe = process.env.CHROMIUM || '/opt/pw-browsers/chromium';
  const browser = await chromium.launch({ executablePath: exe,
    args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  let failed = 0;
  try {
    for (const scene of scenes) {
      const name = path.basename(scene, '.json');
      const json = JSON.parse(fs.readFileSync(scene, 'utf8'));
      const [w, h] = json.viewport ?? [1920, 1080];
      const page = await browser.newPage({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
      const logs = [];
      page.on('console', m => logs.push(`[browser] ${m.text()}`));
      page.on('pageerror', e => logs.push(`[browser error] ${e.message}`));
      const t0 = Date.now();
      await page.goto(`http://127.0.0.1:${port}/tool/render.html?scene=/work/${encodeURIComponent(path.basename(scene))}${process.env.PREVIEW_QUERY ? '&' + process.env.PREVIEW_QUERY : ''}`);
      try {
        await page.waitForFunction('window.DONE === true', null, { timeout: 300000 });
      } catch (e) {
        failed++;
        console.log(logs.join('\n'));
        console.log(`[render] ${name}: timed out`);
        await page.close();
        continue;
      }
      const info = await page.evaluate('window.INFO');
      const out = path.join(outDir, `${name}${process.env.PREVIEW_SUFFIX ?? ''}.png`);
      await page.screenshot({ path: out });
      for (const l of logs) if (!/^\[browser\] (THREE\.WebGLRenderer|\[\.WebGL)/.test(l)) console.log(l);
      if (info?.notes?.length) for (const n of info.notes) console.log(`[render] ${name}: ${n}`);
      console.log(`[render] ${out}  (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
      await page.close();
    }
  } finally {
    await browser.close();
    srv.close();
  }
  if (failed) process.exitCode = 1;
}

if (cmd === 'manifest') {
  process.stdout.write(manifestLua(args[0]) + '\n');
} else if (cmd === 'render') {
  const [workDir, modelsDir, outDir, ...scenes] = args;
  await render(path.resolve(workDir), path.resolve(modelsDir), path.resolve(outDir), scenes.map(s => path.resolve(s)));
} else {
  console.error('usage: node render.mjs manifest <modelsDir> | render <workDir> <modelsDir> <outDir> <scene.json>...');
  process.exit(2);
}

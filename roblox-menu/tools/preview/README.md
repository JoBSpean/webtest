# Menu preview (offline screenshots of `MainMenu.client.lua`)

Runs the real LocalScript against a mocked Roblox API, dumps the resulting 3D scene and GUI, and
renders 1920x1080 PNGs that look like what Roblox shows. No Roblox Studio needed.

```
tools/preview/run.sh roblox-menu/MainMenu.client.lua /tmp/preview            # all scenarios
tools/preview/run.sh roblox-menu/MainMenu.client.lua /tmp/preview main play  # only some
```

Output: `<outdir>/<scenario>.png`, plus `<outdir>/.work/` with the scene dump (`<scenario>.json`),
the script's stdout and the generated luau program for each scenario.
The console shows, per scenario, what was clicked, the script's `print`s, **script errors with line numbers**
(also drawn as a red banner on the PNG), mock warnings and anything that is not drawn.

## Requirements

| variable | what | example on the dev box |
|---|---|---|
| `LUAU` | native luau CLI (github.com/luau-lang/luau releases) | `.../scratchpad/luau` |
| `PREVIEW_NODE_MODULES` | `node_modules` with `playwright-core`, `three`, `@fontsource/montserrat` | `.../scratchpad/conv/node_modules` |
| `CHROMIUM` | Chromium binary (default `/opt/pw-browsers/chromium`) | |
| `PREVIEW_MODELS` | folder with the `.glb` files (default `<script dir>/models`, then `roblox-menu/models`) | |

Put them in `tools/preview/.env` (git-ignored) to avoid typing them. node_modules never live in the repo;
to set them up elsewhere: `npm i playwright-core three @fontsource/montserrat` in any folder.

## Scenarios

Edit the `SCENARIOS` list at the top of `driver.luau`. Each one starts from a fresh run of the script,
lets 2 s of simulated time pass, then performs its actions (1 s after each):

```lua
{ name = "competitive", actions = { { click = "PLAY" }, { click = "COMPETITIVE" } } },
{ name = "arcade", actions = { { click = "PLAY" }, { click = "COMPETITIVE" }, { key = "E" } }, cursor = true },
{ name = "no-models", assets = false },   -- without ReplicatedStorage.MenuAssets (procedural car/ball/walls)
```

`click` finds the first *visible* text with that text (exact, then ignoring case/symbols, then "contains")
and fires MouseEnter + Activated on its button; also `hover`, `key` (Enum.KeyCode name), `clickName`
(GuiObject Name), `wait`. Options: `settle`, `step`, `assets = false`, `grassScriptable = false`, `cursor = true`.

## How it works

1. `render.mjs manifest` reads every `.glb` (no dependencies) and lists its mesh nodes with their bounds.
2. `run.sh` writes one luau program per scenario: `local __PREVIEW = {...}` (script source, manifest) +
   `mock.luau` + `driver.luau`, and runs it with the luau CLI. The script is compiled with `loadstring`
   under its own file name, so error lines match the real file.
3. `mock.luau`: datatypes (Vector3, CFrame, Color3, UDim2, sequences, Font, TweenInfo, Random, Enum...),
   ~150 instance classes with Roblox defaults, signals, `task.*` on a simulated clock, services, Model
   pivot/bounding box/ScaleTo, and `ReplicatedStorage.MenuAssets` with one Model per `.glb` (one MeshPart
   per glTF mesh node, turned 180 degrees about Y like Roblox Import 3D, pivot at the bottom centre,
   SurfaceAppearance when the material is textured). Tweens jump to their goals at once; `Completed` fires
   after the tween time.
4. `render.html` (three.js + DOM, run in headless Chromium by `render.mjs render`) draws the dump:
   parts (instanced), MeshParts from the `.glb` files, terrain fills, lights/shadows, sky and atmosphere
   fog, neon + bloom, depth of field, BlurEffect, ColorCorrection, SurfaceGuis (canvas texture) and the
   ScreenGui as absolutely positioned DOM (UIScale, UIPadding, UICorner, UIStroke, UIGradient,
   CanvasGroup, ClipsDescendants, ZIndex, AutomaticSize, TextScaled/Wrapped/Truncate, UIListLayout/Grid).
   Eye-tuned numbers (light strength, bloom, blur, fog...) are in `TUNE` at the top.

Debug: `PREVIEW_QUERY="nopost=1&nogui=1&cam=x,y,z,lookX,lookY,lookZ,fov" PREVIEW_SUFFIX=_dbg` with
`node render.mjs render <outdir>/.work <models> <outdir> <outdir>/.work/main.json` re-renders a dump
without depth of field/blur, without GUI, or from another camera.

## Known limitations

- It is an approximation: lighting, bloom, blur and fog are tuned by eye; Gotham is replaced by
  Montserrat (similar, ~5% different widths); Roblox's exact `Random` sequence is not reproduced (crowd
  colours differ); terrain grass blades and the ForceField pattern are not drawn.
- Tweens are not animated (each screenshot shows the settled state).
- Not drawn: images (`ImageLabel.Image`, decals, textures, sky boxes — asset ids cannot be fetched offline),
  ViewportFrame, BillboardGui, particles/beams/trails, SpecialMesh shapes, unions (drawn as boxes).
- Not mocked: ModuleScripts (`require`), HttpService requests, DataStores, physics, raycasts (return nil),
  `UIListLayout.AbsoluteContentSize` (0), `TextBounds` (rough estimate). Unknown properties are stored
  and reported as "mock:" warnings instead of erroring.

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
| `PREVIEW_SCENARIOS` | optional `.luau` file returning extra scenarios (see Scenarios) | |

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
and fires MouseEnter + Activated on its button; also `hover`, `clickName` (GuiObject Name), `wait`.
Options: `settle`, `step`, `assets = false`, `grassScriptable = false`, `cursor = true`, `gamepad = true`
(Gamepad1 connected from the start), `trace` (see below).

To try scenarios without editing `driver.luau`, put them in a file that returns a list and pass it as
`PREVIEW_SCENARIOS` (a name that already exists in `driver.luau` is replaced, new names are added):

```
PREVIEW_SCENARIOS=/tmp/drive.luau tools/preview/run.sh roblox-menu/MainMenu.client.lua /tmp/preview drive-keys
```

### Keyboard and gamepad input (driving)

Simulated time runs in fixed 60 fps frames: `RenderStepped`, `Heartbeat`, `Stepped`, `BindToRenderStep`
always get `dt = 1/60`, so per-frame movement integrates exactly (`hold` for 1.5 s = 90 frames).

| action | what the script sees |
|---|---|
| `{ key = "E" }` | `InputBegan` + `InputEnded` at the same instant (Enum.KeyCode name; also ContextActionService) |
| `{ press = "R" }`, `{ press = "ButtonB" }` | like `key`, but the key/button stays down for one frame, so `IsKeyDown` / `IsGamepadButtonDown` polled in RenderStepped sees it once |
| `{ hold = "W", seconds = 1.5 }`, `{ hold = { "W", "D" }, seconds = 1.5 }` | `InputBegan`, then `IsKeyDown` / `GetKeysPressed` report the keys while `seconds` (default 1) pass, then `InputEnded`. Keyboard names (`W`, `LeftShift`, `Space`, `Up`) or gamepad buttons (`ButtonA`, `DPadLeft`) |
| `{ pad = { RT = 1, LT = 0, LX = -0.6, LY = 0, RX = 0, RY = 0, buttons = { "ButtonA" } }, seconds = 1.5 }` | Gamepad1 connected; for `seconds` `GetGamepadState(Gamepad1)` returns these values: `LX/LY` -> `Thumbstick1` Position.X/Y (-1..1, up = +LY), `RX/RY` -> `Thumbstick2`, `RT` -> `ButtonR2` Position.Z, `LT` -> `ButtonL2` Position.Z (0..1). Listed buttons and triggers > 0.5 are down for `IsGamepadButtonDown` and fire `InputBegan`/`InputEnded` (UserInputType `Gamepad1`); sticks and triggers fire `InputChanged`. All zeroed/released at the end |

`hold` and `pad` can be combined in one action (`{ hold = "W", pad = { LX = 1 }, seconds = 1 }`). After a
`hold`/`pad` action the time before the next one is its `wait` (default **0**: the hold itself is the time
that passes; add `wait = 1` to let the car roll on before the screenshot). All input objects have
`gameProcessed = false`. Also mocked: `GetGamepadConnected`, `GamepadEnabled`, `GetConnectedGamepads`,
`GetLastInputType` / `LastInputTypeChanged` (Keyboard, Gamepad1, MouseButton1 after a click),
`GamepadConnected`, `PreferredInput`, `InputObject:IsModifierKeyDown`. Until a pad action runs (or
`gamepad = true`) no gamepad is connected and `GetGamepadState` returns `{}`; afterwards it returns the 18
Gamepad1 InputObjects (live: a cached array sees later changes, like in Roblox).

`trace = "Car"` (or a list; `"Camera"` = CurrentCamera) prints where that workspace Model/BasePart is at the
start and end of every `hold`/`pad` action and every `traceEvery` seconds (default 0.25) in between, with yaw
(degrees, 0 = facing -Z, +90 = facing -X) and the average speed (studs/s) since the previous line:

```lua
{ name = "drive-keys", trace = "ShowcaseCar", actions = { { click = "PLAY" }, { click = "PLAY OFFLINE" }, { wait = 1 },
	{ hold = "W", seconds = 2 }, { hold = { "W", "D" }, seconds = 1 }, { hold = "S", seconds = 1, wait = 1 } } },
--   [trace] t=5.50 ShowcaseCar pos=(0.0, 1000.0, 33.8) yaw=0.0 speed=10.7
```

## How it works

1. `render.mjs manifest` reads every `.glb` (no dependencies) and lists its mesh nodes with their bounds.
2. `run.sh` writes one luau program per scenario: `local __PREVIEW = {...}` (script source, manifest) +
   `mock.luau` + `driver.luau`, and runs it with the luau CLI. The script is compiled with `loadstring`
   under its own file name, so error lines match the real file.
3. `mock.luau`: datatypes (Vector3, CFrame, Color3, UDim2, sequences, Font, TweenInfo, Random, Enum...),
   ~150 instance classes with Roblox defaults, signals, `task.*` on a simulated clock (fixed 60 fps frames),
   services, keyboard/gamepad state for UserInputService, Model pivot/bounding box/ScaleTo (a Model without
   PrimaryPart pivots at its bounding-box centre until its pivot is set, like Roblox; ScaleTo scales part
   sizes and positions about the pivot, PivotOffset, attachments, joints, SpecialMesh, nested models), and `ReplicatedStorage.MenuAssets` with one Model per `.glb` (one MeshPart
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
- The same script error repeated every frame is reported once, with a count.
- Not mocked: ModuleScripts (`require`), HttpService requests, DataStores, physics (unanchored parts do
  not fall or move; driving must move the car itself, e.g. with PivotTo/CFrame), raycasts (return nil),
  mouse movement/mouse buttons held, touch,
  `UIListLayout.AbsoluteContentSize` (0), `TextBounds` (rough estimate). Unknown properties are stored
  and reported as "mock:" warnings instead of erroring.

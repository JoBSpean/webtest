--!nocheck
--[[
	driver.luau — runs one preview scenario and prints the scene as JSON.

	SCENARIOS (edit freely). Every scenario starts from a fresh run of the script:
	  1. the script runs, then `settle` seconds of simulated time pass (default 2);
	  2. each action is performed, then `step` seconds pass (default 1, or the action's own `wait`).
	Simulated time runs in fixed 60 fps frames: RenderStepped/Heartbeat always get dt = 1/60.
	Extra scenarios can also come from a file, without editing this one: PREVIEW_SCENARIOS=file.luau
	(a chunk that returns a list of scenarios; a name that exists here replaces the one here).

	Actions:
	  { click = "PLAY" }        first VISIBLE text element with this text (exact, then ignoring case/symbols,
	                            then "contains"); MouseEnter + Activated go to it / its button ancestor
	  { hover = "GARAGE" }      MouseEnter only
	  { clickName = "Back" }    like click, but finds a visible GuiObject by its Name
	  { key = "E" }             tap: UserInputService.InputBegan + InputEnded (Enum.KeyCode name) at the same
	                            instant (also ContextActionService); gamepad names (ButtonA, DPadUp...) come from
	                            Gamepad1
	  { press = "R" }           like key, but the key stays down for one frame, so per-frame polling
	  { press = "ButtonB" }     (IsKeyDown / IsGamepadButtonDown in RenderStepped) sees it once too
	  { hold = "W", seconds = 1.5 }            InputBegan, then the key(s) stay down (IsKeyDown, GetKeysPressed)
	  { hold = { "W", "D" }, seconds = 1.5 }   while `seconds` (default 1) pass at 60 fps, then InputEnded.
	                                           Keyboard KeyCode names ("W", "LeftShift", "Space", "Up") or
	                                           gamepad buttons ("ButtonA", "DPadLeft")
	  { pad = { RT = 1, LT = 0, LX = -0.6, LY = 0, RX = 0, RY = 0, buttons = { "ButtonA" } }, seconds = 1.5 }
	                            Gamepad1 is connected (GamepadEnabled, GetGamepadConnected) and, for `seconds`
	                            (default 1), GetGamepadState returns these values: LX/LY -> Thumbstick1 Position
	                            (-1..1, up = +LY), RX/RY -> Thumbstick2, RT -> ButtonR2 Position.Z, LT -> ButtonL2
	                            Position.Z (0..1). Listed buttons, and triggers > 0.5, are down for
	                            IsGamepadButtonDown and fire InputBegan/InputEnded (UserInputType Gamepad1);
	                            sticks/triggers fire InputChanged. Everything is released (zeroed) at the end.
	                            hold and pad can be combined in one action.
	                            After hold/pad, the time to the next action is `wait` (default 0: the hold
	                            itself is the time that passes; add wait = 1 to watch the car roll on).
	  { wait = 3 }              just let time pass
	Scenario options:
	  title = "..."             caption shown by the README/contact sheet (optional)
	  assets = false            run WITHOUT ReplicatedStorage.MenuAssets (procedural stand-ins)
	  grassScriptable = false   Terrain.GrassLength/Decoration throw, like when Roblox refuses them
	  cursor = true             draw a small mouse cursor where the last click/hover happened
	  gamepad = true            Gamepad1 is connected from the start (GamepadEnabled = true)
	  trace = "Car"             print where this workspace instance (first Model/BasePart with that Name, searched
	  trace = { "Car", "Camera" }   every time; "Camera" = CurrentCamera) is: at the start and end of every
	                            hold/pad action and every `traceEvery` seconds (default 0.25) during them:
	                            [trace] t=3.25 Car pos=(0.0, 1.2, -30.5) yaw=0.0 speed=45.1
	                            (yaw in degrees, 0 = facing -Z, +90 = facing -X; speed = average studs/s
	                            since the previous line of the same hold)
]]
local SCENARIOS = {
	{ name = "main", title = "Main menu" },
	{ name = "play", title = "PLAY pressed", actions = { { click = "PLAY" } } },
	{ name = "competitive", title = "PLAY > COMPETITIVE", actions = { { click = "PLAY" }, { click = "COMPETITIVE" } } },
	{ name = "competitive-multi", title = "COMPETITIVE: multiple selection + FIND MATCH",
		actions = { { click = "PLAY" }, { click = "COMPETITIVE" }, { click = "MULTIPLE SELECTION" },
			{ click = "DOUBLES" }, { click = "STANDARD" }, { click = "FIND MATCH" }, { wait = 7 } } },
	{ name = "casual", title = "PLAY > CASUAL", actions = { { click = "PLAY" }, { click = "CASUAL" } } },
	{ name = "arcade", title = "COMPETITIVE, then E -> ARCADE", actions = { { click = "PLAY" }, { click = "COMPETITIVE" }, { key = "E" } } },
	{ name = "settings", title = "SETTINGS > CONTROLS", actions = { { click = "SETTINGS" } } },
	{ name = "settings-rebind", title = "CONTROLS: click THROTTLE keyboard, waiting for a key",
		actions = { { click = "SETTINGS" }, { click = "W" } } },
	{ name = "settings-rebound", title = "CONTROLS: THROTTLE rebound to UP, then STEER LEFT to D (swaps with STEER RIGHT)",
		actions = { { click = "SETTINGS" }, { click = "W" }, { press = "Up" }, { click = "A" }, { press = "D" } } },
	{ name = "freeplay", title = "FREE PLAY: just started", trace = "ShowcaseCar",
		actions = { { click = "PLAY" }, { click = "PLAY OFFLINE" }, { wait = 1 } } },
	{ name = "freeplay-drive", title = "FREE PLAY: W 1.5 s, then W+D 1 s", trace = { "ShowcaseCar", "Camera" },
		actions = { { click = "PLAY" }, { click = "PLAY OFFLINE" }, { wait = 1 },
			{ hold = "W", seconds = 1.5 }, { hold = { "W", "D" }, seconds = 1 } } },
	{ name = "freeplay-ball", title = "FREE PLAY: drive straight into the ball", trace = { "ShowcaseCar" },
		actions = { { click = "PLAY" }, { click = "PLAY OFFLINE" }, { wait = 1 },
			{ hold = "W", seconds = 1.6 }, { wait = 0.6 } } },
	{ name = "freeplay-pad", title = "FREE PLAY on a gamepad: RT + left stick left, then LT", gamepad = true, trace = "ShowcaseCar",
		actions = { { click = "PLAY" }, { click = "PLAY OFFLINE" }, { wait = 1 },
			{ pad = { RT = 1, LX = -0.7 }, seconds = 1.5 }, { pad = { LT = 1 }, seconds = 1 } } },
	{ name = "freeplay-pause", title = "FREE PLAY: P opens the pause menu",
		actions = { { click = "PLAY" }, { click = "PLAY OFFLINE" }, { wait = 1 }, { hold = "W", seconds = 1 }, { press = "P" } } },
	{ name = "freeplay-goal", title = "FREE PLAY: hit the ball into the orange goal", trace = { "ShowcaseCar", "Ball" },
		actions = { { click = "PLAY" }, { click = "PLAY OFFLINE" }, { wait = 1 }, { hold = "W", seconds = 1.6 }, { wait = 2.6 } } },
	{ name = "freeplay-wall", title = "FREE PLAY: drive into the side wall and slide along it", trace = "ShowcaseCar",
		actions = { { click = "PLAY" }, { click = "PLAY OFFLINE" }, { wait = 1 }, { hold = { "W", "D" }, seconds = 0.6 }, { hold = "W", seconds = 2.5 } } },
	{ name = "freeplay-exit", title = "FREE PLAY: pause, EXIT TO MAIN MENU",
		actions = { { click = "PLAY" }, { click = "PLAY OFFLINE" }, { wait = 1 }, { press = "P" },
			{ click = "EXIT TO MAIN MENU" }, { wait = 1.5 } } },
	-- examples:
	-- { name = "garage-hover", actions = { { hover = "GARAGE" } } },
	-- { name = "arcade", actions = { { click = "PLAY" }, { click = "COMPETITIVE" }, { key = "E" } } },
	-- { name = "no-models", assets = false },
	-- { name = "drive-keys", trace = "ShowcaseCar", actions = { { click = "PLAY" }, { click = "PLAY OFFLINE" }, { wait = 1 },
	--	{ hold = "W", seconds = 2 }, { hold = { "W", "D" }, seconds = 1 }, { hold = "S", seconds = 1, wait = 1 } } },
	-- { name = "drive-pad", gamepad = true, trace = "ShowcaseCar", actions = { { click = "PLAY" }, { click = "PLAY OFFLINE" },
	--	{ wait = 1 }, { pad = { RT = 1, LX = -0.6 }, seconds = 1.5 }, { press = "DPadUp" } } },
}

local P = __PREVIEW
local M = __MOCK

if P.extraScenarios then -- PREVIEW_SCENARIOS file
	for _, x in ipairs(P.extraScenarios) do
		local replaced = false
		for i, s in ipairs(SCENARIOS) do
			if s.name == x.name then SCENARIOS[i], replaced = x, true end
		end
		if not replaced then table.insert(SCENARIOS, x) end
	end
end

local function list(v) return type(v) == "table" and v or { v } end
local function fmt(x) return string.format("%.1f", x) end

-- trace: where a named instance is (pivot / CFrame), and how fast it moved since the last line
local tracer = { names = {}, last = {} }
local function findTraced(name)
	if name == "Camera" then return M.workspace.CurrentCamera end
	local found
	M.eachDescendant(M.workspace, function(d)
		if not found and d.Name == name and (d:IsA("Model") or d:IsA("BasePart")) then found = d end
	end)
	return found
end
local function traceNow(tag, fresh) -- fresh: start a new speed measurement (no speed on this line)
	if fresh then tracer.last = {} end
	for _, name in ipairs(tracer.names) do
		local inst = findTraced(name)
		if not inst then
			print(string.format("[trace] t=%.2f %s not found in workspace%s", M.now(), name, tag or ""))
		else
			local cf = inst:IsA("Camera") and inst.CFrame or inst:GetPivot()
			local p, look = cf.Position, cf.LookVector
			local yaw = math.deg(math.atan2(-look.X, -look.Z))
			local line = string.format("[trace] t=%.2f %s pos=(%s, %s, %s) yaw=%s", M.now(), name, fmt(p.X), fmt(p.Y), fmt(p.Z), fmt(yaw))
			local l = tracer.last[name]
			if l and M.now() > l.t + 1e-6 then line ..= " speed=" .. fmt((p - l.p).Magnitude / (M.now() - l.t)) end
			tracer.last[name] = { t = M.now(), p = p }
			print(line .. (tag or ""))
		end
	end
end

if P.mode == "list" then
	for _, s in ipairs(SCENARIOS) do print("@@SCENARIO " .. s.name .. "\t" .. (s.title or s.name)) end
else
	local sc
	for _, s in ipairs(SCENARIOS) do if s.name == P.scenario then sc = s end end
	if not sc then error("unknown scenario '" .. tostring(P.scenario) .. "' (see SCENARIOS in driver.luau)") end
	if sc.assets == false then P.useAssets = false end
	if sc.grassScriptable ~= nil then P.grassScriptable = sc.grassScriptable end
	if sc.trace then tracer.names = list(sc.trace) end
	local traceEvery = sc.traceEvery or 0.25

	M.installAssets()
	if sc.gamepad then M.connectPad() end
	M.runMain(P.source, P.scriptName)
	M.advance(sc.settle or 2)

	local cursor
	for i, a in ipairs(sc.actions or {}) do
		local rec = { index = i }
		local after = a.wait or sc.step or 1
		if a.click or a.clickName or a.hover then
			local what = a.click or a.hover or a.clickName
			local g = a.clickName and M.findGui(function(c) return M.S[c].props.Name == a.clickName end) or M.findText(what)
			rec.action = (a.hover and "hover " or "click ") .. what
			if g then
				local btn = M.buttonOf(g)
				rec.target = btn:GetFullName()
				if a.hover then
					M.pointAt(g)
					M.setLastInput(M.Enum.UserInputType.MouseMovement)
					M.hover(btn == g and { g } or { btn, g })
				else
					M.click(g)
				end
				cursor = { M.mouse.X, M.mouse.Y }
				rec.ok = true
			else
				rec.ok = false
				M.note("action " .. i .. ": no visible text/button '" .. what .. "' found")
			end
			print("[preview] " .. rec.action .. (rec.ok and (" -> " .. rec.target) or " -> NOT FOUND"))
		elseif a.key then
			rec.action, rec.ok = "key " .. a.key, true
			print("[preview] " .. rec.action)
			M.key(a.key, a.processed)
		elseif a.press then
			rec.action, rec.ok = "press " .. a.press, true
			print("[preview] " .. rec.action)
			M.inputDown(a.press, a.processed)
			M.advance(1 / M.FPS)
			M.inputUp(a.press, a.processed)
		elseif a.hold or a.pad then
			local keys = a.hold and list(a.hold) or {}
			local secs = a.seconds or 1
			local what = {}
			if #keys > 0 then table.insert(what, "hold " .. table.concat(keys, "+")) end
			if a.pad then
				local parts = {}
				for _, k in ipairs({ "LX", "LY", "RX", "RY", "LT", "RT" }) do
					if a.pad[k] and a.pad[k] ~= 0 then table.insert(parts, k .. "=" .. tostring(a.pad[k])) end
				end
				for _, b in ipairs(a.pad.buttons or {}) do table.insert(parts, b) end
				table.insert(what, "pad " .. (#parts > 0 and table.concat(parts, " ") or "(neutral)"))
			end
			rec.action, rec.ok = table.concat(what, ", ") .. " for " .. secs .. "s", true
			print("[preview] " .. rec.action)
			after = a.wait or 0
			if a.pad then M.setPad(a.pad) end
			for _, k in ipairs(keys) do M.inputDown(k) end
			traceNow(" (start)", true)
			local hook
			if #tracer.names > 0 then
				local nextT = M.now() + traceEvery
				hook = function(t)
					if t >= nextT - 1e-6 then
						nextT += traceEvery
						traceNow()
					end
				end
				table.insert(M.frameHooks, hook)
			end
			M.advance(secs)
			if hook then table.remove(M.frameHooks, table.find(M.frameHooks, hook)) end
			for j = #keys, 1, -1 do M.inputUp(keys[j]) end
			if a.pad then M.setPad(nil) end
			traceNow(" (released)")
		elseif a.wait then
			rec.action, rec.ok = "wait " .. a.wait, true
			print("[preview] " .. rec.action)
		else
			rec.action, rec.ok = "unknown", false
			print("[preview] unknown action #" .. i .. " -> NOT DONE")
		end
		table.insert(M.actions, rec)
		M.advance(after)
	end
	M.releaseAll()
	if #tracer.names > 0 then traceNow(" (end)", true) end

	local d = M.dump({ scenario = sc.name, title = sc.title or sc.name, cursor = (sc.cursor and cursor) and M.arr(cursor) or nil })
	print("@@PREVIEW_JSON_BEGIN@@")
	print(M.json(d))
	print("@@PREVIEW_JSON_END@@")
end

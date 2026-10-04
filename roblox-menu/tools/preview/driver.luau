--!nocheck
--[[
	driver.luau — runs one preview scenario and prints the scene as JSON.

	SCENARIOS (edit freely). Every scenario starts from a fresh run of the script:
	  1. the script runs, then `settle` seconds of simulated time pass (default 2);
	  2. each action is performed, then `step` seconds pass (default 1, or the action's own `wait`).

	Actions:
	  { click = "PLAY" }        first VISIBLE text element with this text (exact, then ignoring case/symbols,
	                            then "contains"); MouseEnter + Activated go to it / its button ancestor
	  { hover = "GARAGE" }      MouseEnter only
	  { key = "E" }             UserInputService.InputBegan with Enum.KeyCode.E (also ContextActionService)
	  { clickName = "Back" }    like click, but finds a visible GuiObject by its Name
	  { wait = 3 }              just let time pass
	Scenario options:
	  title = "..."             caption shown by the README/contact sheet (optional)
	  assets = false            run WITHOUT ReplicatedStorage.MenuAssets (procedural stand-ins)
	  grassScriptable = false   Terrain.GrassLength/Decoration throw, like when Roblox refuses them
	  cursor = true             draw a small mouse cursor where the last click/hover happened
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
	-- examples:
	-- { name = "garage-hover", actions = { { hover = "GARAGE" } } },
	-- { name = "arcade", actions = { { click = "PLAY" }, { click = "COMPETITIVE" }, { key = "E" } } },
	-- { name = "no-models", assets = false },
}

local P = __PREVIEW
local M = __MOCK

if P.mode == "list" then
	for _, s in ipairs(SCENARIOS) do print("@@SCENARIO " .. s.name .. "\t" .. (s.title or s.name)) end
else
	local sc
	for _, s in ipairs(SCENARIOS) do if s.name == P.scenario then sc = s end end
	if not sc then error("unknown scenario '" .. tostring(P.scenario) .. "' (see SCENARIOS in driver.luau)") end
	if sc.assets == false then P.useAssets = false end
	if sc.grassScriptable ~= nil then P.grassScriptable = sc.grassScriptable end

	M.installAssets()
	M.runMain(P.source, P.scriptName)
	M.advance(sc.settle or 2)

	local cursor
	for i, a in ipairs(sc.actions or {}) do
		local rec = { index = i }
		if a.click or a.clickName or a.hover then
			local what = a.click or a.hover or a.clickName
			local g = a.clickName and M.findGui(function(c) return M.S[c].props.Name == a.clickName end) or M.findText(what)
			rec.action = (a.hover and "hover " or "click ") .. what
			if g then
				local btn = M.buttonOf(g)
				rec.target = btn:GetFullName()
				if a.hover then
					M.pointAt(g)
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
		elseif a.key then
			rec.action = "key " .. a.key
			M.key(a.key, a.processed)
			rec.ok = true
		elseif a.wait then
			rec.action = "wait " .. a.wait
			rec.ok = true
		else
			rec.action = "unknown"
			rec.ok = false
		end
		table.insert(M.actions, rec)
		print("[preview] " .. rec.action .. (rec.ok and (" -> " .. (rec.target or "ok")) or " -> NOT FOUND"))
		M.advance(a.wait or sc.step or 1)
	end

	local d = M.dump({ scenario = sc.name, title = sc.title or sc.name, cursor = (sc.cursor and cursor) and M.arr(cursor) or nil })
	print("@@PREVIEW_JSON_BEGIN@@")
	print(M.json(d))
	print("@@PREVIEW_JSON_END@@")
end

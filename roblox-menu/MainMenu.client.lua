--[[
	ГЛАВНОЕ МЕНЮ В СТИЛЕ НОВОГО ROCKET LEAGUE
	LocalScript -> StarterPlayer > StarterPlayerScripts

	- Фон: ночной стадион (поле, разметка, бусты, ворота, стеклянные стены,
	  трибуны с болельщиками, табло, прожекторы), задний план размыт как в игре.
	- По центру тестовая машинка (потом сюда ставится машина игрока).
	- Слева меню: большая кнопка PLAY и GARAGE, ITEM SHOP, ROCKET PASS, CAREER, EXTRAS, SETTINGS.
	- PLAY открывает экран режимов: CASUAL, COMPETITIVE, TOURNAMENTS, PRIVATE MATCH, OFFLINE.
	- Управление: мышь, стрелки/WASD, Enter, Backspace (назад), геймпад.
	- Закрыть меню из другого скрипта: _G.CloseMainMenu()
]]

--[[
	ЧТО ГДЕ МЕНЯТЬ (нажмите Ctrl+F в редакторе скрипта и ищите слово слева):
	  MENU        пункты главного меню слева: названия, оранжевый значок "!" (badge = true)
	  MODES       карточки экрана PLAY: название, подпись, цвета, какую вкладку открывают (tab)
	  TAB_ORDER   какие вкладки есть на экране плейлистов и в каком порядке
	  TAB_INFO    серая подпись под вкладками
	  PLAYLISTS   плейлисты каждой вкладки; у COMPETITIVE ранг: rank, tier (I-III), division (I-IV)
	  RANKS       цвета значков рангов
	  local C =   все цвета меню (кнопки, выделение, синий PLAY)
	  CAR_YAW     куда смотрит машина (градусы); CAR_X, CAR_Z — где она стоит
	  CAM_POS     откуда смотрит камера; CAM_LOOK — куда
	  FW, FL, WH  размеры поля и стен
]]

local Players      = game:GetService("Players")
local TweenService = game:GetService("TweenService")
local RunService   = game:GetService("RunService")
local Lighting     = game:GetService("Lighting")
local UIS          = game:GetService("UserInputService")
local GuiService   = game:GetService("GuiService")
local StarterGui   = game:GetService("StarterGui")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local player = Players.LocalPlayer
if not game:IsLoaded() then game.Loaded:Wait() end

-- СВОИ МОДЕЛИ: положите в ReplicatedStorage > MenuAssets модели:
--   Ball...  - мяч (имя начинается с Ball, подгоняется под диаметр 9)
--   Arena... - купол арены: стены, пандусы, ворота (подгоняется под длину 203.75; атрибут Length меняет её)
--   любая другая модель - машинка (подгоняется под длину 8.4 стада). Машин может быть
--   несколько: первой показывается та, чьё имя начинается с Car, кнопка GARAGE листает остальные.
-- Готовые модели лежат в папке models/ рядом со скриптом (Car.glb, Ball.glb, Arena.glb).
-- Если модель стоит боком, добавьте ей атрибут Yaw (число, градусы поворота).
local ASSETS = ReplicatedStorage:FindFirstChild("MenuAssets")
local function asset(name)
	if not ASSETS then return nil end
	local exact = ASSETS:FindFirstChild(name)
	if exact then return exact end
	for _, child in ipairs(ASSETS:GetChildren()) do
		if child.Name:sub(1, #name) == name then return child end
	end
	return nil
end
pcall(function() StarterGui:SetCoreGuiEnabled(Enum.CoreGuiType.All, false) end)

------------------------------------------------------------------
-- НАСТРОЙКИ
------------------------------------------------------------------
local MENU = {
	{ name = "PLAY", play = true },
	{ name = "GARAGE", badge = true },
	{ name = "ITEM SHOP" },
	{ name = "ROCKET PASS" },
	{ name = "CAREER" },
	{ name = "EXTRAS" },
	{ name = "SETTINGS" },
}

-- Карточки экрана PLAY. tab = какую вкладку плейлистов открыть (без tab карточка только пишет в Output);
-- title = как написать название на карточке (\n = перенос строки), если отличается от name
local MODES = {
	{ name = "CASUAL",        desc = "Unranked matches",     big = "3V3",  tab = "CASUAL",      c1 = Color3.fromRGB(20, 140, 255),  c2 = Color3.fromRGB(5, 40, 130) },
	{ name = "COMPETITIVE",   desc = "Ranked playlists",     big = "RANK", tab = "COMPETITIVE", c1 = Color3.fromRGB(150, 80, 255),  c2 = Color3.fromRGB(40, 12, 110) },
	{ name = "ARCADE",        desc = "Rotating extra modes", big = "MIX",  tab = "ARCADE",      c1 = Color3.fromRGB(255, 70, 140),  c2 = Color3.fromRGB(110, 10, 60) },
	{ name = "TOURNAMENTS",   desc = "Compete for rewards",  big = "CUP",  c1 = Color3.fromRGB(255, 150, 30),  c2 = Color3.fromRGB(140, 45, 0), tag = "NEXT 18:00" },
	{ name = "PRIVATE MATCH", title = "PRIVATE\nMATCH", desc = "Play with friends", big = "VS",   c1 = Color3.fromRGB(0, 200, 175),   c2 = Color3.fromRGB(0, 70, 80) },
	{ name = "PLAY OFFLINE",  title = "PLAY\nOFFLINE", desc = "Bots and workshop", big = "BOT",  c1 = Color3.fromRGB(120, 130, 150), c2 = Color3.fromRGB(30, 35, 48) },
}

-- Вкладки экрана плейлистов (переключаются кнопками Q / E) и их плейлисты.
-- rank: UNRANKED, BRONZE, SILVER, GOLD, PLATINUM, DIAMOND, CHAMPION, GRAND CHAMPION, SUPERSONIC LEGEND
local TAB_ORDER = { "CASUAL", "COMPETITIVE", "ARCADE" }
local TAB_INFO = {
	CASUAL      = "UNRANKED MATCHES  •  JUST JUMP IN AND PLAY",
	COMPETITIVE = "COMPETITIVE SEASON 20  •  SELECT UP TO 6 PLAYLISTS",
	ARCADE      = "ROTATING EXTRA MODES",
}
local PLAYLISTS = {
	CASUAL = {
		{ name = "DUEL",     size = "1V1", info = "Unranked" },
		{ name = "DOUBLES",  size = "2V2", info = "Unranked" },
		{ name = "STANDARD", size = "3V3", info = "Unranked" },
		{ name = "CHAOS",    size = "4V4", info = "Unranked" },
	},
	COMPETITIVE = { -- Hoops убран из рейтинга
		{ name = "DUEL",     size = "1V1", rank = "PLATINUM", tier = "II",  division = "III" },
		{ name = "DOUBLES",  size = "2V2", rank = "DIAMOND",  tier = "III", division = "II" },
		{ name = "STANDARD", size = "3V3", rank = "CHAMPION", tier = "I",   division = "IV" },
		{ name = "RUMBLE",   size = "3V3", rank = "GOLD",     tier = "III", division = "I" },
		{ name = "SNOW DAY", size = "3V3", rank = "UNRANKED" },
	},
	ARCADE = {
		{ name = "HEATSEEKER", size = "2V2", info = "Limited time" },
		{ name = "SPIKE RUSH", size = "3V3", info = "Limited time" },
		{ name = "DROPSHOT",   size = "3V3", info = "Rotating mode" },
	},
}
-- цвета значков рангов (верх -> низ)
local RANKS = {
	UNRANKED            = { Color3.fromRGB(150, 155, 165), Color3.fromRGB(60, 65, 75) },
	BRONZE              = { Color3.fromRGB(230, 150, 80),  Color3.fromRGB(120, 60, 20) },
	SILVER              = { Color3.fromRGB(230, 235, 240), Color3.fromRGB(120, 130, 145) },
	GOLD                = { Color3.fromRGB(255, 220, 90),  Color3.fromRGB(180, 110, 10) },
	PLATINUM            = { Color3.fromRGB(140, 240, 240), Color3.fromRGB(30, 120, 150) },
	DIAMOND             = { Color3.fromRGB(110, 180, 255), Color3.fromRGB(20, 60, 200) },
	CHAMPION            = { Color3.fromRGB(215, 140, 255), Color3.fromRGB(95, 30, 175) },
	["GRAND CHAMPION"]  = { Color3.fromRGB(255, 110, 110), Color3.fromRGB(150, 10, 25) },
	["SUPERSONIC LEGEND"] = { Color3.fromRGB(255, 255, 255), Color3.fromRGB(170, 120, 255) },
}

local C = {
	white   = Color3.new(1, 1, 1),
	btnBg   = Color3.fromRGB(8, 18, 38),
	selBg   = Color3.fromRGB(245, 248, 255),
	selText = Color3.fromRGB(10, 35, 85),
	accent  = Color3.fromRGB(0, 140, 255),
	play1   = Color3.fromRGB(0, 160, 255),
	play2   = Color3.fromRGB(0, 70, 210),
	badge   = Color3.fromRGB(255, 140, 20),
	blue    = Color3.fromRGB(30, 120, 255),
	orange  = Color3.fromRGB(255, 120, 20),
	navy    = Color3.fromRGB(2, 8, 22),
}

local FAMILY  = "rbxasset://fonts/families/GothamSSm.json"
local F_HEAVY = Font.new(FAMILY, Enum.FontWeight.Heavy, Enum.FontStyle.Italic)
local F_BOLD  = Font.new(FAMILY, Enum.FontWeight.Bold, Enum.FontStyle.Normal)
local F_BODY  = Font.new(FAMILY, Enum.FontWeight.Medium, Enum.FontStyle.Normal)

local conns = {}
local function tween(obj, time, goals)
	local t = TweenService:Create(obj, TweenInfo.new(time, Enum.EasingStyle.Quad, Enum.EasingDirection.Out), goals)
	t:Play()
	return t
end

------------------------------------------------------------------
-- ОСВЕЩЕНИЕ (старые настройки сохраняются и возвращаются при закрытии)
------------------------------------------------------------------
local savedLighting = {}
for _, prop in ipairs({ "ClockTime", "Brightness", "Ambient", "OutdoorAmbient", "EnvironmentDiffuseScale",
	"EnvironmentSpecularScale", "ExposureCompensation", "GlobalShadows" }) do
	savedLighting[prop] = Lighting[prop]
end
local stashed = {}
for _, child in ipairs(Lighting:GetChildren()) do
	if child:IsA("Sky") or child:IsA("Atmosphere") or child:IsA("PostEffect") then
		table.insert(stashed, child)
		child.Parent = nil
	end
end

Lighting.ClockTime = 21.5
Lighting.Brightness = 1.2
Lighting.Ambient = Color3.fromRGB(70, 76, 96)
Lighting.OutdoorAmbient = Color3.fromRGB(95, 100, 125)
Lighting.EnvironmentDiffuseScale = 1
Lighting.EnvironmentSpecularScale = 1
Lighting.ExposureCompensation = 0.2
Lighting.GlobalShadows = true

local effects = {}
local function effect(class, props)
	local e = Instance.new(class)
	for k, v in pairs(props) do e[k] = v end
	e.Parent = Lighting
	table.insert(effects, e)
	return e
end
effect("Sky", { StarCount = 1500, CelestialBodiesShown = false })
effect("Atmosphere", { Density = 0.28, Offset = 0.1, Color = Color3.fromRGB(60, 78, 120), Decay = Color3.fromRGB(25, 30, 60), Glare = 0, Haze = 1.2 })
effect("BloomEffect", { Intensity = 0.9, Size = 28, Threshold = 1.4 })
effect("ColorCorrectionEffect", { Contrast = 0.12, Saturation = 0.12, Brightness = 0.02 })
effect("DepthOfFieldEffect", { FarIntensity = 0.35, FocusDistance = 18.6, InFocusRadius = 9, NearIntensity = 0 })
local menuBlur = effect("BlurEffect", { Size = 0 })

------------------------------------------------------------------
-- 3D СЦЕНА: СТАДИОН
------------------------------------------------------------------
local ORIGIN = Vector3.new(0, 1000, 0) -- сцена висит отдельно от карты игры
local scene = Instance.new("Folder")
scene.Name = "MainMenuScene"
scene.Parent = workspace

local function make(class, size, cf, color, material, transparency, parent)
	local p = Instance.new(class)
	p.Anchored = true
	p.CanCollide = false
	p.CanTouch = false
	p.CanQuery = false
	p.CastShadow = false
	p.TopSurface = Enum.SurfaceType.Smooth
	p.BottomSurface = Enum.SurfaceType.Smooth
	p.Size = size
	p.CFrame = cf
	p.Color = color
	p.Material = material or Enum.Material.SmoothPlastic
	p.Transparency = transparency or 0
	p.Parent = parent or scene
	return p
end
local function part(size, cf, color, material, transparency, shape)
	local p = make("Part", size, cf, color, material, transparency)
	if shape then p.Shape = shape end
	return p
end
local function at(x, y, z, rx, ry, rz)
	return CFrame.new(ORIGIN + Vector3.new(x, y, z))
		* CFrame.Angles(math.rad(rx or 0), math.rad(ry or 0), math.rad(rz or 0))
end
local function beam(a, b, thick, color, material)
	local pa, pb = ORIGIN + a, ORIGIN + b
	return part(Vector3.new(thick, thick, (pb - pa).Magnitude), CFrame.lookAt((pa + pb) / 2, pb), color, material)
end
local function disc(x, z, d, y, color, material, transparency)
	return part(Vector3.new(0.04, d, d), at(x, y, z, 0, 0, 90), color, material, transparency, Enum.PartType.Cylinder)
end

-- копия модели: без скриптов, закреплена, подогнана по размеру
local function fitModel(src, targetSize, horizontalOnly)
	local m = src:Clone()
	if m:IsA("BasePart") then
		local wrap = Instance.new("Model")
		for k, v in pairs(m:GetAttributes()) do wrap:SetAttribute(k, v) end
		m.Parent = wrap
		wrap.PrimaryPart = m
		m = wrap
	end
	for _, d in ipairs(m:GetDescendants()) do
		if d:IsA("LuaSourceContainer") then
			d:Destroy()
		elseif d:IsA("BasePart") then
			d.Anchored, d.CanCollide, d.CanTouch, d.CanQuery = true, false, false, false
			-- детали с именем Glow_RRGGBB (фары, огни, выхлоп) светятся неоном этого цвета
			local hex = d.Name:match("^Glow_(%x%x%x%x%x%x)")
			if hex then
				for _, c in ipairs(d:GetChildren()) do
					if c:IsA("SurfaceAppearance") then c:Destroy() end
				end
				if d:IsA("MeshPart") then pcall(function() d.TextureID = "" end) end
				d.Material = Enum.Material.Neon
				d.Color = Color3.fromHex(hex)
			end
		end
	end
	local _, size = m:GetBoundingBox()
	local current = horizontalOnly and math.max(size.X, size.Z) or math.max(size.X, size.Y, size.Z)
	if current > 0 then m:ScaleTo(m:GetScale() * targetSize / current) end
	m.Parent = scene
	return m
end
-- ставит модель нижней точкой на ground (Vector3 в мире) с поворотом yaw
local function standOn(m, ground, yawDeg)
	m:PivotTo(CFrame.new(ground) * CFrame.Angles(0, math.rad(yawDeg + (m:GetAttribute("Yaw") or 0)), 0))
	local bb, size = m:GetBoundingBox()
	m:PivotTo(m:GetPivot() + (ground - (bb.Position - Vector3.new(0, size.Y / 2, 0))))
end

-- размеры поля и ворот совпадают с моделью Arena.glb
local FW, FL, WH = 140, 174, 34 -- ширина поля, длина, высота стен
local HW, HL = FW / 2, FL / 2
local GOAL_W, GOAL_H, GOAL_D = 30.7, 11.2, 14.8
local GLASS = Color3.fromRGB(140, 170, 210)
local RAMP  = Color3.fromRGB(26, 34, 48)
local FRAME = Color3.fromRGB(45, 52, 66)
local LINE  = Color3.fromRGB(235, 240, 255)
local BOOST = Color3.fromRGB(255, 160, 40)

local terrain = workspace.Terrain
local TERRAIN_CF, TERRAIN_SIZE = at(0, -2, 0), Vector3.new(FW + 60, 4, FL + 60)
local oldGrassColor = terrain:GetMaterialColor(Enum.Material.Grass)
local oldGrassLength
pcall(function() oldGrassLength = terrain.GrassLength end)
local usedTerrain = false
local orbs, ribbon = {}, {}

-- withShell = false: стены и сетки ворот не строим, их даёт модель Arena
local function buildStadium(withShell)
	-- газон: Terrain-трава с короткими травинками, как газон в Rocket League.
	-- Если укоротить травинки нельзя, а они включены (Terrain > Decoration),
	-- кладём обычный газон без травинок, чтобы трава не закрывала камеру.
	local shortGrass = pcall(function() terrain.GrassLength = 0.1 end)
	local blades = true
	pcall(function() blades = terrain.Decoration end)
	if shortGrass or not blades then
		usedTerrain = true
		terrain:SetMaterialColor(Enum.Material.Grass, Color3.fromRGB(78, 128, 44))
		terrain:FillBlock(TERRAIN_CF, TERRAIN_SIZE, Enum.Material.Grass)
	else
		part(Vector3.new(FW + 60, 1, FL + 60), at(0, -0.5, 0), Color3.fromRGB(58, 102, 36), Enum.Material.Grass)
	end
	-- подсветка половин (синяя / оранжевая)
	part(Vector3.new(FW, 0.02, HL), at(0, 0.09, -HL / 2), C.orange, Enum.Material.Neon, 0.96)
	part(Vector3.new(FW, 0.02, HL), at(0, 0.09, HL / 2), C.blue, Enum.Material.Neon, 0.96)

	-- разметка
	local function line(sx, sz, x, z)
		part(Vector3.new(sx, 0.03, sz), at(x, 0.12, z), LINE, Enum.Material.Neon, 0.25)
	end
	line(FW, 0.5, 0, 0)
	local R, SEG = 16, 48
	for i = 0, SEG - 1 do
		local a = (i + 0.5) / SEG * math.pi * 2
		part(Vector3.new(0.5, 0.03, 2 * math.pi * R / SEG + 0.1),
			at(math.cos(a) * R, 0.12, math.sin(a) * R) * CFrame.Angles(0, -a, 0), LINE, Enum.Material.Neon, 0.25)
	end
	for _, s in ipairs({ -1, 1 }) do
		line(52, 0.5, 0, s * (HL - 18))
		line(0.5, 18, -26, s * (HL - 9))
		line(0.5, 18, 26, s * (HL - 9))
	end

	-- бусты
	for _, p in ipairs({ { 0, -64 }, { -28, -36 }, { 28, -36 }, { -28, 36 }, { 28, 36 }, { -50, 0 }, { 50, 0 },
		{ 0, -22 }, { 0, 22 }, { -18, -70 }, { 18, -70 }, { -18, 70 }, { 18, 70 } }) do
		disc(p[1], p[2], 4.2, 0.1, Color3.fromRGB(35, 35, 40))
		disc(p[1], p[2], 2.8, 0.13, BOOST, Enum.Material.Neon, 0.1)
	end
	for _, p in ipairs({ { -60, -78 }, { 60, -78 }, { -60, 78 }, { 60, 78 }, { -60, 0 }, { 60, 0 } }) do
		disc(p[1], p[2], 6, 0.1, Color3.fromRGB(35, 35, 40))
		disc(p[1], p[2], 4.5, 0.13, BOOST, Enum.Material.Neon, 0.3)
		local orb = part(Vector3.new(2.6, 2.6, 2.6), at(p[1], 2.4, p[2]), BOOST, Enum.Material.Neon, 0, Enum.PartType.Ball)
		local l = Instance.new("PointLight")
		l.Color, l.Range, l.Brightness = BOOST, 10, 1.5
		l.Parent = orb
		table.insert(orbs, { part = orb, base = orb.CFrame, phase = #orbs })
	end

	-- боковые стены: стекло, закруглённый «пандус», неоновая окантовка
	if withShell then
		for _, s in ipairs({ -1, 1 }) do
			part(Vector3.new(0.6, WH, FL), at(s * (HW + 0.3), WH / 2, 0), GLASS, Enum.Material.Glass, 0.8)
			part(Vector3.new(0.8, 8, FL), at(s * (HW - 2.83), 2.83, 0, 0, 0, -45 * s), RAMP)
			for _, h in ipairs({ { HL / 2, C.blue }, { -HL / 2, C.orange } }) do
				part(Vector3.new(0.5, 0.5, HL), at(s * HW, WH, h[1]), h[2], Enum.Material.Neon)
				part(Vector3.new(0.4, 0.4, HL), at(s * HW, 5.8, h[1]), h[2], Enum.Material.Neon, 0.2)
			end
			for z = -HL, HL, 15 do
				part(Vector3.new(0.5, WH, 0.5), at(s * (HW + 0.3), WH / 2, z), FRAME, Enum.Material.Metal)
			end
		end
	end

	-- торцевые стены + ворота
	local function endWall(s, team)
		local z = s * (HL + 0.3)
		local sideW = HW - GOAL_W / 2
		local gz = s * (HL + GOAL_D / 2)
		if withShell then
			for _, sx in ipairs({ -1, 1 }) do
				local cx = sx * (GOAL_W / 2 + sideW / 2)
				part(Vector3.new(sideW, WH, 0.6), at(cx, WH / 2, z), GLASS, Enum.Material.Glass, 0.8)
				part(Vector3.new(sideW, 8, 0.8), at(cx, 2.83, s * (HL - 2.83), 45 * s, 0, 0), RAMP)
			end
			part(Vector3.new(GOAL_W, WH - GOAL_H, 0.6), at(0, GOAL_H + (WH - GOAL_H) / 2, z), GLASS, Enum.Material.Glass, 0.8)
			part(Vector3.new(FW, 0.5, 0.5), at(0, WH, s * HL), team, Enum.Material.Neon)
			-- сетка
			part(Vector3.new(GOAL_W, GOAL_H, 0.2), at(0, GOAL_H / 2, s * (HL + GOAL_D)), team, Enum.Material.ForceField, 0.1)
			part(Vector3.new(0.2, GOAL_H, GOAL_D), at(-GOAL_W / 2, GOAL_H / 2, gz), team, Enum.Material.ForceField, 0.1)
			part(Vector3.new(0.2, GOAL_H, GOAL_D), at(GOAL_W / 2, GOAL_H / 2, gz), team, Enum.Material.ForceField, 0.1)
			part(Vector3.new(GOAL_W, 0.2, GOAL_D), at(0, GOAL_H, gz), team, Enum.Material.ForceField, 0.1)
			part(Vector3.new(GOAL_W, 1, GOAL_D), at(0, -0.45, gz), Color3.fromRGB(30, 30, 36))
		end
		-- рамка ворот
		part(Vector3.new(1, GOAL_H, 1), at(-GOAL_W / 2 - 0.5, GOAL_H / 2, s * HL), team, Enum.Material.Neon)
		part(Vector3.new(1, GOAL_H, 1), at(GOAL_W / 2 + 0.5, GOAL_H / 2, s * HL), team, Enum.Material.Neon)
		part(Vector3.new(GOAL_W + 2, 1, 1), at(0, GOAL_H + 0.5, s * HL), team, Enum.Material.Neon)
		local glow = part(Vector3.new(1, 1, 1), at(0, GOAL_H / 2, gz), team, nil, 1)
		local pl = Instance.new("PointLight")
		pl.Color, pl.Range, pl.Brightness = team, 18, 2
		pl.Parent = glow
		line(GOAL_W, 0.5, 0, s * (HL - 0.3))
	end
	endWall(-1, C.orange)
	endWall(1, C.blue)
	if withShell then
		for _, sx in ipairs({ -1, 1 }) do
			for _, sz in ipairs({ -1, 1 }) do
				part(Vector3.new(1.5, WH, 1.5), at(sx * HW, WH / 2, sz * HL), FRAME, Enum.Material.Metal)
			end
		end
	end

	-- трибуны с болельщиками
	local rng = Random.new(2024)
	local CROWD = {
		Color3.fromRGB(40, 90, 200), Color3.fromRGB(230, 110, 30), Color3.fromRGB(220, 220, 225),
		Color3.fromRGB(30, 30, 35), Color3.fromRGB(180, 40, 40), Color3.fromRGB(240, 200, 40),
		Color3.fromRGB(60, 60, 70), Color3.fromRGB(90, 160, 230),
	}
	local STAND = Color3.fromRGB(30, 28, 36)
	local function fan(x, y, z)
		if rng:NextNumber() < 0.12 then return end
		part(Vector3.new(1.4, 2.1, 1.3), at(x + rng:NextNumber(-0.4, 0.4), y + 1.05 + rng:NextNumber(-0.15, 0.25), z),
			CROWD[rng:NextInteger(1, #CROWD)])
	end

	local FS = HL + GOAL_D + 6 -- передний край дальней трибуны
	local farW = FW + 80
	part(Vector3.new(farW, 9, 55), at(0, 4.5, -(FS - 2.5 + 27.5)), STAND, Enum.Material.Concrete)
	for i = 0, 9 do
		local y, z = 12 + i * 3.2, -FS - i * 5
		part(Vector3.new(farW, 3.2, 5), at(0, y - 1.6, z), STAND, Enum.Material.Concrete)
		for x = -farW / 2 + 2, farW / 2 - 2, 3.4 do fan(x, y, z) end
	end
	-- светодиодная лента перед трибуной
	for x = -farW / 2 + 7.5, farW / 2 - 7.5, 15 do
		local seg = part(Vector3.new(14.6, 3, 0.4), at(x, 6.5, -(FS - 2.8)), (#ribbon % 2 == 0) and C.blue or C.orange, Enum.Material.Neon, 0.1)
		table.insert(ribbon, seg)
	end

	for _, s in ipairs({ -1, 1 }) do
		part(Vector3.new(34, 4.8, FL + 30), at(s * 90, 2.4, -15), STAND, Enum.Material.Concrete)
		for i = 0, 7 do
			local x, y = s * (76 + i * 5), 8 + i * 3.2
			part(Vector3.new(5, 3.2, FL + 30), at(x, y - 1.6, -15), STAND, Enum.Material.Concrete)
			for z = -118, 88, 4.5 do fan(x, y, z) end
		end
	end

	-- оранжевые металлические фермы за трибуной
	local TRUSS = Color3.fromRGB(215, 105, 40)
	local tz = -(FS + 52)
	for x = -105, 105, 35 do
		part(Vector3.new(2.2, 72, 2.2), at(x, 36, tz), TRUSS, Enum.Material.Metal)
	end
	part(Vector3.new(220, 2.5, 2.5), at(0, 70, tz), TRUSS, Enum.Material.Metal)
	part(Vector3.new(220, 2, 2), at(0, 52, tz), TRUSS, Enum.Material.Metal)
	for x = -105, 70, 35 do
		beam(Vector3.new(x, 52, tz), Vector3.new(x + 35, 70, tz), 1.2, TRUSS, Enum.Material.Metal)
	end

	-- табло над воротами
	part(Vector3.new(41, 17, 1), at(0, 47, -(HL + 10.3)), Color3.fromRGB(40, 44, 55), Enum.Material.Metal)
	local board = part(Vector3.new(40, 16, 1.2), at(0, 47, -(HL + 10)), Color3.fromRGB(12, 12, 16), Enum.Material.Metal)
	for _, sx in ipairs({ -1, 1 }) do
		part(Vector3.new(0.4, 20, 0.4), at(sx * 16, 65, -(HL + 10.3)), FRAME, Enum.Material.Metal)
	end
	do
		local sg = Instance.new("SurfaceGui")
		sg.Face = Enum.NormalId.Back
		sg.SizingMode = Enum.SurfaceGuiSizingMode.FixedSize
		sg.CanvasSize = Vector2.new(800, 320)
		sg.LightInfluence = 0
		sg.Brightness = 1.6
		sg.Parent = board
		local function box(x, w, color, text)
			local f = Instance.new("TextLabel")
			f.BorderSizePixel = 0
			f.BackgroundColor3 = color
			f.BackgroundTransparency = color == Color3.new() and 1 or 0
			f.Position = UDim2.fromScale(x, 0.18)
			f.Size = UDim2.fromScale(w, 0.64)
			f.FontFace = F_HEAVY
			f.TextScaled = true
			f.TextColor3 = C.white
			f.Text = text
			f.Parent = sg
		end
		box(0.05, 0.25, C.blue, "0")
		box(0.33, 0.34, Color3.new(), "5:00")
		box(0.70, 0.25, C.orange, "0")
	end

	-- мачты освещения
	for _, s in ipairs({ -1, 1 }) do
		local bx, bz = s * 95, -175
		part(Vector3.new(2.5, 62, 2.5), at(bx, 31, bz), Color3.fromRGB(60, 62, 70), Enum.Material.Metal)
		local head = part(Vector3.new(20, 10, 1.5),
			CFrame.lookAt(ORIGIN + Vector3.new(bx, 62, bz), ORIGIN + Vector3.new(0, 0, 20)),
			Color3.fromRGB(30, 32, 38), Enum.Material.Metal)
		for gx = -1, 1 do
			for gy = -0.5, 0.5 do
				part(Vector3.new(5.2, 3.6, 0.4), head.CFrame * CFrame.new(gx * 6, gy * 4.6, -0.9),
					Color3.fromRGB(255, 250, 235), Enum.Material.Neon)
			end
		end
	end

	-- свет над полем
	for _, p in ipairs({ { -35, -60 }, { 35, -60 }, { -35, 0 }, { 35, 0 }, { -30, 45 }, { 30, 45 } }) do
		local holder = part(Vector3.new(1, 1, 1), at(p[1], 44, p[2]), C.white, nil, 1)
		local sl = Instance.new("SpotLight")
		sl.Face, sl.Angle, sl.Range, sl.Brightness = Enum.NormalId.Bottom, 120, 60, 1.2
		sl.Color = Color3.fromRGB(255, 244, 228)
		sl.Parent = holder
	end

end

local customArena = asset("Arena")
buildStadium(customArena == nil)
if customArena then
	local arena = fitModel(customArena, customArena:GetAttribute("Length") or 203.75, true)
	standOn(arena, ORIGIN, 0)
	-- импорт в Roblox теряет прозрачность материалов: стекло купола делаем прозрачным сами
	for _, p in ipairs(arena:GetDescendants()) do
		if p:IsA("BasePart") then
			local n = p.Name:lower()
			if n:find("wall") or n:find("roof") or n:find("glass") then
				p.Transparency = math.max(p.Transparency, 0.86)
				p.CastShadow = false
			end
		end
	end
end

-- мяч: 12 тёмных пятиугольных и 20 серых шестиугольных панелей
local function buildBall()
	local m = Instance.new("Model")
	m.Name = "MenuBall"
	local R = 4.5
	local core = make("Part", Vector3.new(R * 2, R * 2, R * 2), CFrame.new(), Color3.fromRGB(235, 236, 240), nil, 0, m)
	core.Shape = Enum.PartType.Ball
	core.CastShadow = true
	m.PrimaryPart = core
	local phi = (1 + math.sqrt(5)) / 2
	local panels = {}
	local function add(x, y, z, pent) table.insert(panels, { Vector3.new(x, y, z).Unit, pent }) end
	for _, a in ipairs({ -1, 1 }) do
		for _, b in ipairs({ -1, 1 }) do
			add(0, a, b * phi, true); add(a, b * phi, 0, true); add(a * phi, 0, b, true)
			add(0, a / phi, b * phi, false); add(a / phi, b * phi, 0, false); add(a * phi, 0, b / phi, false)
			for _, c in ipairs({ -1, 1 }) do add(a, b, c, false) end
		end
	end
	for _, pnl in ipairs(panels) do
		local n, pent = pnl[1], pnl[2]
		local d = pent and 1.45 or 1.75
		local p = make("Part", Vector3.new(0.3, d, d),
			CFrame.lookAt(n * (R - 0.08), n * R * 2) * CFrame.Angles(0, math.rad(90), 0),
			pent and Color3.fromRGB(45, 47, 55) or Color3.fromRGB(125, 129, 138), nil, 0, m)
		p.Shape = Enum.PartType.Cylinder
		p.Reflectance = 0.05
	end
	m.Parent = scene
	return m
end
local ball = asset("Ball") and fitModel(asset("Ball"), 9, false) or buildBall()
standOn(ball, ORIGIN + Vector3.new(10, 0, -10), 0)
local ballBase = ball:GetPivot()

------------------------------------------------------------------
-- ТЕСТОВАЯ МАШИНКА (заменить на машину игрока)
------------------------------------------------------------------
local CAR_X, CAR_Z, CAR_YAW = 0, 40, 130
local carBase = at(CAR_X, 0, CAR_Z, 0, CAR_YAW, 0)
local car

local function buildTestCar()

	local PAINT  = Color3.fromRGB(25, 95, 230)
	local DARK   = Color3.fromRGB(22, 24, 28)
	local WINDOW = Color3.fromRGB(15, 20, 30)
	local TRIM   = Color3.fromRGB(120, 210, 255)
	local function cp(class, size, x, y, z, color, material, rot)
		local p = make(class, size, carBase * CFrame.new(x, y, z) * (rot or CFrame.identity), color, material, 0, car)
		p.CastShadow = true
		return p
	end
	local FLIP = CFrame.Angles(0, math.pi, 0)
	local AXLE_Z = CFrame.Angles(0, math.rad(90), 0)

	cp("Part", Vector3.new(4.6, 1.3, 8.4), 0, 1.55, 0, PAINT).Reflectance = 0.15
	cp("Part", Vector3.new(4.7, 0.5, 8.0), 0, 0.95, 0, DARK)
	cp("WedgePart", Vector3.new(4.4, 0.8, 2.8), 0, 2.6, -2.8, PAINT).Reflectance = 0.15
	cp("WedgePart", Vector3.new(3.9, 1.5, 1.4), 0, 2.95, -0.7, WINDOW, Enum.Material.Glass)
	cp("Part", Vector3.new(3.9, 1.5, 2.4), 0, 2.95, 1.2, WINDOW, Enum.Material.Glass)
	cp("Part", Vector3.new(3.7, 0.15, 2.2), 0, 3.75, 1.2, PAINT)
	cp("WedgePart", Vector3.new(3.9, 1.5, 1.4), 0, 2.95, 3.1, WINDOW, Enum.Material.Glass, FLIP)
	cp("Part", Vector3.new(5, 0.22, 1.1), 0, 4.3, 3.7, DARK)
	for _, sx in ipairs({ -1, 1 }) do
		cp("Part", Vector3.new(0.25, 2.1, 0.3), sx * 1.6, 3.25, 3.7, DARK)
		cp("Part", Vector3.new(0.08, 0.25, 7), sx * 2.33, 1.75, 0, TRIM, Enum.Material.Neon)
		cp("Part", Vector3.new(0.9, 0.3, 0.12), sx * 1.5, 1.85, -4.22, C.white, Enum.Material.Neon)
		cp("Part", Vector3.new(0.9, 0.25, 0.12), sx * 1.5, 1.85, 4.22, Color3.fromRGB(255, 40, 40), Enum.Material.Neon)
		for _, wz in ipairs({ -2.75, 2.75 }) do
			cp("Part", Vector3.new(1.3, 2.6, 2.6), sx * 2.45, 1.3, wz, Color3.fromRGB(20, 20, 22)).Shape = Enum.PartType.Cylinder
			cp("Part", Vector3.new(1.36, 1.5, 1.5), sx * 2.45, 1.3, wz, Color3.fromRGB(190, 195, 205), Enum.Material.Metal).Shape = Enum.PartType.Cylinder
			cp("Part", Vector3.new(1.4, 0.5, 0.5), sx * 2.45, 1.3, wz, TRIM, Enum.Material.Neon).Shape = Enum.PartType.Cylinder
		end
	end
	cp("Part", Vector3.new(4.9, 0.3, 0.8), 0, 0.85, -4.3, DARK)
	cp("Part", Vector3.new(2.2, 0.5, 0.1), 0, 1.4, -4.22, DARK)
	cp("Part", Vector3.new(0.4, 0.7, 0.7), 0, 1.3, 4.3, DARK, nil, AXLE_Z).Shape = Enum.PartType.Cylinder
	cp("Part", Vector3.new(0.42, 0.4, 0.4), 0, 1.3, 4.3, TRIM, Enum.Material.Neon, AXLE_Z).Shape = Enum.PartType.Cylinder
	local shadow = make("Part", Vector3.new(5.6, 0.02, 9.6), carBase * CFrame.new(0, 0.09, 0), Color3.new(), nil, 0.45, car)
	shadow.CastShadow = false
end

-- Поставить машинку в меню (модель игрока). Без аргумента - тестовая.
local function setCar(model)
	if car then car:Destroy() end
	if model then
		car = fitModel(model, 8.4, true)
		standOn(car, ORIGIN + Vector3.new(CAR_X, 0, CAR_Z), CAR_YAW)
	else
		car = Instance.new("Model")
		car.Parent = scene
		buildTestCar()
	end
	car.Name = "ShowcaseCar"
end
_G.SetMenuCar = setCar

-- машины = все модели в MenuAssets, кроме мяча и арены
local carList = {}
if ASSETS then
	for _, child in ipairs(ASSETS:GetChildren()) do
		local n = child.Name
		if (child:IsA("Model") or child:IsA("BasePart")) and n:sub(1, 4) ~= "Ball" and n:sub(1, 5) ~= "Arena" then
			table.insert(carList, child)
		end
	end
	table.sort(carList, function(a, b)
		local ac, bc = a.Name:sub(1, 3) == "Car", b.Name:sub(1, 3) == "Car"
		if ac ~= bc then return ac end
		return a.Name < b.Name
	end)
end
local carIndex = 1
setCar(carList[1])

-- свет на машинку (ключевой спереди-слева + синий контровой сзади)
do
	local keyPos = ORIGIN + Vector3.new(-8, 12, 54)
	local key = part(Vector3.new(1, 1, 1), CFrame.lookAt(keyPos, ORIGIN + Vector3.new(CAR_X, 1.5, CAR_Z)), C.white, nil, 1)
	local sl = Instance.new("SpotLight")
	sl.Face, sl.Angle, sl.Range, sl.Brightness, sl.Shadows = Enum.NormalId.Front, 70, 30, 3, true
	sl.Parent = key
	local rim = part(Vector3.new(1, 1, 1), at(6, 8, 30), C.white, nil, 1)
	local pl = Instance.new("PointLight")
	pl.Color, pl.Range, pl.Brightness = Color3.fromRGB(120, 170, 255), 16, 1
	pl.Parent = rim
end

------------------------------------------------------------------
-- КАМЕРА (лёгкое «дыхание», как в игре)
------------------------------------------------------------------
local savedFov = workspace.CurrentCamera.FieldOfView
local CAM_POS  = ORIGIN + Vector3.new(-3, 4.2, 58)
local CAM_LOOK = ORIGIN + Vector3.new(-6.5, 3.6, 40)
local t0 = os.clock()
table.insert(conns, RunService.RenderStepped:Connect(function()
	local cam = workspace.CurrentCamera
	if cam.CameraType ~= Enum.CameraType.Scriptable then cam.CameraType = Enum.CameraType.Scriptable end
	cam.FieldOfView = 40
	local t = os.clock() - t0
	local sway = Vector3.new(math.sin(t * 0.25) * 0.6, math.sin(t * 0.4) * 0.15, math.cos(t * 0.2) * 0.3)
	cam.CFrame = CFrame.lookAt(CAM_POS + sway, CAM_LOOK)
	for _, o in ipairs(orbs) do
		o.part.CFrame = o.base * CFrame.new(0, math.sin(t * 2 + o.phase) * 0.25, 0) * CFrame.Angles(0, t, 0)
	end
	ball:PivotTo(ballBase * CFrame.Angles(0, t * 0.15, 0))
end))

-- лента на трибуне переливается синим/оранжевым
task.spawn(function()
	local flip = false
	while scene.Parent do
		flip = not flip
		for i, seg in ipairs(ribbon) do
			tween(seg, 1.2, { Color = ((i % 2 == 0) == flip) and C.blue or C.orange })
		end
		task.wait(3)
	end
end)

------------------------------------------------------------------
-- GUI
------------------------------------------------------------------
local gui = Instance.new("ScreenGui")
gui.Name = "RLMainMenu"
gui.IgnoreGuiInset = true
gui.ResetOnSpawn = false
gui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
gui.Parent = player:WaitForChild("PlayerGui")

local scales = {}
-- fitWidth: ширина блока в пикселях макета 1920x1080; блок уменьшается, чтобы влезть по ширине
local function addScale(obj, fitWidth)
	local s = Instance.new("UIScale")
	s.Parent = obj
	table.insert(scales, { scale = s, fitWidth = fitWidth })
end
local function rescale()
	local vp = workspace.CurrentCamera.ViewportSize
	local base = math.clamp(vp.Y / 1080, 0.5, 1.6)
	for _, e in ipairs(scales) do
		e.scale.Scale = e.fitWidth and math.min(base, vp.X / e.fitWidth) or base
	end
end

local function label(parent, text, font, size, color)
	local l = Instance.new("TextLabel")
	l.BackgroundTransparency = 1
	l.FontFace = font
	l.TextSize = size
	l.TextColor3 = color
	l.Text = text
	l.TextXAlignment = Enum.TextXAlignment.Left
	l.Parent = parent
	return l
end
local function gradient(parent, seq, rotation, transparency)
	local g = Instance.new("UIGradient")
	if seq then g.Color = seq end
	if transparency then g.Transparency = transparency end
	g.Rotation = rotation or 0
	g.Parent = parent
	return g
end
local function stroke(parent, transparency, thickness)
	local s = Instance.new("UIStroke")
	s.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
	s.Color = C.white
	s.Transparency = transparency
	s.Thickness = thickness
	s.Parent = parent
	return s
end

-- затемнение слева и снизу
do
	local left = Instance.new("Frame")
	left.BorderSizePixel = 0
	left.BackgroundColor3 = C.navy
	left.Size = UDim2.fromScale(0.6, 1)
	left.Parent = gui
	gradient(left, nil, 0, NumberSequence.new({
		NumberSequenceKeypoint.new(0, 0.2), NumberSequenceKeypoint.new(0.55, 0.7), NumberSequenceKeypoint.new(1, 1) }))
	local bottom = Instance.new("Frame")
	bottom.BorderSizePixel = 0
	bottom.BackgroundColor3 = C.navy
	bottom.Position = UDim2.fromScale(0, 0.75)
	bottom.Size = UDim2.fromScale(1, 0.25)
	bottom.Parent = gui
	gradient(bottom, nil, 90, NumberSequence.new(1, 0.35))
end

------------------------------------------------------------------
-- ГЛАВНОЕ МЕНЮ (слева)
------------------------------------------------------------------
local MENU_HOME = UDim2.new(0, 64, 0.56, 0)
local menuCol = Instance.new("Frame")
menuCol.BackgroundTransparency = 1
menuCol.AnchorPoint = Vector2.new(0, 0.5)
menuCol.Position = MENU_HOME
menuCol.Size = UDim2.fromOffset(480, 560)
menuCol.Parent = gui
addScale(menuCol)

local mainButtons = {}
local mainSel = 0
local inPlay = false   -- открыт экран PLAY или плейлисты (кнопки главного меню спрятаны)
local screen = "main" -- "main" | "play" | "list"
local openPlay -- объявлена ниже

local y = 0
for i, item in ipairs(MENU) do
	local h = item.play and 104 or 56
	local holder = Instance.new("CanvasGroup")
	holder.BackgroundTransparency = 1
	holder.Position = UDim2.fromOffset(-60, y - 4)
	holder.Size = UDim2.fromOffset(470, h + 8)
	holder.GroupTransparency = 1
	holder.Parent = menuCol

	local plate = Instance.new("TextButton")
	plate.Text = ""
	plate.AutoButtonColor = false
	plate.BorderSizePixel = 0
	plate.Size = UDim2.fromOffset(400, h)
	plate.Position = UDim2.fromOffset(4, 4)
	plate.BackgroundColor3 = item.play and C.white or C.btnBg
	plate.BackgroundTransparency = item.play and 0.1 or 0.3
	plate.ClipsDescendants = true
	plate.Parent = holder

	local accent = Instance.new("Frame")
	accent.BorderSizePixel = 0
	accent.BackgroundColor3 = C.accent
	accent.BackgroundTransparency = 1
	accent.Size = UDim2.new(0, 6, 1, 0)
	accent.ZIndex = 2
	accent.Parent = plate

	local text = label(plate, item.name, F_HEAVY, item.play and 64 or 30, C.white)
	text.Position = UDim2.fromOffset(item.play and 26 or 26, item.play and 6 or 0)
	text.Size = UDim2.new(1, -70, 0, item.play and 66 or h)
	text.ZIndex = 3

	local b = { holder = holder, plate = plate, accent = accent, label = text, play = item.play, y = y - 4,
		stroke = stroke(plate, 0.85, 1.5) }

	if item.play then
		gradient(plate, ColorSequence.new(C.play1, C.play2), 0)
		local sub = label(plate, "CASUAL  •  COMPETITIVE  •  TOURNAMENTS", F_BOLD, 15, Color3.fromRGB(205, 228, 255))
		sub.Position = UDim2.fromOffset(28, 72)
		sub.Size = UDim2.new(1, -40, 0, 20)
		sub.ZIndex = 3
		-- блик, пробегающий по кнопке PLAY
		local shine = Instance.new("Frame")
		shine.BorderSizePixel = 0
		shine.BackgroundColor3 = C.white
		shine.BackgroundTransparency = 0.55
		shine.AnchorPoint = Vector2.new(0.5, 0)
		shine.Size = UDim2.new(0, 90, 1, 0)
		shine.Position = UDim2.fromScale(-0.3, 0)
		shine.ZIndex = 2
		shine.Parent = plate
		gradient(shine, nil, 0, NumberSequence.new({
			NumberSequenceKeypoint.new(0, 1), NumberSequenceKeypoint.new(0.5, 0.4), NumberSequenceKeypoint.new(1, 1) }))
		task.spawn(function()
			while gui.Parent do
				shine.Position = UDim2.fromScale(-0.3, 0)
				tween(shine, 0.9, { Position = UDim2.fromScale(1.3, 0) })
				task.wait(4)
			end
		end)
	end

	if item.badge then
		local dot = Instance.new("Frame")
		dot.BackgroundColor3 = C.badge
		dot.AnchorPoint = Vector2.new(1, 0.5)
		dot.Position = UDim2.new(1, -18, 0.5, 0)
		dot.Size = UDim2.fromOffset(24, 24)
		dot.ZIndex = 4
		dot.Parent = plate
		Instance.new("UICorner", dot).CornerRadius = UDim.new(1, 0)
		local ex = label(dot, "!", F_HEAVY, 16, C.white)
		ex.Size = UDim2.fromScale(1, 1)
		ex.TextXAlignment = Enum.TextXAlignment.Center
		ex.ZIndex = 5
	end

	mainButtons[i] = b
	y += h + (item.play and 16 or 8)
end

local function styleMain(b, on)
	local x = on and 18 or 4
	if b.play then
		tween(b.plate, 0.16, { BackgroundTransparency = on and 0 or 0.12, Position = UDim2.fromOffset(x, 4) })
	else
		tween(b.plate, 0.16, { BackgroundColor3 = on and C.selBg or C.btnBg, BackgroundTransparency = on and 0.02 or 0.3,
			Position = UDim2.fromOffset(x, 4) })
		tween(b.label, 0.16, { TextColor3 = on and C.selText or C.white })
	end
	tween(b.stroke, 0.16, { Transparency = on and 0.1 or 0.85, Thickness = on and 2 or 1.5 })
	tween(b.accent, 0.16, { BackgroundTransparency = (on and not b.play) and 0 or 1 })
end

local function selectMain(i)
	if i == mainSel then return end
	if mainButtons[mainSel] then styleMain(mainButtons[mainSel], false) end
	mainSel = i
	styleMain(mainButtons[i], true)
end

local function activateMain(i)
	selectMain(i)
	if MENU[i].play then
		openPlay()
	elseif MENU[i].name == "GARAGE" and #carList > 1 then
		-- GARAGE листает машины из MenuAssets
		carIndex = carIndex % #carList + 1
		setCar(carList[carIndex])
		print("[Menu] GARAGE: " .. carList[carIndex].Name)
	else
		print("[Menu] " .. MENU[i].name)
	end
end

for i, b in ipairs(mainButtons) do
	b.plate.MouseEnter:Connect(function() if not inPlay then selectMain(i) end end)
	b.plate.Activated:Connect(function() if not inPlay then activateMain(i) end end)
end

local function showMainButtons(visible)
	for i, b in ipairs(mainButtons) do
		task.delay(visible and (i - 1) * 0.045 or 0, function()
			if visible == inPlay then return end -- экран уже переключили ещё раз
			tween(b.holder, 0.3, { GroupTransparency = visible and 0 or 1,
				Position = UDim2.fromOffset(visible and 0 or -60, b.y) })
		end)
	end
end

------------------------------------------------------------------
-- ЭКРАН PLAY (режимы)
------------------------------------------------------------------
local playScreen = Instance.new("CanvasGroup")
playScreen.Name = "PlayScreen"
playScreen.BackgroundColor3 = C.navy
playScreen.BackgroundTransparency = 0.45
playScreen.BorderSizePixel = 0
playScreen.Size = UDim2.fromScale(1, 1)
playScreen.GroupTransparency = 1
playScreen.Visible = false
playScreen.Parent = gui

do
	local header = Instance.new("Frame")
	header.BackgroundTransparency = 1
	header.Position = UDim2.fromOffset(64, 56)
	header.Size = UDim2.fromOffset(600, 140)
	header.Parent = playScreen
	addScale(header)
	local title = label(header, "PLAY", F_HEAVY, 84, C.white)
	title.Size = UDim2.new(1, 0, 0, 90)
	local bar = Instance.new("Frame")
	bar.BorderSizePixel = 0
	bar.BackgroundColor3 = C.accent
	bar.Position = UDim2.fromOffset(4, 96)
	bar.Size = UDim2.fromOffset(140, 6)
	bar.Parent = header
	local crumb = label(header, "CHOOSE A MODE", F_BOLD, 18, Color3.fromRGB(170, 195, 230))
	crumb.Position = UDim2.fromOffset(4, 112)
	crumb.Size = UDim2.new(1, 0, 0, 22)
end

local CARD_W, CARD_H, CARD_GAP = 270, 380, 16
local row = Instance.new("Frame")
row.BackgroundTransparency = 1
row.AnchorPoint = Vector2.new(0.5, 0.5)
row.Position = UDim2.fromScale(0.5, 0.55)
row.Size = UDim2.fromOffset(#MODES * CARD_W + (#MODES - 1) * CARD_GAP, CARD_H)
row.Parent = playScreen
addScale(row, #MODES * CARD_W + (#MODES - 1) * CARD_GAP + 120)

local cards, cardSel = {}, 0
for k, mode in ipairs(MODES) do
	local btn = Instance.new("TextButton")
	btn.Text = ""
	btn.AutoButtonColor = false
	btn.BackgroundTransparency = 1
	btn.AnchorPoint = Vector2.new(0.5, 0.5)
	btn.Size = UDim2.fromOffset(CARD_W, CARD_H)
	btn.Position = UDim2.fromOffset((k - 1) * (CARD_W + CARD_GAP) + CARD_W / 2, CARD_H / 2)
	btn.Parent = row
	local scale = Instance.new("UIScale")
	scale.Parent = btn

	local face = Instance.new("CanvasGroup")
	face.BackgroundTransparency = 1
	face.Size = UDim2.fromScale(1, 1)
	face.Parent = btn

	local bg = Instance.new("Frame")
	bg.BorderSizePixel = 0
	bg.BackgroundColor3 = C.white
	bg.Size = UDim2.fromScale(1, 1)
	bg.Parent = face
	gradient(bg, ColorSequence.new(mode.c1, mode.c2), 90)

	for s = 0, 2 do
		local stripe = Instance.new("Frame")
		stripe.BorderSizePixel = 0
		stripe.BackgroundColor3 = C.white
		stripe.BackgroundTransparency = 0.9
		stripe.AnchorPoint = Vector2.new(0.5, 0.5)
		stripe.Position = UDim2.new(0, 120 + s * 70, 0.4, 0)
		stripe.Size = UDim2.new(0, 34 - s * 8, 2, 0)
		stripe.Rotation = 25
		stripe.Parent = face
	end

	local big = label(face, mode.big, F_HEAVY, 100, C.white)
	big.TextTransparency = 0.8
	big.Position = UDim2.fromOffset(14, 26)
	big.Size = UDim2.fromOffset(CARD_W, 110)
	big.Rotation = -6

	local shade = Instance.new("Frame")
	shade.BorderSizePixel = 0
	shade.BackgroundColor3 = Color3.new()
	shade.AnchorPoint = Vector2.new(0, 1)
	shade.Position = UDim2.fromScale(0, 1)
	shade.Size = UDim2.fromScale(1, 0.5)
	shade.Parent = face
	gradient(shade, nil, 90, NumberSequence.new(1, 0.25))

	-- 28 px: самое длинное слово (COMPETITIVE, TOURNAMENTS) целиком влезает в ширину карточки
	local title = label(face, mode.title or mode.name, F_HEAVY, 28, C.white)
	title.TextYAlignment = Enum.TextYAlignment.Bottom
	title.AnchorPoint = Vector2.new(0, 1)
	title.Position = UDim2.new(0, 18, 1, -46)
	title.Size = UDim2.new(1, -30, 0, 84)

	local desc = label(face, mode.desc, F_BODY, 17, Color3.fromRGB(220, 230, 245))
	desc.AnchorPoint = Vector2.new(0, 1)
	desc.Position = UDim2.new(0, 20, 1, -18)
	desc.Size = UDim2.new(1, -36, 0, 22)

	if mode.tag then
		local pill = Instance.new("TextLabel")
		pill.AutomaticSize = Enum.AutomaticSize.X
		pill.BackgroundColor3 = Color3.new()
		pill.BackgroundTransparency = 0.45
		pill.Position = UDim2.fromOffset(16, 16)
		pill.Size = UDim2.fromOffset(0, 26)
		pill.FontFace = F_BOLD
		pill.TextSize = 14
		pill.TextColor3 = C.white
		pill.Text = mode.tag
		pill.Parent = face
		Instance.new("UICorner", pill).CornerRadius = UDim.new(1, 0)
		local pad = Instance.new("UIPadding")
		pad.PaddingLeft, pad.PaddingRight = UDim.new(0, 12), UDim.new(0, 12)
		pad.Parent = pill
	end

	local border = Instance.new("Frame")
	border.BackgroundTransparency = 1
	border.Size = UDim2.fromScale(1, 1)
	border.Parent = btn
	cards[k] = { btn = btn, scale = scale, face = face, stroke = stroke(border, 0.75, 1.5),
		home = btn.Position }
end

local function styleCard(c, on)
	tween(c.scale, 0.15, { Scale = on and 1.06 or 1 })
	tween(c.stroke, 0.15, { Transparency = on and 0 or 0.75, Thickness = on and 3 or 1.5 })
	c.btn.ZIndex = on and 2 or 1
end
local function selectCard(k)
	if k == cardSel then return end
	if cards[cardSel] then styleCard(cards[cardSel], false) end
	cardSel = k
	styleCard(cards[k], true)
end
local openList -- экран плейлистов, объявлен ниже
local function activateCard(k)
	selectCard(k)
	if MODES[k].tab then
		openList(MODES[k].tab)
	else
		print("[Menu] PLAY > " .. MODES[k].name)
	end
end
for k, c in ipairs(cards) do
	c.btn.MouseEnter:Connect(function() if screen == "play" then selectCard(k) end end)
	c.btn.Activated:Connect(function() if screen == "play" then activateCard(k) end end)
end

-- маленькая тёмная кнопка внизу экрана (BACK, MULTIPLE SELECTION)
local function smallButton(parent, text, x, width)
	local b = Instance.new("TextButton")
	b.Text = ""
	b.AutoButtonColor = false
	b.BorderSizePixel = 0
	b.BackgroundColor3 = C.btnBg
	b.BackgroundTransparency = 0.3
	b.AnchorPoint = Vector2.new(0, 1)
	b.Position = UDim2.new(0, x, 1, -56)
	b.Size = UDim2.fromOffset(width, 52)
	b.Parent = parent
	addScale(b)
	local st = stroke(b, 0.8, 1.5)
	local l = label(b, text, F_HEAVY, 24, C.white)
	l.Position = UDim2.fromOffset(22, 0)
	l.Size = UDim2.new(1, -22, 1, 0)
	b.MouseEnter:Connect(function()
		tween(b, 0.12, { BackgroundColor3 = C.selBg, BackgroundTransparency = 0 })
		tween(l, 0.12, { TextColor3 = C.selText })
		tween(st, 0.12, { Transparency = 0.1 })
	end)
	b.MouseLeave:Connect(function()
		tween(b, 0.12, { BackgroundColor3 = C.btnBg, BackgroundTransparency = 0.3 })
		tween(l, 0.12, { TextColor3 = C.white })
		tween(st, 0.12, { Transparency = 0.8 })
	end)
	return b, l
end
local back = smallButton(playScreen, "‹  BACK", 64, 200)

------------------------------------------------------------------
-- ЭКРАН ПЛЕЙЛИСТОВ: вкладки CASUAL / COMPETITIVE / ARCADE
------------------------------------------------------------------
local listScreen = Instance.new("CanvasGroup")
listScreen.Name = "PlaylistScreen"
listScreen.BackgroundColor3 = C.navy
listScreen.BackgroundTransparency = 0.55
listScreen.BorderSizePixel = 0
listScreen.Size = UDim2.fromScale(1, 1)
listScreen.GroupTransparency = 1
listScreen.Visible = false
listScreen.Parent = gui

local LIST_W, ROW_H, ROW_GAP, TAB_W = 900, 84, 10, 250
local GREY = Color3.fromRGB(170, 190, 220)
local listCol = Instance.new("Frame")
listCol.BackgroundTransparency = 1
listCol.Position = UDim2.fromOffset(64, 56)
listCol.Size = UDim2.fromOffset(LIST_W, 820)
listCol.Parent = listScreen
addScale(listCol)

local listTitle = label(listCol, "PLAY", F_HEAVY, 84, C.white)
listTitle.Size = UDim2.new(1, 0, 0, 90)

-- вкладки
local tabBar = Instance.new("Frame")
tabBar.BackgroundTransparency = 1
tabBar.Position = UDim2.fromOffset(0, 104)
tabBar.Size = UDim2.new(1, 0, 0, 56)
tabBar.Parent = listCol
local function keyHint(parent, text, x)
	local k = label(parent, text, F_BOLD, 16, C.white)
	k.BackgroundColor3 = C.white
	k.BackgroundTransparency = 0.85
	k.TextXAlignment = Enum.TextXAlignment.Center
	k.Position = UDim2.fromOffset(x, 13)
	k.Size = UDim2.fromOffset(30, 30)
	Instance.new("UICorner", k).CornerRadius = UDim.new(0, 6)
	return k
end
keyHint(tabBar, "Q", 0)
local tabs = {}
for i, name in ipairs(TAB_ORDER) do
	local t = Instance.new("TextButton")
	t.Text = ""
	t.AutoButtonColor = false
	t.BorderSizePixel = 0
	t.BackgroundColor3 = C.white
	t.BackgroundTransparency = 1
	t.Position = UDim2.fromOffset(44 + (i - 1) * (TAB_W + 6), 0)
	t.Size = UDim2.fromOffset(TAB_W, 56)
	t.Parent = tabBar
	local l = label(t, name, F_HEAVY, 26, C.white)
	l.Size = UDim2.fromScale(1, 1)
	l.TextXAlignment = Enum.TextXAlignment.Center
	local line = Instance.new("Frame")
	line.BorderSizePixel = 0
	line.BackgroundColor3 = C.accent
	line.BackgroundTransparency = 1
	line.AnchorPoint = Vector2.new(0, 1)
	line.Position = UDim2.fromScale(0, 1)
	line.Size = UDim2.new(1, 0, 0, 5)
	line.Parent = t
	tabs[i] = { btn = t, label = l, line = line, name = name }
end
keyHint(tabBar, "E", 44 + #TAB_ORDER * (TAB_W + 6) + 4)

local tabInfo = label(listCol, "", F_BOLD, 18, GREY)
tabInfo.Position = UDim2.fromOffset(4, 172)
tabInfo.Size = UDim2.new(1, 0, 0, 24)

local rowsFrame = Instance.new("Frame")
rowsFrame.BackgroundTransparency = 1
rowsFrame.Position = UDim2.fromOffset(0, 210)
rowsFrame.Size = UDim2.new(1, 0, 0, 600)
rowsFrame.Parent = listCol

-- значок ранга: ромб с переливом цвета ранга и римской цифрой
local function rankEmblem(parent, rankName, tier)
	local colors = RANKS[rankName] or RANKS.UNRANKED
	local holder = Instance.new("Frame")
	holder.BackgroundTransparency = 1
	holder.Size = UDim2.fromOffset(56, 56)
	holder.Parent = parent
	local outer = Instance.new("Frame")
	outer.BorderSizePixel = 0
	outer.BackgroundColor3 = C.white
	outer.AnchorPoint = Vector2.new(0.5, 0.5)
	outer.Position = UDim2.fromScale(0.5, 0.5)
	outer.Size = UDim2.fromOffset(38, 38)
	outer.Rotation = 45
	outer.Parent = holder
	gradient(outer, ColorSequence.new(colors[1], colors[2]), 90)
	stroke(outer, 0.4, 1.5)
	local inner = Instance.new("Frame")
	inner.BorderSizePixel = 0
	inner.BackgroundColor3 = Color3.new()
	inner.BackgroundTransparency = 0.6
	inner.AnchorPoint = Vector2.new(0.5, 0.5)
	inner.Position = UDim2.fromScale(0.5, 0.5)
	inner.Size = UDim2.fromOffset(24, 24)
	inner.Rotation = 45
	inner.Parent = holder
	local t = label(holder, tier or "", F_HEAVY, 17, C.white)
	t.Size = UDim2.fromScale(1, 1)
	t.TextXAlignment = Enum.TextXAlignment.Center
	return holder
end

local currentTab = "COMPETITIVE"
local chosen = {}      -- chosen[tab][index] = true
for _, name in ipairs(TAB_ORDER) do chosen[name] = {} end
local multi = false    -- MULTIPLE SELECTION
local focusRow = 1
local rows = {}

local function styleRow(r)
	local isChosen = chosen[currentTab][r.index] == true
	local isFocus = r.index == focusRow
	tween(r.plate, 0.14, {
		BackgroundColor3 = isChosen and C.selBg or (isFocus and Color3.fromRGB(30, 55, 100) or C.btnBg),
		BackgroundTransparency = isChosen and 0.02 or (isFocus and 0.1 or 0.3),
		Position = UDim2.fromOffset(isFocus and 12 or 0, r.y),
	})
	tween(r.stroke, 0.14, { Transparency = (isChosen or isFocus) and 0.1 or 0.85, Thickness = isFocus and 2 or 1.5 })
	tween(r.accent, 0.14, { BackgroundTransparency = isChosen and 0 or 1 })
	local main, sub = isChosen and C.selText or C.white, isChosen and Color3.fromRGB(60, 80, 120) or GREY
	for _, l in ipairs(r.mainTexts) do tween(l, 0.14, { TextColor3 = main }) end
	for _, l in ipairs(r.subTexts) do tween(l, 0.14, { TextColor3 = sub }) end
	r.check.Visible = multi
	r.checkFill.Visible = isChosen
	local x = multi and 66 or 26
	r.name.Position = UDim2.fromOffset(x, 8)
	r.sub.Position = UDim2.fromOffset(x + 2, 50)
end
local function restyleRows()
	for _, r in ipairs(rows) do styleRow(r) end
end

local function setFocus(i)
	if i == focusRow or not rows[i] then return end
	focusRow = i
	restyleRows()
end

local function toggleRow(i)
	if not rows[i] then return end
	focusRow = i
	local set = chosen[currentTab]
	if multi then
		if set[i] then
			set[i] = nil
		else
			local n = 0
			for _ in pairs(set) do n += 1 end
			if n < 6 then set[i] = true end
		end
	else
		table.clear(set)
		set[i] = true
	end
	restyleRows()
end

local function buildRows()
	for _, r in ipairs(rows) do r.plate:Destroy() end
	table.clear(rows)
	for i, pl in ipairs(PLAYLISTS[currentTab]) do
		local y = (i - 1) * (ROW_H + ROW_GAP)
		local plate = Instance.new("TextButton")
		plate.Text = ""
		plate.AutoButtonColor = false
		plate.BorderSizePixel = 0
		plate.BackgroundColor3 = C.btnBg
		plate.BackgroundTransparency = 0.3
		plate.Position = UDim2.fromOffset(-40, y) -- въезжает слева
		plate.Size = UDim2.fromOffset(LIST_W - 20, ROW_H)
		plate.Parent = rowsFrame

		local accent = Instance.new("Frame")
		accent.BorderSizePixel = 0
		accent.BackgroundColor3 = C.accent
		accent.BackgroundTransparency = 1
		accent.Size = UDim2.new(0, 6, 1, 0)
		accent.ZIndex = 2
		accent.Parent = plate

		local check = Instance.new("Frame")
		check.BackgroundTransparency = 1
		check.AnchorPoint = Vector2.new(0, 0.5)
		check.Position = UDim2.new(0, 22, 0.5, 0)
		check.Size = UDim2.fromOffset(28, 28)
		check.Parent = plate
		stroke(check, 0.2, 2)
		local checkFill = Instance.new("Frame")
		checkFill.BorderSizePixel = 0
		checkFill.BackgroundColor3 = C.accent
		checkFill.AnchorPoint = Vector2.new(0.5, 0.5)
		checkFill.Position = UDim2.fromScale(0.5, 0.5)
		checkFill.Size = UDim2.fromOffset(18, 18)
		checkFill.Parent = check

		local name = label(plate, pl.name, F_HEAVY, 34, C.white)
		name.Size = UDim2.new(0.55, 0, 0, 42)
		local sub = label(plate, pl.size .. (pl.info and ("  •  " .. string.upper(pl.info)) or ""), F_BOLD, 16, GREY)
		sub.Size = UDim2.new(0.55, 0, 0, 22)

		local r = { plate = plate, index = i, y = y, accent = accent, check = check, checkFill = checkFill,
			name = name, sub = sub, stroke = stroke(plate, 0.85, 1.5), mainTexts = { name }, subTexts = { sub } }

		if pl.rank then
			local unranked = pl.rank == "UNRANKED"
			local em = rankEmblem(plate, pl.rank, pl.tier)
			em.AnchorPoint = Vector2.new(1, 0.5)
			em.Position = UDim2.new(1, -292, 0.5, 0)
			local rankText = label(plate, unranked and "UNRANKED" or (pl.rank .. " " .. (pl.tier or "")), F_HEAVY, 22, C.white)
			rankText.AnchorPoint = Vector2.new(1, 0)
			rankText.Position = UDim2.new(1, -22, 0, 14)
			rankText.Size = UDim2.fromOffset(266, 30)
			rankText.TextXAlignment = Enum.TextXAlignment.Right
			local divText = label(plate, unranked and "PLACEMENT MATCHES" or ("DIVISION " .. (pl.division or "I")), F_BOLD, 15, GREY)
			divText.AnchorPoint = Vector2.new(1, 0)
			divText.Position = UDim2.new(1, -22, 0, 46)
			divText.Size = UDim2.fromOffset(266, 22)
			divText.TextXAlignment = Enum.TextXAlignment.Right
			table.insert(r.mainTexts, rankText)
			table.insert(r.subTexts, divText)
		end

		plate.MouseEnter:Connect(function() if screen == "list" then setFocus(i) end end)
		plate.Activated:Connect(function() if screen == "list" then toggleRow(i) end end)
		rows[i] = r
	end
	focusRow = math.clamp(focusRow, 1, math.max(1, #rows))
	restyleRows()
end

-- нижняя панель: BACK, MULTIPLE SELECTION, FIND MATCH и плашка поиска
local listBack = smallButton(listScreen, "‹  BACK", 64, 200)
local multiBtn, multiLabel = smallButton(listScreen, "MULTIPLE SELECTION", 280, 340)
multiLabel.Position = UDim2.fromOffset(60, 0)
multiLabel.Size = UDim2.new(1, -60, 1, 0)
local multiBox = Instance.new("Frame")
multiBox.BackgroundTransparency = 1
multiBox.AnchorPoint = Vector2.new(0, 0.5)
multiBox.Position = UDim2.new(0, 20, 0.5, 0)
multiBox.Size = UDim2.fromOffset(24, 24)
multiBox.Parent = multiBtn
stroke(multiBox, 0.1, 2)
local multiFill = Instance.new("Frame")
multiFill.BorderSizePixel = 0
multiFill.BackgroundColor3 = C.accent
multiFill.AnchorPoint = Vector2.new(0.5, 0.5)
multiFill.Position = UDim2.fromScale(0.5, 0.5)
multiFill.Size = UDim2.fromOffset(14, 14)
multiFill.Visible = false
multiFill.Parent = multiBox

local findBtn = Instance.new("TextButton")
findBtn.Text = ""
findBtn.AutoButtonColor = false
findBtn.BorderSizePixel = 0
findBtn.BackgroundColor3 = C.white
findBtn.AnchorPoint = Vector2.new(1, 1)
findBtn.Position = UDim2.new(1, -64, 1, -50)
findBtn.Size = UDim2.fromOffset(340, 64)
findBtn.Parent = listScreen
addScale(findBtn)
gradient(findBtn, ColorSequence.new(C.play1, C.play2), 0)
local findStroke = stroke(findBtn, 0.6, 2)
local findLabel = label(findBtn, "FIND MATCH", F_HEAVY, 32, C.white)
findLabel.Size = UDim2.fromScale(1, 1)
findLabel.TextXAlignment = Enum.TextXAlignment.Center
findBtn.MouseEnter:Connect(function() tween(findStroke, 0.12, { Transparency = 0 }) end)
findBtn.MouseLeave:Connect(function() tween(findStroke, 0.12, { Transparency = 0.6 }) end)

local banner = Instance.new("Frame")
banner.BorderSizePixel = 0
banner.BackgroundColor3 = C.navy
banner.BackgroundTransparency = 0.15
banner.AnchorPoint = Vector2.new(1, 1)
banner.Position = UDim2.new(1, -64, 1, -128)
banner.Size = UDim2.fromOffset(340, 70)
banner.Visible = false
banner.Parent = listScreen
addScale(banner)
stroke(banner, 0.5, 1.5)
local bannerTitle = label(banner, "", F_HEAVY, 24, C.white)
bannerTitle.Position = UDim2.fromOffset(18, 6)
bannerTitle.Size = UDim2.new(1, -36, 0, 32)
local bannerSub = label(banner, "", F_BOLD, 14, GREY)
bannerSub.Position = UDim2.fromOffset(18, 40)
bannerSub.Size = UDim2.new(1, -36, 0, 20)
bannerSub.TextTruncate = Enum.TextTruncate.AtEnd

local searching = false
local function stopSearch()
	searching = false
	banner.Visible = false
	findLabel.Text = "FIND MATCH"
end
local function startSearch()
	local names = {}
	for i, pl in ipairs(PLAYLISTS[currentTab]) do
		if chosen[currentTab][i] then table.insert(names, pl.name) end
	end
	if #names == 0 then
		bannerTitle.Text = "SELECT A PLAYLIST"
		bannerSub.Text = ""
		banner.Visible = true
		task.delay(1.5, function() if not searching then banner.Visible = false end end)
		return
	end
	searching = true
	local started = os.clock()
	bannerSub.Text = currentTab .. ": " .. table.concat(names, ", ")
	banner.Visible = true
	findLabel.Text = "CANCEL"
	print("[Menu] FIND MATCH > " .. bannerSub.Text)
	task.spawn(function()
		while searching and gui.Parent do
			local sec = math.floor(os.clock() - started)
			bannerTitle.Text = string.format("SEARCHING  %d:%02d", sec // 60, sec % 60)
			task.wait(0.25)
		end
	end)
end
findBtn.Activated:Connect(function()
	if screen ~= "list" then return end
	if searching then stopSearch() else startSearch() end
end)

local function toggleMulti()
	multi = not multi
	multiFill.Visible = multi
	if not multi then
		-- остаётся один выбранный плейлист
		local set, keep = chosen[currentTab], nil
		for i in pairs(set) do if not keep or i < keep then keep = i end end
		table.clear(set)
		set[keep or focusRow] = true
	end
	restyleRows()
end
multiBtn.Activated:Connect(function() if screen == "list" then toggleMulti() end end)

local function setTab(name)
	if not PLAYLISTS[name] then return end
	currentTab = name
	focusRow = 1
	if not multi and next(chosen[name]) == nil then chosen[name][1] = true end
	for _, t in ipairs(tabs) do
		local on = t.name == name
		tween(t.label, 0.14, { TextColor3 = on and C.white or Color3.fromRGB(120, 140, 175) })
		tween(t.line, 0.14, { BackgroundTransparency = on and 0 or 1 })
		tween(t.btn, 0.14, { BackgroundTransparency = on and 0.88 or 1 })
	end
	tabInfo.Text = TAB_INFO[name] or ""
	stopSearch()
	buildRows()
end
local function shiftTab(d)
	local idx = table.find(TAB_ORDER, currentTab) or 1
	setTab(TAB_ORDER[math.clamp(idx + d, 1, #TAB_ORDER)])
end
for _, t in ipairs(tabs) do
	t.btn.Activated:Connect(function() if screen == "list" then setTab(t.name) end end)
end

------------------------------------------------------------------
-- ПЕРЕХОДЫ
------------------------------------------------------------------
function openPlay()
	if screen ~= "main" then return end
	screen = "play"
	inPlay = true
	showMainButtons(false)
	tween(menuBlur, 0.3, { Size = 10 })
	playScreen.Visible = true
	tween(playScreen, 0.25, { GroupTransparency = 0 })
	for k, c in ipairs(cards) do
		c.btn.Position = c.home + UDim2.fromOffset(0, 60)
		task.delay(0.05 + k * 0.04, function()
			tween(c.btn, 0.35, { Position = c.home })
		end)
	end
	if cardSel == 0 then selectCard(1) end
end

local function closePlay()
	if screen ~= "play" then return end
	screen = "main"
	inPlay = false
	tween(menuBlur, 0.3, { Size = 0 })
	tween(playScreen, 0.2, { GroupTransparency = 1 }).Completed:Connect(function()
		if not inPlay then playScreen.Visible = false end
	end)
	showMainButtons(true)
end
back.Activated:Connect(closePlay)

function openList(tab)
	if screen ~= "play" then return end
	screen = "list"
	tween(playScreen, 0.2, { GroupTransparency = 1 }).Completed:Connect(function()
		if screen == "list" then playScreen.Visible = false end
	end)
	tween(menuBlur, 0.3, { Size = 4 })
	listScreen.Visible = true
	tween(listScreen, 0.25, { GroupTransparency = 0 })
	setTab(tab)
end

local function closeList()
	if screen ~= "list" then return end
	screen = "play"
	stopSearch()
	tween(menuBlur, 0.3, { Size = 10 })
	tween(listScreen, 0.2, { GroupTransparency = 1 }).Completed:Connect(function()
		if screen ~= "list" then listScreen.Visible = false end
	end)
	playScreen.Visible = true
	tween(playScreen, 0.25, { GroupTransparency = 0 })
end
listBack.Activated:Connect(closeList)

-- клавиатура / геймпад
local function isKey(k, ...)
	for _, v in ipairs({ ... }) do if k == v then return true end end
	return false
end
local K = Enum.KeyCode
table.insert(conns, UIS.InputBegan:Connect(function(input, gameProcessed)
	-- ButtonA забирает привязка прыжка, но персонажа в меню нет, так что пропускаем её,
	-- если только геймпад не выделил кнопку сам (тогда она нажмётся через Activated)
	if gameProcessed and not (input.KeyCode == Enum.KeyCode.ButtonA and GuiService.SelectedObject == nil) then return end
	local k = input.KeyCode
	local confirm = isKey(k, K.Return, K.KeypadEnter, K.ButtonA)
	if screen == "list" then
		if isKey(k, K.Up, K.W, K.DPadUp) then
			setFocus(math.max(1, focusRow - 1))
		elseif isKey(k, K.Down, K.S, K.DPadDown) then
			setFocus(math.min(#rows, focusRow + 1))
		elseif isKey(k, K.Q, K.ButtonL1) then
			shiftTab(-1)
		elseif isKey(k, K.E, K.ButtonR1) then
			shiftTab(1)
		elseif confirm then
			toggleRow(focusRow)
		elseif isKey(k, K.F, K.ButtonY) then
			if searching then stopSearch() else startSearch() end
		elseif isKey(k, K.M, K.ButtonX) then
			toggleMulti()
		elseif isKey(k, K.Backspace, K.ButtonB) then
			closeList()
		end
	elseif screen == "play" then
		if isKey(k, K.Left, K.A, K.DPadLeft) then
			selectCard(math.max(1, cardSel - 1))
		elseif isKey(k, K.Right, K.D, K.DPadRight) then
			selectCard(math.min(#cards, cardSel + 1))
		elseif confirm then
			activateCard(cardSel)
		elseif isKey(k, K.Backspace, K.ButtonB) then
			closePlay()
		end
	else
		if isKey(k, K.Up, K.W, K.DPadUp) then
			selectMain(math.max(1, mainSel - 1))
		elseif isKey(k, K.Down, K.S, K.DPadDown) then
			selectMain(math.min(#mainButtons, mainSel + 1))
		elseif confirm then
			activateMain(mainSel)
		end
	end
end))

rescale()
-- шрифты грузятся заранее, чтобы все пункты меню были одинаково жирными
task.spawn(function()
	pcall(function() game:GetService("ContentProvider"):PreloadAsync(gui:GetDescendants()) end)
end)
table.insert(conns, workspace.CurrentCamera:GetPropertyChangedSignal("ViewportSize"):Connect(rescale))
selectMain(1)
task.delay(0.2, showMainButtons, true)

------------------------------------------------------------------
-- ЗАКРЫТИЕ МЕНЮ
------------------------------------------------------------------
_G.CloseMainMenu = function()
	for _, c in ipairs(conns) do c:Disconnect() end
	gui:Destroy()
	scene:Destroy()
	if usedTerrain then
		terrain:FillBlock(TERRAIN_CF, TERRAIN_SIZE, Enum.Material.Air)
		terrain:SetMaterialColor(Enum.Material.Grass, oldGrassColor)
		if oldGrassLength then pcall(function() terrain.GrassLength = oldGrassLength end) end
	end
	for _, e in ipairs(effects) do e:Destroy() end
	for prop, v in pairs(savedLighting) do Lighting[prop] = v end
	for _, child in ipairs(stashed) do child.Parent = Lighting end
	workspace.CurrentCamera.CameraType = Enum.CameraType.Custom
	workspace.CurrentCamera.FieldOfView = savedFov
	pcall(function() StarterGui:SetCoreGuiEnabled(Enum.CoreGuiType.All, true) end)
end

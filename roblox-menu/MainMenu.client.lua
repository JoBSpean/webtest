--[[
	Главное меню в стиле Rocket League.
	Куда положить: StarterPlayer > StarterPlayerScripts (LocalScript).

	Что делает:
	  * размывает и затемняет фон (мир игры позади);
	  * ставит камеру на тестовый объект, который вращается (позже это будет машинка игрока);
	  * слева рисует меню со скошенными кнопками и подменю (как PLAY ONLINE -> FIND MATCH ...);
	  * под меню выводит описание выбранного пункта.
]]

local Players = game:GetService("Players")
local TweenService = game:GetService("TweenService")
local RunService = game:GetService("RunService")
local Lighting = game:GetService("Lighting")

local player = Players.LocalPlayer
local camera = workspace.CurrentCamera

------------------------------------------------------------------
-- НАСТРОЙКИ МЕНЮ
------------------------------------------------------------------
local MENU = {
	{ name = "SHOWROOM",   desc = "View your cars and items." },
	{ name = "PLAY ONLINE", desc = "Play public or private matches online.",
		sub = { "FIND MATCH", "CREATE PRIVATE MATCH", "JOIN PRIVATE MATCH" } },
	{ name = "EXHIBITION", desc = "Play an offline match against bots." },
	{ name = "SEASON",     desc = "Play a full season against bots." },
	{ name = "GARAGE",     desc = "Customize your car.", alert = true },
	{ name = "TRAINING",   desc = "Practice your skills." },
	{ name = "EXTRAS",     desc = "Replays, stats and more." },
	{ name = "OPTIONS",    desc = "Change game settings." },
}

local COLORS = {
	button      = Color3.fromRGB(28, 32, 38),
	buttonSel   = Color3.fromRGB(215, 240, 255),
	text        = Color3.fromRGB(235, 235, 235),
	textSel     = Color3.fromRGB(20, 110, 190),
	subText     = Color3.fromRGB(190, 190, 190),
	alert       = Color3.fromRGB(255, 160, 30),
}

local BTN_W, BTN_H, GAP = 320, 36, 5
local SKEW = 12 -- насколько скошена правая сторона кнопки (px)

------------------------------------------------------------------
-- ФОН: размытие + тестовый объект вместо машинки
------------------------------------------------------------------
local blur = Instance.new("BlurEffect")
blur.Size = 6
blur.Parent = Lighting

local cc = Instance.new("ColorCorrectionEffect")
cc.Brightness = -0.05
cc.Contrast = 0.1
cc.Parent = Lighting

-- Тестовый объект (заменить на модель машинки игрока)
local showcase = Instance.new("Part")
showcase.Name = "MenuShowcaseObject"
showcase.Size = Vector3.new(8, 3, 4)
showcase.Color = Color3.fromRGB(30, 140, 60)
showcase.Material = Enum.Material.SmoothPlastic
showcase.Anchored = true
showcase.CanCollide = false
local SHOW_POS = Vector3.new(0, 1000, 0) -- отдельно от карты
showcase.CFrame = CFrame.new(SHOW_POS)
showcase.Parent = workspace

local stripe = Instance.new("Part")
stripe.Size = Vector3.new(8.1, 0.6, 4.1)
stripe.Color = Color3.fromRGB(240, 190, 30)
stripe.Material = Enum.Material.Neon
stripe.Anchored = true
stripe.CanCollide = false
stripe.Parent = showcase

-- Пол под объектом
local floor = Instance.new("Part")
floor.Size = Vector3.new(200, 1, 200)
floor.Color = Color3.fromRGB(60, 110, 40)
floor.Material = Enum.Material.Grass
floor.Anchored = true
floor.CFrame = CFrame.new(SHOW_POS - Vector3.new(0, 2, 0))
floor.Parent = workspace

-- Камера: объект справа от меню, как машинка на скриншоте
camera.CameraType = Enum.CameraType.Scriptable
camera.FieldOfView = 50
camera.CFrame = CFrame.lookAt(SHOW_POS + Vector3.new(-9, 4, 16), SHOW_POS + Vector3.new(-5, 0, 0))

local angle = 0
local spinConn = RunService.RenderStepped:Connect(function(dt)
	angle += dt * 0.4
	local cf = CFrame.new(SHOW_POS) * CFrame.Angles(0, angle, 0)
	showcase.CFrame = cf
	stripe.CFrame = cf * CFrame.new(0, 0.3, 0)
end)

------------------------------------------------------------------
-- GUI
------------------------------------------------------------------
local gui = Instance.new("ScreenGui")
gui.Name = "MainMenu"
gui.IgnoreGuiInset = true
gui.ResetOnSpawn = false
gui.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
gui.Parent = player:WaitForChild("PlayerGui")

-- Лёгкое затемнение слева, чтобы меню читалось
local shade = Instance.new("Frame")
shade.Size = UDim2.fromScale(0.5, 1)
shade.BackgroundColor3 = Color3.new(0, 0, 0)
shade.BorderSizePixel = 0
shade.Parent = gui
local shadeGrad = Instance.new("UIGradient")
shadeGrad.Transparency = NumberSequence.new(0.55, 1)
shadeGrad.Parent = shade

local menuRoot = Instance.new("Frame")
menuRoot.BackgroundTransparency = 1
menuRoot.AnchorPoint = Vector2.new(0, 1)
menuRoot.Position = UDim2.new(0, 60, 1, -180)
menuRoot.Size = UDim2.fromOffset(BTN_W * 2 + 40, #MENU * (BTN_H + GAP))
menuRoot.Parent = gui

local descLabel = Instance.new("TextLabel")
descLabel.BackgroundTransparency = 1
descLabel.AnchorPoint = Vector2.new(0, 0)
descLabel.Position = UDim2.new(0, 64, 1, -168)
descLabel.Size = UDim2.fromOffset(600, 28)
descLabel.Font = Enum.Font.Gotham
descLabel.TextSize = 20
descLabel.TextColor3 = COLORS.text
descLabel.TextXAlignment = Enum.TextXAlignment.Left
descLabel.TextStrokeTransparency = 0.6
descLabel.Text = ""
descLabel.Parent = gui

-- Скошенная кнопка: прямоугольник + повёрнутый «клин» справа
local function makeSlantButton(parent, text, pos, width, isSub)
	local btn = Instance.new("TextButton")
	btn.AutoButtonColor = false
	btn.Text = ""
	btn.Size = UDim2.fromOffset(width, BTN_H)
	btn.Position = pos
	btn.BackgroundColor3 = COLORS.button
	btn.BackgroundTransparency = isSub and 0.55 or 0.25
	btn.BorderSizePixel = 0
	btn.ClipsDescendants = true
	btn.Parent = parent

	-- срез правого края
	local cut = Instance.new("Frame")
	cut.BorderSizePixel = 0
	cut.BackgroundColor3 = Color3.new(0, 0, 0)
	cut.BackgroundTransparency = 1
	cut.Size = UDim2.fromOffset(SKEW * 2, BTN_H * 2)
	cut.AnchorPoint = Vector2.new(0.5, 0.5)
	cut.Position = UDim2.new(1, 0, 0.5, 0)
	cut.Rotation = 18
	cut.Parent = btn

	-- обводка-подсветка при выборе
	local stroke = Instance.new("UIStroke")
	stroke.ApplyStrokeMode = Enum.ApplyStrokeMode.Border
	stroke.Color = Color3.fromRGB(120, 200, 255)
	stroke.Thickness = 2
	stroke.Transparency = 1
	stroke.Parent = btn

	local label = Instance.new("TextLabel")
	label.Name = "Label"
	label.BackgroundTransparency = 1
	label.Position = UDim2.fromOffset(isSub and 18 or 22, 0)
	label.Size = UDim2.new(1, -40, 1, 0)
	label.Font = Enum.Font.GothamMedium
	label.TextSize = 21
	label.TextXAlignment = Enum.TextXAlignment.Left
	label.TextColor3 = isSub and COLORS.subText or COLORS.text
	label.Text = text
	label.Parent = btn

	-- наклон всей кнопки как в RL
	local skew = Instance.new("UIGradient")
	skew.Rotation = 0
	skew.Color = ColorSequence.new(Color3.new(1, 1, 1), Color3.fromRGB(200, 200, 200))
	skew.Parent = btn

	return btn, label, stroke
end

local buttons = {}
local subButtons = {}
local selected = nil
local tweenInfo = TweenInfo.new(0.15, Enum.EasingStyle.Quad, Enum.EasingDirection.Out)

local function clearSub()
	for _, b in ipairs(subButtons) do b:Destroy() end
	table.clear(subButtons)
end

local function showSub(index)
	clearSub()
	local item = MENU[index]
	if not item.sub then return end
	for i, name in ipairs(item.sub) do
		local y = (index - 2 + i) * (BTN_H + GAP)
		local b, lbl, stroke = makeSlantButton(menuRoot, name,
			UDim2.fromOffset(BTN_W + 30, y), BTN_W + 20, true)
		b.BackgroundTransparency = 1
		lbl.TextTransparency = 1
		TweenService:Create(b, tweenInfo, { BackgroundTransparency = 0.55 }):Play()
		TweenService:Create(lbl, tweenInfo, { TextTransparency = 0 }):Play()
		b.MouseEnter:Connect(function()
			TweenService:Create(b, tweenInfo, { BackgroundColor3 = COLORS.buttonSel, BackgroundTransparency = 0.1 }):Play()
			TweenService:Create(lbl, tweenInfo, { TextColor3 = COLORS.textSel }):Play()
		end)
		b.MouseLeave:Connect(function()
			TweenService:Create(b, tweenInfo, { BackgroundColor3 = COLORS.button, BackgroundTransparency = 0.55 }):Play()
			TweenService:Create(lbl, tweenInfo, { TextColor3 = COLORS.subText }):Play()
		end)
		b.Activated:Connect(function()
			print("[Menu] нажато:", item.name, ">", name)
		end)
		table.insert(subButtons, b)
	end
end

local function select(index)
	if selected == index then return end
	selected = index
	for i, data in ipairs(buttons) do
		local on = (i == index)
		TweenService:Create(data.btn, tweenInfo, {
			BackgroundColor3 = on and COLORS.buttonSel or COLORS.button,
			BackgroundTransparency = on and 0.05 or 0.25,
			Position = UDim2.fromOffset(on and 6 or 0, data.y),
		}):Play()
		TweenService:Create(data.label, tweenInfo, {
			TextColor3 = on and COLORS.textSel or COLORS.text,
		}):Play()
		data.stroke.Transparency = on and 0 or 1
	end
	descLabel.Text = MENU[index].desc
	showSub(index)
end

for i, item in ipairs(MENU) do
	local y = (i - 1) * (BTN_H + GAP)
	local btn, label, stroke = makeSlantButton(menuRoot, item.name, UDim2.fromOffset(0, y), BTN_W, false)

	if item.alert then
		local icon = Instance.new("TextLabel")
		icon.Size = UDim2.fromOffset(22, 22)
		icon.AnchorPoint = Vector2.new(1, 0.5)
		icon.Position = UDim2.new(1, -16, 0.5, 0)
		icon.BackgroundColor3 = COLORS.alert
		icon.Text = "!"
		icon.Font = Enum.Font.GothamBold
		icon.TextSize = 16
		icon.TextColor3 = Color3.new(1, 1, 1)
		icon.Parent = btn
		Instance.new("UICorner", icon).CornerRadius = UDim.new(1, 0)
	end

	buttons[i] = { btn = btn, label = label, stroke = stroke, y = y }
	btn.MouseEnter:Connect(function() select(i) end)
	btn.Activated:Connect(function()
		select(i)
		print("[Menu] нажато:", item.name)
	end)
end

select(2) -- по умолчанию PLAY ONLINE, как на скриншоте

-- Закрыть меню (вызвать при начале матча)
local function closeMenu()
	spinConn:Disconnect()
	gui:Destroy(); blur:Destroy(); cc:Destroy()
	showcase:Destroy(); floor:Destroy()
	camera.CameraType = Enum.CameraType.Custom
end
_G.CloseMainMenu = closeMenu

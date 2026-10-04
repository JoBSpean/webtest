--!nocheck
--[[
	mock.luau — a small, offline imitation of the Roblox client API.

	run.sh glues one file together:  header (local __PREVIEW = {...}) .. mock.luau .. driver.luau
	and runs it with the native `luau` CLI. The real LocalScript is compiled with loadstring()
	and runs in a sandbox whose globals (game, workspace, Instance, Vector3, task, ...) come from here.

	The goal is "behaves like Roblox closely enough to draw the same picture", not completeness:
	  * unknown properties are allowed (stored + reported in warnings) instead of erroring;
	  * tweens jump to their goal values immediately (Completed fires after the tween time);
	  * time is simulated (task.wait / task.delay / os.clock / RenderStepped run on a fake clock).
]]

local P = __PREVIEW
local M = { errors = {}, warnings = {}, logs = {}, actions = {} }
local warnedOnce = {}
local function note(msg)
	if not warnedOnce[msg] then
		warnedOnce[msg] = true
		table.insert(M.warnings, msg)
	end
end
M.note = note

local NIL = setmetatable({}, { __tostring = function() return "NIL" end })

------------------------------------------------------------------
-- typeof
------------------------------------------------------------------
local function typeOf(v)
	local t = type(v)
	if t == "table" then
		local mt = getmetatable(v)
		if type(mt) == "table" then
			local n = rawget(mt, "__type")
			if n then return n end
		end
	end
	return t
end

------------------------------------------------------------------
-- ENUM
------------------------------------------------------------------
local ENUM_VALUES = {
	FontWeight = { Thin = 100, ExtraLight = 200, Light = 300, Regular = 400, Medium = 500, SemiBold = 600, Bold = 700, ExtraBold = 800, Heavy = 900 },
}
local EnumItemMT = { __type = "EnumItem" }
EnumItemMT.__tostring = function(e) return "Enum." .. e.EnumType.Name .. "." .. e.Name end
EnumItemMT.__index = { IsA = function(self, t) return self.EnumType.Name == t end }
local EnumTypeMT = { __type = "Enum" }
local function enumItem(et, name)
	local it = et._items[name]
	if not it then
		local vals = ENUM_VALUES[et.Name]
		et._count += 1
		it = setmetatable({ Name = name, Value = vals and vals[name] or et._count - 1, EnumType = et }, EnumItemMT)
		et._items[name] = it
		table.insert(et._order, it)
	end
	return it
end
EnumTypeMT.__index = function(et, k)
	if k == "GetEnumItems" then
		return function(self)
			local t = {}
			for i, v in ipairs(self._order) do t[i] = v end
			return t
		end
	elseif k == "FromName" then
		return function(self, n) return enumItem(self, n) end
	elseif k == "FromValue" then
		return function(self, v)
			for _, it in ipairs(self._order) do if it.Value == v then return it end end
			return nil
		end
	end
	if type(k) ~= "string" then return nil end
	return enumItem(et, k)
end
EnumTypeMT.__tostring = function(et) return et.Name end
local enumTypes = {}
local Enum = setmetatable({}, {
	__index = function(_, k)
		if k == "GetEnums" then return function() local t = {} for _, v in pairs(enumTypes) do table.insert(t, v) end return t end end
		local et = enumTypes[k]
		if not et then
			et = setmetatable({ Name = k, _items = {}, _order = {}, _count = 0 }, EnumTypeMT)
			enumTypes[k] = et
		end
		return et
	end,
})
M.Enum = Enum
-- make sure items with a natural order get stable values
for _, n in ipairs({ "Thin", "ExtraLight", "Light", "Regular", "Medium", "SemiBold", "Bold", "ExtraBold", "Heavy" }) do local _ = Enum.FontWeight[n] end

------------------------------------------------------------------
-- DATATYPES
------------------------------------------------------------------
local DT = {}

-- Vector3 ------------------------------------------------------------
local V3MT = { __type = "Vector3" }
local function V3(x, y, z) return setmetatable({ X = x or 0, Y = y or 0, Z = z or 0 }, V3MT) end
local function isV3(v) return getmetatable(v) == V3MT end
local V3M = {}
function V3M.Dot(a, b) return a.X * b.X + a.Y * b.Y + a.Z * b.Z end
function V3M.Cross(a, b) return V3(a.Y * b.Z - a.Z * b.Y, a.Z * b.X - a.X * b.Z, a.X * b.Y - a.Y * b.X) end
function V3M.Lerp(a, b, t) return V3(a.X + (b.X - a.X) * t, a.Y + (b.Y - a.Y) * t, a.Z + (b.Z - a.Z) * t) end
function V3M.FuzzyEq(a, b, e)
	e = e or 1e-5
	return math.abs(a.X - b.X) <= e and math.abs(a.Y - b.Y) <= e and math.abs(a.Z - b.Z) <= e
end
function V3M.Abs(a) return V3(math.abs(a.X), math.abs(a.Y), math.abs(a.Z)) end
function V3M.Floor(a) return V3(math.floor(a.X), math.floor(a.Y), math.floor(a.Z)) end
function V3M.Ceil(a) return V3(math.ceil(a.X), math.ceil(a.Y), math.ceil(a.Z)) end
function V3M.Sign(a) return V3(math.sign(a.X), math.sign(a.Y), math.sign(a.Z)) end
function V3M.Max(a, ...)
	local x, y, z = a.X, a.Y, a.Z
	for _, b in ipairs({ ... }) do x, y, z = math.max(x, b.X), math.max(y, b.Y), math.max(z, b.Z) end
	return V3(x, y, z)
end
function V3M.Min(a, ...)
	local x, y, z = a.X, a.Y, a.Z
	for _, b in ipairs({ ... }) do x, y, z = math.min(x, b.X), math.min(y, b.Y), math.min(z, b.Z) end
	return V3(x, y, z)
end
function V3M.Angle(a, b)
	local d = V3M.Dot(a, b) / (math.sqrt(V3M.Dot(a, a) * V3M.Dot(b, b)) + 1e-12)
	return math.acos(math.clamp(d, -1, 1))
end
V3MT.__index = function(v, k)
	if k == "Magnitude" or k == "magnitude" then return math.sqrt(v.X * v.X + v.Y * v.Y + v.Z * v.Z) end
	if k == "Unit" or k == "unit" then
		local m = math.sqrt(v.X * v.X + v.Y * v.Y + v.Z * v.Z)
		return V3(v.X / m, v.Y / m, v.Z / m)
	end
	if k == "x" then return v.X elseif k == "y" then return v.Y elseif k == "z" then return v.Z end
	local f = V3M[k]
	if f then return f end
	error(tostring(k) .. " is not a valid member of Vector3", 2)
end
V3MT.__add = function(a, b)
	if type(a) == "number" then return V3(a + b.X, a + b.Y, a + b.Z) end
	if type(b) == "number" then return V3(a.X + b, a.Y + b, a.Z + b) end
	if not (isV3(a) and isV3(b)) then error("invalid argument #2 to Vector3 + (Vector3 expected, got " .. typeOf(b) .. ")", 2) end
	return V3(a.X + b.X, a.Y + b.Y, a.Z + b.Z)
end
V3MT.__sub = function(a, b)
	if type(a) == "number" then return V3(a - b.X, a - b.Y, a - b.Z) end
	if type(b) == "number" then return V3(a.X - b, a.Y - b, a.Z - b) end
	if not (isV3(a) and isV3(b)) then error("invalid argument #2 to Vector3 - (Vector3 expected, got " .. typeOf(b) .. ")", 2) end
	return V3(a.X - b.X, a.Y - b.Y, a.Z - b.Z)
end
V3MT.__mul = function(a, b)
	if type(a) == "number" then return V3(a * b.X, a * b.Y, a * b.Z) end
	if type(b) == "number" then return V3(a.X * b, a.Y * b, a.Z * b) end
	if isV3(a) and isV3(b) then return V3(a.X * b.X, a.Y * b.Y, a.Z * b.Z) end
	error("invalid arguments to Vector3 *", 2)
end
V3MT.__div = function(a, b)
	if type(a) == "number" then return V3(a / b.X, a / b.Y, a / b.Z) end
	if type(b) == "number" then return V3(a.X / b, a.Y / b, a.Z / b) end
	if isV3(a) and isV3(b) then return V3(a.X / b.X, a.Y / b.Y, a.Z / b.Z) end
	error("invalid arguments to Vector3 /", 2)
end
V3MT.__idiv = function(a, b)
	local r = V3MT.__div(a, b)
	return V3(math.floor(r.X), math.floor(r.Y), math.floor(r.Z))
end
V3MT.__unm = function(a) return V3(-a.X, -a.Y, -a.Z) end
V3MT.__eq = function(a, b) return a.X == b.X and a.Y == b.Y and a.Z == b.Z end
V3MT.__tostring = function(a) return string.format("%g, %g, %g", a.X, a.Y, a.Z) end
DT.Vector3 = {
	new = V3,
	zero = V3(0, 0, 0), one = V3(1, 1, 1),
	xAxis = V3(1, 0, 0), yAxis = V3(0, 1, 0), zAxis = V3(0, 0, 1),
}
DT.Vector3.FromNormalId = function(n)
	local name = n and n.Name
	if name == "Top" then return V3(0, 1, 0) elseif name == "Bottom" then return V3(0, -1, 0)
	elseif name == "Right" then return V3(1, 0, 0) elseif name == "Left" then return V3(-1, 0, 0)
	elseif name == "Back" then return V3(0, 0, 1) else return V3(0, 0, -1) end
end
DT.Vector3.FromAxis = function(a)
	local name = a and a.Name
	if name == "X" then return V3(1, 0, 0) elseif name == "Y" then return V3(0, 1, 0) else return V3(0, 0, 1) end
end

-- Vector2 ------------------------------------------------------------
local V2MT = { __type = "Vector2" }
local function V2(x, y) return setmetatable({ X = x or 0, Y = y or 0 }, V2MT) end
local function isV2(v) return getmetatable(v) == V2MT end
local V2M = {}
function V2M.Dot(a, b) return a.X * b.X + a.Y * b.Y end
function V2M.Cross(a, b) return a.X * b.Y - a.Y * b.X end
function V2M.Lerp(a, b, t) return V2(a.X + (b.X - a.X) * t, a.Y + (b.Y - a.Y) * t) end
function V2M.Abs(a) return V2(math.abs(a.X), math.abs(a.Y)) end
function V2M.Floor(a) return V2(math.floor(a.X), math.floor(a.Y)) end
function V2M.Ceil(a) return V2(math.ceil(a.X), math.ceil(a.Y)) end
function V2M.Max(a, b) return V2(math.max(a.X, b.X), math.max(a.Y, b.Y)) end
function V2M.Min(a, b) return V2(math.min(a.X, b.X), math.min(a.Y, b.Y)) end
function V2M.FuzzyEq(a, b, e) e = e or 1e-5; return math.abs(a.X - b.X) <= e and math.abs(a.Y - b.Y) <= e end
V2MT.__index = function(v, k)
	if k == "Magnitude" or k == "magnitude" then return math.sqrt(v.X * v.X + v.Y * v.Y) end
	if k == "Unit" or k == "unit" then
		local m = math.sqrt(v.X * v.X + v.Y * v.Y)
		return V2(v.X / m, v.Y / m)
	end
	if k == "x" then return v.X elseif k == "y" then return v.Y end
	local f = V2M[k]
	if f then return f end
	error(tostring(k) .. " is not a valid member of Vector2", 2)
end
V2MT.__add = function(a, b)
	if type(b) == "number" then return V2(a.X + b, a.Y + b) end
	return V2(a.X + b.X, a.Y + b.Y)
end
V2MT.__sub = function(a, b)
	if type(b) == "number" then return V2(a.X - b, a.Y - b) end
	return V2(a.X - b.X, a.Y - b.Y)
end
V2MT.__mul = function(a, b)
	if type(a) == "number" then return V2(a * b.X, a * b.Y) end
	if type(b) == "number" then return V2(a.X * b, a.Y * b) end
	return V2(a.X * b.X, a.Y * b.Y)
end
V2MT.__div = function(a, b)
	if type(a) == "number" then return V2(a / b.X, a / b.Y) end
	if type(b) == "number" then return V2(a.X / b, a.Y / b) end
	return V2(a.X / b.X, a.Y / b.Y)
end
V2MT.__unm = function(a) return V2(-a.X, -a.Y) end
V2MT.__eq = function(a, b) return a.X == b.X and a.Y == b.Y end
V2MT.__tostring = function(a) return string.format("%g, %g", a.X, a.Y) end
DT.Vector2 = { new = V2, zero = V2(0, 0), one = V2(1, 1), xAxis = V2(1, 0), yAxis = V2(0, 1) }

-- CFrame -------------------------------------------------------------
-- stored as { x, y, z, r00, r01, r02, r10, r11, r12, r20, r21, r22 }; columns = Right, Up, Back
local CFMT = { __type = "CFrame" }
local function CF(x, y, z, a, b, c, d, e, f, g, h, i)
	return setmetatable({ x, y, z, a, b, c, d, e, f, g, h, i }, CFMT)
end
local function isCF(v) return getmetatable(v) == CFMT end
local function cfT(x, y, z) return CF(x, y, z, 1, 0, 0, 0, 1, 0, 0, 0, 1) end
local function cfmul(A, B)
	local a00, a01, a02, a10, a11, a12, a20, a21, a22 = A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12]
	local b00, b01, b02, b10, b11, b12, b20, b21, b22 = B[4], B[5], B[6], B[7], B[8], B[9], B[10], B[11], B[12]
	local bx, by, bz = B[1], B[2], B[3]
	return CF(
		A[1] + a00 * bx + a01 * by + a02 * bz,
		A[2] + a10 * bx + a11 * by + a12 * bz,
		A[3] + a20 * bx + a21 * by + a22 * bz,
		a00 * b00 + a01 * b10 + a02 * b20, a00 * b01 + a01 * b11 + a02 * b21, a00 * b02 + a01 * b12 + a02 * b22,
		a10 * b00 + a11 * b10 + a12 * b20, a10 * b01 + a11 * b11 + a12 * b21, a10 * b02 + a11 * b12 + a12 * b22,
		a20 * b00 + a21 * b10 + a22 * b20, a20 * b01 + a21 * b11 + a22 * b21, a20 * b02 + a21 * b12 + a22 * b22)
end
local function cfinv(A)
	local x, y, z = A[1], A[2], A[3]
	local a00, a01, a02, a10, a11, a12, a20, a21, a22 = A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12]
	return CF(-(a00 * x + a10 * y + a20 * z), -(a01 * x + a11 * y + a21 * z), -(a02 * x + a12 * y + a22 * z),
		a00, a10, a20, a01, a11, a21, a02, a12, a22)
end
local function cfpoint(A, v)
	return V3(A[1] + A[4] * v.X + A[5] * v.Y + A[6] * v.Z,
		A[2] + A[7] * v.X + A[8] * v.Y + A[9] * v.Z,
		A[3] + A[10] * v.X + A[11] * v.Y + A[12] * v.Z)
end
local function cfvector(A, v)
	return V3(A[4] * v.X + A[5] * v.Y + A[6] * v.Z, A[7] * v.X + A[8] * v.Y + A[9] * v.Z, A[10] * v.X + A[11] * v.Y + A[12] * v.Z)
end
local function rotX(a) local c, s = math.cos(a), math.sin(a); return CF(0, 0, 0, 1, 0, 0, 0, c, -s, 0, s, c) end
local function rotY(a) local c, s = math.cos(a), math.sin(a); return CF(0, 0, 0, c, 0, s, 0, 1, 0, -s, 0, c) end
local function rotZ(a) local c, s = math.cos(a), math.sin(a); return CF(0, 0, 0, c, -s, 0, s, c, 0, 0, 0, 1) end
local function cfLookAt(at, target, up)
	up = up or V3(0, 1, 0)
	local lx, ly, lz = target.X - at.X, target.Y - at.Y, target.Z - at.Z
	local m = math.sqrt(lx * lx + ly * ly + lz * lz)
	if m < 1e-12 then return cfT(at.X, at.Y, at.Z) end
	lx, ly, lz = lx / m, ly / m, lz / m
	-- right = look x up
	local rx, ry, rz = ly * up.Z - lz * up.Y, lz * up.X - lx * up.Z, lx * up.Y - ly * up.X
	local rm = math.sqrt(rx * rx + ry * ry + rz * rz)
	if rm < 1e-9 then
		-- looking straight along `up`: pick any perpendicular right vector
		rx, ry, rz = 1, 0, 0
		if math.abs(lx) > 0.9 then rx, ry, rz = 0, 0, -1 end
		rm = 1
	end
	rx, ry, rz = rx / rm, ry / rm, rz / rm
	local ux, uy, uz = ry * lz - rz * ly, rz * lx - rx * lz, rx * ly - ry * lx
	return CF(at.X, at.Y, at.Z, rx, ux, -lx, ry, uy, -ly, rz, uz, -lz)
end
local function quatToCF(x, y, z, qx, qy, qz, qw)
	local n = math.sqrt(qx * qx + qy * qy + qz * qz + qw * qw)
	if n == 0 then return cfT(x, y, z) end
	qx, qy, qz, qw = qx / n, qy / n, qz / n, qw / n
	return CF(x, y, z,
		1 - 2 * (qy * qy + qz * qz), 2 * (qx * qy - qz * qw), 2 * (qx * qz + qy * qw),
		2 * (qx * qy + qz * qw), 1 - 2 * (qx * qx + qz * qz), 2 * (qy * qz - qx * qw),
		2 * (qx * qz - qy * qw), 2 * (qy * qz + qx * qw), 1 - 2 * (qx * qx + qy * qy))
end
local function cfToQuat(A)
	local m00, m01, m02, m10, m11, m12, m20, m21, m22 = A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12]
	local tr = m00 + m11 + m22
	local qx, qy, qz, qw
	if tr > 0 then
		local s = math.sqrt(tr + 1) * 2
		qw, qx, qy, qz = 0.25 * s, (m21 - m12) / s, (m02 - m20) / s, (m10 - m01) / s
	elseif m00 > m11 and m00 > m22 then
		local s = math.sqrt(1 + m00 - m11 - m22) * 2
		qw, qx, qy, qz = (m21 - m12) / s, 0.25 * s, (m01 + m10) / s, (m02 + m20) / s
	elseif m11 > m22 then
		local s = math.sqrt(1 + m11 - m00 - m22) * 2
		qw, qx, qy, qz = (m02 - m20) / s, (m01 + m10) / s, 0.25 * s, (m12 + m21) / s
	else
		local s = math.sqrt(1 + m22 - m00 - m11) * 2
		qw, qx, qy, qz = (m10 - m01) / s, (m02 + m20) / s, (m12 + m21) / s, 0.25 * s
	end
	return qx, qy, qz, qw
end
local function axisAngleCF(axis, ang)
	local u = axis.Unit
	local s = math.sin(ang / 2)
	return quatToCF(0, 0, 0, u.X * s, u.Y * s, u.Z * s, math.cos(ang / 2))
end
local CFM = {}
function CFM.Inverse(a) return cfinv(a) end
function CFM.ToWorldSpace(a, ...)
	local out = {}
	for i, b in ipairs({ ... }) do out[i] = cfmul(a, b) end
	return table.unpack(out)
end
function CFM.ToObjectSpace(a, ...)
	local inv, out = cfinv(a), {}
	for i, b in ipairs({ ... }) do out[i] = cfmul(inv, b) end
	return table.unpack(out)
end
function CFM.PointToWorldSpace(a, v) return cfpoint(a, v) end
function CFM.PointToObjectSpace(a, v) return cfpoint(cfinv(a), v) end
function CFM.VectorToWorldSpace(a, v) return cfvector(a, v) end
function CFM.VectorToObjectSpace(a, v) return cfvector(cfinv(a), v) end
function CFM.GetComponents(a) return table.unpack(a, 1, 12) end
CFM.components = CFM.GetComponents
function CFM.ToEulerAnglesXYZ(a)
	local ry = math.asin(math.clamp(a[6], -1, 1))
	return math.atan2(-a[9], a[12]), ry, math.atan2(-a[5], a[4])
end
function CFM.ToEulerAnglesYXZ(a)
	local rx = math.asin(math.clamp(-a[9], -1, 1))
	return rx, math.atan2(a[6], a[12]), math.atan2(a[7], a[8])
end
CFM.ToOrientation = CFM.ToEulerAnglesYXZ
function CFM.ToAxisAngle(a)
	local qx, qy, qz, qw = cfToQuat(a)
	local ang = 2 * math.acos(math.clamp(qw, -1, 1))
	local s = math.sqrt(math.max(1 - qw * qw, 0))
	if s < 1e-9 then return V3(1, 0, 0), 0 end
	return V3(qx / s, qy / s, qz / s), ang
end
function CFM.Lerp(a, b, t)
	local ax, ay, az, aw = cfToQuat(a)
	local bx, by, bz, bw = cfToQuat(b)
	local d = ax * bx + ay * by + az * bz + aw * bw
	if d < 0 then bx, by, bz, bw, d = -bx, -by, -bz, -bw, -d end
	local k0, k1
	if d > 0.9995 then
		k0, k1 = 1 - t, t
	else
		local th = math.acos(d)
		k0, k1 = math.sin((1 - t) * th) / math.sin(th), math.sin(t * th) / math.sin(th)
	end
	return quatToCF(a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t, a[3] + (b[3] - a[3]) * t,
		ax * k0 + bx * k1, ay * k0 + by * k1, az * k0 + bz * k1, aw * k0 + bw * k1)
end
function CFM.Orthonormalize(a)
	local qx, qy, qz, qw = cfToQuat(a)
	return quatToCF(a[1], a[2], a[3], qx, qy, qz, qw)
end
function CFM.FuzzyEq(a, b, e)
	e = e or 1e-5
	for i = 1, 12 do if math.abs(a[i] - b[i]) > e then return false end end
	return true
end
CFMT.__index = function(a, k)
	if k == "Position" or k == "p" then return V3(a[1], a[2], a[3]) end
	if k == "X" or k == "x" then return a[1] elseif k == "Y" or k == "y" then return a[2] elseif k == "Z" or k == "z" then return a[3] end
	if k == "LookVector" or k == "lookVector" then return V3(-a[6], -a[9], -a[12]) end
	if k == "RightVector" or k == "rightVector" or k == "XVector" then return V3(a[4], a[7], a[10]) end
	if k == "UpVector" or k == "upVector" or k == "YVector" then return V3(a[5], a[8], a[11]) end
	if k == "ZVector" then return V3(a[6], a[9], a[12]) end
	if k == "Rotation" then return CF(0, 0, 0, a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12]) end
	local f = CFM[k]
	if f then return f end
	error(tostring(k) .. " is not a valid member of CFrame", 2)
end
CFMT.__mul = function(a, b)
	if isCF(a) and isCF(b) then return cfmul(a, b) end
	if isCF(a) and isV3(b) then return cfpoint(a, b) end
	error("invalid argument #2 to CFrame * (CFrame or Vector3 expected, got " .. typeOf(b) .. ")", 2)
end
CFMT.__add = function(a, b)
	if not isV3(b) then error("invalid argument #2 to CFrame + (Vector3 expected, got " .. typeOf(b) .. ")", 2) end
	return CF(a[1] + b.X, a[2] + b.Y, a[3] + b.Z, a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12])
end
CFMT.__sub = function(a, b)
	if not isV3(b) then error("invalid argument #2 to CFrame - (Vector3 expected, got " .. typeOf(b) .. ")", 2) end
	return CF(a[1] - b.X, a[2] - b.Y, a[3] - b.Z, a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12])
end
CFMT.__eq = function(a, b)
	for i = 1, 12 do if a[i] ~= b[i] then return false end end
	return true
end
CFMT.__tostring = function(a)
	local t = {}
	for i = 1, 12 do t[i] = string.format("%g", a[i]) end
	return table.concat(t, ", ")
end
DT.CFrame = {
	identity = cfT(0, 0, 0),
	new = function(...)
		local n = select("#", ...)
		local a, b, c = ...
		if n == 0 then return cfT(0, 0, 0) end
		if n == 1 then return cfT(a.X, a.Y, a.Z) end
		if n == 2 then return cfLookAt(a, b) end
		if n == 3 then return cfT(a, b, c) end
		if n == 7 then
			local x, y, z, qx, qy, qz, qw = ...
			return quatToCF(x, y, z, qx, qy, qz, qw)
		end
		if n == 12 then return CF(...) end
		error("Invalid number of arguments: " .. n, 2)
	end,
	lookAt = cfLookAt,
	Angles = function(rx, ry, rz) return cfmul(cfmul(rotX(rx or 0), rotY(ry or 0)), rotZ(rz or 0)) end,
	fromOrientation = function(rx, ry, rz) return cfmul(cfmul(rotY(ry or 0), rotX(rx or 0)), rotZ(rz or 0)) end,
	fromAxisAngle = axisAngleCF,
	fromMatrix = function(pos, vx, vy, vz)
		vz = vz or vx:Cross(vy).Unit
		return CF(pos.X, pos.Y, pos.Z, vx.X, vy.X, vz.X, vx.Y, vy.Y, vz.Y, vx.Z, vy.Z, vz.Z)
	end,
	lookAlong = function(at, dir, up) return cfLookAt(at, at + dir, up) end,
}
DT.CFrame.fromEulerAnglesXYZ = DT.CFrame.Angles
DT.CFrame.fromEulerAnglesYXZ = DT.CFrame.fromOrientation
DT.CFrame.fromEulerAngles = function(rx, ry, rz, order)
	if order and order.Name == "YXZ" then return DT.CFrame.fromOrientation(rx, ry, rz) end
	return DT.CFrame.Angles(rx, ry, rz)
end

-- Color3 -------------------------------------------------------------
local C3MT = { __type = "Color3" }
local function C3(r, g, b) return setmetatable({ R = r or 0, G = g or 0, B = b or 0 }, C3MT) end
local C3M = {}
function C3M.Lerp(a, b, t) return C3(a.R + (b.R - a.R) * t, a.G + (b.G - a.G) * t, a.B + (b.B - a.B) * t) end
function C3M.ToHex(a)
	local function h(v) return string.format("%02X", math.clamp(math.round(v * 255), 0, 255)) end
	return h(a.R) .. h(a.G) .. h(a.B)
end
local function toHSV(c)
	local r, g, b = c.R, c.G, c.B
	local mx, mn = math.max(r, g, b), math.min(r, g, b)
	local d = mx - mn
	local h = 0
	if d > 0 then
		if mx == r then h = ((g - b) / d) % 6 elseif mx == g then h = (b - r) / d + 2 else h = (r - g) / d + 4 end
		h = h / 6
	end
	return h, mx == 0 and 0 or d / mx, mx
end
C3M.ToHSV = toHSV
C3MT.__index = function(c, k)
	if k == "r" then return c.R elseif k == "g" then return c.G elseif k == "b" then return c.B end
	local f = C3M[k]
	if f then return f end
	error(tostring(k) .. " is not a valid member of Color3", 2)
end
C3MT.__eq = function(a, b) return a.R == b.R and a.G == b.G and a.B == b.B end
C3MT.__tostring = function(a) return string.format("%g, %g, %g", a.R, a.G, a.B) end
DT.Color3 = {
	new = C3,
	fromRGB = function(r, g, b) return C3((r or 0) / 255, (g or 0) / 255, (b or 0) / 255) end,
	fromHex = function(hex)
		hex = tostring(hex):gsub("^#", "")
		if #hex == 3 then hex = hex:sub(1, 1):rep(2) .. hex:sub(2, 2):rep(2) .. hex:sub(3, 3):rep(2) end
		local r, g, b = tonumber(hex:sub(1, 2), 16), tonumber(hex:sub(3, 4), 16), tonumber(hex:sub(5, 6), 16)
		if not (r and g and b) then error("Unable to convert characters to hex value", 2) end
		return C3(r / 255, g / 255, b / 255)
	end,
	fromHSV = function(h, s, v)
		h = (h % 1) * 6
		local i = math.floor(h)
		local f = h - i
		local p, q, t = v * (1 - s), v * (1 - s * f), v * (1 - s * (1 - f))
		i = i % 6
		if i == 0 then return C3(v, t, p) elseif i == 1 then return C3(q, v, p) elseif i == 2 then return C3(p, v, t)
		elseif i == 3 then return C3(p, q, v) elseif i == 4 then return C3(t, p, v) else return C3(v, p, q) end
	end,
	toHSV = toHSV,
}

-- BrickColor (only a handful of names; anything else is medium stone grey) ----
local BCMT = { __type = "BrickColor" }
local BRICK = {
	["White"] = { 242, 243, 243 }, ["Institutional white"] = { 248, 248, 248 }, ["Really black"] = { 17, 17, 17 },
	["Black"] = { 27, 42, 53 }, ["Bright red"] = { 196, 40, 28 }, ["Really red"] = { 255, 0, 0 },
	["Bright blue"] = { 13, 105, 172 }, ["Really blue"] = { 0, 0, 255 }, ["Bright yellow"] = { 245, 205, 48 },
	["Bright green"] = { 75, 151, 75 }, ["Lime green"] = { 0, 255, 0 }, ["Bright orange"] = { 218, 133, 65 },
	["Medium stone grey"] = { 163, 162, 165 }, ["Dark stone grey"] = { 99, 95, 98 }, ["Neon orange"] = { 213, 115, 61 },
	["Toothpaste"] = { 0, 255, 255 }, ["Hot pink"] = { 255, 0, 191 }, ["Deep orange"] = { 255, 176, 0 },
}
local function BC(name)
	local rgb = BRICK[name] or BRICK["Medium stone grey"]
	return setmetatable({ Name = BRICK[name] and name or "Medium stone grey", Color = DT.Color3.fromRGB(rgb[1], rgb[2], rgb[3]) }, BCMT)
end
BCMT.__tostring = function(b) return b.Name end
BCMT.__eq = function(a, b) return a.Name == b.Name end
DT.BrickColor = {
	new = function(a, g, b)
		if type(a) == "string" then return BC(a) end
		if typeOf(a) == "Color3" then a, g, b = a.R * 255, a.G * 255, a.B * 255 end
		if type(a) == "number" and g then
			local bc = BC("Medium stone grey")
			bc.Color = DT.Color3.fromRGB(a, g, b)
			bc.Name = "Custom"
			return bc
		end
		return BC("Medium stone grey")
	end,
	White = function() return BC("White") end, Black = function() return BC("Black") end,
	Red = function() return BC("Bright red") end, Blue = function() return BC("Bright blue") end,
	Green = function() return BC("Bright green") end, Yellow = function() return BC("Bright yellow") end,
	Gray = function() return BC("Medium stone grey") end, DarkGray = function() return BC("Dark stone grey") end,
	random = function() return BC("Medium stone grey") end, palette = function() return BC("Medium stone grey") end,
}

-- UDim / UDim2 -------------------------------------------------------
local UDMT = { __type = "UDim" }
local function UD(s, o) return setmetatable({ Scale = s or 0, Offset = o or 0 }, UDMT) end
UDMT.__add = function(a, b) return UD(a.Scale + b.Scale, a.Offset + b.Offset) end
UDMT.__sub = function(a, b) return UD(a.Scale - b.Scale, a.Offset - b.Offset) end
UDMT.__unm = function(a) return UD(-a.Scale, -a.Offset) end
UDMT.__eq = function(a, b) return a.Scale == b.Scale and a.Offset == b.Offset end
UDMT.__tostring = function(a) return string.format("%g, %g", a.Scale, a.Offset) end
UDMT.__index = function(_, k) error(tostring(k) .. " is not a valid member of UDim", 2) end
DT.UDim = { new = UD }

local UD2MT = { __type = "UDim2" }
local function UD2(xs, xo, ys, yo) return setmetatable({ X = UD(xs, xo), Y = UD(ys, yo) }, UD2MT) end
UD2MT.__index = function(u, k)
	if k == "Width" then return u.X elseif k == "Height" then return u.Y end
	if k == "Lerp" then
		return function(a, b, t)
			return UD2(a.X.Scale + (b.X.Scale - a.X.Scale) * t, a.X.Offset + (b.X.Offset - a.X.Offset) * t,
				a.Y.Scale + (b.Y.Scale - a.Y.Scale) * t, a.Y.Offset + (b.Y.Offset - a.Y.Offset) * t)
		end
	end
	error(tostring(k) .. " is not a valid member of UDim2", 2)
end
UD2MT.__add = function(a, b) return UD2(a.X.Scale + b.X.Scale, a.X.Offset + b.X.Offset, a.Y.Scale + b.Y.Scale, a.Y.Offset + b.Y.Offset) end
UD2MT.__sub = function(a, b) return UD2(a.X.Scale - b.X.Scale, a.X.Offset - b.X.Offset, a.Y.Scale - b.Y.Scale, a.Y.Offset - b.Y.Offset) end
UD2MT.__unm = function(a) return UD2(-a.X.Scale, -a.X.Offset, -a.Y.Scale, -a.Y.Offset) end
UD2MT.__eq = function(a, b) return a.X == b.X and a.Y == b.Y end
UD2MT.__tostring = function(a) return string.format("{%g, %g}, {%g, %g}", a.X.Scale, a.X.Offset, a.Y.Scale, a.Y.Offset) end
DT.UDim2 = {
	new = function(a, b, c, d)
		if typeOf(a) == "UDim" then return UD2(a.Scale, a.Offset, b.Scale, b.Offset) end
		return UD2(a or 0, b or 0, c or 0, d or 0)
	end,
	fromOffset = function(x, y) return UD2(0, x or 0, 0, y or 0) end,
	fromScale = function(x, y) return UD2(x or 0, 0, y or 0, 0) end,
}

-- Rect, NumberRange --------------------------------------------------
local RectMT = { __type = "Rect" }
DT.Rect = {
	new = function(a, b, c, d)
		local mn, mx
		if typeOf(a) == "Vector2" then mn, mx = a, b else mn, mx = V2(a or 0, b or 0), V2(c or 0, d or 0) end
		return setmetatable({ Min = mn, Max = mx, Width = mx.X - mn.X, Height = mx.Y - mn.Y }, RectMT)
	end,
}
local NRMT = { __type = "NumberRange" }
DT.NumberRange = { new = function(a, b) return setmetatable({ Min = a, Max = b or a }, NRMT) end }

-- Sequences ----------------------------------------------------------
local NSKMT = { __type = "NumberSequenceKeypoint" }
local NSMT = { __type = "NumberSequence" }
local CSKMT = { __type = "ColorSequenceKeypoint" }
local CSMT = { __type = "ColorSequence" }
DT.NumberSequenceKeypoint = { new = function(t, v, e) return setmetatable({ Time = t, Value = v, Envelope = e or 0 }, NSKMT) end }
DT.NumberSequence = {
	new = function(a, b)
		local kp
		if type(a) == "table" and getmetatable(a) == nil then kp = a
		elseif type(a) == "number" then
			kp = { DT.NumberSequenceKeypoint.new(0, a), DT.NumberSequenceKeypoint.new(1, b or a) }
		else error("NumberSequence.new: invalid arguments", 2) end
		return setmetatable({ Keypoints = kp }, NSMT)
	end,
}
DT.ColorSequenceKeypoint = { new = function(t, c) return setmetatable({ Time = t, Value = c }, CSKMT) end }
DT.ColorSequence = {
	new = function(a, b)
		local kp
		if type(a) == "table" and getmetatable(a) == nil then kp = a
		elseif typeOf(a) == "Color3" then
			kp = { DT.ColorSequenceKeypoint.new(0, a), DT.ColorSequenceKeypoint.new(1, b or a) }
		else error("ColorSequence.new: invalid arguments", 2) end
		return setmetatable({ Keypoints = kp }, CSMT)
	end,
}
NSMT.__eq = function(a, b)
	if #a.Keypoints ~= #b.Keypoints then return false end
	for i, k in ipairs(a.Keypoints) do
		local o = b.Keypoints[i]
		if k.Time ~= o.Time or k.Value ~= o.Value then return false end
	end
	return true
end
CSMT.__eq = function(a, b)
	if #a.Keypoints ~= #b.Keypoints then return false end
	for i, k in ipairs(a.Keypoints) do
		local o = b.Keypoints[i]
		if k.Time ~= o.Time or not (k.Value == o.Value) then return false end
	end
	return true
end

-- Font ---------------------------------------------------------------
local FontMT = { __type = "Font" }
local function mkFont(family, weight, style)
	return setmetatable({ Family = family or "rbxasset://fonts/families/LegacyArial.json",
		Weight = weight or Enum.FontWeight.Regular, Style = style or Enum.FontStyle.Normal }, FontMT)
end
FontMT.__index = function(f, k)
	if k == "Bold" then return f.Weight.Value >= 600 end
	error(tostring(k) .. " is not a valid member of Font", 2)
end
FontMT.__eq = function(a, b) return a.Family == b.Family and a.Weight == b.Weight and a.Style == b.Style end
FontMT.__tostring = function(f) return string.format("Font { Family = %s, Weight = %s, Style = %s }", f.Family, f.Weight.Name, f.Style.Name) end
local ENUM_FONT_FAMILY = {
	SourceSans = "SourceSansPro", SourceSansBold = "SourceSansPro", SourceSansSemibold = "SourceSansPro",
	SourceSansLight = "SourceSansPro", SourceSansItalic = "SourceSansPro",
	Gotham = "GothamSSm", GothamMedium = "GothamSSm", GothamBold = "GothamSSm", GothamBlack = "GothamSSm",
	GothamSemibold = "GothamSSm", Arial = "Arial", ArialBold = "Arial", Legacy = "LegacyArial",
	FredokaOne = "FredokaOne", LuckiestGuy = "LuckiestGuy", Bangers = "Bangers", Arcade = "PressStart2P",
	Highway = "HighwayGothic", Montserrat = "Montserrat", BuilderSans = "BuilderSans", Ubuntu = "Ubuntu",
	Roboto = "Roboto", RobotoMono = "RobotoMono", Code = "Inconsolata", Oswald = "Oswald",
}
local ENUM_FONT_WEIGHT = {
	SourceSansBold = "Bold", SourceSansSemibold = "SemiBold", SourceSansLight = "Light", GothamMedium = "Medium",
	GothamBold = "Bold", GothamBlack = "Heavy", GothamSemibold = "SemiBold", ArialBold = "Bold",
}
DT.Font = {
	new = mkFont,
	fromName = function(name, w, s) return mkFont("rbxasset://fonts/families/" .. name .. ".json", w, s) end,
	fromId = function(id, w, s) return mkFont("rbxassetid://" .. tostring(id), w, s) end,
	fromEnum = function(e)
		local name = e and e.Name or "SourceSans"
		local fam = ENUM_FONT_FAMILY[name] or name
		local w = Enum.FontWeight[ENUM_FONT_WEIGHT[name] or "Regular"]
		local st = name:find("Italic") and Enum.FontStyle.Italic or Enum.FontStyle.Normal
		return mkFont("rbxasset://fonts/families/" .. fam .. ".json", w, st)
	end,
}

-- TweenInfo ----------------------------------------------------------
local TIMT = { __type = "TweenInfo" }
DT.TweenInfo = {
	new = function(time, style, dir, repeatCount, reverses, delayTime)
		return setmetatable({ Time = time or 1, EasingStyle = style or Enum.EasingStyle.Quad,
			EasingDirection = dir or Enum.EasingDirection.Out, RepeatCount = repeatCount or 0,
			Reverses = reverses or false, DelayTime = delayTime or 0 }, TIMT)
	end,
}

-- Random (Park–Miller; deterministic, but NOT Roblox's exact sequence) ------
local RandMT = { __type = "Random" }
RandMT.__index = RandMT
local function rnext(r)
	r._s = (r._s * 16807) % 2147483647
	return (r._s - 1) / 2147483646
end
function RandMT:NextNumber(a, b)
	local u = rnext(self)
	if a == nil then return u end
	return a + (b - a) * u
end
function RandMT:NextInteger(a, b)
	if a > b then a, b = b, a end
	return a + math.min(math.floor(rnext(self) * (b - a + 1)), b - a)
end
function RandMT:NextUnitVector()
	local z = rnext(self) * 2 - 1
	local t = rnext(self) * math.pi * 2
	local r = math.sqrt(1 - z * z)
	return V3(r * math.cos(t), r * math.sin(t), z)
end
function RandMT:Shuffle(t)
	for i = #t, 2, -1 do
		local j = self:NextInteger(1, i)
		t[i], t[j] = t[j], t[i]
	end
end
function RandMT:Clone() return setmetatable({ _s = self._s }, RandMT) end
DT.Random = {
	new = function(seed)
		seed = math.floor(math.abs(tonumber(seed) or os.time())) % 2147483646 + 1
		local r = setmetatable({ _s = seed }, RandMT)
		for _ = 1, 3 do rnext(r) end
		return r
	end,
}

-- misc small types ---------------------------------------------------
DT.PhysicalProperties = { new = function(...) return { ... } end }
DT.Ray = { new = function(o, d) return { Origin = o, Direction = d, Unit = { Origin = o, Direction = d.Unit } } end }
DT.Region3 = { new = function(a, b) return { CFrame = cfT((a.X + b.X) / 2, (a.Y + b.Y) / 2, (a.Z + b.Z) / 2), Size = b - a } end }
DT.RaycastParams = { new = function() return { FilterDescendantsInstances = {}, FilterType = Enum.RaycastFilterType.Exclude, IgnoreWater = false } end }
DT.OverlapParams = { new = function() return { FilterDescendantsInstances = {}, FilterType = Enum.RaycastFilterType.Exclude } end }
DT.DateTime = {
	now = function() return { UnixTimestamp = os.time(), UnixTimestampMillis = os.time() * 1000,
		FormatLocalTime = function() return "" end, ToIsoDate = function() return "" end } end,
}
DT.Axes = { new = function(...) return { ... } end }
DT.Faces = { new = function(...) return { ... } end }
DT.CatalogSearchParams = { new = function() return {} end }

------------------------------------------------------------------
-- SCHEDULER (simulated time)
------------------------------------------------------------------
local now = 0
local queue = {}
local qseq = 0
local function recordError(err, co)
	local tb = co and debug.traceback(co) or ""
	local msg = tostring(err)
	table.insert(M.errors, { message = msg, traceback = tb, time = now })
	print("[preview][error] " .. msg)
end
M.recordError = recordError
local function resume(co, ...)
	if coroutine.status(co) ~= "suspended" then return end
	local ok, err = coroutine.resume(co, ...)
	if not ok then recordError(err, co) end
end
local function schedule(t, co, ...)
	qseq += 1
	table.insert(queue, { t = t, seq = qseq, co = co, args = table.pack(...) })
end
local function runQueue(untilT)
	local guard = 0
	while true do
		local bi, best
		for i, it in ipairs(queue) do
			if it.t <= untilT + 1e-9 and (best == nil or it.t < best.t or (it.t == best.t and it.seq < best.seq)) then
				bi, best = i, it
			end
		end
		if not bi then break end
		table.remove(queue, bi)
		if best.t > now then now = best.t end
		if not best.cancelled then resume(best.co, table.unpack(best.args, 1, best.args.n)) end
		guard += 1
		if guard > 200000 then
			recordError("preview: scheduler guard hit (a loop is re-scheduling itself without waiting?)")
			break
		end
	end
	if untilT > now then now = untilT end
end
local function toThread(f)
	if type(f) == "thread" then return f end
	if type(f) ~= "function" then error("invalid argument #1 (function or thread expected, got " .. typeOf(f) .. ")", 3) end
	return coroutine.create(f)
end
local task = {}
function task.spawn(f, ...)
	local co = toThread(f)
	resume(co, ...)
	return co
end
function task.defer(f, ...)
	local co = toThread(f)
	schedule(now, co, ...)
	return co
end
function task.delay(d, f, ...)
	local co = toThread(f)
	schedule(now + math.max(tonumber(d) or 0, 0), co, ...)
	return co
end
function task.wait(d)
	d = math.max(tonumber(d) or 0, 1 / 60)
	local start = now
	local co = coroutine.running()
	schedule(now + d, co)
	coroutine.yield()
	return now - start
end
function task.cancel(co)
	for _, it in ipairs(queue) do if it.co == co then it.cancelled = true end end
	pcall(coroutine.close, co)
end
function task.synchronize() end
function task.desynchronize() end
M.task = task
M.now = function() return now end

------------------------------------------------------------------
-- SIGNALS
------------------------------------------------------------------
local SignalMT = { __type = "RBXScriptSignal" }
SignalMT.__index = SignalMT
local ConnMT = { __type = "RBXScriptConnection" }
ConnMT.__index = ConnMT
function ConnMT:Disconnect()
	self.Connected = false
	local list = self._sig._conns
	for i, c in ipairs(list) do if c == self then table.remove(list, i) break end end
end
ConnMT.disconnect = ConnMT.Disconnect
local function newSignal(name) return setmetatable({ _conns = {}, _waiting = {}, _name = name }, SignalMT) end
function SignalMT:Connect(fn)
	if type(fn) ~= "function" then error("Attempt to connect failed: Passed value is not a function", 2) end
	local c = setmetatable({ Connected = true, _sig = self, _fn = fn }, ConnMT)
	table.insert(self._conns, c)
	return c
end
SignalMT.connect = SignalMT.Connect
SignalMT.ConnectParallel = SignalMT.Connect
function SignalMT:Once(fn)
	local c
	c = self:Connect(function(...)
		c:Disconnect()
		fn(...)
	end)
	return c
end
function SignalMT:Wait()
	table.insert(self._waiting, coroutine.running())
	return coroutine.yield()
end
SignalMT.wait = SignalMT.Wait
local function fire(sig, ...)
	if not sig then return end
	local list = table.clone(sig._conns)
	for _, c in ipairs(list) do
		if c.Connected then task.spawn(c._fn, ...) end
	end
	if #sig._waiting > 0 then
		local w = sig._waiting
		sig._waiting = {}
		for _, co in ipairs(w) do resume(co, ...) end
	end
end
M.newSignal, M.fire = newSignal, fire

------------------------------------------------------------------
-- INSTANCES
------------------------------------------------------------------
local S = {}        -- instance -> internal state
M.S = S
local INST_MT = { __type = "Instance" }
local CLASSES = {}
local nextId = 0

local function class(name, super, defaults, extra)
	extra = extra or {}
	CLASSES[name] = {
		name = name, super = super, defaults = defaults or {}, events = extra.events or {},
		methods = extra.methods or {}, getters = extra.getters or {}, setters = extra.setters or {},
		readonly = extra.readonly or {}, service = extra.service, abstract = extra.abstract,
	}
end
local function flatten(cls)
	if cls.flat then return cls end
	local chain, defaults, events, methods, getters, setters, readonly = {}, {}, {}, {}, {}, {}, {}
	local list, c = {}, cls
	while c do
		table.insert(list, 1, c)
		c = c.super and CLASSES[c.super]
	end
	for _, k in ipairs(list) do
		chain[k.name] = true
		for a, b in pairs(k.defaults) do defaults[a] = b end
		for _, e in ipairs(k.events) do events[e] = true end
		for a, b in pairs(k.methods) do methods[a] = b end
		for a, b in pairs(k.getters) do getters[a] = b end
		for a, b in pairs(k.setters) do setters[a] = b end
		for a, b in pairs(k.readonly) do readonly[a] = b end
	end
	cls.chain, cls.all, cls.allEvents, cls.allMethods = chain, defaults, events, methods
	cls.allGetters, cls.allSetters, cls.allReadonly = getters, setters, readonly
	cls.flat = true
	return cls
end
local function getClass(name)
	local c = CLASSES[name]
	return c and flatten(c)
end

local function isA(inst, cn)
	local st = S[inst]
	return st ~= nil and (st.cls.chain[cn] == true)
end
local function isInstance(v) return getmetatable(v) == INST_MT end

local function newInstance(className, quiet)
	local cls = getClass(className)
	if not cls then
		if not quiet then note("Instance.new: class '" .. tostring(className) .. "' is not mocked (created as a plain Instance)") end
		class(className, "Instance", {})
		cls = getClass(className)
	end
	nextId += 1
	local inst = setmetatable({}, INST_MT)
	S[inst] = { cls = cls, className = className, id = nextId, props = { Name = className }, children = {},
		attrs = {}, sig = {}, psig = {}, asig = {}, tags = {}, ext = {} }
	return inst
end
M.newInstance = newInstance

local function getSignal(inst, name)
	local st = S[inst]
	local s = st.sig[name]
	if not s then
		s = newSignal(name)
		st.sig[name] = s
	end
	return s
end
local function fireIf(inst, name, ...)
	local s = S[inst].sig[name]
	if s then fire(s, ...) end
end
local function propChanged(inst, st, k)
	local ps = st.psig[k]
	if ps then fire(ps) end
	local ch = st.sig.Changed
	if ch then fire(ch, k) end
end

local function rawget2(inst, k)
	local st = S[inst]
	local v = st.props[k]
	if v ~= nil then return v end
	local d = st.cls.all[k]
	if d == NIL then return nil end
	return d
end
M.prop = rawget2

local function isDescendantOf(inst, anc)
	local p = S[inst].parent
	while p do
		if p == anc then return true end
		p = S[p].parent
	end
	return false
end

local function setParent(inst, newParent)
	local st = S[inst]
	if st.locked then
		error("The Parent property of " .. st.props.Name .. " is locked, current parent: NULL, new parent " ..
			(newParent and S[newParent] and S[newParent].props.Name or "NULL"), 3)
	end
	if newParent ~= nil and not isInstance(newParent) then
		error("invalid argument: Parent must be an Instance or nil, got " .. typeOf(newParent), 3)
	end
	if newParent == inst or (newParent and isDescendantOf(newParent, inst)) then
		error("Attempt to set " .. st.props.Name .. " as its own parent would result in circular reference", 3)
	end
	local old = st.parent
	if old == newParent then return end
	if old then
		local list = S[old].children
		for i, c in ipairs(list) do if c == inst then table.remove(list, i) break end end
		fireIf(old, "ChildRemoved", inst)
	end
	st.parent = newParent
	if newParent then
		table.insert(S[newParent].children, inst)
		fireIf(newParent, "ChildAdded", inst)
		local a = newParent
		while a do
			fireIf(a, "DescendantAdded", inst)
			a = S[a].parent
		end
	end
	fireIf(inst, "AncestryChanged", inst, newParent)
	propChanged(inst, st, "Parent")
end
M.setParent = setParent

INST_MT.__index = function(inst, k)
	local st = S[inst]
	if not st then error("attempt to index a destroyed/unknown mock instance", 2) end
	local cls = st.cls
	local m = cls.allMethods[k]
	if m then return m end
	if k == "Parent" then return st.parent end
	if k == "ClassName" then return st.className end
	local g = cls.allGetters[k]
	if g then return g(inst, st) end
	local v = st.props[k]
	if v ~= nil then return v end
	local d = cls.all[k]
	if d ~= nil then
		if d == NIL then return nil end
		return d
	end
	if cls.allEvents[k] then return getSignal(inst, k) end
	for _, c in ipairs(st.children) do
		if S[c].props.Name == k then return c end
	end
	note("read of unknown property/child " .. st.className .. "." .. tostring(k) .. " (returned nil)")
	return nil
end
INST_MT.__newindex = function(inst, k, v)
	local st = S[inst]
	if k == "Parent" then return setParent(inst, v) end
	local cls = st.cls
	if cls.allReadonly[k] then error(tostring(k) .. " cannot be assigned to", 2) end
	local s = cls.allSetters[k]
	if s then return s(inst, st, v) end
	if cls.all[k] == nil and k ~= "Name" then
		note("set of unknown property " .. st.className .. "." .. tostring(k) .. " (stored, not rendered)")
	end
	if k == "Name" then v = tostring(v) end
	local old = rawget2(inst, k)
	st.props[k] = v
	if old ~= v then propChanged(inst, st, k) end
end
INST_MT.__tostring = function(inst) return S[inst].props.Name end
M.INST_MT = INST_MT

local function setRaw(inst, k, v)
	local st = S[inst]
	local old = rawget2(inst, k)
	st.props[k] = v
	if old ~= v then propChanged(inst, st, k) end
end
M.setRaw = setRaw

-- Instance methods ----------------------------------------------------
local IM = {}
local function children(inst) return S[inst].children end
local function eachDescendant(inst, fn)
	for _, c in ipairs(table.clone(S[inst].children)) do
		fn(c)
		eachDescendant(c, fn)
	end
end
M.eachDescendant = eachDescendant
function IM.GetChildren(self) return table.clone(S[self].children) end
IM.getChildren = IM.GetChildren
IM.children = IM.GetChildren
function IM.GetDescendants(self)
	local out = {}
	eachDescendant(self, function(d) table.insert(out, d) end)
	return out
end
function IM.FindFirstChild(self, name, recursive)
	for _, c in ipairs(S[self].children) do
		if S[c].props.Name == name then return c end
	end
	if recursive then
		for _, c in ipairs(S[self].children) do
			local r = IM.FindFirstChild(c, name, true)
			if r then return r end
		end
	end
	return nil
end
IM.findFirstChild = IM.FindFirstChild
function IM.FindFirstChildOfClass(self, cn)
	for _, c in ipairs(S[self].children) do if S[c].className == cn then return c end end
	return nil
end
function IM.FindFirstChildWhichIsA(self, cn, recursive)
	for _, c in ipairs(S[self].children) do if isA(c, cn) then return c end end
	if recursive then
		for _, c in ipairs(S[self].children) do
			local r = IM.FindFirstChildWhichIsA(c, cn, true)
			if r then return r end
		end
	end
	return nil
end
function IM.FindFirstDescendant(self, name) return IM.FindFirstChild(self, name, true) end
function IM.FindFirstAncestor(self, name)
	local p = S[self].parent
	while p do
		if S[p].props.Name == name then return p end
		p = S[p].parent
	end
	return nil
end
function IM.FindFirstAncestorOfClass(self, cn)
	local p = S[self].parent
	while p do
		if S[p].className == cn then return p end
		p = S[p].parent
	end
	return nil
end
function IM.FindFirstAncestorWhichIsA(self, cn)
	local p = S[self].parent
	while p do
		if isA(p, cn) then return p end
		p = S[p].parent
	end
	return nil
end
function IM.WaitForChild(self, name, timeout)
	local c = IM.FindFirstChild(self, name)
	if c then return c end
	local co = coroutine.running()
	local done = false
	local conn
	conn = getSignal(self, "ChildAdded"):Connect(function(ch)
		if not done and S[ch].props.Name == name then
			done = true
			conn:Disconnect()
			schedule(now, co, ch)
		end
	end)
	if timeout then
		task.delay(timeout, function()
			if not done then
				done = true
				conn:Disconnect()
				schedule(now, co, nil)
			end
		end)
	else
		task.delay(5, function()
			if not done then note("Infinite yield possible on '" .. IM.GetFullName(self) .. ":WaitForChild(\"" .. tostring(name) .. "\")'") end
		end)
	end
	return coroutine.yield()
end
function IM.IsA(self, cn) return isA(self, cn) end
IM.isA = IM.IsA
function IM.IsDescendantOf(self, anc) return isDescendantOf(self, anc) end
function IM.IsAncestorOf(self, d) return isDescendantOf(d, self) end
function IM.GetFullName(self)
	local parts = {}
	local p = self
	while p and p ~= M.game do
		table.insert(parts, 1, S[p].props.Name)
		p = S[p].parent
	end
	return table.concat(parts, ".")
end
function IM.GetAttribute(self, k) return S[self].attrs[k] end
function IM.SetAttribute(self, k, v)
	local st = S[self]
	if st.attrs[k] == v then return end
	st.attrs[k] = v
	fireIf(self, "AttributeChanged", k)
	if st.asig[k] then fire(st.asig[k]) end
end
function IM.GetAttributes(self) return table.clone(S[self].attrs) end
function IM.GetAttributeChangedSignal(self, k)
	local st = S[self]
	st.asig[k] = st.asig[k] or newSignal("AttributeChanged:" .. k)
	return st.asig[k]
end
function IM.GetPropertyChangedSignal(self, k)
	local st = S[self]
	st.psig[k] = st.psig[k] or newSignal("PropertyChanged:" .. k)
	return st.psig[k]
end
function IM.AddTag(self, t) S[self].tags[t] = true end
function IM.RemoveTag(self, t) S[self].tags[t] = nil end
function IM.HasTag(self, t) return S[self].tags[t] == true end
function IM.GetTags(self) local t = {} for k in pairs(S[self].tags) do table.insert(t, k) end return t end
function IM.GetActor() return nil end
function IM.IsPropertyModified(self, k) return S[self].props[k] ~= nil end
function IM.ResetPropertyToDefault(self, k) S[self].props[k] = nil end
function IM.GetDebugId(self) return tostring(S[self].id) end
function IM.ClearAllChildren(self)
	for _, c in ipairs(table.clone(S[self].children)) do IM.Destroy(c) end
end
local function cloneRec(inst, map)
	local st = S[inst]
	if st.props.Archivable == false then return nil end
	local c = newInstance(st.className, true)
	local cs = S[c]
	for k, v in pairs(st.props) do cs.props[k] = v end
	for k, v in pairs(st.attrs) do cs.attrs[k] = v end
	for k, v in pairs(st.tags) do cs.tags[k] = v end
	for k, v in pairs(st.ext) do cs.ext[k] = v end
	cs.worldPivot, cs.scale = st.worldPivot, st.scale
	map[inst] = c
	for _, ch in ipairs(st.children) do
		local cc = cloneRec(ch, map)
		if cc then setParent(cc, c) end
	end
	return c
end
function IM.Clone(self)
	local map = {}
	local c = cloneRec(self, map)
	for _, copy in pairs(map) do
		local cs = S[copy]
		for k, v in pairs(cs.props) do
			if isInstance(v) and map[v] then cs.props[k] = map[v] end
		end
	end
	return c
end
IM.clone = IM.Clone
function IM.Destroy(self)
	local st = S[self]
	if st.destroyed then return end
	fireIf(self, "Destroying")
	if st.parent then setParent(self, nil) end
	st.locked, st.destroyed = true, true
	for _, c in ipairs(table.clone(st.children)) do IM.Destroy(c) end
	for _, s in pairs(st.sig) do
		for _, c in ipairs(s._conns) do c.Connected = false end
		s._conns = {}
	end
	for _, s in pairs(st.psig) do
		for _, c in ipairs(s._conns) do c.Connected = false end
		s._conns = {}
	end
end
IM.destroy = IM.Destroy
IM.Remove = function(self) setParent(self, nil) end

local INSTANCE_EVENTS = { "Changed", "ChildAdded", "ChildRemoved", "DescendantAdded", "DescendantRemoving",
	"AncestryChanged", "AttributeChanged", "Destroying" }
class("Instance", nil, { Archivable = true }, { events = INSTANCE_EVENTS, methods = IM, abstract = true })

------------------------------------------------------------------
-- 3D: PVInstance / BasePart / Model
------------------------------------------------------------------
local function basePartsOf(inst)
	local out = {}
	eachDescendant(inst, function(d) if isA(d, "BasePart") then table.insert(out, d) end end)
	return out
end
local function partCF(p) return rawget2(p, "CFrame") end
-- Roblox keeps part rotations orthonormal; without this, repeated Model:PivotTo (which reads the pivot
-- back from the PrimaryPart) squares tiny scale errors every frame and the rotation collapses to zero.
local function orthoCF(c)
	local x0, x1, x2 = c[4], c[7], c[10]
	local n = math.sqrt(x0 * x0 + x1 * x1 + x2 * x2)
	if n < 1e-12 then return c end
	x0, x1, x2 = x0 / n, x1 / n, x2 / n
	local y0, y1, y2 = c[5], c[8], c[11]
	local d = x0 * y0 + x1 * y1 + x2 * y2
	y0, y1, y2 = y0 - x0 * d, y1 - x1 * d, y2 - x2 * d
	n = math.sqrt(y0 * y0 + y1 * y1 + y2 * y2)
	if n < 1e-12 then return c end
	y0, y1, y2 = y0 / n, y1 / n, y2 / n
	local z0, z1, z2 = x1 * y2 - x2 * y1, x2 * y0 - x0 * y2, x0 * y1 - x1 * y0
	return CF(c[1], c[2], c[3], x0, y0, z0, x1, y1, z1, x2, y2, z2)
end
M.orthoCF = orthoCF
local function setPartCF(p, cf) setRaw(p, "CFrame", orthoCF(cf)) end

local function aabbOfParts(parts, frame)
	-- bounding box of parts in the space of `frame` (rotation only); returns centre (world) cframe, size
	local inv = cfinv(frame)
	local mnx, mny, mnz, mxx, mxy, mxz = math.huge, math.huge, math.huge, -math.huge, -math.huge, -math.huge
	for _, p in ipairs(parts) do
		local cf, sz = cfmul(inv, partCF(p)), rawget2(p, "Size")
		local hx, hy, hz = sz.X / 2, sz.Y / 2, sz.Z / 2
		for _, sx in ipairs({ -1, 1 }) do
			for _, sy in ipairs({ -1, 1 }) do
				for _, sz2 in ipairs({ -1, 1 }) do
					local c = cfpoint(cf, V3(sx * hx, sy * hy, sz2 * hz))
					mnx, mny, mnz = math.min(mnx, c.X), math.min(mny, c.Y), math.min(mnz, c.Z)
					mxx, mxy, mxz = math.max(mxx, c.X), math.max(mxy, c.Y), math.max(mxz, c.Z)
				end
			end
		end
	end
	if mnx == math.huge then return cfmul(frame, cfT(0, 0, 0)), V3(0, 0, 0) end
	local centre = cfmul(frame, cfT((mnx + mxx) / 2, (mny + mxy) / 2, (mnz + mxz) / 2))
	return centre, V3(mxx - mnx, mxy - mny, mxz - mnz)
end

local function modelPivot(m)
	local st = S[m]
	local pp = st.props.PrimaryPart
	if pp and S[pp] and not S[pp].destroyed and isDescendantOf(pp, m) then
		return cfmul(partCF(pp), rawget2(pp, "PivotOffset"))
	end
	if st.worldPivot then return st.worldPivot end
	local parts = basePartsOf(m)
	if #parts == 0 then return cfT(0, 0, 0) end
	local c = aabbOfParts(parts, cfT(0, 0, 0))
	st.worldPivot = cfT(c[1], c[2], c[3])
	return st.worldPivot
end

local function moveModel(m, delta)
	for _, p in ipairs(basePartsOf(m)) do setPartCF(p, cfmul(delta, partCF(p))) end
	eachDescendant(m, function(d)
		local ds = S[d]
		if ds.worldPivot then ds.worldPivot = orthoCF(cfmul(delta, ds.worldPivot)) end
	end)
end

local PVM = {}
function PVM.GetPivot(self)
	if isA(self, "BasePart") then return cfmul(partCF(self), rawget2(self, "PivotOffset")) end
	return modelPivot(self)
end
function PVM.PivotTo(self, cf)
	if not isCF(cf) then error("PivotTo expects a CFrame", 2) end
	if isA(self, "BasePart") then
		setPartCF(self, cfmul(cf, cfinv(rawget2(self, "PivotOffset"))))
		return
	end
	local cur = modelPivot(self)
	local delta = cfmul(cf, cfinv(cur))
	moveModel(self, delta)
	local st = S[self]
	local pp = st.props.PrimaryPart
	if not (pp and isDescendantOf(pp, self)) then st.worldPivot = cf end
end
class("PVInstance", "Instance", {}, { methods = PVM, abstract = true })

local function shapeSetter(inst, st, v)
	local old = rawget2(inst, "Shape")
	st.props.Shape = v
	if old ~= v then propChanged(inst, st, "Shape") end
end
local BP_DEFAULTS = {
	Anchored = false, CanCollide = true, CanTouch = true, CanQuery = true, CastShadow = true, Locked = false,
	Massless = false, Size = V3(4, 1, 2), CFrame = cfT(0, 0, 0), Color = DT.Color3.fromRGB(163, 162, 165),
	Material = Enum.Material.Plastic, MaterialVariant = "", Transparency = 0, Reflectance = 0,
	LocalTransparencyModifier = 0, PivotOffset = cfT(0, 0, 0), CollisionGroup = "Default",
	TopSurface = Enum.SurfaceType.Smooth, BottomSurface = Enum.SurfaceType.Smooth,
	FrontSurface = Enum.SurfaceType.Smooth, BackSurface = Enum.SurfaceType.Smooth,
	LeftSurface = Enum.SurfaceType.Smooth, RightSurface = Enum.SurfaceType.Smooth,
	AssemblyLinearVelocity = V3(0, 0, 0), AssemblyAngularVelocity = V3(0, 0, 0), RootPriority = 0,
	CustomPhysicalProperties = NIL, EnableFluidForces = true, AudioCanCollide = true,
}
local BPM = {
	GetMass = function(self) local s = rawget2(self, "Size") return s.X * s.Y * s.Z * 0.7 end,
	GetConnectedParts = function() return {} end, GetTouchingParts = function() return {} end,
	GetJoints = function() return {} end, BreakJoints = function() end, MakeJoints = function() end,
	ApplyImpulse = function() end, ApplyAngularImpulse = function() end, ApplyImpulseAtPosition = function() end,
	SetNetworkOwner = function() end, GetNetworkOwner = function() return nil end,
	SetNetworkOwnershipAuto = function() end, CanSetNetworkOwnership = function() return false end,
	GetRootPart = function(self) return self end, Resize = function() return false end,
	GetVelocityAtPosition = function() return V3(0, 0, 0) end, GetClosestPointOnSurface = function(_, p) return p end,
	CanCollideWith = function() return false end, IsGrounded = function(self) return rawget2(self, "Anchored") end,
	SubtractAsync = function(self) return self end, UnionAsync = function(self) return self end,
}
local BP_GETTERS = {
	Position = function(inst) return rawget2(inst, "CFrame").Position end,
	Orientation = function(inst)
		local rx, ry, rz = CFM.ToOrientation(rawget2(inst, "CFrame"))
		return V3(math.deg(rx), math.deg(ry), math.deg(rz))
	end,
	Rotation = function(inst)
		local rx, ry, rz = CFM.ToEulerAnglesXYZ(rawget2(inst, "CFrame"))
		return V3(math.deg(rx), math.deg(ry), math.deg(rz))
	end,
	BrickColor = function(inst) local c = rawget2(inst, "Color") return DT.BrickColor.new(c) end,
	AssemblyMass = function(inst) return BPM.GetMass(inst) end,
	AssemblyRootPart = function(inst) return inst end,
	ExtentsSize = function(inst) return rawget2(inst, "Size") end,
	Velocity = function() return V3(0, 0, 0) end, RotVelocity = function() return V3(0, 0, 0) end,
}
local BP_SETTERS = {
	Position = function(inst, st, v)
		local cf = rawget2(inst, "CFrame")
		setRaw(inst, "CFrame", CF(v.X, v.Y, v.Z, cf[4], cf[5], cf[6], cf[7], cf[8], cf[9], cf[10], cf[11], cf[12]))
	end,
	Orientation = function(inst, st, v)
		local p = rawget2(inst, "CFrame").Position
		setRaw(inst, "CFrame", cfmul(cfT(p.X, p.Y, p.Z), DT.CFrame.fromOrientation(math.rad(v.X), math.rad(v.Y), math.rad(v.Z))))
	end,
	Rotation = function(inst, st, v)
		local p = rawget2(inst, "CFrame").Position
		setRaw(inst, "CFrame", cfmul(cfT(p.X, p.Y, p.Z), DT.CFrame.Angles(math.rad(v.X), math.rad(v.Y), math.rad(v.Z))))
	end,
	BrickColor = function(inst, st, v) setRaw(inst, "Color", v.Color) end,
	BrickColorName = function(inst, st, v) setRaw(inst, "Color", DT.BrickColor.new(v).Color) end,
	Size = function(inst, st, v)
		if not isV3(v) then error("Size must be a Vector3, got " .. typeOf(v), 3) end
		setRaw(inst, "Size", V3(math.max(v.X, 0.001), math.max(v.Y, 0.001), math.max(v.Z, 0.001)))
	end,
	CFrame = function(inst, st, v)
		if not isCF(v) then error("CFrame must be a CFrame, got " .. typeOf(v), 3) end
		setRaw(inst, "CFrame", orthoCF(v))
	end,
	Velocity = function() end, RotVelocity = function() end,
	Shape = shapeSetter,
}
class("BasePart", "PVInstance", BP_DEFAULTS, { methods = BPM, getters = BP_GETTERS, setters = BP_SETTERS,
	events = { "Touched", "TouchEnded" }, abstract = true })
class("Part", "BasePart", { Shape = Enum.PartType.Block })
class("WedgePart", "BasePart", {})
class("CornerWedgePart", "BasePart", {})
class("TrussPart", "BasePart", { Size = V3(2, 2, 2), Style = Enum.Style.AlternatingSupports })
class("SpawnLocation", "Part", { Duration = 10, Neutral = true, AllowTeamChangeOnTouch = false, Enabled = true })
class("Seat", "Part", { Disabled = false, Occupant = NIL })
class("VehicleSeat", "BasePart", { Disabled = false, Occupant = NIL, MaxSpeed = 25, Torque = 10, TurnSpeed = 1 })
class("MeshPart", "BasePart", { MeshId = "", TextureID = "", DoubleSided = false, RenderFidelity = Enum.RenderFidelity.Automatic,
	CollisionFidelity = Enum.CollisionFidelity.Default, MeshSize = V3(1, 1, 1) })
class("UnionOperation", "BasePart", { UsePartColor = false, RenderFidelity = Enum.RenderFidelity.Automatic })
class("NegateOperation", "BasePart", {})
class("IntersectOperation", "BasePart", {})
class("PartOperation", "BasePart", {})
class("Terrain", "BasePart", {
	Decoration = true, GrassLength = 0.7, WaterColor = DT.Color3.fromRGB(12, 84, 92), WaterReflectance = 1,
	WaterTransparency = 0.3, WaterWaveSize = 0.15, WaterWaveSpeed = 10, MaterialColors = NIL,
}, {
	setters = {
		GrassLength = function(inst, st, v)
			if P.grassScriptable == false then error("GrassLength is not scriptable (preview option grassScriptable=false)", 3) end
			setRaw(inst, "GrassLength", math.clamp(v, 0.1, 1))
		end,
		Decoration = function(inst, st, v)
			if P.grassScriptable == false then error("Decoration is not scriptable (preview option grassScriptable=false)", 3) end
			setRaw(inst, "Decoration", v)
		end,
	},
	getters = {
		Decoration = function(inst)
			if P.grassScriptable == false then error("Decoration is not scriptable (preview option grassScriptable=false)", 3) end
			return rawget2(inst, "Decoration")
		end,
	},
	methods = {
		FillBlock = function(self, cf, size, mat) table.insert(S[self].ext.fills, { kind = "Block", cf = cf, size = size, material = mat }) end,
		FillBall = function(self, c, r, mat) table.insert(S[self].ext.fills, { kind = "Ball", cf = cfT(c.X, c.Y, c.Z), size = V3(r * 2, r * 2, r * 2), material = mat }) end,
		FillCylinder = function(self, cf, h, r, mat) table.insert(S[self].ext.fills, { kind = "Cylinder", cf = cf, size = V3(r * 2, h, r * 2), material = mat }) end,
		FillWedge = function(self, cf, size, mat) table.insert(S[self].ext.fills, { kind = "Wedge", cf = cf, size = size, material = mat }) end,
		FillRegion = function(self, region, res, mat) table.insert(S[self].ext.fills, { kind = "Block", cf = region.CFrame, size = region.Size, material = mat }) end,
		Clear = function(self) S[self].ext.fills = {} end,
		GetMaterialColor = function(self, mat)
			local c = S[self].ext.colors[mat.Name]
			if c then return c end
			local d = ({ Grass = { 106, 127, 63 }, Sand = { 143, 126, 95 }, Rock = { 102, 108, 111 }, Water = { 12, 84, 92 },
				Mud = { 58, 46, 36 }, Ground = { 102, 92, 59 }, Snow = { 195, 199, 218 }, Asphalt = { 115, 123, 107 },
				LeafyGrass = { 115, 132, 74 }, Concrete = { 127, 102, 63 }, Slate = { 63, 127, 107 } })[mat.Name] or { 127, 127, 127 }
			return DT.Color3.fromRGB(d[1], d[2], d[3])
		end,
		SetMaterialColor = function(self, mat, c) S[self].ext.colors[mat.Name] = c end,
		ReadVoxels = function() return {}, {} end, WriteVoxels = function() end,
		CellCenterToWorld = function(_, x, y, z) return V3(x * 4 + 2, y * 4 + 2, z * 4 + 2) end,
		WorldToCell = function(_, p) return V3(math.floor(p.X / 4), math.floor(p.Y / 4), math.floor(p.Z / 4)) end,
		ReplaceMaterial = function() end, PasteRegion = function() end, CopyRegion = function() return nil end,
		GetTerrainWireframe = function() return {} end,
	},
})

local MM = {}
function MM.GetBoundingBox(self)
	local st = S[self]
	local pp = st.props.PrimaryPart
	local frame = (pp and isDescendantOf(pp, self)) and partCF(pp) or modelPivot(self)
	local rot = CF(0, 0, 0, frame[4], frame[5], frame[6], frame[7], frame[8], frame[9], frame[10], frame[11], frame[12])
	return aabbOfParts(basePartsOf(self), rot)
end
function MM.GetExtentsSize(self)
	local _, s = MM.GetBoundingBox(self)
	return s
end
function MM.GetScale(self) return S[self].scale or 1 end
function MM.ScaleTo(self, s)
	if type(s) ~= "number" or s <= 0 then error("ScaleTo: scale must be a positive number", 2) end
	local st = S[self]
	local f = s / (st.scale or 1)
	local pivot = modelPivot(self)
	local inv = cfinv(pivot)
	for _, p in ipairs(basePartsOf(self)) do
		local rel = cfmul(inv, partCF(p))
		rel[1], rel[2], rel[3] = rel[1] * f, rel[2] * f, rel[3] * f
		setPartCF(p, cfmul(pivot, rel))
		local sz = rawget2(p, "Size")
		setRaw(p, "Size", V3(sz.X * f, sz.Y * f, sz.Z * f))
	end
	eachDescendant(self, function(d)
		if isA(d, "Light") then setRaw(d, "Range", rawget2(d, "Range") * f) end
		if isA(d, "Attachment") then local cf = rawget2(d, "CFrame") setRaw(d, "CFrame", CF(cf[1] * f, cf[2] * f, cf[3] * f, cf[4], cf[5], cf[6], cf[7], cf[8], cf[9], cf[10], cf[11], cf[12])) end
		local ds = S[d]
		if ds.worldPivot then
			local rel = cfmul(inv, ds.worldPivot)
			rel[1], rel[2], rel[3] = rel[1] * f, rel[2] * f, rel[3] * f
			ds.worldPivot = cfmul(pivot, rel)
		end
	end)
	st.scale = s
end
function MM.MoveTo(self, pos)
	local cur = modelPivot(self)
	PVM.PivotTo(self, CF(pos.X, pos.Y, pos.Z, cur[4], cur[5], cur[6], cur[7], cur[8], cur[9], cur[10], cur[11], cur[12]))
end
function MM.TranslateBy(self, v) PVM.PivotTo(self, modelPivot(self) + v) end
function MM.SetPrimaryPartCFrame(self, cf)
	local pp = S[self].props.PrimaryPart
	if not pp then error("Model:SetPrimaryPartCFrame() failed because no PrimaryPart has been set", 2) end
	moveModel(self, cfmul(cf, cfinv(partCF(pp))))
end
function MM.GetPrimaryPartCFrame(self)
	local pp = S[self].props.PrimaryPart
	return pp and partCF(pp) or nil
end
function MM.GetModelCFrame(self) return (MM.GetBoundingBox(self)) end
function MM.GetModelSize(self) return MM.GetExtentsSize(self) end
function MM.BreakJoints() end
function MM.MakeJoints() end
function MM.AddPersistentPlayer() end
class("Model", "PVInstance", { PrimaryPart = NIL, LevelOfDetail = Enum.ModelLevelOfDetail.Automatic,
	ModelStreamingMode = Enum.ModelStreamingMode.Default }, {
	methods = MM,
	getters = { WorldPivot = function(inst) return modelPivot(inst) end },
	setters = {
		WorldPivot = function(inst, st, v) st.worldPivot = v end,
		PrimaryPart = function(inst, st, v)
			if v ~= nil and not isA(v, "BasePart") then error("PrimaryPart must be a BasePart", 3) end
			setRaw(inst, "PrimaryPart", v)
		end,
	},
})
class("Actor", "Model", {})
class("WorldRoot", "Model", {}, { abstract = true })

------------------------------------------------------------------
-- Other world objects
------------------------------------------------------------------
class("Folder", "Instance", {})
class("Configuration", "Instance", {})
class("ValueBase", "Instance", {}, { events = {}, abstract = true })
for _, v in ipairs({ { "StringValue", "" }, { "NumberValue", 0 }, { "IntValue", 0 }, { "BoolValue", false },
	{ "ObjectValue", NIL }, { "Color3Value", C3(0, 0, 0) }, { "Vector3Value", V3(0, 0, 0) }, { "CFrameValue", cfT(0, 0, 0) } }) do
	class(v[1], "ValueBase", { Value = v[2] })
end
class("Attachment", "Instance", { CFrame = cfT(0, 0, 0), Visible = false }, {
	getters = {
		Position = function(inst) return rawget2(inst, "CFrame").Position end,
		WorldCFrame = function(inst)
			local p = S[inst].parent
			local base = (p and isA(p, "BasePart")) and partCF(p) or cfT(0, 0, 0)
			return cfmul(base, rawget2(inst, "CFrame"))
		end,
		WorldPosition = function(inst)
			local p = S[inst].parent
			local base = (p and isA(p, "BasePart")) and partCF(p) or cfT(0, 0, 0)
			return cfmul(base, rawget2(inst, "CFrame")).Position
		end,
	},
	setters = {
		Position = function(inst, st, v)
			local cf = rawget2(inst, "CFrame")
			setRaw(inst, "CFrame", CF(v.X, v.Y, v.Z, cf[4], cf[5], cf[6], cf[7], cf[8], cf[9], cf[10], cf[11], cf[12]))
		end,
	},
})
class("Light", "Instance", { Brightness = 1, Color = C3(1, 1, 1), Enabled = true, Shadows = false }, { abstract = true })
class("PointLight", "Light", { Range = 8 })
class("SpotLight", "Light", { Range = 16, Angle = 90, Face = Enum.NormalId.Front })
class("SurfaceLight", "Light", { Range = 16, Angle = 90, Face = Enum.NormalId.Front })
class("SurfaceAppearance", "Instance", { ColorMap = "", MetalnessMap = "", NormalMap = "", RoughnessMap = "",
	AlphaMode = Enum.AlphaMode.Overlay, Color = C3(1, 1, 1) })
class("SpecialMesh", "Instance", { MeshType = Enum.MeshType.Head, MeshId = "", TextureId = "", Scale = V3(1, 1, 1),
	Offset = V3(0, 0, 0), VertexColor = V3(1, 1, 1) })
class("Decal", "Instance", { Texture = "", Face = Enum.NormalId.Front, Transparency = 0, Color3 = C3(1, 1, 1), ZIndex = 1 })
class("Texture", "Decal", { StudsPerTileU = 2, StudsPerTileV = 2, OffsetStudsU = 0, OffsetStudsV = 0 })
class("Highlight", "Instance", { Adornee = NIL, Enabled = true, FillColor = C3(1, 0, 0), FillTransparency = 0.5,
	OutlineColor = C3(1, 1, 1), OutlineTransparency = 0, DepthMode = Enum.HighlightDepthMode.AlwaysOnTop })
class("SelectionBox", "Instance", { Adornee = NIL, Color3 = C3(0.05, 0.4, 0.75), LineThickness = 0.15, Transparency = 0, Visible = true })
for _, n in ipairs({ "ParticleEmitter", "Beam", "Trail", "Fire", "Smoke", "Sparkles", "Explosion" }) do
	class(n, "Instance", { Enabled = true, Color = NIL, Transparency = NIL, LightEmission = 0, Texture = "",
		Attachment0 = NIL, Attachment1 = NIL, Rate = 20, Size = NIL, Lifetime = NIL, Speed = NIL },
		{ methods = { Emit = function() end, Clear = function() end } })
end
class("Sound", "Instance", { SoundId = "", Volume = 0.5, Looped = false, Playing = false, PlaybackSpeed = 1, TimePosition = 0,
	TimeLength = 0, IsPlaying = false, IsLoaded = true, RollOffMaxDistance = 10000 }, {
	events = { "Ended", "Loaded", "Played", "Paused", "Resumed", "Stopped" },
	methods = { Play = function(self) setRaw(self, "Playing", true) end, Stop = function(self) setRaw(self, "Playing", false) end,
		Pause = function(self) setRaw(self, "Playing", false) end, Resume = function(self) setRaw(self, "Playing", true) end },
})
class("SoundGroup", "Instance", { Volume = 0.5 })
class("Animation", "Instance", { AnimationId = "" })
class("Humanoid", "Instance", { Health = 100, MaxHealth = 100, WalkSpeed = 16, JumpPower = 50, DisplayName = "" },
	{ methods = { LoadAnimation = function() return { Play = function() end, Stop = function() end } end } })
class("Animator", "Instance", {}, { methods = { LoadAnimation = function() return { Play = function() end, Stop = function() end } end } })
for _, n in ipairs({ "Weld", "WeldConstraint", "Motor6D", "HingeConstraint", "RopeConstraint", "AlignPosition",
	"AlignOrientation", "BodyVelocity", "BodyPosition", "BodyGyro", "LinearVelocity", "AngularVelocity" }) do
	class(n, "Instance", { Part0 = NIL, Part1 = NIL, C0 = cfT(0, 0, 0), C1 = cfT(0, 0, 0), Enabled = true,
		Attachment0 = NIL, Attachment1 = NIL })
end
class("ClickDetector", "Instance", { MaxActivationDistance = 32, CursorIcon = "" }, { events = { "MouseClick", "MouseHoverEnter", "MouseHoverLeave" } })
class("ProximityPrompt", "Instance", { ActionText = "Interact", ObjectText = "", Enabled = true, HoldDuration = 0,
	KeyboardKeyCode = Enum.KeyCode.E, MaxActivationDistance = 10 }, { events = { "Triggered", "PromptShown", "PromptHidden" } })
class("LuaSourceContainer", "Instance", {}, { abstract = true })
class("BaseScript", "LuaSourceContainer", { Enabled = true, Disabled = false, RunContext = Enum.RunContext.Legacy })
class("Script", "BaseScript", {})
class("LocalScript", "Script", {})
class("ModuleScript", "LuaSourceContainer", {})
class("RemoteEvent", "Instance", {}, { events = { "OnClientEvent", "OnServerEvent" },
	methods = { FireServer = function() end, FireClient = function() end, FireAllClients = function() end } })
class("UnreliableRemoteEvent", "RemoteEvent", {})
class("RemoteFunction", "Instance", {}, { methods = { InvokeServer = function() return nil end } })
class("BindableEvent", "Instance", {}, { events = { "Event" },
	methods = { Fire = function(self, ...) fire(getSignal(self, "Event"), ...) end } })
class("BindableFunction", "Instance", {}, { methods = { Invoke = function(self, ...)
	local cb = S[self].props.OnInvoke
	if cb then return cb(...) end
	return nil
end } })

-- Camera -------------------------------------------------------------
local CAMERA_DEFAULT = cfmul(cfT(0, 20, 20), DT.CFrame.Angles(math.rad(-45), 0, 0))
class("Camera", "PVInstance", { CFrame = CAMERA_DEFAULT, Focus = cfT(0, 0, 0), FieldOfView = 70,
	CameraType = Enum.CameraType.Custom, CameraSubject = NIL, HeadLocked = true, HeadScale = 1,
	FieldOfViewMode = Enum.FieldOfViewMode.Vertical, DiagonalFieldOfView = 0, MaxAxisFieldOfView = 0 }, {
	getters = {
		ViewportSize = function() return V2(P.viewport[1], P.viewport[2]) end,
		NearPlaneZ = function() return -0.1 end,
	},
	setters = {
		FieldOfView = function(inst, st, v) setRaw(inst, "FieldOfView", math.clamp(v, 1, 120)) end,
		CFrame = function(inst, st, v)
			if not isCF(v) then error("CFrame must be a CFrame, got " .. typeOf(v), 3) end
			setRaw(inst, "CFrame", v)
		end,
	},
	readonly = { ViewportSize = true },
	methods = {
		GetPivot = function(self) return rawget2(self, "CFrame") end,
		PivotTo = function(self, cf) setRaw(self, "CFrame", cf) end,
		WorldToViewportPoint = function(self, p)
			local lp = cfpoint(cfinv(rawget2(self, "CFrame")), p)
			local vw, vh = P.viewport[1], P.viewport[2]
			local f = 1 / math.tan(math.rad(rawget2(self, "FieldOfView")) / 2)
			local depth = -lp.Z
			local x = (lp.X / depth) * f * (vh / vw)
			local y = (lp.Y / depth) * f
			return V3((x + 1) / 2 * vw, (1 - y) / 2 * vh, depth), depth > 0
		end,
		ScreenPointToRay = function(self, x, y, d)
			local cf = rawget2(self, "CFrame")
			local vw, vh = P.viewport[1], P.viewport[2]
			local t = math.tan(math.rad(rawget2(self, "FieldOfView")) / 2)
			local dir = cfvector(cf, V3((x / vw * 2 - 1) * t * vw / vh, (1 - y / vh * 2) * t, -1)).Unit
			return DT.Ray.new(cf.Position + dir * (d or 0), dir)
		end,
		GetPartsObscuringTarget = function() return {} end,
		Interpolate = function() end,
		ZoomToExtents = function() end,
	},
	events = { "InterpolationFinished" },
})
M.CameraMethods = CLASSES.Camera.methods
CLASSES.Camera.methods.WorldToScreenPoint = CLASSES.Camera.methods.WorldToViewportPoint
CLASSES.Camera.methods.ViewportPointToRay = CLASSES.Camera.methods.ScreenPointToRay

-- Lighting & post effects ----------------------------------------------
class("PostEffect", "Instance", { Enabled = true }, { abstract = true })
class("BloomEffect", "PostEffect", { Intensity = 1, Size = 24, Threshold = 2 })
class("BlurEffect", "PostEffect", { Size = 24 })
class("ColorCorrectionEffect", "PostEffect", { Brightness = 0, Contrast = 0, Saturation = 0, TintColor = C3(1, 1, 1) })
class("ColorGradingEffect", "PostEffect", { TonemapperPreset = Enum.TonemapperPreset.Default })
class("DepthOfFieldEffect", "PostEffect", { FarIntensity = 0.75, FocusDistance = 0.05, InFocusRadius = 10, NearIntensity = 0.75 })
class("SunRaysEffect", "PostEffect", { Intensity = 0.25, Spread = 1 })
class("Sky", "Instance", { StarCount = 3000, CelestialBodiesShown = true, MoonAngularSize = 11, SunAngularSize = 21,
	SkyboxBk = "", SkyboxDn = "", SkyboxFt = "", SkyboxLf = "", SkyboxRt = "", SkyboxUp = "", MoonTextureId = "", SunTextureId = "",
	SkyboxOrientation = V3(0, 0, 0) })
class("Atmosphere", "Instance", { Density = 0.395, Offset = 0, Color = DT.Color3.fromRGB(199, 199, 199),
	Decay = DT.Color3.fromRGB(106, 112, 125), Glare = 0, Haze = 0 })
class("Clouds", "Instance", { Cover = 0.5, Density = 0.7, Color = C3(1, 1, 1), Enabled = true })

------------------------------------------------------------------
-- GUI
------------------------------------------------------------------
local GUI_INSET = 58
-- absolute layout (same rules as render.html, without text measuring)
local function guiAbs(g)
	local st = S[g]
	local p = st.parent
	local px, py, pw, ph, pk = 0, 0, 0, 0, 1
	if p and isA(p, "GuiObject") then
		px, py, pw, ph, pk = guiAbs(p)
		local pad = IM.FindFirstChildOfClass(p, "UIPadding")
		if pad then
			local l, r, t, b = rawget2(pad, "PaddingLeft"), rawget2(pad, "PaddingRight"), rawget2(pad, "PaddingTop"), rawget2(pad, "PaddingBottom")
			local ow, oh = pw, ph
			px += l.Scale * ow + l.Offset * pk
			py += t.Scale * oh + t.Offset * pk
			pw -= (l.Scale + r.Scale) * ow + (l.Offset + r.Offset) * pk
			ph -= (t.Scale + b.Scale) * oh + (t.Offset + b.Offset) * pk
		end
	elseif p and isA(p, "SurfaceGui") then
		local cs = rawget2(p, "CanvasSize")
		pw, ph = cs.X, cs.Y
	elseif p and isA(p, "LayerCollector") then
		pw, ph = P.viewport[1], P.viewport[2]
		if isA(p, "ScreenGui") and not rawget2(p, "IgnoreGuiInset") then py, ph = GUI_INSET, ph - GUI_INSET end
	else
		return 0, 0, 0, 0, 1
	end
	if not isA(g, "GuiObject") then return px, py, pw, ph, pk end
	local sc = IM.FindFirstChildOfClass(g, "UIScale")
	local s = sc and rawget2(sc, "Scale") or 1
	local size, pos, ap = rawget2(g, "Size"), rawget2(g, "Position"), rawget2(g, "AnchorPoint")
	local w = (size.X.Scale * pw + size.X.Offset * pk) * s
	local h = (size.Y.Scale * ph + size.Y.Offset * pk) * s
	local x = px + pos.X.Scale * pw + pos.X.Offset * pk - ap.X * w
	local y = py + pos.Y.Scale * ph + pos.Y.Offset * pk - ap.Y * h
	return x, y, w, h, pk * s
end
M.guiAbs = guiAbs

class("GuiBase", "Instance", {}, { abstract = true })
class("GuiBase2d", "GuiBase", { AutoLocalize = true, RootLocalizationTable = NIL, SelectionBehaviorDown = Enum.SelectionBehavior.Escape,
	SelectionGroup = false }, {
	abstract = true,
	getters = {
		AbsoluteSize = function(inst) local _, _, w, h = guiAbs(inst) return V2(w, h) end,
		AbsolutePosition = function(inst) local x, y = guiAbs(inst) return V2(x, y) end,
		AbsoluteRotation = function(inst) return rawget2(inst, "Rotation") or 0 end,
	},
	readonly = { AbsoluteSize = true, AbsolutePosition = true, AbsoluteRotation = true },
})
class("LayerCollector", "GuiBase2d", { Enabled = true, ResetOnSpawn = true, ZIndexBehavior = Enum.ZIndexBehavior.Sibling }, { abstract = true })
class("ScreenGui", "LayerCollector", { DisplayOrder = 0, IgnoreGuiInset = false, ScreenInsets = Enum.ScreenInsets.CoreUISafeInsets,
	ClipToDeviceSafeArea = true, SafeAreaCompatibility = Enum.SafeAreaCompatibility.FullscreenExtension })
class("SurfaceGuiBase", "LayerCollector", { Adornee = NIL, Face = Enum.NormalId.Front, Active = true }, { abstract = true })
class("SurfaceGui", "SurfaceGuiBase", { AlwaysOnTop = false, Brightness = 1, CanvasSize = V2(800, 600), ClipsDescendants = true,
	LightInfluence = 1, PixelsPerStud = 50, SizingMode = Enum.SurfaceGuiSizingMode.FixedSize, ToolPunchThroughDistance = 0,
	ZOffset = 0, MaxDistance = 0 })
class("BillboardGui", "LayerCollector", { Adornee = NIL, AlwaysOnTop = false, Brightness = 1, ClipsDescendants = false,
	ExtentsOffset = V3(0, 0, 0), ExtentsOffsetWorldSpace = V3(0, 0, 0), LightInfluence = 0, MaxDistance = math.huge,
	Size = DT.UDim2.new(0, 0, 0, 0), SizeOffset = V2(0, 0), StudsOffset = V3(0, 0, 0), StudsOffsetWorldSpace = V3(0, 0, 0) })

local GUIOBJ_DEFAULTS = {
	Active = false, AnchorPoint = V2(0, 0), AutomaticSize = Enum.AutomaticSize.None,
	BackgroundColor3 = DT.Color3.fromRGB(163, 162, 165), BackgroundTransparency = 0,
	BorderColor3 = DT.Color3.fromRGB(27, 42, 53), BorderMode = Enum.BorderMode.Outline, BorderSizePixel = 1,
	ClipsDescendants = false, Interactable = true, LayoutOrder = 0, NextSelectionDown = NIL, NextSelectionLeft = NIL,
	NextSelectionRight = NIL, NextSelectionUp = NIL, Position = DT.UDim2.new(0, 0, 0, 0), Rotation = 0, Selectable = false,
	SelectionImageObject = NIL, SelectionOrder = 0, Size = DT.UDim2.new(0, 100, 0, 100),
	SizeConstraint = Enum.SizeConstraint.RelativeXY, Visible = true, ZIndex = 1, Transparency = 0,
}
local GUIOBJ_EVENTS = { "InputBegan", "InputChanged", "InputEnded", "MouseEnter", "MouseLeave", "MouseMoved",
	"MouseWheelBackward", "MouseWheelForward", "SelectionGained", "SelectionLost", "TouchLongPress", "TouchPan",
	"TouchPinch", "TouchRotate", "TouchSwipe", "TouchTap" }
class("GuiObject", "GuiBase2d", GUIOBJ_DEFAULTS, {
	abstract = true, events = GUIOBJ_EVENTS,
	setters = {
		Transparency = function(inst, st, v) setRaw(inst, "BackgroundTransparency", v) end,
		Size = function(inst, st, v)
			if typeOf(v) ~= "UDim2" then error("Size must be a UDim2, got " .. typeOf(v), 3) end
			setRaw(inst, "Size", v)
		end,
		Position = function(inst, st, v)
			if typeOf(v) ~= "UDim2" then error("Position must be a UDim2, got " .. typeOf(v), 3) end
			setRaw(inst, "Position", v)
		end,
	},
	getters = { Transparency = function(inst) return rawget2(inst, "BackgroundTransparency") end },
	methods = {
		TweenPosition = function(self, pos) setRaw(self, "Position", pos) return true end,
		TweenSize = function(self, size) setRaw(self, "Size", size) return true end,
		TweenSizeAndPosition = function(self, size, pos) setRaw(self, "Size", size) setRaw(self, "Position", pos) return true end,
	},
})
class("Frame", "GuiObject", { Style = Enum.FrameStyle.Custom })
class("CanvasGroup", "GuiObject", { GroupTransparency = 0, GroupColor3 = C3(1, 1, 1) })
class("ScrollingFrame", "GuiObject", { CanvasSize = DT.UDim2.new(0, 0, 2, 0), CanvasPosition = V2(0, 0),
	AutomaticCanvasSize = Enum.AutomaticSize.None, ScrollBarThickness = 12, ScrollBarImageColor3 = C3(0, 0, 0),
	ScrollBarImageTransparency = 0, ScrollingDirection = Enum.ScrollingDirection.XY, ScrollingEnabled = true,
	ElasticBehavior = Enum.ElasticBehavior.WhenScrollable, VerticalScrollBarInset = Enum.ScrollBarInset.None,
	HorizontalScrollBarInset = Enum.ScrollBarInset.None, ClipsDescendants = true })
class("ViewportFrame", "GuiObject", { CurrentCamera = NIL, Ambient = DT.Color3.fromRGB(200, 200, 200),
	LightColor = DT.Color3.fromRGB(140, 140, 140), LightDirection = V3(-1, -1, -1), ImageColor3 = C3(1, 1, 1), ImageTransparency = 0 })
local TEXT_DEFAULTS = {
	Text = "Label", TextSize = 14, TextColor3 = DT.Color3.fromRGB(27, 42, 53), TextTransparency = 0,
	TextStrokeColor3 = C3(0, 0, 0), TextStrokeTransparency = 1, TextScaled = false, TextWrapped = false,
	TextXAlignment = Enum.TextXAlignment.Center, TextYAlignment = Enum.TextYAlignment.Center,
	TextTruncate = Enum.TextTruncate.None, RichText = false, LineHeight = 1, MaxVisibleGraphemes = -1,
	Font = Enum.Font.Legacy, FontFace = mkFont("rbxasset://fonts/families/LegacyArial.json"), TextDirection = Enum.TextDirection.Auto,
	OpenTypeFeatures = "", LocalizedText = "",
}
local function textBounds(inst)
	local s = rawget2(inst, "TextSize")
	local txt = tostring(rawget2(inst, "Text"))
	local n = utf8.len(txt) or #txt
	return V2(n * s * 0.6, s * rawget2(inst, "LineHeight"))
end
local TEXT_EXTRA = {
	getters = { TextBounds = textBounds, TextFits = function() return true end, ContentText = function(inst) return rawget2(inst, "Text") end },
	readonly = { TextBounds = true, TextFits = true },
	setters = {
		Font = function(inst, st, v) setRaw(inst, "Font", v) setRaw(inst, "FontFace", DT.Font.fromEnum(v)) end,
		Text = function(inst, st, v) setRaw(inst, "Text", tostring(v)) end,
	},
}
class("TextLabel", "GuiObject", TEXT_DEFAULTS, TEXT_EXTRA)
class("GuiButton", "GuiObject", { AutoButtonColor = true, Modal = false, Selected = false, Style = Enum.ButtonStyle.Custom,
	Active = true, Selectable = true }, {
	abstract = true,
	events = { "Activated", "MouseButton1Click", "MouseButton1Down", "MouseButton1Up", "MouseButton2Click",
		"MouseButton2Down", "MouseButton2Up", "SecondaryActivated" },
})
local btnText = table.clone(TEXT_DEFAULTS)
btnText.Text = "Button"
class("TextButton", "GuiButton", btnText, TEXT_EXTRA)
class("TextBox", "GuiObject", (function()
	local t = table.clone(TEXT_DEFAULTS)
	t.Text, t.PlaceholderText, t.PlaceholderColor3, t.ClearTextOnFocus, t.MultiLine, t.TextEditable =
		"TextBox", "", DT.Color3.fromRGB(178, 178, 178), true, false, true
	t.Active, t.Selectable, t.CursorPosition = true, true, 1
	return t
end)(), {
	getters = TEXT_EXTRA.getters, readonly = TEXT_EXTRA.readonly, setters = TEXT_EXTRA.setters,
	events = { "FocusLost", "Focused", "ReturnPressedFromOnScreenKeyboard" },
	methods = { CaptureFocus = function() end, ReleaseFocus = function() end, IsFocused = function() return false end },
})
local IMG_DEFAULTS = { Image = "", ImageColor3 = C3(1, 1, 1), ImageTransparency = 0, ImageRectOffset = V2(0, 0),
	ImageRectSize = V2(0, 0), ScaleType = Enum.ScaleType.Stretch, SliceCenter = DT.Rect.new(0, 0, 0, 0), SliceScale = 1,
	TileSize = DT.UDim2.new(1, 0, 1, 0), ResampleMode = Enum.ResamplerMode.Default, ImageContent = NIL }
class("ImageLabel", "GuiObject", IMG_DEFAULTS, { getters = { IsLoaded = function() return true end } })
local imgBtn = table.clone(IMG_DEFAULTS)
imgBtn.HoverImage, imgBtn.PressedImage = "", ""
class("ImageButton", "GuiButton", imgBtn, { getters = { IsLoaded = function() return true end } })
class("VideoFrame", "GuiObject", { Video = "", Looped = false, Playing = false, Volume = 1 })

-- UI components
class("UIBase", "Instance", {}, { abstract = true })
class("UIComponent", "UIBase", {}, { abstract = true })
class("UICorner", "UIComponent", { CornerRadius = UD(0, 8) })
class("UIStroke", "UIComponent", { ApplyStrokeMode = Enum.ApplyStrokeMode.Contextual, Color = C3(0, 0, 0),
	Enabled = true, LineJoinMode = Enum.LineJoinMode.Round, Thickness = 1, Transparency = 0,
	BorderStrokePosition = Enum.BorderStrokePosition.Outer, StrokeSizingMode = Enum.StrokeSizingMode.FixedSize, ZIndex = 1 })
class("UIGradient", "UIComponent", { Color = DT.ColorSequence.new(C3(1, 1, 1)), Enabled = true, Offset = V2(0, 0),
	Rotation = 0, Transparency = DT.NumberSequence.new(0) })
class("UIPadding", "UIComponent", { PaddingBottom = UD(0, 0), PaddingLeft = UD(0, 0), PaddingRight = UD(0, 0), PaddingTop = UD(0, 0) })
class("UIScale", "UIComponent", { Scale = 1 })
class("UIConstraint", "UIComponent", {}, { abstract = true })
class("UIAspectRatioConstraint", "UIConstraint", { AspectRatio = 1, AspectType = Enum.AspectType.FitWithinMaxSize,
	DominantAxis = Enum.DominantAxis.Width })
class("UISizeConstraint", "UIConstraint", { MaxSize = V2(math.huge, math.huge), MinSize = V2(0, 0) })
class("UITextSizeConstraint", "UIConstraint", { MaxTextSize = 100, MinTextSize = 1 })
class("UIFlexItem", "UIComponent", { FlexMode = Enum.UIFlexMode.None, GrowRatio = 0, ShrinkRatio = 0,
	ItemLineAlignment = Enum.ItemLineAlignment.Automatic })
class("UILayout", "UIComponent", {}, { abstract = true, getters = { AbsoluteContentSize = function() return V2(0, 0) end } })
class("UIGridStyleLayout", "UILayout", { FillDirection = Enum.FillDirection.Horizontal,
	HorizontalAlignment = Enum.HorizontalAlignment.Left, VerticalAlignment = Enum.VerticalAlignment.Top,
	SortOrder = Enum.SortOrder.LayoutOrder }, { abstract = true })
class("UIListLayout", "UIGridStyleLayout", { FillDirection = Enum.FillDirection.Vertical, Padding = UD(0, 0), Wraps = false,
	HorizontalFlex = Enum.UIFlexAlignment.None, VerticalFlex = Enum.UIFlexAlignment.None,
	ItemLineAlignment = Enum.ItemLineAlignment.Automatic })
class("UIGridLayout", "UIGridStyleLayout", { CellPadding = DT.UDim2.new(0, 5, 0, 5), CellSize = DT.UDim2.new(0, 100, 0, 100),
	FillDirectionMaxCells = 0, StartCorner = Enum.StartCorner.TopLeft })
class("UIPageLayout", "UIGridStyleLayout", { Animated = true, Circular = false, EasingStyle = Enum.EasingStyle.Back,
	Padding = UD(0, 0), TweenTime = 1 }, { methods = { JumpTo = function() end, JumpToIndex = function() end, Next = function() end, Previous = function() end } })
class("UITableLayout", "UIGridStyleLayout", {})

------------------------------------------------------------------
-- Tween
------------------------------------------------------------------
local activeTweens = {} -- inst -> prop -> tween
class("TweenBase", "Instance", { PlaybackState = Enum.PlaybackState.Begin }, { abstract = true, events = { "Completed" } })
local function finishTween(tw, state)
	local ts = S[tw]
	if ts.ext.finished then return end
	ts.ext.finished = true
	setRaw(tw, "PlaybackState", state)
	local per = activeTweens[ts.ext.inst]
	if per then
		for k, t in pairs(per) do if t == tw then per[k] = nil end end
	end
	fireIf(tw, "Completed", state)
end
class("Tween", "TweenBase", { Instance = NIL, TweenInfo = NIL }, {
	methods = {
		Play = function(self)
			local ts = S[self]
			local e = ts.ext
			if e.finished then e.finished = false end
			local inst, info, goals = e.inst, e.info, e.goals
			if not S[inst] then return end
			setRaw(self, "PlaybackState", Enum.PlaybackState.Playing)
			e.token = (e.token or 0) + 1
			local token = e.token
			-- a newer tween on the same property cancels the older one (Roblox behaviour)
			activeTweens[inst] = activeTweens[inst] or {}
			for k in pairs(goals) do
				local old = activeTweens[inst][k]
				if old and old ~= self then finishTween(old, Enum.PlaybackState.Cancelled) end
				activeTweens[inst][k] = self
			end
			local reps = info.RepeatCount
			local apply = function()
				if e.token ~= token or e.finished or S[inst].destroyed then return end
				if not e.start then
					e.start = {}
					for k in pairs(goals) do e.start[k] = inst[k] end
				end
				for k, v in pairs(goals) do
					-- a finite tween that reverses ends where it started
					if info.Reverses and reps >= 0 then inst[k] = e.start[k] else inst[k] = v end
				end
			end
			e.start = nil
			if info.DelayTime > 0 then
				task.delay(info.DelayTime, apply)
			else
				-- capture start values before applying
				e.start = {}
				for k in pairs(goals) do e.start[k] = inst[k] end
				apply()
			end
			if reps >= 0 then
				local total = info.DelayTime + info.Time * (info.Reverses and 2 or 1) * (reps + 1)
				task.delay(total, function()
					if e.token == token and not e.finished then finishTween(self, Enum.PlaybackState.Completed) end
				end)
			end
		end,
		Cancel = function(self) finishTween(self, Enum.PlaybackState.Cancelled) end,
		Pause = function(self) setRaw(self, "PlaybackState", Enum.PlaybackState.Paused) end,
	},
})

------------------------------------------------------------------
-- SERVICES
------------------------------------------------------------------
local function service(name, defaults, extra)
	extra = extra or {}
	extra.service = true
	class(name, extra.super or "Instance", defaults, extra)
end
local EASE = {
	Linear = function(t) return t end,
	Quad = function(t) return t * t end,
	Cubic = function(t) return t * t * t end,
	Quart = function(t) return t ^ 4 end,
	Quint = function(t) return t ^ 5 end,
	Sine = function(t) return 1 - math.cos(t * math.pi / 2) end,
	Exponential = function(t) return t == 0 and 0 or 2 ^ (10 * (t - 1)) end,
	Circular = function(t) return 1 - math.sqrt(1 - t * t) end,
	Back = function(t) return t * t * (2.70158 * t - 1.70158) end,
	Elastic = function(t) return t == 0 and 0 or t == 1 and 1 or -(2 ^ (10 * (t - 1))) * math.sin((t - 1.075) * 2 * math.pi / 0.3) end,
	Bounce = function(t)
		t = 1 - t
		local v
		if t < 1 / 2.75 then v = 7.5625 * t * t
		elseif t < 2 / 2.75 then t -= 1.5 / 2.75; v = 7.5625 * t * t + 0.75
		elseif t < 2.5 / 2.75 then t -= 2.25 / 2.75; v = 7.5625 * t * t + 0.9375
		else t -= 2.625 / 2.75; v = 7.5625 * t * t + 0.984375 end
		return 1 - v
	end,
}
service("TweenService", {}, {
	methods = {
		Create = function(_, inst, info, goals)
			if not isInstance(inst) then error("TweenService:Create - first argument must be an Instance", 2) end
			if typeOf(info) ~= "TweenInfo" then error("TweenService:Create - second argument must be a TweenInfo", 2) end
			for k in pairs(goals) do
				local ok = pcall(function() return inst[k] end)
				if not ok then error("TweenService:Create property named '" .. tostring(k) .. "' cannot be tweened", 2) end
			end
			local tw = newInstance("Tween")
			local e = S[tw].ext
			e.inst, e.info, e.goals = inst, info, table.clone(goals)
			S[tw].props.Instance, S[tw].props.TweenInfo = inst, info
			return tw
		end,
		GetValue = function(_, alpha, style, dir)
			local f = EASE[style and style.Name or "Quad"] or EASE.Quad
			local d = dir and dir.Name or "In"
			alpha = math.clamp(alpha, 0, 1)
			if d == "In" then return f(alpha) end
			if d == "Out" then return 1 - f(1 - alpha) end
			if alpha < 0.5 then return f(alpha * 2) / 2 end
			return 1 - f((1 - alpha) * 2) / 2
		end,
	},
})
local renderBound = {}
service("RunService", {}, {
	events = { "RenderStepped", "Heartbeat", "Stepped", "PreRender", "PreAnimation", "PreSimulation", "PostSimulation" },
	methods = {
		IsStudio = function() return false end, IsClient = function() return true end, IsServer = function() return false end,
		IsRunning = function() return true end, IsRunMode = function() return false end, IsEdit = function() return false end,
		BindToRenderStep = function(_, name, prio, fn) table.insert(renderBound, { name = name, prio = prio, fn = fn }) end,
		UnbindFromRenderStep = function(_, name)
			for i = #renderBound, 1, -1 do if renderBound[i].name == name then table.remove(renderBound, i) end end
		end,
	},
})
local lightingDefaults = {
	Ambient = DT.Color3.fromRGB(70, 70, 70), Brightness = 2, ClockTime = 14.5, ColorShift_Bottom = C3(0, 0, 0),
	ColorShift_Top = C3(0, 0, 0), EnvironmentDiffuseScale = 1, EnvironmentSpecularScale = 1, ExposureCompensation = 0,
	FogColor = DT.Color3.fromRGB(192, 192, 192), FogEnd = 100000, FogStart = 0, GeographicLatitude = 0,
	GlobalShadows = true, OutdoorAmbient = DT.Color3.fromRGB(70, 70, 70), ShadowSoftness = 0.2,
	Technology = Enum.Technology.Future, LightingStyle = Enum.LightingStyle.Realistic, PrioritizeLightingQuality = true,
}
service("Lighting", lightingDefaults, {
	events = { "LightingChanged" },
	getters = {
		TimeOfDay = function(inst)
			local t = rawget2(inst, "ClockTime")
			local h = math.floor(t)
			local m = math.floor((t - h) * 60)
			local s = math.floor(((t - h) * 60 - m) * 60)
			return string.format("%02d:%02d:%02d", h, m, s)
		end,
	},
	setters = {
		TimeOfDay = function(inst, st, v)
			local h, m, s = tostring(v):match("(%d+):?(%d*):?(%d*)")
			setRaw(inst, "ClockTime", (tonumber(h) or 0) + (tonumber(m) or 0) / 60 + (tonumber(s) or 0) / 3600)
		end,
		ClockTime = function(inst, st, v) setRaw(inst, "ClockTime", v % 24) end,
	},
	methods = {
		GetMinutesAfterMidnight = function(self) return rawget2(self, "ClockTime") * 60 end,
		SetMinutesAfterMidnight = function(self, m) setRaw(self, "ClockTime", (m / 60) % 24) end,
		GetSunDirection = function(self)
			local a = (rawget2(self, "ClockTime") / 24) * math.pi * 2 - math.pi / 2
			return V3(math.cos(a), math.sin(a), 0).Unit
		end,
		GetMoonDirection = function(self)
			local a = (rawget2(self, "ClockTime") / 24) * math.pi * 2 - math.pi / 2
			return V3(-math.cos(a), -math.sin(a), 0).Unit
		end,
	},
})
service("Workspace", { Gravity = 196.2, FallenPartsDestroyHeight = -500, StreamingEnabled = false,
	DistributedGameTime = 0, AirDensity = 0.0012, SignalBehavior = Enum.SignalBehavior.Default }, {
	super = "WorldRoot",
	getters = { CurrentCamera = function(inst) return IM.FindFirstChildOfClass(inst, "Camera") end,
		Terrain = function(inst) return IM.FindFirstChildOfClass(inst, "Terrain") end,
		DistributedGameTime = function() return now end },
	setters = { CurrentCamera = function(inst, st, v) if v then setParent(v, inst) end end },
	methods = {
		Raycast = function() return nil end, Blockcast = function() return nil end, Spherecast = function() return nil end,
		Shapecast = function() return nil end, GetPartBoundsInBox = function() return {} end,
		GetPartBoundsInRadius = function() return {} end, GetPartsInPart = function() return {} end,
		FindPartOnRay = function() return nil end, FindPartOnRayWithIgnoreList = function() return nil end,
		FindPartOnRayWithWhitelist = function() return nil end, GetServerTimeNow = function() return 1.7e9 + now end,
		GetRealPhysicsFPS = function() return 60 end, BulkMoveTo = function(_, parts, cfs)
			for i, p in ipairs(parts) do setPartCF(p, cfs[i]) end
		end,
	},
	events = { "PersistentLoaded" },
})
service("Players", { MaxPlayers = 1, RespawnTime = 5, CharacterAutoLoads = true }, {
	events = { "PlayerAdded", "PlayerRemoving" },
	getters = { LocalPlayer = function(inst) return IM.FindFirstChildOfClass(inst, "Player") end },
	methods = {
		GetPlayers = function(self)
			local t = {}
			for _, c in ipairs(S[self].children) do if isA(c, "Player") then table.insert(t, c) end end
			return t
		end,
		GetPlayerFromCharacter = function() return nil end, GetPlayerByUserId = function(self, id)
			for _, c in ipairs(S[self].children) do if isA(c, "Player") and rawget2(c, "UserId") == id then return c end end
			return nil
		end,
		GetUserThumbnailAsync = function(_, id) return "rbxthumb://type=AvatarHeadShot&id=" .. tostring(id) .. "&w=150&h=150", true end,
		GetNameFromUserIdAsync = function() return "Player1" end, GetUserIdFromNameAsync = function() return 1 end,
		GetHumanoidDescriptionFromUserId = function() return nil end,
		GetFriendsAsync = function() return { GetCurrentPage = function() return {} end, IsFinished = true } end,
	},
})
class("Player", "Instance", { UserId = 1, DisplayName = "Player1", AccountAge = 365, Character = NIL, Team = NIL,
	TeamColor = DT.BrickColor.new("White"), Neutral = true, MembershipType = Enum.MembershipType.None,
	CameraMaxZoomDistance = 128, CameraMinZoomDistance = 0.5, CameraMode = Enum.CameraMode.Classic,
	DevComputerMovementMode = Enum.DevComputerMovementMode.UserChoice, LocaleId = "en-us", HealthDisplayDistance = 100 }, {
	events = { "CharacterAdded", "CharacterRemoving", "CharacterAppearanceLoaded", "Chatted", "Idled" },
	methods = {
		GetMouse = function(self)
			local ext = S[self].ext
			if not ext.mouse then
				ext.mouse = { X = P.viewport[1] / 2, Y = P.viewport[2] / 2, Hit = cfT(0, 0, 0), Target = nil, Icon = "",
					Button1Down = newSignal("Button1Down"), Button1Up = newSignal("Button1Up"), Move = newSignal("Move"),
					Button2Down = newSignal("Button2Down"), Button2Up = newSignal("Button2Up"), WheelForward = newSignal("WheelForward"),
					WheelBackward = newSignal("WheelBackward"), Idle = newSignal("Idle"), ViewSizeX = P.viewport[1], ViewSizeY = P.viewport[2] }
			end
			return ext.mouse
		end,
		Kick = function() end, GetRankInGroup = function() return 0 end, GetRoleInGroup = function() return "Guest" end,
		IsInGroup = function() return false end, GetJoinData = function() return {} end, LoadCharacter = function() end,
		GetFriendsOnline = function() return {} end, IsFriendsWith = function() return false end,
		HasAppearanceLoaded = function() return true end, DistanceFromCharacter = function() return 0 end,
		GetNetworkPing = function() return 0.05 end, RequestStreamAroundAsync = function() end,
	},
})
class("BasePlayerGui", "Instance", {}, { abstract = true })
class("PlayerGui", "BasePlayerGui", { ScreenOrientation = Enum.ScreenOrientation.LandscapeSensor, SelectionImageObject = NIL },
	{ methods = { GetGuiObjectsAtPosition = function() return {} end, SetTopbarTransparency = function() end } })
class("StarterGear", "Instance", {})
class("Backpack", "Instance", {})
class("PlayerScripts", "Instance", {})
service("StarterGui", { ShowDevelopmentGui = true, ScreenOrientation = Enum.ScreenOrientation.LandscapeSensor }, {
	super = "BasePlayerGui",
	methods = {
		SetCoreGuiEnabled = function(_, t, on) M.coreGui = M.coreGui or {} M.coreGui[tostring(t)] = on end,
		GetCoreGuiEnabled = function() return false end,
		SetCore = function() end, GetCore = function() return nil end,
	},
})
service("GuiService", { AutoSelectGuiEnabled = true, GuiNavigationEnabled = true, MenuIsOpen = false, SelectedObject = NIL,
	TouchControlsEnabled = true, PreferredTransparency = 1, ReducedMotionEnabled = false }, {
	events = { "MenuOpened", "MenuClosed" },
	methods = {
		GetGuiInset = function() return V2(0, GUI_INSET), V2(0, 0) end,
		IsTenFootInterface = function() return false end, AddSelectionParent = function() end, RemoveSelectionGroup = function() end,
		Select = function() end, CloseInspectMenu = function() end, InspectPlayerFromUserId = function() end,
	},
	getters = { TopbarInset = function() return DT.Rect.new(0, 0, P.viewport[1], GUI_INSET) end },
})
service("UserInputService", { MouseBehavior = Enum.MouseBehavior.Default, MouseIconEnabled = true, MouseDeltaSensitivity = 1,
	ModalEnabled = false, OverrideMouseIconBehavior = Enum.OverrideMouseIconBehavior.None }, {
	events = { "InputBegan", "InputEnded", "InputChanged", "LastInputTypeChanged", "GamepadConnected", "GamepadDisconnected",
		"TouchStarted", "TouchEnded", "TouchMoved", "TouchTap", "TouchLongPress", "JumpRequest", "WindowFocused",
		"WindowFocusReleased", "TextBoxFocused", "TextBoxFocusReleased", "PointerAction" },
	getters = {
		TouchEnabled = function() return false end, KeyboardEnabled = function() return true end,
		MouseEnabled = function() return true end, GamepadEnabled = function() return false end,
		VREnabled = function() return false end, AccelerometerEnabled = function() return false end,
		GyroscopeEnabled = function() return false end, PreferredInput = function() return Enum.PreferredInput.KeyboardAndMouse end,
	},
	methods = {
		GetMouseLocation = function() return V2(M.mouse.X, M.mouse.Y) end, GetMouseDelta = function() return V2(0, 0) end,
		IsKeyDown = function() return false end, IsMouseButtonPressed = function() return false end,
		GetKeysPressed = function() return {} end, GetMouseButtonsPressed = function() return {} end,
		GetLastInputType = function() return Enum.UserInputType.MouseMovement end,
		GetGamepadConnected = function() return false end, GetConnectedGamepads = function() return {} end,
		GetNavigationGamepads = function() return {} end, IsGamepadButtonDown = function() return false end,
		GetGamepadState = function() return {} end, GetSupportedGamepadKeyCodes = function() return {} end,
		GetFocusedTextBox = function() return nil end, GetStringForKeyCode = function(_, k) return k.Name end,
		GetImageForKeyCode = function() return "" end, GetDeviceRotation = function() return cfT(0, 0, 0) end,
	},
})
M.mouse = { X = 960, Y = 540 }
local casActions = {}
service("ContextActionService", {}, {
	events = { "LocalToolEquipped", "LocalToolUnequipped" },
	methods = {
		BindAction = function(_, name, fn, touch, ...) casActions[name] = { fn = fn, keys = { ... }, prio = 0 } end,
		BindActionAtPriority = function(_, name, fn, touch, prio, ...) casActions[name] = { fn = fn, keys = { ... }, prio = prio } end,
		UnbindAction = function(_, name) casActions[name] = nil end, UnbindAllActions = function() table.clear(casActions) end,
		GetButton = function() return nil end, SetTitle = function() end, SetImage = function() end, SetPosition = function() end,
		SetDescription = function() end, GetAllBoundActionInfo = function() return {} end,
	},
})
M.casActions = casActions
service("ContentProvider", { BaseUrl = "https://www.roblox.com/", RequestQueueSize = 0 }, {
	methods = {
		PreloadAsync = function(_, list, cb)
			if cb then for _, v in ipairs(list) do pcall(cb, tostring(v), Enum.AssetFetchStatus.Success) end end
		end,
		GetAssetFetchStatus = function() return Enum.AssetFetchStatus.Success end,
	},
})
service("ReplicatedStorage", {})
service("ReplicatedFirst", {}, { methods = { RemoveDefaultLoadingScreen = function() end } })
service("ServerStorage", {})
service("ServerScriptService", {})
service("StarterPlayer", { CameraMaxZoomDistance = 128, CharacterWalkSpeed = 16 })
class("StarterPlayerScripts", "Instance", {})
class("StarterCharacterScripts", "Instance", {})
service("StarterPack", {})
service("SoundService", { AmbientReverb = Enum.ReverbType.NoReverb, RespectFilteringEnabled = true },
	{ methods = { PlayLocalSound = function() end, GetListener = function() return Enum.ListenerType.Camera end } })
service("Teams", {}, { methods = { GetTeams = function() return {} end } })
service("Chat", {})
service("TextChatService", {})
service("Debris", {}, { methods = { AddItem = function(_, inst, t) task.delay(t or 10, function() if S[inst] then IM.Destroy(inst) end end) end } })
service("CollectionService", {}, {
	methods = {
		GetTagged = function(_, tag)
			local out = {}
			eachDescendant(M.game, function(d) if S[d].tags[tag] then table.insert(out, d) end end)
			return out
		end,
		AddTag = function(_, i, t) S[i].tags[t] = true end, RemoveTag = function(_, i, t) S[i].tags[t] = nil end,
		HasTag = function(_, i, t) return S[i].tags[t] == true end,
		GetTags = function(_, i) local t = {} for k in pairs(S[i].tags) do table.insert(t, k) end return t end,
		GetInstanceAddedSignal = function() return newSignal("InstanceAdded") end,
		GetInstanceRemovedSignal = function() return newSignal("InstanceRemoved") end,
	},
})
service("TextService", {}, {
	methods = {
		GetTextSize = function(_, text, size, font, frame)
			local n = utf8.len(text) or #text
			return V2(math.min(n * size * 0.6, frame and frame.X or math.huge), size)
		end,
		GetTextBoundsAsync = function(_, params) local n = utf8.len(params.Text or "") or 0 return V2(n * (params.Size or 14) * 0.6, params.Size or 14) end,
		FilterStringAsync = function(_, s) return { GetNonChatStringForBroadcastAsync = function() return s end } end,
	},
})
service("HttpService", { HttpEnabled = false }, {
	methods = {
		GenerateGUID = function(_, braces)
			local g = string.format("%08X-%04X-%04X-%04X-%012X", math.random(0, 0x7fffffff), math.random(0, 0xffff),
				math.random(0, 0xffff), math.random(0, 0xffff), math.random(0, 0x7fffffff))
			return braces == false and g or "{" .. g .. "}"
		end,
		JSONEncode = function(_, v) return M.json(v) end,
		JSONDecode = function() error("HttpService:JSONDecode is not mocked", 2) end,
		UrlEncode = function(_, s) return (tostring(s):gsub("[^%w%-_%.~]", function(c) return string.format("%%%02X", string.byte(c)) end)) end,
		GetAsync = function() error("HttpService is not available in the preview", 2) end,
		PostAsync = function() error("HttpService is not available in the preview", 2) end,
	},
})
service("MarketplaceService", {}, {
	events = { "PromptGamePassPurchaseFinished", "PromptProductPurchaseFinished", "PromptPurchaseFinished" },
	methods = { UserOwnsGamePassAsync = function() return false end, PromptGamePassPurchase = function() end,
		PromptProductPurchase = function() end, PromptPurchase = function() end,
		GetProductInfo = function() return { Name = "Item", PriceInRobux = 0 } end },
})
service("LocalizationService", { RobloxLocaleId = "en-us", SystemLocaleId = "en-us" },
	{ methods = { GetCountryRegionForPlayerAsync = function() return "US" end, GetTranslatorForPlayerAsync = function() return nil end } })
service("PolicyService", {}, { methods = { GetPolicyInfoForPlayerAsync = function() return { AreAdsAllowed = false, ArePaidRandomItemsRestricted = false, AllowedExternalLinkReferences = {} } end } })
service("SocialService", {}, { methods = { CanSendGameInviteAsync = function() return false end, PromptGameInvite = function() end } })
service("BadgeService", {}, { methods = { UserHasBadgeAsync = function() return false end, AwardBadge = function() return false end } })
service("VRService", { VREnabled = false }, {})
service("HapticService", {}, { methods = { IsVibrationSupported = function() return false end, SetMotor = function() end } })
service("PathfindingService", {}, {})
service("PhysicsService", {}, { methods = { RegisterCollisionGroup = function() end, CollisionGroupSetCollidable = function() end } })
service("AssetService", {}, {})
service("GroupService", {}, {})
service("UserService", {}, {})
service("AvatarEditorService", {}, {})
service("ProximityPromptService", { Enabled = true }, { events = { "PromptTriggered" } })
service("TeleportService", {}, { methods = { Teleport = function() end, TeleportAsync = function() end, GetLocalPlayerTeleportData = function() return nil end } })
service("DataStoreService", {}, {})
service("MessagingService", {}, {})
service("Stats", {}, {})
service("TestService", {}, {})
service("ScriptContext", {}, { events = { "Error" } })
service("LogService", {}, { events = { "MessageOut" }, methods = { GetLogHistory = function() return {} end } })
service("ControllerService", {}, {})
service("NetworkClient", {}, {})
service("CoreGui", {}, {})

class("DataModel", "Instance", { PlaceId = 0, GameId = 0, JobId = "preview", CreatorId = 0, PlaceVersion = 1 }, {
	events = { "Loaded", "Close" },
	methods = {
		GetService = function(self, name)
			local st = S[self]
			local svc = st.ext.services[name]
			if svc then return svc end
			local cls = getClass(name)
			if not cls then
				note("game:GetService('" .. tostring(name) .. "') is not mocked (a plain stand-in was returned)")
				class(name, "Instance", {})
			end
			svc = newInstance(name, true)
			S[svc].props.Name = name
			st.ext.services[name] = svc
			setParent(svc, self)
			S[svc].locked = true
			return svc
		end,
		IsLoaded = function() return true end,
		BindToClose = function() end,
		GetJobsInfo = function() return {} end,
	},
})
CLASSES.DataModel.methods.FindService = function(self, name) return S[self].ext.services[name] end
CLASSES.DataModel.methods.service = CLASSES.DataModel.methods.GetService
CLASSES.DataModel.methods.getService = CLASSES.DataModel.methods.GetService

------------------------------------------------------------------
-- WORLD SETUP
------------------------------------------------------------------
local game = newInstance("DataModel")
S[game].props.Name = "Game"
S[game].ext.services = {}
M.game = game
local workspace = game:GetService("Workspace")
local cam = newInstance("Camera")
S[cam].props.Name = "Camera"
setParent(cam, workspace)
local terrain = newInstance("Terrain")
S[terrain].props.Name = "Terrain"
S[terrain].ext.fills, S[terrain].ext.colors = {}, {}
setParent(terrain, workspace)
M.workspace, M.camera, M.terrain = workspace, cam, terrain
for _, n in ipairs({ "Players", "Lighting", "ReplicatedStorage", "ReplicatedFirst", "StarterGui", "StarterPlayer",
	"StarterPack", "SoundService", "Teams", "Chat", "TextChatService" }) do
	game:GetService(n)
end
local players = game:GetService("Players")
local player = newInstance("Player")
S[player].props.Name = "Player1"
setParent(player, players)
local playerGui = newInstance("PlayerGui")
S[playerGui].props.Name = "PlayerGui"
setParent(playerGui, player)
for _, n in ipairs({ "Backpack", "PlayerScripts" }) do
	local x = newInstance(n)
	S[x].props.Name = n
	setParent(x, player)
end
local sp = game:GetService("StarterPlayer")
for _, n in ipairs({ "StarterPlayerScripts", "StarterCharacterScripts" }) do
	local x = newInstance(n)
	S[x].props.Name = n
	setParent(x, sp)
end
M.player, M.playerGui = player, playerGui

-- imported models (stand-ins for the .glb files; see render.mjs `manifest`)
local function buildAsset(a)
	local m = newInstance("Model")
	S[m].props.Name = a.name
	-- Roblox Import 3D turns glTF 180 degrees about Y: (x, y, z) -> (-x, y, -z);
	-- the model is placed with its pivot at the bottom centre of its bounding box.
	local mnx, mny, mnz, mxx, mxy, mxz = math.huge, math.huge, math.huge, -math.huge, -math.huge, -math.huge
	local boxes = {}
	for _, n in ipairs(a.nodes) do
		local x0, x1, z0, z1 = -n.max[1], -n.min[1], -n.max[3], -n.min[3]
		local b = { x0, n.min[2], z0, x1, n.max[2], z1 }
		boxes[n] = b
		mnx, mny, mnz = math.min(mnx, b[1]), math.min(mny, b[2]), math.min(mnz, b[3])
		mxx, mxy, mxz = math.max(mxx, b[4]), math.max(mxy, b[5]), math.max(mxz, b[6])
	end
	local ox, oy, oz = (mnx + mxx) / 2, mny, (mnz + mxz) / 2
	for _, n in ipairs(a.nodes) do
		local b = boxes[n]
		local p = newInstance("MeshPart")
		local ps = S[p]
		ps.props.Name = n.name
		ps.props.Size = V3(math.max(b[4] - b[1], 0.001), math.max(b[5] - b[2], 0.001), math.max(b[6] - b[3], 0.001))
		ps.props.CFrame = cfT((b[1] + b[4]) / 2 - ox, (b[2] + b[5]) / 2 - oy, (b[3] + b[6]) / 2 - oz)
		ps.props.MeshId = "rbxassetid://preview/" .. a.glb .. "#" .. n.index
		ps.props.Anchored = false
		local col = n.color or { 1, 1, 1 }
		ps.props.Color = C3(col[1], col[2], col[3])
		ps.ext.mesh = { glb = a.glb, node = n.index, size0 = { b[4] - b[1], b[5] - b[2], b[6] - b[3] } }
		if n.textured then
			ps.props.TextureID = "rbxassetid://preview/" .. a.glb .. "#tex" .. n.index
			local sa = newInstance("SurfaceAppearance")
			setParent(sa, p)
		end
		setParent(p, m)
	end
	S[m].worldPivot = cfT(0, 0, 0)
	return m
end
function M.installAssets()
	if not (P.assets and #P.assets > 0 and P.useAssets ~= false) then return end
	local folder = newInstance("Folder")
	S[folder].props.Name = P.assetsFolder or "MenuAssets"
	for _, a in ipairs(P.assets) do
		if not (P.onlyAssets and not table.find(P.onlyAssets, a.name)) then setParent(buildAsset(a), folder) end
	end
	setParent(folder, game:GetService(P.assetsParent or "ReplicatedStorage"))
end

------------------------------------------------------------------
-- SANDBOX GLOBALS FOR THE SCRIPT
------------------------------------------------------------------
local Instance = {
	new = function(className, parent)
		local cls = getClass(className)
		if cls and (cls.service or cls.abstract) then error("Unable to create an Instance of type \"" .. className .. "\"", 2) end
		local i = newInstance(className)
		if parent ~= nil then i.Parent = parent end
		return i
	end,
	fromExisting = function(i) return IM.Clone(i) end,
}
local function fmtArgs(...)
	local t = table.pack(...)
	for i = 1, t.n do t[i] = tostring(t[i]) end
	return table.concat(t, " ", 1, t.n)
end
local scriptInst = newInstance("LocalScript")
S[scriptInst].props.Name = P.scriptName and P.scriptName:gsub("%.client%.lua$", ""):gsub("%.lua$", "") or "LocalScript"
setParent(scriptInst, player.PlayerScripts)

local fakeOs = table.clone(os)
fakeOs.clock = function() return now end
local sharedG = {}
local env = setmetatable({
	game = game, Game = game, workspace = workspace, Workspace = workspace, script = scriptInst,
	Instance = Instance, Enum = Enum, typeof = typeOf, task = task, os = fakeOs, _G = sharedG, shared = {},
	print = function(...) local s = fmtArgs(...) table.insert(M.logs, { t = now, kind = "print", text = s }) print("[script] " .. s) end,
	warn = function(...) local s = fmtArgs(...) table.insert(M.logs, { t = now, kind = "warn", text = s }) print("[script][warn] " .. s) end,
	wait = function(d) local e = task.wait(d) return e, now end,
	delay = function(d, f) task.delay(d, f) end,
	spawn = function(f) task.defer(f) end,
	tick = function() return 1.7e9 + now end, time = function() return now end, elapsedTime = function() return now end,
	settings = function() return { Rendering = { QualityLevel = Enum.QualityLevel.Automatic } } end,
	UserSettings = function() return { GetService = function() return { SavedQualityLevel = Enum.SavedQualitySetting.Automatic,
		GetCameraYInvertValue = function() return 1 end } end } end,
	require = function(m) error("require() of ModuleScripts is not supported in the preview (" .. tostring(m) .. ")", 2) end,
	version = function() return "0.700.0.preview" end,
	plugin = nil,
}, { __index = _G })
for k, v in pairs(DT) do env[k] = v end
M.env, M.sharedG = env, sharedG

-- run the main script (in its own coroutine, like a real LocalScript thread)
function M.runMain(source, chunkName)
	local f, err = loadstring(source, "=" .. (chunkName or "LocalScript"))
	if not f then
		recordError("compile error: " .. tostring(err))
		return
	end
	setfenv(f, env)
	M.mainThread = coroutine.create(f)
	resume(M.mainThread)
end

-- time
function M.advance(dt, fps)
	fps = fps or 60
	local target = now + dt
	local rs = game:GetService("RunService")
	while now < target - 1e-9 do
		local prev = now
		local nt = math.min(now + 1 / fps, target)
		runQueue(nt)
		local step = nt - prev
		table.sort(renderBound, function(a, b) return a.prio < b.prio end)
		for _, b in ipairs(table.clone(renderBound)) do task.spawn(b.fn, step) end
		fireIf(rs, "PreRender", step)
		fireIf(rs, "RenderStepped", step)
		fireIf(rs, "Stepped", now, step)
		fireIf(rs, "Heartbeat", step)
		fireIf(rs, "PreSimulation", step)
		fireIf(rs, "PostSimulation", step)
	end
end

------------------------------------------------------------------
-- INPUT HELPERS (used by the driver)
------------------------------------------------------------------
local function guiVisible(g)
	local x = g
	while x do
		local st = S[x]
		if not st then return false end
		if isA(x, "GuiObject") then
			if rawget2(x, "Visible") == false then return false end
			if isA(x, "CanvasGroup") and rawget2(x, "GroupTransparency") >= 0.999 then return false end
		elseif isA(x, "LayerCollector") then
			return rawget2(x, "Enabled") ~= false and (S[x].parent ~= nil)
		end
		x = st.parent
	end
	return false
end
M.guiVisible = guiVisible
local function norm(s) return (tostring(s):upper():gsub("[^%w]", "")) end
function M.findGui(pred)
	local found
	local function rec(i)
		for _, c in ipairs(S[i].children) do
			if found then return end
			if pred(c) and guiVisible(c) then found = c return end
			rec(c)
		end
	end
	rec(playerGui)
	return found
end
function M.findText(text)
	local isText = function(c) return isA(c, "TextLabel") or isA(c, "TextButton") or isA(c, "TextBox") end
	return M.findGui(function(c) return isText(c) and rawget2(c, "Text") == text end)
		or M.findGui(function(c) return isText(c) and norm(rawget2(c, "Text")) == norm(text) and norm(text) ~= "" end)
		or M.findGui(function(c) return isText(c) and norm(text) ~= "" and norm(rawget2(c, "Text")):find(norm(text), 1, true) ~= nil end)
		or M.findGui(function(c) return isA(c, "GuiObject") and S[c].props.Name == text end)
end
function M.buttonOf(g)
	local x = g
	while x and isA(x, "GuiObject") do
		if isA(x, "GuiButton") then return x end
		x = S[x].parent
	end
	return g
end
local hovered = {}
local function inputObject(kind, keyCode, pos)
	return { KeyCode = keyCode or Enum.KeyCode.Unknown, UserInputType = kind, UserInputState = Enum.UserInputState.Begin,
		Position = V3(pos and pos.X or M.mouse.X, pos and pos.Y or M.mouse.Y, 0), Delta = V3(0, 0, 0),
		IsModifierKeyDown = function() return false end }
end
function M.hover(targets)
	local set = {}
	for _, t in ipairs(targets) do set[t] = true end
	for _, h in ipairs(hovered) do
		if not set[h] and S[h] and not S[h].destroyed then fireIf(h, "MouseLeave", M.mouse.X, M.mouse.Y) end
	end
	local was = {}
	for _, h in ipairs(hovered) do was[h] = true end
	for _, t in ipairs(targets) do
		if not was[t] then fireIf(t, "MouseEnter", M.mouse.X, M.mouse.Y) end
	end
	hovered = targets
end
function M.pointAt(g)
	local x, y, w, h = guiAbs(g)
	M.mouse.X, M.mouse.Y = x + w / 2, y + h / 2
end
function M.click(g)
	local btn = M.buttonOf(g)
	M.pointAt(g)
	local targets = { btn }
	if g ~= btn then table.insert(targets, g) end
	M.hover(targets)
	local io = inputObject(Enum.UserInputType.MouseButton1)
	fireIf(btn, "InputBegan", io)
	fireIf(btn, "MouseButton1Down", M.mouse.X, M.mouse.Y)
	io.UserInputState = Enum.UserInputState.End
	fireIf(btn, "InputEnded", io)
	fireIf(btn, "MouseButton1Up", M.mouse.X, M.mouse.Y)
	if isA(btn, "GuiButton") then
		fireIf(btn, "MouseButton1Click")
		fireIf(btn, "Activated", io, 1)
	end
	return btn
end
function M.key(name, processed)
	local kc = Enum.KeyCode[name]
	local uis = game:GetService("UserInputService")
	local io = inputObject(Enum.UserInputType.Keyboard, kc)
	if name:match("^Button") or name:match("^DPad") or name:match("^Thumbstick") then io.UserInputType = Enum.UserInputType.Gamepad1 end
	fireIf(uis, "InputBegan", io, processed == true)
	for actionName, a in pairs(casActions) do
		for _, k in ipairs(a.keys) do
			if k == kc or k == io.UserInputType then task.spawn(a.fn, actionName, Enum.UserInputState.Begin, io) end
		end
	end
	io.UserInputState = Enum.UserInputState.End
	fireIf(uis, "InputEnded", io, processed == true)
	for actionName, a in pairs(casActions) do
		for _, k in ipairs(a.keys) do
			if k == kc or k == io.UserInputType then task.spawn(a.fn, actionName, Enum.UserInputState.End, io) end
		end
	end
end

------------------------------------------------------------------
-- JSON + DUMP
------------------------------------------------------------------
local ARRAY = {}
local function arr(t) return setmetatable(t or {}, ARRAY) end
M.arr = arr
local function jnum(v)
	if v ~= v or v == math.huge or v == -math.huge then return "0" end
	if v == math.floor(v) and math.abs(v) < 1e15 then return string.format("%d", v) end
	return string.format("%.7g", v)
end
local function jstr(s)
	return '"' .. s:gsub('[%c"\\]', function(c)
		if c == '"' then return '\\"' elseif c == "\\" then return "\\\\" elseif c == "\n" then return "\\n"
		elseif c == "\r" then return "\\r" elseif c == "\t" then return "\\t" end
		return string.format("\\u%04x", string.byte(c))
	end) .. '"'
end
local function json(v, out)
	local t = type(v)
	if t == "nil" then table.insert(out, "null")
	elseif t == "boolean" then table.insert(out, v and "true" or "false")
	elseif t == "number" then table.insert(out, jnum(v))
	elseif t == "string" then table.insert(out, jstr(v))
	elseif t == "table" then
		if getmetatable(v) == ARRAY or (#v > 0 and getmetatable(v) == nil) then
			table.insert(out, "[")
			for i = 1, #v do
				if i > 1 then table.insert(out, ",") end
				json(v[i], out)
			end
			table.insert(out, "]")
		else
			table.insert(out, "{")
			local first = true
			local keys = {}
			for k in pairs(v) do if type(k) == "string" then table.insert(keys, k) end end
			table.sort(keys)
			for _, k in ipairs(keys) do
				if not first then table.insert(out, ",") end
				first = false
				table.insert(out, jstr(k))
				table.insert(out, ":")
				json(v[k], out)
			end
			table.insert(out, "}")
		end
	else
		table.insert(out, jstr(tostring(v)))
	end
end
function M.json(v)
	local out = {}
	json(v, out)
	return table.concat(out)
end

-- datatype -> JSON-friendly value (nil = skip)
local function ser(v)
	local t = typeOf(v)
	if t == "number" or t == "boolean" or t == "string" then return v end
	if t == "EnumItem" then return v.Name end
	if t == "Vector2" then return arr({ v.X, v.Y }) end
	if t == "Vector3" then return arr({ v.X, v.Y, v.Z }) end
	if t == "Color3" then return arr({ v.R, v.G, v.B }) end
	if t == "UDim" then return arr({ v.Scale, v.Offset }) end
	if t == "UDim2" then return arr({ v.X.Scale, v.X.Offset, v.Y.Scale, v.Y.Offset }) end
	if t == "CFrame" then return arr({ table.unpack(v, 1, 12) }) end
	if t == "Font" then return { family = v.Family, weight = v.Weight.Value, style = v.Style.Name } end
	if t == "ColorSequence" then
		local o = arr()
		for _, k in ipairs(v.Keypoints) do table.insert(o, arr({ k.Time, k.Value.R, k.Value.G, k.Value.B })) end
		return o
	end
	if t == "NumberSequence" then
		local o = arr()
		for _, k in ipairs(v.Keypoints) do table.insert(o, arr({ k.Time, k.Value, k.Envelope })) end
		return o
	end
	if t == "Rect" then return arr({ v.Min.X, v.Min.Y, v.Max.X, v.Max.Y }) end
	if t == "NumberRange" then return arr({ v.Min, v.Max }) end
	if t == "BrickColor" then return arr({ v.Color.R, v.Color.G, v.Color.B }) end
	return nil
end
M.ser = ser
local function serProps(inst)
	local st = S[inst]
	local o = {}
	for k, d in pairs(st.cls.all) do
		if d ~= NIL then o[k] = ser(d) end
	end
	for k, v in pairs(st.props) do o[k] = ser(v) end
	o.Name = st.props.Name
	return o
end
M.serProps = serProps

local function serGui(g)
	local st = S[g]
	local node = { c = st.className, id = st.id, p = serProps(g), k = arr() }
	if next(st.attrs) then
		node.attrs = {}
		for k, v in pairs(st.attrs) do node.attrs[k] = ser(v) end
	end
	for _, ch in ipairs(st.children) do
		if isA(ch, "GuiBase2d") or isA(ch, "UIBase") then table.insert(node.k, serGui(ch)) end
	end
	return node
end

local function dumpScene()
	local out = { parts = arr(), lights = arr(), surfaceGuis = arr(), billboards = arr(), unsupported = arr() }
	local unsupported = {}
	local function partEntry(p)
		local st = S[p]
		local shape = "Block"
		if st.className == "Part" or st.className == "SpawnLocation" or st.className == "Seat" then
			shape = rawget2(p, "Shape").Name
		elseif st.className == "WedgePart" then shape = "Wedge"
		elseif st.className == "CornerWedgePart" then shape = "CornerWedge"
		elseif st.className == "MeshPart" then shape = st.ext.mesh and "Mesh" or "Block"
		end
		local e = {
			id = st.id, class = st.className, name = st.props.Name, shape = shape,
			size = ser(rawget2(p, "Size")), cf = ser(rawget2(p, "CFrame")), color = ser(rawget2(p, "Color")),
			material = rawget2(p, "Material").Name, transparency = rawget2(p, "Transparency"),
			reflectance = rawget2(p, "Reflectance"), castShadow = rawget2(p, "CastShadow"),
		}
		if st.ext.mesh then
			e.mesh = { glb = st.ext.mesh.glb, node = st.ext.mesh.node, size0 = arr(st.ext.mesh.size0) }
			e.surfaceAppearance = IM.FindFirstChildOfClass(p, "SurfaceAppearance") ~= nil
			e.textureId = rawget2(p, "TextureID")
		elseif st.className == "MeshPart" or st.className == "UnionOperation" then
			unsupported[st.className .. " without a preview mesh (drawn as a box)"] = true
		end
		local sm = IM.FindFirstChildOfClass(p, "SpecialMesh")
		if sm then unsupported["SpecialMesh (drawn as the plain part)"] = true end
		for _, c in ipairs(st.children) do
			if isA(c, "Decal") then unsupported["Decal/Texture images"] = true end
			if isA(c, "ParticleEmitter") or isA(c, "Beam") or isA(c, "Trail") or isA(c, "Fire") or isA(c, "Smoke") then
				unsupported[S[c].className .. " effects"] = true
			end
		end
		return e
	end
	local function lightEntry(l, cf)
		local st = S[l]
		local e = { class = st.className, cf = ser(cf), color = ser(rawget2(l, "Color")), brightness = rawget2(l, "Brightness"),
			range = rawget2(l, "Range"), enabled = rawget2(l, "Enabled"), shadows = rawget2(l, "Shadows") }
		if st.className ~= "PointLight" then e.angle, e.face = rawget2(l, "Angle"), rawget2(l, "Face").Name end
		return e
	end
	local function visit(i)
		for _, c in ipairs(S[i].children) do
			local cs = S[c]
			if isA(c, "BasePart") and cs.className ~= "Terrain" then
				table.insert(out.parts, partEntry(c))
			elseif isA(c, "Light") and S[c].parent and isA(S[c].parent, "BasePart") then
				table.insert(out.lights, lightEntry(c, partCF(S[c].parent)))
			elseif isA(c, "Light") and S[c].parent and isA(S[c].parent, "Attachment") then
				local a = S[c].parent
				table.insert(out.lights, lightEntry(c, a.WorldCFrame))
			end
			visit(c)
		end
	end
	visit(workspace)
	-- SurfaceGuis / BillboardGuis anywhere (adornee or parent part)
	eachDescendant(game, function(d)
		if isA(d, "SurfaceGui") then
			local ad = rawget2(d, "Adornee") or S[d].parent
			if ad and isA(ad, "BasePart") and isDescendantOf(ad, workspace) and rawget2(d, "Enabled") then
				local node = serGui(d)
				node.part = S[ad].id
				table.insert(out.surfaceGuis, node)
			end
		elseif isA(d, "BillboardGui") then
			unsupported["BillboardGui (not drawn)"] = true
		end
	end)
	for k in pairs(unsupported) do table.insert(out.unsupported, k) end
	local ext = S[terrain].ext
	local fills = arr()
	for _, f in ipairs(ext.fills) do
		table.insert(fills, { kind = f.kind, cf = ser(f.cf), size = ser(f.size), material = f.material.Name })
	end
	local colors = {}
	for k, v in pairs(ext.colors) do colors[k] = ser(v) end
	out.terrain = { fills = fills, colors = colors, grassLength = rawget2(terrain, "GrassLength"), decoration = rawget2(terrain, "Decoration") }
	return out
end

local function dumpLighting()
	local lighting = game:GetService("Lighting")
	local o = { props = serProps(lighting), children = arr() }
	for _, c in ipairs(S[lighting].children) do
		table.insert(o.children, { class = S[c].className, props = serProps(c) })
	end
	return o
end

local function dumpGui()
	local list = arr()
	for _, g in ipairs(S[playerGui].children) do
		if isA(g, "ScreenGui") then table.insert(list, serGui(g)) end
	end
	table.sort(list, function(a, b) return (a.p.DisplayOrder or 0) < (b.p.DisplayOrder or 0) end)
	return list
end

function M.dump(extra)
	local scene = dumpScene()
	local camCF = rawget2(cam, "CFrame")
	local d = {
		time = now,
		viewport = arr({ P.viewport[1], P.viewport[2] }),
		guiInset = GUI_INSET,
		camera = { cf = ser(camCF), fov = rawget2(cam, "FieldOfView"), type = rawget2(cam, "CameraType").Name },
		lighting = dumpLighting(),
		parts = scene.parts, lights = scene.lights, surfaceGuis = scene.surfaceGuis, terrain = scene.terrain,
		gui = dumpGui(),
		unsupported = scene.unsupported,
		errors = arr(M.errors), warnings = arr(M.warnings), logs = arr(M.logs), actions = arr(M.actions),
		mainThread = M.mainThread and coroutine.status(M.mainThread) or "none",
	}
	if extra then for k, v in pairs(extra) do d[k] = v end end
	return d
end

__MOCK = M

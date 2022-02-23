"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shadeGenerator = exports.tintGenerator = void 0;
var utils_1 = require("./utils");
var DEFAULT_STEPS = 10;
var tintGenerator = function (hexColor, step, steps) {
    if (steps === void 0) { steps = DEFAULT_STEPS; }
    var _a = (0, utils_1.hex2rgb)(hexColor), r = _a[0], g = _a[1], b = _a[2];
    var hsl = (0, utils_1.rgb2hsl)(r, g, b);
    var diff = ((1 - hsl[2]) / steps) * step;
    var newLightness = hsl[2] + diff;
    var newShade = (0, utils_1.hsl2rgb)(hsl[0], hsl[1], newLightness);
    return (0, utils_1.rgb2hex)(newShade[0], newShade[1], newShade[2]);
};
exports.tintGenerator = tintGenerator;
var shadeGenerator = function (hexColor, step, steps) {
    if (steps === void 0) { steps = DEFAULT_STEPS; }
    var _a = (0, utils_1.hex2rgb)(hexColor), r = _a[0], g = _a[1], b = _a[2];
    var hsl = (0, utils_1.rgb2hsl)(r, g, b);
    var diff = (hsl[2] / -steps) * -step;
    var newLightness = hsl[2] - diff;
    var newShade = (0, utils_1.hsl2rgb)(hsl[0], hsl[1], newLightness);
    return (0, utils_1.rgb2hex)(newShade[0], newShade[1], newShade[2]);
};
exports.shadeGenerator = shadeGenerator;

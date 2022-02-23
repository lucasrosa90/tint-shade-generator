"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hex2rgb = exports.rgb2hex = exports.rgb2hsl = exports.hsl2rgb = void 0;
var parse = require('parse-color');
var MAX255 = 255;
// https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex/54014428#54014428
var hsl2rgb = function (h, s, l) {
    var a = s * Math.min(l, 1 - l);
    var f = function (n, k) {
        if (k === void 0) { k = (n + h / 30) % 12; }
        return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    };
    return [f(0), f(8), f(4)];
};
exports.hsl2rgb = hsl2rgb;
// https://stackoverflow.com/questions/2348597/why-doesnt-this-javascript-rgb-to-hsl-code-work/54071699#54071699
var rgb2hsl = function (r, g, b) {
    var a = Math.max(r, g, b), n = a - Math.min(r, g, b), f = (1 - Math.abs(a + a - n - 1));
    var h = n && ((a == r) ? (g - b) / n : ((a == g) ? 2 + (b - r) / n : 4 + (r - g) / n));
    return [60 * (h < 0 ? h + 6 : h), f ? n / f : 0, (a + a - n) / 2];
};
exports.rgb2hsl = rgb2hsl;
// https://css-tricks.com/converting-color-spaces-in-javascript/
var rgb2hex = function (r, g, b) {
    r = Math.round(r * MAX255).toString(16);
    g = Math.round(g * MAX255).toString(16);
    b = Math.round(b * MAX255).toString(16);
    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;
    return "#" + r + g + b;
};
exports.rgb2hex = rgb2hex;
//https://stackoverflow.com/questions/12943774/hex-to-rgb-converter
var hex2rgb = function (color) {
    var _a = parse(color).rgb, r = _a[0], g = _a[1], b = _a[2];
    return [r / MAX255, g / MAX255, b / MAX255];
};
exports.hex2rgb = hex2rgb;

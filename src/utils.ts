var parse = require('parse-color');

const MAX255 = 255

// https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex/54014428#54014428
export const hsl2rgb = (h: any, s: any, l: any) => {
  let a = s * Math.min(l, 1 - l);
  let f = (n: any, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4)];
}

// https://stackoverflow.com/questions/2348597/why-doesnt-this-javascript-rgb-to-hsl-code-work/54071699#54071699
export const rgb2hsl = (r: any, g: any, b: any) => {
  let a = Math.max(r, g, b), n = a - Math.min(r, g, b), f = (1 - Math.abs(a + a - n - 1));
  let h = n && ((a == r) ? (g - b) / n : ((a == g) ? 2 + (b - r) / n : 4 + (r - g) / n));
  return [60 * (h < 0 ? h + 6 : h), f ? n / f : 0, (a + a - n) / 2];
}

// https://css-tricks.com/converting-color-spaces-in-javascript/
export const rgb2hex = (r: any, g: any, b: any) => {
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
}

//https://stackoverflow.com/questions/12943774/hex-to-rgb-converter
export const hex2rgb = (color: any) => {
  let [r, g, b] = parse(color).rgb
  return [r/MAX255, g/MAX255, b/MAX255];
}
import { hsl2rgb, rgb2hsl, rgb2hex, hex2rgb } from './utils'

const DEFAULT_STEPS: number = 10

export const tintGenerator = (hexColor: string, step: number, steps = DEFAULT_STEPS) => {
  const [r, g, b] = hex2rgb(hexColor)
  const hsl = rgb2hsl(r, g, b)

  const diff = ((1 - hsl[2]) / steps) * step
  const newLightness = hsl[2] + diff
  const newShade = hsl2rgb(hsl[0], hsl[1], newLightness);

  return rgb2hex(newShade[0], newShade[1], newShade[2])
}

export const shadeGenerator = (hexColor: string, step: number, steps = DEFAULT_STEPS) => {
  const [r, g, b] = hex2rgb(hexColor)
  const hsl = rgb2hsl(r, g, b)

  const diff = (hsl[2] / -steps) * -step
  const newLightness = hsl[2] - diff
  const newShade = hsl2rgb(hsl[0], hsl[1], newLightness);

  return rgb2hex(newShade[0], newShade[1], newShade[2])
}
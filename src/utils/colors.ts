export const convertHexToRgb = (hex: string) => {
  const r = +("0x" + hex[1] + hex[2]);
  const g = +("0x" + hex[3] + hex[4]);
  const b = +("0x" + hex[5] + hex[6]);
  return [r, g, b];
};

const convertRgbToHex = (R: number, G: number, B: number) => {
  let r = R.toString(16);
  let g = G.toString(16);
  let b = B.toString(16);

  if (r.length == 1) r = "0" + r;
  if (g.length == 1) g = "0" + g;
  if (b.length == 1) b = "0" + b;

  return "#" + r + g + b;
};

export const convertHexToHsv = (hex: string) => {
  let [r, g, b] = convertHexToRgb(hex);
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const d = max - min;

  let h = 0;
  const s = max === 0 ? 0 : d / max;
  const v = max;

  if (max !== min) {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [+(h * 360).toFixed(2), +(s * 100).toFixed(2), +(v * 100).toFixed(2)];
};

export const convertHsvToHex = (H: number, S: number, V: number) => {
  const h = H / 360;
  const s = S / 100;
  const v = V / 100;

  const i = Math.floor(h * 6);
  const f = h * 6 - i;
  const p = v * (1 - s);
  const q = v * (1 - f * s);
  const t = v * (1 - (1 - f) * s);

  let r = 0;
  let g = 0;
  let b = 0;

  switch (i % 6) {
    case 0:
      r = v;
      g = t;
      b = p;
      break;
    case 1:
      r = q;
      g = v;
      b = p;
      break;
    case 2:
      r = p;
      g = v;
      b = t;
      break;
    case 3:
      r = p;
      g = q;
      b = v;
      break;
    case 4:
      r = t;
      g = p;
      b = v;
      break;
    case 5:
      r = v;
      g = p;
      b = q;
      break;
  }
  return convertRgbToHex(
    Math.round(r * 255),
    Math.round(g * 255),
    Math.round(b * 255)
  );
};

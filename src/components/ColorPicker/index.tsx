import React, { useState } from "react";

import { convertHexToHsl, convertHexToRgb, convertHslToHex } from "utils";

import Slider from "components/Slider";
import ColorCaption from "components/ColorPicker/ColorCaption";

interface ColorPickerProps {
  defaultColor: string;
}

function ColorPicker({ defaultColor }: ColorPickerProps) {
  const [color, setColor] = useState(defaultColor.toLowerCase());

  const [hue, s, l] = convertHexToHsl(color);
  const [r, g, b] = convertHexToRgb(color);
  const onHueChange = (hue: number) => {
    setColor(convertHslToHex(hue, s, l));
  };

  return (
    <div className="color-picker">
      <Slider
        defaultValue={hue}
        min={0}
        max={359}
        onChange={onHueChange}
        sliderClassName="slider"
      />
      <ColorCaption {...{ hex: color, r, g, b }} />
    </div>
  );
}

export default ColorPicker;

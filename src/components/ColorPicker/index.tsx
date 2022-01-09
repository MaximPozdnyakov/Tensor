import React, { useState } from "react";

import { convertHexToHsl, convertHexToRgb, convertHslToHex } from "utils";

import Slider from "components/Slider";
import ColorCaption from "components/ColorPicker/ColorCaption";

interface ColorPickerProps {
  defaultColor: string;
}

function ColorPicker({ defaultColor }: ColorPickerProps) {
  const [color, setColor] = useState(defaultColor.toLowerCase());

  const [h, s, l] = convertHexToHsl(color);
  const onHueChange = (h: number) => {
    setColor(convertHslToHex(h, s, l));
  };

  return (
    <div className="color-picker">
      <Slider
        defaultValue={h}
        min={0}
        max={359}
        onChange={onHueChange}
        sliderClassName="slider"
      />
      <ColorCaption {...{ color }} />
    </div>
  );
}

export default ColorPicker;

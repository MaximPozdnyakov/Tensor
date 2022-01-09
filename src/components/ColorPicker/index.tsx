import React, { useState } from "react";

import { convertHexToHsv, convertHsvToHex } from "utils/colors";

import Slider from "components/Slider";
import ColorCaption from "components/ColorPicker/ColorCaption";
import Saturation from "components/ColorPicker/Saturation";

interface ColorPickerProps {
  defaultColor: string;
}

function ColorPicker({ defaultColor }: ColorPickerProps) {
  const [color, setColor] = useState(defaultColor.toLowerCase());
  const [hue, setHue] = useState(() => Math.round(convertHexToHsv(color)[0]));

  const onHueChange = (h: number) => {
    setHue(h % 360);
    const [_, s, v] = convertHexToHsv(color);
    setColor(convertHsvToHex(h % 360, s, v));
  };

  const onColorChange = (color: string) => {
    setColor(color);
  };

  return (
    <div className="color-picker">
      <Saturation {...{ hue, color, onChange: onColorChange }} />
      <Slider
        defaultValue={hue}
        min={0}
        max={360}
        onChange={onHueChange}
        sliderClassName="slider"
      />
      <ColorCaption {...{ color }} />
    </div>
  );
}

export default ColorPicker;

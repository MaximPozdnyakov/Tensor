import React, { useState, useEffect } from "react";

import { convertHexToHsv, convertHsvToHex } from "utils/colors";

import Slider from "components/Slider";
import ColorCaption from "components/ColorPicker/ColorCaption";
import Saturation from "components/ColorPicker/Saturation";

interface ColorPickerProps {
  initialColor: string;
  onChange: (color: string) => void;
}

function ColorPicker({ initialColor, onChange }: ColorPickerProps) {
  const [color, setColor] = useState(initialColor.toLowerCase());
  const [hue, setHue] = useState(() => Math.round(convertHexToHsv(color)[0]));

  useEffect(() => {
    onChange(color);
  }, [color, onChange]);

  const onHueChange = (h: number) => {
    setHue(h % 360);
    const [_, s, v] = convertHexToHsv(color);
    setColor(convertHsvToHex(h % 360, s, v));
  };

  const onSvChange = (color: string) => {
    setColor(color);
  };

  return (
    <div className="color-picker">
      <Saturation {...{ hue, color, onChange: onSvChange }} />
      <Slider
        initialValue={hue}
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

import React from "react";

import { convertHexToRgb } from "utils/colors";

interface ColorCaptionProps {
  color: string;
}

function ColorCaption({ color }: ColorCaptionProps) {
  const [r, g, b] = convertHexToRgb(color);
  return (
    <div className="text color-picker__caption">
      <div className="color-picker__caption-group">
        <div className="color-picker__label">#</div>
        <div className="color-picker__text color-picker__hex">
          {color.slice(1)}
        </div>
      </div>
      <div className="color-picker__caption-group">
        <div className="color-picker__label">RGB</div>
        <div className="color-picker__text color-picker__rgb">
          <div className="color-picker__rgb-part">{r}</div>
          <div className="color-picker__rgb-part">{g}</div>
          <div className="color-picker__rgb-part">{b}</div>
        </div>
      </div>
    </div>
  );
}

export default ColorCaption;

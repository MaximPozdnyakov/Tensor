import React from "react";

interface ColorCaptionProps {
  hex: string;
  r: number;
  g: number;
  b: number;
}

function ColorCaption({ hex, r, g, b }: ColorCaptionProps) {
  return (
    <div className="text color-picker__caption">
      <div className="color-picker__caption-group">
        <div className="color-picker__label">#</div>
        <div className="color-picker__text color-picker__hex">
          {hex.slice(1)}
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

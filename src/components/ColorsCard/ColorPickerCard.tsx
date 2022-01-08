import React from "react";

import CardHeader from "components/ColorsCard/CardHeader";
import ColorPicker from "components/ColorPicker";

interface ColorPickerCardProps {
  color: string;
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

function ColorPickerCard({ color, onClose }: ColorPickerCardProps) {
  return (
    <div className="color-picker-card">
      <div className="colors-card color-picker-card__inner">
        <CardHeader {...{ title: "Выбор цвета", onClose }} />
        <div className="color-picker-card__body">
          <ColorPicker {...{ defaultColor: color }} />
        </div>
      </div>
    </div>
  );
}

export default ColorPickerCard;

import React from "react";

import CardHeader from "components/ColorsCard/CardHeader";

interface ColorPickerCardProps {
  onClose: React.MouseEventHandler<HTMLDivElement>;
}

function ColorPickerCard({ onClose }: ColorPickerCardProps) {
  return (
    <div className="color-picker-card">
      <div className="colors-card color-picker-card__inner">
        <CardHeader {...{ title: "Выбор цвета", onClose }} />
        <div className="color-picker-card__body"></div>
      </div>
    </div>
  );
}

export default ColorPickerCard;

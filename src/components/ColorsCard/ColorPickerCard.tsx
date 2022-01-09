import React, { useState } from "react";
import { ColorsI } from "types/colors";

import CardHeader from "components/ColorsCard/CardHeader";
import ColorPicker from "components/ColorPicker";

interface ColorPickerCardProps {
  color: string;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  onColorSelected: (color: string) => void;
}

function ColorPickerCard({
  color: initialColor,
  onClose,
  onColorSelected,
}: ColorPickerCardProps) {
  const [color, setColor] = useState(initialColor);

  const onColorChange = (color: string) => {
    setColor(color);
  };

  const onConfirm = onColorSelected.bind(null, color);

  return (
    <div className="color-picker-card">
      <div className="colors-card color-picker-card__inner">
        <CardHeader {...{ title: "Выбор цвета", onClose, onConfirm }} />
        <div className="color-picker-card__body">
          <ColorPicker {...{ initialColor: color, onChange: onColorChange }} />
        </div>
      </div>
    </div>
  );
}

export default ColorPickerCard;

import React, { useState, useLayoutEffect, useRef } from "react";

import CardHeader from "components/ColorsCard/CardHeader";
import ColorPicker from "components/ColorPicker";

interface ColorPickerCardProps {
  color: string;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  onColorSelected: (color: string) => void;
  parentRef?: React.RefObject<HTMLDivElement>;
}

function ColorPickerCard({
  color: initialColor,
  onClose,
  onColorSelected,
  parentRef,
}: ColorPickerCardProps) {
  const [color, setColor] = useState(initialColor);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  const setPopupTop = () => {
    if (parentRef?.current && wrapperRef.current && popupRef.current) {
      popupRef.current.style.top = `${
        parentRef.current.getBoundingClientRect().top -
        wrapperRef.current.getBoundingClientRect().top -
        wrapperRef.current.clientHeight / 3
      }px`;
    }
  };

  useLayoutEffect(() => {
    setPopupTop();
  }, [parentRef, wrapperRef, popupRef]);

  const onColorChange = (color: string) => {
    setColor(color);
  };

  const onConfirm = onColorSelected.bind(null, color);

  return (
    <div className="color-picker-card" ref={wrapperRef}>
      <div className="colors-card color-picker-card__inner" ref={popupRef}>
        <CardHeader {...{ title: "Выбор цвета", onClose, onConfirm }} />
        <div className="color-picker-card__body">
          <ColorPicker {...{ initialColor: color, onChange: onColorChange }} />
        </div>
      </div>
    </div>
  );
}

export default ColorPickerCard;

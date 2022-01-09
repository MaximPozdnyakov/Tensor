import React, { useState } from "react";
import { ColorsI } from "types/colors";

import { ReactComponent as ArrowIcon } from "icons/arrow.svg";
import { ReactComponent as SliderIcon } from "icons/slider.svg";

import ColorPickerCard from "components/ColorsCard/ColorPickerCard";

interface ColorItemProps {
  label?: string;
  colors: string[];
  title: string;
  description: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  setColors: React.Dispatch<React.SetStateAction<ColorsI>>;
}

function ColorItem({
  label,
  colors,
  title,
  description,
  onClick,
  setColors,
}: ColorItemProps) {
  const [isColorPickerOpen, setColorPickerOpen] = useState(false);

  const openColorPicker = setColorPickerOpen.bind(null, true);
  const closeColorPicker = setColorPickerOpen.bind(null, false);

  const onColorSelected = (color: string) => {
    if (label) {
      setColors((colors) => ({ ...colors, [label]: color }));
    }
    closeColorPicker();
  };

  const icon = colors.length === 1 ? <SliderIcon /> : <ArrowIcon />;
  const iconClassName = colors.length === 1 ? "color-item__icon" : "";

  const thumbnailBg = colors.length === 1 ? colors[0] : undefined;
  const thumbnailParts =
    colors.length === 4 &&
    [colors[0], colors[1], colors[3], colors[2]].map((color, i) => (
      <div
        className="color-item__thumbnail-part"
        key={`${color}-${i}`}
        style={{ background: color }}
      ></div>
    ));

  return (
    <>
      <div
        className="colors-card__item color-item"
        onClick={onClick || openColorPicker}
      >
        <div
          className="color-item__thumbnail"
          style={{ background: thumbnailBg }}
        >
          {thumbnailParts}
        </div>
        <div className="color-item__text-wrapper">
          <div className="title color-item__title">{title}</div>
          <div className="text">{description}</div>
        </div>
        <div className={iconClassName}>{icon}</div>
      </div>
      {isColorPickerOpen && (
        <ColorPickerCard
          {...{
            color: colors[0],
            onClose: closeColorPicker,
            onColorSelected,
          }}
        />
      )}
    </>
  );
}

export default ColorItem;

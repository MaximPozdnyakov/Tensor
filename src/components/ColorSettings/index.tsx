import React, { useState } from "react";

import SettingsBtn from "components/Buttons/SettingsBtn";
import ColorsCard from "components/ColorsCard";

import { ColorsI, ColorsGroupsI } from "types/colors";

interface ColorSettingsProps {
  colors: ColorsI;
  colorsData: ColorsGroupsI[];
  onColorsChange: (colors: ColorsI) => void;
}

function ColorSettings({
  colors: initialColors,
  colorsData,
  onColorsChange,
}: ColorSettingsProps) {
  const [colors, setColors] = useState<ColorsI>(initialColors);
  const [isModalOpen, setModalOpen] = useState(false);

  const onClose = () => {
    setColors(initialColors);
    setModalOpen(false);
  };

  const onConfirm = () => {
    onColorsChange(colors);
    setModalOpen(false);
  };

  const openModal = setModalOpen.bind(null, true);

  if (isModalOpen) {
    return (
      <ColorsCard
        {...{
          title: "Стили оформления",
          description: "Здесь вы можете настроить цвета сайта",
          colors,
          colorsData,
          onConfirm,
          onClose,
          setColors,
        }}
      />
    );
  }
  return <SettingsBtn onClick={openModal} />;
}

export default ColorSettings;

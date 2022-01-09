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
  const [isPopupOpen, setPopupOpen] = useState(false);

  const closePopup = setPopupOpen.bind(null, false);
  const openPopup = setPopupOpen.bind(null, true);

  if (isPopupOpen) {
    return (
      <ColorsCard
        {...{
          title: "Стили оформления",
          description: "Здесь вы можете настроить цвета сайта",
          colors,
          colorsData,
          onClose: closePopup,
        }}
      />
    );
  }
  return <SettingsBtn onClick={openPopup} />;
}

export default ColorSettings;

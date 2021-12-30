import React, { useState } from "react";
import SettingsBtn from "components/ColorSettings/SettingsBtn";

import {
  MenuColorsI,
  BaseColorsI,
  NotificationColorsI,
  OnColorChangeType,
  PopupOptions,
} from "types";

interface ColorSettingsProps {
  menuColors: MenuColorsI;
  baseColors: BaseColorsI;
  notificationColors: NotificationColorsI;
  onColorChange: OnColorChangeType;
}

function ColorSettings({
  menuColors,
  baseColors,
  notificationColors,
  onColorChange,
}: ColorSettingsProps) {
  const [currentPopup, setCurrentPopup] = useState<number | null>(null);

  switch (currentPopup) {
    case PopupOptions.ColorGroups:
      return <div>Стили оформления</div>;
    case PopupOptions.MenuColors:
      return <div>Цвета меню</div>;
    case PopupOptions.BaseColors:
      return <div>Базовые элементы</div>;
    case PopupOptions.NotificationColors:
      return <div>Цвета уведомлений</div>;
    default:
      return (
        <SettingsBtn
          onClick={setCurrentPopup.bind(null, PopupOptions.ColorGroups)}
        />
      );
  }
}

export default ColorSettings;

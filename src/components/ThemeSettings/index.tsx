import React from "react";

import {
  MenuColorsI,
  BaseColorsI,
  NotificationColorsI,
  OnColorChangeType,
} from "types";

interface ThemeSettingsProps {
  menuColors: MenuColorsI;
  baseColors: BaseColorsI;
  notificationColors: NotificationColorsI;
  onColorChange: OnColorChangeType;
}

function ThemeSettings({
  menuColors,
  baseColors,
  notificationColors,
  onColorChange,
}: ThemeSettingsProps) {
  return <div></div>;
}

export default ThemeSettings;

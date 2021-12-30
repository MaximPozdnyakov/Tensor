import React from "react";

import {
  MenuColorsI,
  BaseColorsI,
  NotificationColorsI,
  OnColorChangeType,
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
  return <div></div>;
}

export default ColorSettings;

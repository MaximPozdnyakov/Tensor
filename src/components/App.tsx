import React, { useState } from "react";
import ThemeSettings from "components/ThemeSettings";

import {
  MenuColorsI,
  BaseColorsI,
  NotificationColorsI,
  OnColorChangeType,
} from "types";

function App() {
  const [menuColors, setMenuColors] = useState<MenuColorsI>({
    background: "#2B3D4F",
    sectionText: "#FFFFFF",
    marker: "#5286CA",
    sectionIcon: "#9CB2C9",
  });

  const [baseColors, setBaseColors] = useState<BaseColorsI>({
    titleAndText: "#333333",
    tags: "#8A91A7",
    icons: "#587AB0",
    workspace: "#FFFFFF",
  });

  const [notificationColors, setNotificationColors] =
    useState<NotificationColorsI>({
      success: "#449637",
      danger: "#C15652",
      warning: "#F6C75A",
      info: "#5659CE",
    });

  const onColorChange: OnColorChangeType = (
    menuColors,
    baseColors,
    notificationColors
  ) => {
    setMenuColors(menuColors);
    setBaseColors(baseColors);
    setNotificationColors(notificationColors);
  };

  return (
    <div className="page">
      <ThemeSettings
        {...{ menuColors, baseColors, notificationColors, onColorChange }}
      />
    </div>
  );
}

export default App;

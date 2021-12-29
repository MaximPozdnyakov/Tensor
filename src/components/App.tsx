import React, { useState } from "react";

import { MenuColorsI, BaseColorsI, NotificationColorsI } from "types";

function App() {
  const [menuColors, setMenuColors] = useState({
    background: "#2B3D4F",
    sectionText: "#FFFFFF",
    marker: "#5286CA",
    sectionIcon: "#9CB2C9",
  });

  const [baseColors, setBaseColors] = useState({
    titleAndText: "#333333",
    tags: "#8A91A7",
    icons: "#587AB0",
    workspace: "#FFFFFF",
  });

  const [notificationColors, setNotificationColors] = useState({
    success: "#449637",
    danger: "#C15652",
    warning: "#F6C75A",
    info: "#5659CE",
  });

  const onColorsChange = (
    menuColors: MenuColorsI,
    baseColors: BaseColorsI,
    notificationColors: NotificationColorsI
  ) => {
    setMenuColors(menuColors);
    setBaseColors(baseColors);
    setNotificationColors(notificationColors);
  };

  return <div className="page"></div>;
}

export default App;

import React, { useState } from "react";

import { colorsData } from "data/colors";
import { ColorsI } from "types/colors";

import ColorSettings from "components/ColorSettings";

function App() {
  const [colors, setColors] = useState<ColorsI>({
    background: "#2B3D4F",
    sectionText: "#FFFFFF",
    marker: "#5286CA",
    sectionIcon: "#9CB2C9",
    titleAndText: "#333333",
    tags: "#8A91A7",
    icons: "#587AB0",
    workspace: "#FFFFFF",
    success: "#449637",
    danger: "#C15652",
    warning: "#F6C75A",
    info: "#5659CE",
  });

  const onColorsChange = (colors: ColorsI) => {
    setColors(colors);
  };

  return (
    <div className="page">
      <ColorSettings {...{ colors, colorsData, onColorsChange }} />
    </div>
  );
}

export default App;

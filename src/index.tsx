import React from "react";
import ReactDOM from "react-dom";
import App from "components/App";

import "fonts/SourceSansPro/SourceSansPro-Regular.ttf";
import "fonts/SourceSansPro/SourceSansPro-SemiBold.ttf";

import "styles/main.css";
import "styles/normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

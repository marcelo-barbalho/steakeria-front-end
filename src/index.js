import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routes";
import GlobalStyle from "./assets/styles/globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routers />
  </React.StrictMode>,
  document.getElementById("root")
);

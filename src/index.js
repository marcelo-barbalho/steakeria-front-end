import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routes";
import GlobalStyle from "./assets/styles/globalStyle";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Routers />
  </React.Fragment>,
  document.getElementById("root")
);

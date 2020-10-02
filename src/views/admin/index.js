import React from "react";
import Dash from "./dash";

import { Route } from "react-router-dom";

export default (props) => {
  return (
    <>
      <Route
        exact
        baseName={props.match.path}
        path={props.match.path + "/"}
        component={Dash}
      />
    </>
  );
};

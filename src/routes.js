import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Portal from "./views/portal";
import Admin from "./views/admin";
import history from "./config/history";

const Routers = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Portal} />
      </Switch>
    </Router>
  );
};

export default Routers;

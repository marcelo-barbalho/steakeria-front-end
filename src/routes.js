import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Portal from "./views/portal";
import Admin from "./views/admin";
import Login from "./views/auth/login";
import history from "./config/history";

const Routers = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/admin" component={Admin} />
  <Route exact path="/login" component= {Login} />
        <Route path="/" component={Portal} />
      </Switch>
    </Router>
  );
};

export default Routers;

import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Dash as AdminDash, Home } from "./views";
import history from "./config/history";

const Routers = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/admin" component={AdminDash} />
      </Switch>
    </Router>
  );
};

export default Routers;

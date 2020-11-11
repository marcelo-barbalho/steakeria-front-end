import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Portal from "./views/portal";
import Admin from "./views/admin";
import Login from "./views/auth/login";
import {isAuthenticated} from './config/auth'
import history from "./config/history";

const AdminRoute = ({...rest}) => {
    if(!isAuthenticated()) {
      return <Redirect to='login'/> 
    }
    return <Route {...rest} />
}



const Routers = () => {
  return (
    <Router history={history}>
      <Switch>
        <AdminRoute path="/admin" component={Admin} />
  <Route exact path="/login" component= {Login} />
        <Route path="/" component={Portal} />
      </Switch>
    </Router>
  );
};

export default Routers;

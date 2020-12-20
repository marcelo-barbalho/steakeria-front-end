import React from "react";
import Home from "./home";
import About from "./about";
import { Route } from "react-router-dom";
import Layout from "../../components/layout/portal";
import Product from "./product";
import Service from "./service";
import Contact from "./contact";

export default (props) => {
  return (
    <>
      <Layout>
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "/"}
          component={Home}
        />
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "about"}
          component={About}
        />
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "product"}
          component={Product}
        />
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "service"}
          component={Service}
        />
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "contact"}
          component={Contact}
        />
      </Layout>
    </>
  );
};

import React from "react";
import Home from "./home";
import About from "./about";
import { Route } from "react-router-dom";
import Layout from "../../components/layout";

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
      </Layout>
    </>
  );
};

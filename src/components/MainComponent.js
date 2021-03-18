import React from "react";
import LoginPage from "./LoginComponent";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" component={LoginPage} />
      </Switch>
    </React.Fragment>
  );
}

export default Main;
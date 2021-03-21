import React from "react";
import LoginPage from "./LoginComponent";
import CreateAccount from "./CreatAccountComponent";
import RetrievePassword from "./RetrievePasswordComponent";
import { Switch, Route } from "react-router-dom";


const Main = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/createAccount" component={CreateAccount} />
        <Route path="/retrievePassword" component={RetrievePassword} />
      </Switch>
    </React.Fragment>
  );
}

export default Main;
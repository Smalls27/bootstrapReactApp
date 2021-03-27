import React, { Component } from "react";
import LoginPage from "./LoginComponent";
import CreateAccount from "./CreatAccountComponent";
import RetrievePassword from "./RetrievePasswordComponent";
import ContactPage from "./ContactComponent";
import AboutPage from "./AboutComponent";
import Products from "./ProductComponent";
import { PRODUCTS } from "./Products";
import { Switch, Route } from "react-router-dom";


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: PRODUCTS
    }
  }


  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/createAccount" component={CreateAccount} />
          <Route path="/retrievePassword" component={RetrievePassword} />
          <Route path="/contactus" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/products" render={() => <Products products={this.state.products} />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
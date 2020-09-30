import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./Header";
import Auth from "Routes/Auth";
import Home from "Routes/Home/index";
import Product from "Routes/Product";
import Company from "Routes/Company";

export default ({ isLoggedIn }) => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/" component={Home}></Route>
            <Route path="/product" component={Product}></Route>
            <Route path="/company" component={Company}></Route>
            <Redirect from="*" to="/"></Redirect>
          </>
        ) : (
          <Route exact path="/">
            <Auth></Auth>
          </Route>
        )}
      </Switch>
    </Router>
  );
};

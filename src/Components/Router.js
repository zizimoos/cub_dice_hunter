import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "./Header";
import Home from "../Routes/Home/index";
import Product from "../Routes/Product";
import Company from "../Routes/Company";

export default () => (
  <Router>
    <Header></Header>
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/product" component={Product}></Route>
      <Route path="/company" component={Company}></Route>
      <Redirect from="*" to="/"></Redirect>
    </Switch>
  </Router>
);

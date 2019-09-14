/* eslint-disable import/no-named-as-default */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";

import "../assets/styles/main.scss";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Signin} />
    </Switch>
  </BrowserRouter>
);

export default App;

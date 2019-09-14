/* eslint-disable import/no-named-as-default */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";

import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/main.scss";

const App = () => (
  <BrowserRouter>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Signin} />
    </Switch>
  </BrowserRouter>
);

export default App;

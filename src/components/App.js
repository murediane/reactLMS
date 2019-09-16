/* eslint-disable import/no-named-as-default */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "./Home";
import Signup from "./Signup";
import Signin from "./Signin";
import Inbox from "./Inbox";

import "react-toastify/dist/ReactToastify.css";

const App = () => (
  <BrowserRouter>
    <ToastContainer />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Signin} />
      <Route exact path="/inbox" component={Inbox} />
    </Switch>
  </BrowserRouter>
);

export default App;

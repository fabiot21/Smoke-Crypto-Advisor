import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Components from "./Components/Components.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import Smoke from "./Smoke/LandingPage.jsx";
import ProfilePage from "./ProfilePage/ProfilePage.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import SignupPage from "./SignupPage/SignupPage.jsx";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/signup" component={SignupPage} />
      <Route path="/signin" component={SignupPage} />
      <Route path="/" component={Smoke} />
    </Switch>
  </Router>
);

import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Register from "./components/Register";

export default () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Register} />
      </Switch>
    </div>
  </Router>
);

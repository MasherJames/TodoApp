import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Register from "./components/Register";

export default () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

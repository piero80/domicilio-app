import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Mappa from "./Mappa";
import Contatti from "./Contatti";

class Main extends Component {
  componentDidMount() {}
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/mappa">
          <Mappa />
        </Route>
        <Route exact path="/contatti">
          <Contatti />
        </Route>
      </Switch>
    );
  }
}
export default Main;

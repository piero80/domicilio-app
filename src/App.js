import React, { Component } from "react";
import Main from "./containers/Main";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "tailwindcss/dist/tailwind.min.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Main />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;

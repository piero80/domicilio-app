import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Mappa from "./Mappa";
import Contatti from "./Contatti";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const result = await axios(`${process.env.REACT_APP_DATA_SOURCE}`);
    setData(result.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Home results={data} />
      </Route>
      <Route exact path="/mappa">
        <Mappa />
      </Route>
      <Route exact path="/contatti">
        <Contatti />
      </Route>
    </Switch>
  );
};
export default Main;

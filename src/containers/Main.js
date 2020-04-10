import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Mappa from "./routes/Mappa";
import Contatti from "./routes/Contatti";
import Mezzocammino from "./routes/Mezzocammino";
import Detail from "./routes/Detail";
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
  const [dataRegion, setDataRegion] = useState([]);
  const fetchDataRegion = async () => {
    const result = await axios(
      `${process.env.REACT_APP_DATA_SOURCE_MEZZOCAMMINO}`
    );
    setDataRegion(result.data);
  };
  useEffect(() => {
    fetchDataRegion();
  }, []);
  return (
    <Switch>
      <Route exact path="/">
        <Home results={data} />
      </Route>
      <Route exact path="/mezzocammino">
        <Mezzocammino results={dataRegion} />
      </Route>
      <Route exact path="/mezzocammino/:id" component={Detail}></Route>
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

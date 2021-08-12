import "./styles/global.scss";
import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./screens/Home/Home";

const App: React.FunctionComponent = () => {
  console.log("Root component - App");

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

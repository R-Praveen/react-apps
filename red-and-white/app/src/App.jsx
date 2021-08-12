import "./styles/global.scss";
import React, { useState } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import About from "./components/About";
import ConfirmOrder from "./components/ConfirmOrder";
import Shopping from "./components/Shopping";
import { CONSTANTS } from "./constants/constants";

/**
 * Root Component of the shopping site.
 */
const App = () => {
  const [currentCartItems, setCurrentCartItems] = useState([]);
  const { URL_PATHS } = CONSTANTS;

  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path={URL_PATHS.HOME}>
            <Redirect to={URL_PATHS.SHOPPING_MEN} />
          </Route>
          <Route
            path={URL_PATHS.SHOPPING}
            render={(props) => (
              <Shopping
                {...props}
                currentCartItems={currentCartItems}
                setCurrentCartItems={setCurrentCartItems}
              />
            )}
          />
          <Route path={URL_PATHS.ABOUT} component={About} />
          <Route
            path={URL_PATHS.CONFIRM_ORDER}
            render={(props) => {
              return currentCartItems.length ? (
                <ConfirmOrder {...props} currentCartItems={currentCartItems} />
              ) : (
                <Redirect to={URL_PATHS.SHOPPING_MEN} />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

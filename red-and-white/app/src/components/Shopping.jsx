import "../styles/Shopping.scss";
import React from "react";

import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { CONSTANTS } from "../constants/constants";
import Cart from "./Cart";
import Menu from "./Menu";
import ShoppingCategory from "./ShoppingCategory";

/**
 * Displays the Shoppping Page.
 * @param {object} props
 */
const Shopping = (props) => {
  const { currentCartItems, setCurrentCartItems, match } = props;
  const { ROUTE_NAMES, URL_PATHS } = CONSTANTS;

  const generateShoppingList = (props, category) => {
    return (
      <ShoppingCategory
        {...props}
        currentCartItems={currentCartItems}
        setCurrentCartItems={setCurrentCartItems}
        category={category}
      />
    );
  };

  return (
    <div className="shopping">
      <Menu />
      <Route exact path={match.path}>
        <Redirect to={URL_PATHS.SHOPPING_MEN} />
      </Route>
      {Object.entries(ROUTE_NAMES).map(([, route]) => (
        <Route
          key={route}
          path={`${match.path}/${route}`}
          render={(props) => generateShoppingList(props, route)}
        />
      ))}
      <Cart
        currentCartItems={currentCartItems}
        setCurrentCartItems={setCurrentCartItems}
      />
    </div>
  );
};

Shopping.propTypes = {
  currentCartItems: PropTypes.array.isRequired,
  setCurrentCartItems: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

export default Shopping;

import "../styles/Cart.scss";
import React from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { CONSTANTS } from "../constants/constants";
import Button from "./Button";
import CartItemList from "./CartItemList";

/**
 * Shopping Cart to add and remove items for placing an order.
 */
const Cart = (props) => {
  const { currentCartItems, setCurrentCartItems } = props;

  const handleRemoveItem = (id) => {
    setCurrentCartItems(
      currentCartItems.filter((currentCartItem) => currentCartItem.id !== id)
    );
  };

  const handleUpdateItemCount = (count, id) => {
    const index = currentCartItems.findIndex(
      (currentCartItem) => currentCartItem.id === id
    );
    currentCartItems[index].count = count;
    setCurrentCartItems([...currentCartItems]);
  };

  return (
    <div className="cart">
      <div className="title">
        <span>MY CART ({currentCartItems.length})</span>
      </div>
      <CartItemList
        currentCartItems={currentCartItems}
        handleRemoveItem={handleRemoveItem}
        handleUpdateItemCount={handleUpdateItemCount}
      />
      <div>
        <Link
          to={CONSTANTS.URL_PATHS.CONFIRM_ORDER}
          style={{ pointerEvents: currentCartItems.length ? "auto" : "none" }}
        >
          <Button
            className="btn primary-btn"
            disabled={currentCartItems.length === 0}
          >
            PLACE ORDER
          </Button>
        </Link>
      </div>
    </div>
  );
};

Cart.propTypes = {
  currentCartItems: PropTypes.array.isRequired,
  setCurrentCartItems: PropTypes.func.isRequired,
};

export default Cart;

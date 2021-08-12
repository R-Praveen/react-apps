import React from "react";

import PropTypes from "prop-types";

import CartItem from "./CartItem";

const CartItemList = (props) => {
  const {
    currentCartItems,
    handleRemoveItem,
    handleUpdateItemCount,
    canUpdateCartItem,
  } = props;
  return (
    <div className="cart-item-list">
      {currentCartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemoveItem={handleRemoveItem}
          onUpdateItemCount={handleUpdateItemCount}
          canUpdateCartItem={canUpdateCartItem}
        />
      ))}
    </div>
  );
};

CartItemList.propTypes = {
  currentCartItems: PropTypes.array.isRequired,
  handleRemoveItem: PropTypes.func,
  handleUpdateItemCount: PropTypes.func,
  canUpdateCartItem: PropTypes.bool,
};

export default CartItemList;

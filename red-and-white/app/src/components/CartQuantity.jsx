import "../styles/CartQuantity.scss";
import React from "react";

import PropTypes from "prop-types";
import { Button as CustomButton, Icon } from "semantic-ui-react";

/**
 * Used to increase or decrease quantity of a particular item.
 * @param {object} props
 */
const CartQuantity = (props) => {
  const { count, onRemoveItem, onUpdateItemCount } = props;

  const handleIncrement = () => {
    onUpdateItemCount(count + 1);
  };

  const handleDecrement = () => {
    const updatedCount = count - 1;
    if (updatedCount === 0) onRemoveItem();
    else onUpdateItemCount(updatedCount);
  };

  return (
    <div className="cart-quantity">
      <CustomButton.Group>
        <CustomButton icon onClick={handleIncrement}>
          <Icon name="plus" />
        </CustomButton>
        <CustomButton disabled>{count}</CustomButton>
        <CustomButton icon onClick={handleDecrement}>
          <Icon name="minus" />
        </CustomButton>
      </CustomButton.Group>
    </div>
  );
};

CartQuantity.propTypes = {
  count: PropTypes.number.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onUpdateItemCount: PropTypes.func.isRequired,
};

export default CartQuantity;

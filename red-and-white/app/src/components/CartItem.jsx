import "../styles/CartItem.scss";
import React, { useState } from "react";

import PropTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";

import { CONSTANTS } from "../constants/constants";
import Button from "./Button";
import CartQuantity from "./CartQuantity";

/**
 * Displays an individual Cart
 * @param {object} props
 */
const CartItem = (props) => {
  const {
    item,
    onRemoveItem,
    onUpdateItemCount,
    canUpdateCartItem = true,
  } = props;

  const [imageSource, setImageSource] = useState(item.image);

  const handleImageError = () => {
    setImageSource(CONSTANTS.FALLBACK_IMAGE_URL);
  };

  return (
    <Card>
      <Card.Content>
        <Image
          floated="left"
          src={imageSource}
          onError={handleImageError}
          alt="shopping-item"
          size="tiny"
        />
        <Card.Header>{item.name}</Card.Header>
        <div className="price-quantity-wrapper">
          <div className="price">
            <span>{item.price || "$ 0"}</span>
          </div>
          {canUpdateCartItem && (
            <CartQuantity
              count={item.count}
              onRemoveItem={() => onRemoveItem(item.id)}
              onUpdateItemCount={(count) => onUpdateItemCount(count, item.id)}
            />
          )}
        </div>
        {canUpdateCartItem && (
          <div className="button-wrapper">
            <Button
              className="remove-btn"
              onClick={() => onRemoveItem(item.id)}
            >
              REMOVE
            </Button>
          </div>
        )}
      </Card.Content>
    </Card>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemoveItem: PropTypes.func,
  onUpdateItemCount: PropTypes.func,
  canUpdateCartItem: PropTypes.bool,
};

export default CartItem;

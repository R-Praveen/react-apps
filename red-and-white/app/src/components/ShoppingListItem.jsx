import "../styles/ShoppingListItem.scss";
import React, { useState } from "react";

import PropTypes from "prop-types";
import { Card, Image } from "semantic-ui-react";

import { CONSTANTS } from "../constants/constants";
import Button from "./Button";

/**
 * Displays an individual item in a shopping list.
 * @param {object} props
 */
const ShoppingListItem = (props) => {
  const { item, onAddToCart } = props;
  const [imageSource, setImageSource] = useState(item.image);

  const handleImageError = () => {
    setImageSource(CONSTANTS.FALLBACK_IMAGE_URL);
  };

  return (
    <Card>
      <Image src={imageSource} onError={handleImageError} alt="shopping-item" />
      <Card.Content>
        <Card.Description>{item.name}</Card.Description>
        <div className="bottom-wrapper">
          <div className="item-meta-wrapper">
            <div className="price">
              <span>{item.price || "$ 0"}</span>
            </div>
            <div className="size">
              <span>{CONSTANTS.DUMMY_SIZE}</span>
            </div>
          </div>
          <div className="button-wrapper">
            <div className="left">
              <Button className="btn">WISHLIST</Button>
            </div>
            <div className="right">
              <Button className="btn" onClick={() => onAddToCart(item)}>
                ADD TO BAG
              </Button>
            </div>
          </div>
        </div>
      </Card.Content>
    </Card>
  );
};

ShoppingListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ShoppingListItem;

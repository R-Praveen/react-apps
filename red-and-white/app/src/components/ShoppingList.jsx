import React from "react";

import PropTypes from "prop-types";
import { Card } from "semantic-ui-react";

import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = ({ shoppingList, handleAddToCart }) => {
  return (
    <div className="shopping-list">
      <Card.Group>
        {shoppingList.map((item) => (
          <ShoppingListItem
            key={item.id}
            item={item}
            onAddToCart={handleAddToCart}
          />
        ))}
      </Card.Group>
    </div>
  );
};

ShoppingList.propTypes = {
  shoppingList: PropTypes.array.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ShoppingList;

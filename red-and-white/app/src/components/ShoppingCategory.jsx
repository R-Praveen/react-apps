import "../styles/ShoppingCategory.scss";
import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";

import { getShoppingList } from "../api/shopping";
import ShoppingHeader from "./ShoppingHeader";
import ShoppingList from "./ShoppingList";

/**
 * Displays the list of shopping items available based on the selected category.
 * @param {object} props
 */
const ShoppingCategory = (props) => {
  const { currentCartItems, setCurrentCartItems, category } = props;
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    getShoppingList(category)
      .then(({ data }) => {
        setShoppingList(data);
      })
      .catch((err) => {
        console.log("[ERROR]", err);
        setShoppingList([]);
      });
  }, [category]);

  const handleAddToCart = (item) => {
    const index = currentCartItems.findIndex(
      (currentCartItem) => currentCartItem.id === item.id
    );
    if (index >= 0) {
      currentCartItems[index].count += 1;
      setCurrentCartItems([...currentCartItems]);
    } else setCurrentCartItems([...currentCartItems, { ...item, count: 1 }]);
  };

  return (
    <div className="shopping-category">
      <ShoppingHeader category={category} />
      <ShoppingList
        handleAddToCart={handleAddToCart}
        shoppingList={shoppingList}
      />
    </div>
  );
};

ShoppingCategory.propTypes = {
  category: PropTypes.string.isRequired,
  currentCartItems: PropTypes.array.isRequired,
  setCurrentCartItems: PropTypes.func.isRequired,
};

export default ShoppingCategory;

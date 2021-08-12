import React from "react";

import PropTypes from "prop-types";

import { CONSTANTS } from "../constants/constants";
import UserInfoBar from "./UserInfoBar";

const ShoppingHeader = ({ category }) => {
  return (
    <div className="shopping-category-header">
      <UserInfoBar username={CONSTANTS.DUMMY_USERNAME} />
      <div className="category-title">
        <span>{category.toUpperCase()}</span>
      </div>
    </div>
  );
};

ShoppingHeader.propTypes = {
  category: PropTypes.string.isRequired,
};

export default ShoppingHeader;

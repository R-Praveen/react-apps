import "../styles/Menu.scss";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Menu as CustomMenu } from "semantic-ui-react";

import { CONSTANTS } from "../constants/constants";

/**
 * Menu component of the Shopping page.
 */
const Menu = () => {
  const { URL_PATHS, IMAGE_PATHS, MENU_NAMES } = CONSTANTS;
  const [activeCategory, setActiveCategory] = useState(
    window.location.pathname
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="menu">
      <div className="logo-wrapper">
        <img alt="logo" src={IMAGE_PATHS.LOGO} />
      </div>
      <CustomMenu secondary vertical>
        <Link
          to={URL_PATHS.SHOPPING_MEN}
          onClick={() => handleCategoryChange(URL_PATHS.SHOPPING_MEN)}
        >
          <CustomMenu.Item
            name={MENU_NAMES.MEN}
            active={activeCategory === URL_PATHS.SHOPPING_MEN}
          />
        </Link>
        <Link
          to={URL_PATHS.SHOPPING_WOMEN}
          onClick={() => handleCategoryChange(URL_PATHS.SHOPPING_WOMEN)}
        >
          <CustomMenu.Item
            name={MENU_NAMES.WOMEN}
            active={activeCategory === URL_PATHS.SHOPPING_WOMEN}
          />
        </Link>
        <Link
          to={URL_PATHS.SHOPPING_KIDS}
          onClick={() => handleCategoryChange(URL_PATHS.SHOPPING_KIDS)}
        >
          <CustomMenu.Item
            name={MENU_NAMES.KIDS}
            active={activeCategory === URL_PATHS.SHOPPING_KIDS}
          />
        </Link>
        <Link to={URL_PATHS.ABOUT}>
          <CustomMenu.Item name={MENU_NAMES.ABOUT} />
        </Link>
      </CustomMenu>
    </div>
  );
};

export default Menu;

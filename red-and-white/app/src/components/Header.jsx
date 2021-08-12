import "../styles/Header.scss";
import React from "react";

import { CONSTANTS } from "../constants/constants";

/**
 * Header of the shopping site.
 */
const Header = () => {
  return (
    <div className="c-header">
      <div className="wrapper">
        <img alt="logo" src={CONSTANTS.IMAGE_PATHS.LOGO} />
      </div>
    </div>
  );
};

export default Header;

import "../styles/UserInfoBar.scss";
import React from "react";

import PropTypes from "prop-types";

import { CONSTANTS } from "../constants/constants";

/**
 * Displays the user info bar in the shopping page.
 * @param {object} param
 */
const UserInfoBar = ({ username }) => {
  return (
    <div className="user-info-bar">
      <div className="username">
        <span>Hi {username}</span>
      </div>
      <div className="avatar">
        <img alt="avatar" src={CONSTANTS.IMAGE_PATHS.AVATAR} />
      </div>
    </div>
  );
};

UserInfoBar.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserInfoBar;

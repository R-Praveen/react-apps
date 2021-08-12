import React from "react";

import PropTypes from "prop-types";

const Button = (props) => {
  return <button {...props}>{props.children}</button>;
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Button;

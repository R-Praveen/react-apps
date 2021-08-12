import React from "react";

import styles from "./Button.module.scss";

interface ButtonInterface {
  label: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}

const Button: React.FunctionComponent<ButtonInterface> = (props) => {
  console.log("Component - Button");

  const { onClick, disabled, label, className } = props;

  return (
    <button
      className={`${styles.button} ${className ? className : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default React.memo(Button);

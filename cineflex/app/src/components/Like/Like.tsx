import React from "react";

import Icon from "../Icon/Icon";
import styles from "./Like.module.scss";

interface LikeInterface {
  onClick: () => void;
  className: string;
}

const Like: React.FunctionComponent<LikeInterface> = ({
  onClick,
  className,
}) => {
  console.log("Component - Like");

  return (
    <div
      className={`${styles.like} ${className ? className : ""}`}
      onClick={onClick}
    >
      <Icon className="fas fa-thumbs-up" />
    </div>
  );
};

export default React.memo(Like);

import React from "react";

import Navigation from "../../containers/Navigation/Navigation";
import styles from "./Page.module.scss";

interface PageInterface {
  showNavigation?: boolean;
  title?: string;
  titleStyle?: string;
  className?: string;
}

const Page: React.FunctionComponent<PageInterface> = (props) => {
  console.log("Component - Page");

  const { showNavigation = true, className, title, titleStyle } = props;

  return (
    <div className={`${styles.page} ${className ? className : ""}`}>
      {showNavigation && <Navigation />}
      <div className={titleStyle || styles.title}>{title}</div>
      {props.children}
    </div>
  );
};

export default Page;

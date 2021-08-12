import React from "react";

import styles from "./Container.module.scss";

interface ContainerInterface {
  heading: string;
  children: object;
  className?: string;
  contentStyle?: string;
  headingStyle?: string;
}

const Container: React.FunctionComponent<ContainerInterface> = (props) => {
  console.log("Component - Container");
  const { heading, children, className, contentStyle, headingStyle } = props;

  return (
    <div className={`${styles.container} ${className ? className : ""}`}>
      <div className={`${styles.heading} ${headingStyle ? headingStyle : ""}`}>
        {heading}
      </div>
      <div className={contentStyle}>{children}</div>
    </div>
  );
};

export default Container;

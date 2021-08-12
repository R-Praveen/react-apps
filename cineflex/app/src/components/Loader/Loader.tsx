import React, { Fragment } from "react";

import { CONSTANTS } from "../../constants/constants";
import styles from "./Loader.module.scss";

interface LoaderInterface {
  isLoading: boolean;
  className?: string;
  contentStyle?: string;
}

const Loader: React.FunctionComponent<LoaderInterface> = ({
  isLoading,
  children,
}) => {
  console.log("Component - Loader");

  return (
    <Fragment>
      {isLoading ? (
        <div className={styles.loader}>
          <div className={styles.loaderWrapper}>
            <img src={CONSTANTS.ASSETS.LOADER} alt="loader" />
          </div>
        </div>
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Fragment>
  );
};

export default Loader;

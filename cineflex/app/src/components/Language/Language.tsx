import React from "react";

import styles from "./Language.module.scss";

interface LanguageInterface {
  literal: string;
}

const Language: React.FunctionComponent<LanguageInterface> = ({ literal }) => {
  console.log("Component - Language");

  return <div className={styles.language}>{literal}</div>;
};

export default Language;

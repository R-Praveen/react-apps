import React from "react";

import Container from "../../components/Container/Container";
import Language from "../../components/Language/Language";
import { CONSTANTS } from "../../constants/constants";
import styles from "./LanguageList.module.scss";

const LanguageList: React.FunctionComponent = () => {
  console.log("Component - Language List");

  const { LANGUAGES } = CONSTANTS;
  return (
    <Container
      heading="View in Other Languages"
      headingStyle={styles.heading}
      className={styles.languageList}
      contentStyle={styles.content}
    >
      {Object.values(LANGUAGES).map((literal: string, index: number) => (
        <Language key={index} literal={literal} />
      ))}
    </Container>
  );
};

export default LanguageList;

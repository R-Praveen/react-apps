import React from "react";

import Cover from "../../components/Cover/Cover";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Page from "../../components/Page/Page";
import LanguageList from "../../containers/LanguageList/LanguageList";
import Lottery from "../../containers/Lottery/Lottery";
import TeaserList from "../../containers/TeaserList/TeaserList";
import Trailer from "../../containers/Trailer/Trailer";
import styles from "./Home.module.scss";

const Home: React.FunctionComponent = () => {
  console.log("Screen - Home");

  return (
    <Page className={styles.home}>
      <Cover className={styles.cover}>
        <ErrorBoundary fallback={() => <Lottery error={true} />}>
          <Lottery />
        </ErrorBoundary>
      </Cover>
      <Trailer />
      <TeaserList />
      <LanguageList />
    </Page>
  );
};

export default Home;

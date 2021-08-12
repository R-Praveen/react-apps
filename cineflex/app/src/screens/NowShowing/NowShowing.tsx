import React from "react";

import Page from "../../components/Page/Page";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";
import { CONSTANTS } from "../../constants/constants";
import styles from "./NowShowing.module.scss";

const NowShowing: React.FunctionComponent = () => {
  console.log("Screen - Now Showing");

  const { SINTEL } = CONSTANTS;
  return (
    <Page
      className={styles.nowShowing}
      title="Now Showing"
      titleStyle={styles.title}
    >
      <VideoDisplay
        videoSrc={SINTEL.VIDEO_URL}
        videoType={SINTEL.VIDEO_TYPE}
        className={styles.videoDisplay}
        title={SINTEL.TITLE}
        poster={SINTEL.POSTER}
        description={SINTEL.DESCRIPTION}
      />
    </Page>
  );
};

export default NowShowing;

import React, { useEffect, useState } from "react";

import Container from "../../components/Container/Container";
import Loader from "../../components/Loader/Loader";
import VideoDisplay from "../../components/VideoDisplay/VideoDisplay";
import { CONSTANTS } from "../../constants/constants";
import { withAdTimer } from "../../hocs/WithAdTimer/WithAdTimer";
import { MovieService } from "../../services/MovieService";
import styles from "./TeaserList.module.scss";

type Teaser = {
  name: string;
  link: string;
  ad: boolean;
  poster: string;
};

const initialTeasersState: Teaser[] = [];

const TeaserList: React.FunctionComponent = () => {
  console.log("Component - Teaser List");

  const [teasers, setTeasers] = useState<Teaser[]>(initialTeasersState);
  const [isLoading, setIsLoading] = useState(true);
  const { TIMED_TEASER } = CONSTANTS;
  const TimedTeaser = withAdTimer(VideoDisplay, {
    adDuration: TIMED_TEASER.AD_DURATION,
    adBanners: TIMED_TEASER.AD_BANNERS,
    interval: TIMED_TEASER.INTERVAL,
    forVideo: true,
    messages: { adStart: TIMED_TEASER.AD_START, adStop: TIMED_TEASER.AD_STOP },
  });

  useEffect(() => {
    const fetchTeasers = async () => {
      try {
        const teasers = await MovieService.getTeasers();
        setTeasers(teasers as Teaser[]);
      } catch (err) {
        setTeasers(initialTeasersState);
      }
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchTeasers();
  }, []);

  const renderTeaser = (teaser: Teaser, index: number) => {
    const Teaser = teaser.ad ? TimedTeaser : VideoDisplay;

    return (
      <Teaser
        className={styles.videoDisplay}
        key={index}
        videoSrc={teaser.link}
        videoType={CONSTANTS.SINTEL.VIDEO_TYPE}
        description={teaser.name}
        descriptionStyle={styles.videoTitle}
        poster={teaser.poster}
      />
    );
  };

  return (
    <Container
      heading="Teasers"
      className={styles.teaserList}
      contentStyle={styles.content}
    >
      <Loader isLoading={isLoading} />
      {teasers.map((teaser, index) => renderTeaser(teaser, index))}
    </Container>
  );
};

export default TeaserList;

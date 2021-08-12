import React, { useCallback, useEffect, useState } from "react";

import Poster from "../Poster/Poster";
import Video from "../Video/Video";
import styles from "./VideoDisplay.module.scss";

interface VideoDisplayInterface {
  title?: string;
  description?: string;
  poster?: string;
  descriptionStyle?: string;
  videoSrc: string;
  videoType: string;
  className: string;
  children?: object;
  displayAd?: boolean;
  adBanner?: string;
  onVideoStartOrStop?: (duration: number | undefined) => void;
}

const VideoDisplay: React.FunctionComponent<VideoDisplayInterface> = (
  props
) => {
  console.log("Component - Video Display");

  const {
    title,
    description,
    videoSrc,
    videoType,
    className,
    poster,
    descriptionStyle,
    children,
    displayAd,
    adBanner,
    onVideoStartOrStop,
  } = props;

  const [video, setVideo] = useState<HTMLVideoElement>({} as HTMLVideoElement);

  useEffect(() => {
    if (video.currentTime > 0)
      if (displayAd) video.pause();
      else video.play();
  }, [displayAd, video]);

  const handleTimerCall = useCallback(
    (duration: number | undefined) => {
      onVideoStartOrStop && onVideoStartOrStop(duration);
    },
    [onVideoStartOrStop]
  );

  return (
    <div className={`${styles.videoDisplay} ${className ? className : ""}`}>
      {title && <div className={styles.title}>{title}</div>}
      <Video
        ref={useCallback((video: HTMLVideoElement) => setVideo(video), [])}
        src={videoSrc}
        type={videoType}
        poster={poster}
        onPlay={() => handleTimerCall(video.currentTime)}
        onEnded={() => handleTimerCall(-1)}
      />
      {displayAd && (
        <Poster className={styles.adBanner} posterUrl={adBanner as string} />
      )}
      {description && (
        <div
          className={`${styles.description} ${
            descriptionStyle ? descriptionStyle : ""
          }`}
        >
          {description}
        </div>
      )}
      {children}
    </div>
  );
};

export default React.memo(VideoDisplay);

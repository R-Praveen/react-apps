import React, { useState, useCallback } from "react";

import AdTimer from "../../components/AdTimer/AdTimer";

type AdTimerConfig = {
  adDuration: number;
  interval: number;
  adBanners: string[];
  messages?: { adStart: string; adStop: string };
  forVideo: boolean;
};

export const withAdTimer = (
  WrappedComponent: React.FunctionComponent<any>,
  adTimerConfig: AdTimerConfig
) => {
  const WithAdTimer: React.FunctionComponent<any> = (props) => {
    console.log("Component - With Ad Timer");

    const {
      adDuration,
      interval,
      adBanners,
      messages,
      forVideo,
    } = adTimerConfig;
    const [displayAd, setDisplayAd] = useState(false);
    const [hideTimer, setHideTimer] = useState(forVideo);

    const handleTimeout = useCallback(() => {
      setDisplayAd((display) => !display);
    }, []);

    const handleVideoStartOrStop = useCallback((duration: number) => {
      if (duration === 0) setHideTimer(false);
      if (duration === -1) {
        setHideTimer(true);
        setDisplayAd(false);
      }
    }, []);

    return (
      <WrappedComponent
        displayAd={displayAd}
        adBanner={
          adBanners && adBanners[Math.floor(Math.random() * adBanners.length)]
        }
        onVideoStartOrStop={forVideo ? handleVideoStartOrStop : undefined}
        {...props}
      >
        {!hideTimer && (
          <AdTimer
            timeout={displayAd ? adDuration : interval}
            onTimeout={handleTimeout}
            message={
              messages && (displayAd ? messages.adStart : messages.adStop)
            }
          />
        )}
      </WrappedComponent>
    );
  };

  return WithAdTimer;
};

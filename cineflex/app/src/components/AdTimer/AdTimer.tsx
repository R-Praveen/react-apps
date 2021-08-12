import React, { useEffect, useState } from "react";

import styles from "./AdTimer.module.scss";

interface TimerInterface {
  timeout: number;
  onTimeout: () => void;
  className?: string;
  message?: string;
}

const AdTimer: React.FunctionComponent<TimerInterface> = (props) => {
  console.log("Component - Ad Timer");
  const { timeout, className, message, onTimeout } = props;
  const [seconds, setSeconds] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(() => {
      onTimeout();
    }, (timeout + 0.5) * 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);

  useEffect(() => {
    setSeconds(timeout);
    let currentSecond = timeout - 1;

    const secondsInterval = setInterval(() => {
      setSeconds(currentSecond);
      if (currentSecond === 0) clearInterval(secondsInterval);
      currentSecond = currentSecond - 1;
    }, 1000);

    return () => {
      clearInterval(secondsInterval);
    };
  }, [timeout]);

  const formatSeconds = (seconds: number) => {
    return `00:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div
      className={`${styles.timer} ${className ? className : ""}`}
      data-testid="adTimer"
    >
      {`${message ? `${message} ` : ""}${formatSeconds(seconds)}`}
    </div>
  );
};

export default React.memo(AdTimer, (prevProps, currentProps) => {
  const {
    timeout: prevTimeout,
    message: prevMessage,
    onTimeout: prevOnTimeout,
  } = prevProps;
  console.log(prevProps, currentProps);
  const {
    timeout: currentTimeout,
    message: currentMessage,
    onTimeout: currentOnTimeout,
  } = currentProps;
  if (
    prevTimeout === currentTimeout &&
    prevOnTimeout === currentOnTimeout &&
    prevMessage === currentMessage
  ) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
});

import React, {
  useState,
  ForwardRefExoticComponent,
  RefAttributes,
} from "react";

import { MESSAGES } from "../../constants/messages";
import styles from "./Video.module.scss";

interface VideoInterface {
  src: string;
  type: string;
  poster?: string;
  onPlay?: () => void;
  onEnded?: () => void;
}

const Video: ForwardRefExoticComponent<
  VideoInterface & RefAttributes<HTMLVideoElement>
> = React.forwardRef((props, ref) => {
  console.log("Component - Video");

  const { src, type, poster } = props;
  const [error, setError] = useState(false);

  return (
    <div className={styles.video}>
      <video
        data-testid="video"
        ref={ref}
        poster={poster}
        controls={error ? false : true}
        onError={() => setError(true)}
        {...props}
      >
        <source src={src} type={type} />
      </video>
      {error && (
        <div className={styles.videoError}>{MESSAGES.ERRORS.VIDEO.INVALID}</div>
      )}
    </div>
  );
});

Video.displayName = "Video";

export default React.memo(Video);

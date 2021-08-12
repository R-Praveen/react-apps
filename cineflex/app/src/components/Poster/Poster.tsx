import React, { useState, useEffect, useCallback } from "react";

import { CONSTANTS } from "../../constants/constants";
import styles from "./Poster.module.scss";

interface PosterInterface {
  posterUrl: string;
  onSelection?: () => void;
  className?: string;
}

const Poster: React.FunctionComponent<PosterInterface> = ({
  posterUrl,
  onSelection,
  className,
}) => {
  console.log("Component - Poster");

  const [imageSrc, setImageSrc] = useState(posterUrl);

  useEffect(() => {
    setImageSrc(posterUrl);
  }, [posterUrl]);

  return (
    <div
      className={className || styles.poster}
      onClick={onSelection}
      data-testid="adBanner"
    >
      <img
        src={imageSrc}
        onError={useCallback(
          () => setImageSrc(CONSTANTS.ASSETS.PLACEHOLDER),
          []
        )}
        alt="poster"
      />
    </div>
  );
};

export default React.memo(Poster);

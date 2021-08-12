import React from "react";

import MovieDescription, {
  MovieDescriptionInterface,
} from "../../components/MovieDescription/MovieDescription";
import { CONSTANTS } from "../../constants/constants";
import { withAdTimer } from "../../hocs/WithAdTimer/WithAdTimer";

const TimedMovieDescription: React.FunctionComponent<MovieDescriptionInterface> = ({
  movie,
  dispatch,
}) => {
  console.log("Component - Timed Movie Description");

  const { TIMED_MOVIE_DESCRIPTION } = CONSTANTS;
  const MovieDescriptionWithAdTimer = withAdTimer(MovieDescription, {
    adDuration: TIMED_MOVIE_DESCRIPTION.AD_DURATION,
    interval: TIMED_MOVIE_DESCRIPTION.INTERVAL,
    adBanners: TIMED_MOVIE_DESCRIPTION.AD_BANNERS,
    messages: {
      adStart: TIMED_MOVIE_DESCRIPTION.AD_START,
      adStop: TIMED_MOVIE_DESCRIPTION.AD_STOP,
    },
    forVideo: false,
  });

  if (!movie.title) return null;

  return <MovieDescriptionWithAdTimer movie={movie} dispatch={dispatch} />;
};

export default TimedMovieDescription;

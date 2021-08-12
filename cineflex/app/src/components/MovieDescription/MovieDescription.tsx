import React, { Fragment } from "react";

import {
  AllMoviesActionInterface,
  INCREMENT_LIKE_ACTION,
} from "../../reducers/allMovies/allMoviesActions";
import { Movie } from "../../types/Movie";
import Like from "../Like/Like";
import Poster from "../Poster/Poster";
import styles from "./MovieDescription.module.scss";

export interface MovieDescriptionInterface {
  movie: Movie;
  dispatch: React.Dispatch<AllMoviesActionInterface>;
  displayAd?: boolean;
  adBanner?: string;
}

const MovieDescription: React.FunctionComponent<MovieDescriptionInterface> = (
  props
) => {
  console.log("Component - Movie Description");

  const { movie, dispatch, displayAd, adBanner } = props;
  const incrementAction = INCREMENT_LIKE_ACTION;
  incrementAction.payload.incrementBy = 1;
  incrementAction.payload.title = movie.title;

  return (
    <div className={styles.movieDescription}>
      <div className={styles.contentWrapper}>
        {displayAd ? (
          <Poster className={styles.adBanner} posterUrl={adBanner as string} />
        ) : (
          <Fragment>
            <div className={styles.title}>{movie.title}</div>
            <div className={styles.likeCount}>{movie.likes} Likes</div>
            <Like
              className={styles.like}
              onClick={() => {
                dispatch(incrementAction);
              }}
            />
            <div className={styles.content}>
              <Poster className={styles.poster} posterUrl={movie.posterUrl} />
              <p className={styles.description}>{movie.description}</p>
              <div className={styles.actors}>
                <div className={styles.actorsTitle}>ACTORS</div>
                <ul>
                  {movie.actors.map((actor, index) => (
                    <li key={index}>{actor}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Fragment>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default MovieDescription;

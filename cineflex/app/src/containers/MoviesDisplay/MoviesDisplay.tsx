import React, { useState, useEffect, useCallback } from "react";

import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import {
  UPDATE_MOVIES_ACTION,
  INCREMENT_LIKE_ACTION,
  AllMoviesActionInterface,
} from "../../reducers/allMovies/allMoviesActions";
import { MovieService } from "../../services/MovieService";
import { Movie } from "../../types/Movie";
import styles from "./MoviesDisplay.module.scss";

interface MoviesDisplayInterface {
  movies: Movie[];
  dispatch: React.Dispatch<AllMoviesActionInterface>;
}

const MoviesDisplay: React.FunctionComponent<MoviesDisplayInterface> = ({
  movies,
  dispatch,
}) => {
  console.log("Component - Movies Display");

  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await MovieService.getMovies(pageNo);
        const action = UPDATE_MOVIES_ACTION;
        action.payload.movies = movies;

        dispatch(action);
      } catch (err) {
        dispatch(UPDATE_MOVIES_ACTION);
      }
      setIsLoading(false);
    };

    setIsLoading(true);
    fetchMovies();
  }, [pageNo, dispatch]);

  const handleLikeClick = useCallback(
    (title: string) => {
      const action = INCREMENT_LIKE_ACTION;
      action.payload.incrementBy = 1;
      action.payload.title = title;
      dispatch(action);
    },
    [dispatch]
  );

  const handleLoadMore = useCallback(() => {
    setPageNo((pageNo) => pageNo + 1);
  }, []);

  return (
    <div className={styles.moviesDisplay}>
      <div className={styles.moviesDisplayWrapper}>
        <Loader isLoading={isLoading} />
        <MovieList
          movies={movies}
          pageNo={pageNo}
          onLikeClick={handleLikeClick}
        />
      </div>
      <Button
        className={styles.loadMoreButton}
        onClick={handleLoadMore}
        label="LOAD MORE"
      />
    </div>
  );
};

export default MoviesDisplay;

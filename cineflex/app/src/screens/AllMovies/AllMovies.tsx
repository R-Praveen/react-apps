import React, { useReducer, useCallback, useState, useEffect } from "react";

import Page from "../../components/Page/Page";
import MoviesDisplay from "../../containers/MoviesDisplay/MoviesDisplay";
import TimedMovieDescription from "../../containers/TimedMovieDescription/TimedMovieDescription";
import { allMoviesReducer } from "../../reducers/allMovies/allMoviesReducers";
import { Movie } from "../../types/Movie";
import styles from "./AllMovies.module.scss";

const initialMoviesState: Movie[] = [];

interface AllMoviesContextProps {
  onMovieSelection: Function;
}

export const AllMoviesContext = React.createContext<AllMoviesContextProps>({
  onMovieSelection: () => {},
});

const initialMovieState: Movie = {
  title: "",
  description: "",
  posterUrl: "",
  actors: [""],
  likes: 0,
};

const AllMovies: React.FunctionComponent = () => {
  console.log("Screen - All Movies");

  const [state, dispatch] = useReducer(allMoviesReducer, initialMoviesState);
  const memoizedDispatch = dispatch;

  const [selectedMovie, setSelectedMovie] = useState(initialMovieState);

  useEffect(() => {
    if (state.length && !selectedMovie.title) setSelectedMovie(state[0]);
  }, [state, selectedMovie]);

  const handleMovieSelection = useCallback(
    (title: string) => {
      state.forEach((movie) => {
        if (movie.title === title) setSelectedMovie(movie);
      });
    },
    [state]
  );

  return (
    <Page title="All Movies" className={styles.allMovies}>
      <div className={styles.container}>
        <AllMoviesContext.Provider
          value={{ onMovieSelection: handleMovieSelection }}
        >
          <MoviesDisplay movies={state} dispatch={memoizedDispatch} />
        </AllMoviesContext.Provider>
        <TimedMovieDescription
          movie={selectedMovie as Movie}
          dispatch={dispatch}
        />
      </div>
    </Page>
  );
};

export default AllMovies;

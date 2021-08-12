import React from "react";

import { CONSTANTS } from "../../constants/constants";
import { Movie as MovieType } from "../../types/Movie";
import Movie from "../Movie/Movie";
import styles from "./MovieList.module.scss";

interface MovieListInterface {
  movies: MovieType[];
  onLikeClick: (title: string) => void;
  isLoading?: boolean;
  pageNo: number;
}

const movieRef = React.createRef<HTMLDivElement>();

const MovieList: React.FunctionComponent<MovieListInterface> = ({
  movies,
  onLikeClick,
  pageNo,
}) => {
  console.log("Component - Movie List");

  const moviesPerPage = CONSTANTS.MOVIES_PER_PAGE;
  const firstItemInPage = (pageNo - 1) * moviesPerPage;

  return (
    <div className={styles.movieList}>
      {movies.map((movie, index) => (
        <Movie
          key={`${movie.title}-${index}`}
          ref={index === firstItemInPage ? movieRef : null}
          {...movie}
          onLikeClick={onLikeClick}
        />
      ))}
    </div>
  );
};

export default MovieList;

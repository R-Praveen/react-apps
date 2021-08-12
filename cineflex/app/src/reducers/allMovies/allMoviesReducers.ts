import { Movie } from "../../types/Movie";
import {
  AllMoviesActionInterface,
  UPDATE_MOVIES_PAYLOAD,
  INCREMENT_LIKE_PAYLOAD,
} from "./allMoviesActions";
import { UPDATE_MOVIES, INCREMENT_LIKES } from "./allMoviesTypes";

const handleIncrementLike = (
  state: Movie[],
  title: string,
  incrementBy: number
) => {
  const movies = [...state];

  movies.map((movie) => {
    if (movie.title === title) movie.likes = movie.likes + incrementBy;
    return movie;
  });

  return movies;
};

export const allMoviesReducer = (
  state: Movie[],
  action: AllMoviesActionInterface
) => {
  let payload;

  switch (action.type) {
    case UPDATE_MOVIES:
      payload = action.payload as UPDATE_MOVIES_PAYLOAD;
      return [...state, ...payload.movies];
    case INCREMENT_LIKES:
      payload = action.payload as INCREMENT_LIKE_PAYLOAD;
      return handleIncrementLike(state, payload.title, payload.incrementBy);
    default:
      return state;
  }
};

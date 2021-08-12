import { Movie } from "../../types/Movie";
import { UPDATE_MOVIES, INCREMENT_LIKES } from "./allMoviesTypes";

export type UPDATE_MOVIES_PAYLOAD = {
  movies: Movie[];
};

export type INCREMENT_LIKE_PAYLOAD = {
  title: string;
  incrementBy: number;
};

export interface AllMoviesActionInterface {
  type: string;
  payload: UPDATE_MOVIES_PAYLOAD | INCREMENT_LIKE_PAYLOAD;
}

export const UPDATE_MOVIES_ACTION = {
  type: UPDATE_MOVIES,
  payload: {
    movies: [
      {
        title: "",
        description: "",
        posterUrl: "",
        actors: [""],
        likes: 0,
      },
    ],
  },
};

export const INCREMENT_LIKE_ACTION = {
  type: INCREMENT_LIKES,
  payload: {
    title: "",
    incrementBy: 1,
  },
};

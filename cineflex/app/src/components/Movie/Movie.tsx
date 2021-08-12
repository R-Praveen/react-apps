import React, {
  useContext,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  RefObject,
  useCallback,
} from "react";

import { AllMoviesContext } from "../../screens/AllMovies/AllMovies";
import { Movie as MovieType } from "../../types/Movie";
import Like from "../Like/Like";
import Poster from "../Poster/Poster";
import styles from "./Movie.module.scss";

interface MovieInterface extends MovieType {
  onLikeClick: (title: string) => void;
}

const Movie: ForwardRefExoticComponent<
  MovieInterface & RefAttributes<HTMLDivElement>
> = React.forwardRef((props, ref) => {
  console.log("Component - Movie");

  const { title, posterUrl, likes, onLikeClick } = props;
  const { onMovieSelection } = useContext(AllMoviesContext);

  useEffect(() => {
    const movieRef = ref && (ref as RefObject<HTMLDivElement>);
    movieRef &&
      movieRef.current &&
      movieRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }, [ref]);

  return (
    <div ref={ref} className={styles.movie}>
      <Poster
        posterUrl={posterUrl}
        onSelection={useCallback(() => onMovieSelection(title), [
          onMovieSelection,
          title,
        ])}
      />
      <div className={styles.movieName}>{title}</div>
      <Like
        className={styles.like}
        onClick={useCallback(() => onLikeClick(title), [onLikeClick, title])}
      />
      <div className={styles.likeCount}>{likes} Likes</div>
    </div>
  );
});

Movie.displayName = "Movie";

export default React.memo(Movie);

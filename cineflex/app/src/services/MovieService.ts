import { CONSTANTS } from "../constants/constants";
import { MESSAGES } from "../constants/messages";
import { Movie } from "../types/Movie";
import CineflexApi from "./Api";

type ApiMovie = {
  [key: string]: string | number;
};

type ApiTeaser = {
  [key: string]: string | boolean;
};

export class MovieService {
  /**
   * Gets the list of available movies for a particular page number.
   * @param pageNo number
   */
  static getMovies = async (pageNo: number) => {
    try {
      const { data } = await CineflexApi.get(CONSTANTS.API_PATHS.MOVIES, {
        params: {
          page: pageNo,
        },
      });

      return MovieService.filterMoviesByProps(
        data as ApiMovie[],
        CONSTANTS.MOVIE_PROPS
      );
    } catch (err) {
      throw new Error(MESSAGES.ERRORS.FETCH);
    }
  };

  /**
   * Filter the props of a movie
   * @param data Movie[]
   * @param props string[]
   */
  static filterMoviesByProps = (
    data: ApiMovie[],
    props: { ui: string; api: string }[]
  ) => {
    const moviesFilteredByProps = data.map((item) => {
      const movie: ApiMovie = {};

      props.forEach((prop) => {
        movie[prop.ui] = item[prop.api];
      });
      movie.likes = 0;

      return (movie as unknown) as Movie;
    });

    return moviesFilteredByProps;
  };

  /**
   * Gets the list of available teasers
   */
  static getTeasers = async () => {
    try {
      const { data } = await CineflexApi.get(CONSTANTS.API_PATHS.TEASERS);
      return MovieService.processTeaserData(data);
    } catch (err) {
      throw new Error(MESSAGES.ERRORS.FETCH);
    }
  };

  static processTeaserData = (teasers: ApiTeaser[]) => {
    const posters = CONSTANTS.TEASER_POSTERS as ApiTeaser;

    return teasers.map((teaser, index) => {
      teaser.ad = index === 2 || index === 1 ? true : false;
      teaser.poster = posters[teaser.name as string];
      return teaser;
    });
  };
}

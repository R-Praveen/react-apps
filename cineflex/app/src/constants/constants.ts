export const CONSTANTS = {
  API_PATHS: {
    BASE_URL: "https://nijinserver.herokuapp.com/dummy/cineflex",
    LOTTERY: "/lottery",
    MOVIES: "/movies",
    TEASERS: "/teasers",
  },
  MOBILE_NO_PATTERN: /^[6-9]\d{9}$/,
  EMAIL_PATTERN: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  ROUTES: {
    HOME: { path: "/", name: "HOME" },
    ALL_MOVIES: { path: "/allMovies", name: "ALL MOVIES" },
    NOW_SHOWING: { path: "/showTime", name: "NOW SHOWING" },
    LOGIN: { path: "/login", name: "LOGIN" },
  },
  ASSETS: {
    LOGO: "/images/logo.png",
    COVER: "/images/sindel-background.png",
    PLACEHOLDER: "/images/fallback.png",
    LOADER: "/images/loader.gif",
  },
  MENU_ITEMS: [
    { path: "/", name: "HOME" },
    { path: "/allMovies", name: "ALL MOVIES" },
    { path: "/showTime", name: "NOW SHOWING" },
  ],
  DUMMY_USER_DATA: {
    email: "gautham@gmail.com",
    password: "gautham1",
    name: "Gautham Pughazhendhi",
  },
  USER_STORAGE_KEY: "user",
  SINTEL: {
    VIDEO_URL: "https://tympanus.net/Development/SeatPreview/media/sintel.mp4",
    VIDEO_TYPE: "video/mp4",
    POSTER: "/images/poster.png",
    TITLE: "Sintel",
    DESCRIPTION:
      "Sintel tells the story of a friendship between a girl named Sintel, a baby dragon and the desperate lengths she will go to when that friendship is taken from her. Sintel is created by Blender in 2010 as a pet project to demonstrate Blender capabilities.",
  },
  TEASER_POSTERS: {
    "The Lost Rail": "/images/lost-rail.png",
    "The Mountain Climber": "/images/mountain-climber.png",
    "The Long Ride": "/images/long-ride.jpg",
  },
  MOVIE_PROPS: [
    { ui: "title", api: "title" },
    { ui: "description", api: "storyline" },
    { ui: "actors", api: "actors" },
    { ui: "posterUrl", api: "posterurl" },
  ],
  TIMED_MOVIE_DESCRIPTION: {
    AD_STOP: "Advertisement in",
    AD_START: "Resumes in",
    AD_DURATION: 5,
    INTERVAL: 15,
    AD_BANNERS: [
      "/images/advertisements/large-promos/adv1.png",
      "/images/advertisements/large-promos/adv-2.png",
    ],
  },
  TIMED_TEASER: {
    AD_STOP: "Advertisement in",
    AD_START: "Video resumes in",
    AD_DURATION: 2,
    INTERVAL: 5,
    AD_BANNERS: [
      "/images/advertisements/small-promos/ad1.png",
      "/images/advertisements/small-promos/ad2.png",
    ],
  },
  LANGUAGES: {
    ENGLISH: "E",
    TAMIL: "\u0ba4",
    TELEGU: "\u0c24",
    MALAYALAM: "\u0d2e",
    HINDI: "\u0939",
  },
  MOVIES_PER_PAGE: 10,
};

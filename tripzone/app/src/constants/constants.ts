export const CONSTANTS = {
  BASE_URL: "http://nijinserver.herokuapp.com/dummy/tripzone",
  API_PATHS: {
    LOGIN: "/login",
    WORLD_CLOCK: "http://worldclockapi.com/api/json/est/now",
    CITIES: "/cities",
    TOURISM: "/tourism",
    CITY: "/city",
    FLIGHTS: "/flights",
  },
  DUMMY_USER: {
    USERNAME: "niranjan",
    PASSWORD: "password",
  },
  ASSET_PATHS: {
    LOGO: "/images/logo.png",
    PRIME: "/images/prime.png",
    AIR_INDIA: "/images/air-india.png",
    FALLBACK: "/images/fallback.png",
  },
  TIME_FORMAT: "hh:mm",
  DATE_FORMAT: "DD MMM YY",
  ALL_TOURIST_SPOTS: "ALL",
  FORMATTED_DATE_FORMAT: "DD MMM",
  TIMER_INTERVAL: 60000,
  BOOK_NOW: {
    DISCOUNT_BUTTON_DATA: [
      { label: "1 YEAR", onClickValue: 1 },
      { label: "2 YEAR", onClickValue: 2 },
      { label: "3 YEAR", onClickValue: 3 },
    ],
    TAX_BUTTON_DATA: [
      { label: "10%", onClickValue: 10 },
      { label: "20%", onClickValue: 20 },
      { label: "30%", onClickValue: 30 },
    ],
  },
};

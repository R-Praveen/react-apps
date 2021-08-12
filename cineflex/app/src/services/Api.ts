import axios from "axios";

import { CONSTANTS } from "../constants/constants";

/**
 * Base API
 */
export default axios.create({
  baseURL: CONSTANTS.API_PATHS.BASE_URL,
});

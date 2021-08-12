import axios from 'axios';

import { CONSTANTS } from '../constants/constants';

export default axios.create({
    baseURL: CONSTANTS.API_PATHS.BASE_URL,
});

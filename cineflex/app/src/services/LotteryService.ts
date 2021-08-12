import { CONSTANTS } from "../constants/constants";
import { MESSAGES } from "../constants/messages";
import CineflexApi from "./Api";

export class LotteryService {
  /**
   * Gets the lottery info for a particular mobile number.
   * @param mobileNumber number
   */
  static checkForPrize = async (mobileNumber: number) => {
    try {
      return await CineflexApi.get(CONSTANTS.API_PATHS.LOTTERY, {
        params: {
          mobile: mobileNumber,
        },
      });

      // if (!data.prize) throw new Error("");

      // return data;
    } catch (err) {
      throw new Error(MESSAGES.ERRORS.FETCH);
    }
  };
}

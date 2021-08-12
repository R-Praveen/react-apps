import { CONSTANTS } from "../../constants/constants";

export class LotteryValidation {
  /**
   * Validates mobile number
   * @param mobileNumber number
   */
  static isValidMobileNumber = (mobileNumber: number) => {
    if (!(typeof mobileNumber === "number")) return false;

    const mobileRegex = CONSTANTS.MOBILE_NO_PATTERN;
    if (!mobileRegex.test(mobileNumber.toString())) return false;

    return true;
  };
}

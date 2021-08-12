import { MESSAGES } from "../constants/messages";

/**
 * Contains functions to validate search input
 */
export class SearchValidation {
  /**
   * Validates the passed city code.
   * @param value
   */
  static validateCityCode = (value: string) => {
    if (value.length < 3) return MESSAGES.ERRORS.INVALID_CODE_LENGTH;
    else if (/^[a-zA-Z]+$/.test(value) === false)
      return MESSAGES.ERRORS.SEARCH_INVALID_CHARACTERS;
    else return "";
  };
}

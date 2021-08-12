import { CONSTANTS } from "../../constants/constants";
import { MESSAGES } from "../../constants/messages";

const { ERRORS } = MESSAGES;

export class LoginValidation {
  /**
   * Validates the provided email ID
   * @param email string
   */
  static validateEmail = (email: string) => {
    let errorMessage = "";

    if (!email) errorMessage = ERRORS.LOGIN.EMPTY_EMAIL;
    else if (!CONSTANTS.EMAIL_PATTERN.test(email))
      errorMessage = ERRORS.LOGIN.INVALID_EMAIL;

    return errorMessage;
  };

  static validatePassword = (password: string) => {
    let errorMessage = "";

    if (!password) errorMessage = ERRORS.LOGIN.EMPTY_PASSWORD;
    else if (password.length < 8)
      errorMessage = ERRORS.LOGIN.PASSWORD_TOO_SHORT;

    return errorMessage;
  };
}

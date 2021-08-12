import { CONSTANTS } from "../constants/constants";
import { MESSAGES } from "../constants/messages";

export class LoginService {
  static authenticateUser = async (email: string, password: string) => {
    const { DUMMY_USER_DATA } = CONSTANTS;
    const { ERRORS } = MESSAGES;
    if (!email || !password) throw new Error(ERRORS.INVALID_EMAIL_PASSWORD);

    try {
      if (
        email === DUMMY_USER_DATA.email &&
        password === DUMMY_USER_DATA.password
      ) {
        return {
          username: DUMMY_USER_DATA.name,
        };
      } else {
        throw new Error(ERRORS.INVALID_EMAIL_PASSWORD);
      }
    } catch (err) {
      if (err.message === ERRORS.INVALID_EMAIL_PASSWORD) throw err;
      throw new Error(ERRORS.FETCH);
    }
  };
}

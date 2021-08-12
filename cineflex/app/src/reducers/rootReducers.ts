import {
  UserInterface,
  initialUserState,
} from "../components/UserAuth/UserAuth";
import { CONSTANTS } from "../constants/constants";
import { saveState, removeState } from "../utils/localStorage";
import { UserAuthActionInterface } from "./rootActions";
import { USER_LOGIN, USER_LOGOUT } from "./rootTypes";

const handleLoginAction = (
  state: UserInterface,
  action: UserAuthActionInterface
) => {
  const newState = {
    ...state,
    isAuthenticated: true,
    name: action.payload.name,
  };
  saveState(CONSTANTS.USER_STORAGE_KEY, newState);

  return newState;
};

const handleLogoutAction = () => {
  removeState(CONSTANTS.USER_STORAGE_KEY);

  return initialUserState;
};

export const userAuthReducer = (
  state: UserInterface,
  action: UserAuthActionInterface
) => {
  switch (action.type) {
    case USER_LOGIN:
      return handleLoginAction(state, action);
    case USER_LOGOUT:
      return handleLogoutAction();
    default:
      return initialUserState;
  }
};

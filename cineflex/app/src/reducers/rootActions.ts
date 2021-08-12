import { USER_LOGIN, USER_LOGOUT } from "./rootTypes";

export interface UserAuthActionInterface {
  type: string;
  payload: { name: string };
}

const USER_AUTH_ACTION = {
  payload: { name: "" },
};

export const USER_LOGIN_ACTION = {
  ...USER_AUTH_ACTION,
  type: USER_LOGIN,
};

export const USER_LOGOUT_ACTION = {
  ...USER_AUTH_ACTION,
  type: USER_LOGOUT,
};

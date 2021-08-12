import React, { useReducer, useCallback } from "react";

import { CONSTANTS } from "../../constants/constants";
import { UserAuthActionInterface } from "../../reducers/rootActions";
import { userAuthReducer } from "../../reducers/rootReducers";
import { loadState } from "../../utils/localStorage";

interface UserAuthInterface {
  children?: object;
}

export interface UserInterface {
  name: string;
  isAuthenticated: boolean;
}

export const initialUserState = {
  name: "",
  isAuthenticated: false,
};

interface UserAuthContextProps {
  state: UserInterface;
  dispatch: React.Dispatch<UserAuthActionInterface>;
}

export const UserAuthContext = React.createContext<UserAuthContextProps>({
  state: initialUserState,
  dispatch: () => {},
});

const UserAuth: React.FunctionComponent<UserAuthInterface> = ({ children }) => {
  console.log("Component - User Auth");

  const savedState = loadState(CONSTANTS.USER_STORAGE_KEY);
  const [state, dispatch] = useReducer(
    userAuthReducer,
    savedState ? savedState : initialUserState
  );

  const memoizedDispatch = useCallback(dispatch, []);

  return (
    <UserAuthContext.Provider value={{ state, dispatch: memoizedDispatch }}>
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuth;

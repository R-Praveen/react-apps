import React, { useContext } from "react";

import { Route, Redirect, RouteChildrenProps } from "react-router-dom";

import { CONSTANTS } from "../../constants/constants";
import { UserAuthContext } from "../UserAuth/UserAuth";

interface ProtectedRouteInterface {
  exact?: boolean;
  path: string;
  component: React.FunctionComponent<RouteChildrenProps>;
}

const ProtectedRoute: React.FunctionComponent<ProtectedRouteInterface> = ({
  component: Component,
  ...rest
}) => {
  console.log("Component - Protected Route");

  const { state: user } = useContext(UserAuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: CONSTANTS.ROUTES.LOGIN.path,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;

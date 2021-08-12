import "./styles/global.scss";
import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import UserAuth from "./components/UserAuth/UserAuth";
import { CONSTANTS } from "./constants/constants";
const AllMovies = React.lazy(() => import("./screens/AllMovies/AllMovies"));
const Home = React.lazy(() => import("./screens/Home/Home"));
const Login = React.lazy(() => import("./screens/Login/Login"));
const NowShowing = React.lazy(() => import("./screens/NowShowing/NowShowing"));

const App: React.FunctionComponent = () => {
  console.log("Root - App");
  const { ROUTES } = CONSTANTS;

  return (
    <Router>
      <Suspense fallback={() => {}}>
        <Switch>
          <UserAuth>
            <Route exact path={ROUTES.HOME.path} component={Home} />
            <Route exact path={ROUTES.LOGIN.path} component={Login} />
            <Route exact path={ROUTES.ALL_MOVIES.path} component={AllMovies} />
            <ProtectedRoute
              exact
              path={ROUTES.NOW_SHOWING.path}
              component={NowShowing}
            />
          </UserAuth>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;

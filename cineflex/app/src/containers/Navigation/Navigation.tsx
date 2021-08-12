import React, { useContext, Fragment, useCallback } from "react";

import { Link, useHistory } from "react-router-dom";

import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import Menu from "../../components/Menu/Menu";
import { UserAuthContext } from "../../components/UserAuth/UserAuth";
import UserInfoBar from "../../components/UserInfoBar/UserInfoBar";
import { CONSTANTS } from "../../constants/constants";
import { USER_LOGOUT_ACTION } from "../../reducers/rootActions";
import styles from "./Navigation.module.scss";

const Navigation: React.FunctionComponent = () => {
  console.log("Container - Navigation");

  const { state: user, dispatch } = useContext(UserAuthContext);
  const history = useHistory();

  const handleLogout = useCallback(() => {
    dispatch(USER_LOGOUT_ACTION);
    history.push(CONSTANTS.ROUTES.HOME.path);
  }, [dispatch, history]);

  return (
    <div className={styles.navigation}>
      <Logo className={styles.logo} />
      <Menu />
      <div className={styles.userInfo}>
        {user.isAuthenticated ? (
          <Fragment>
            <UserInfoBar username={user.name} />
            {"|"}
            <Button onClick={handleLogout} label="Logout" />
          </Fragment>
        ) : (
          <Link to={CONSTANTS.ROUTES.LOGIN.path}>
            {CONSTANTS.ROUTES.LOGIN.name}
          </Link>
        )}
      </div>
    </div>
  );
};

export default React.memo(Navigation);

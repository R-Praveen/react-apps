import React, { useContext } from "react";

import { Redirect } from "react-router-dom";

import Cover from "../../components/Cover/Cover";
import LoginForm from "../../components/LoginForm/LoginForm";
import Page from "../../components/Page/Page";
import { UserAuthContext } from "../../components/UserAuth/UserAuth";
import { CONSTANTS } from "../../constants/constants";
import styles from "./Login.module.scss";

const Login: React.FunctionComponent = () => {
  console.log("Screen - Login");
  const { state: user } = useContext(UserAuthContext);

  if (user.isAuthenticated) return <Redirect to={CONSTANTS.ROUTES.HOME.path} />;

  return (
    <Page className={styles.login}>
      <Cover className={styles.cover} />
      <LoginForm />
    </Page>
  );
};

export default Login;

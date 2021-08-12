import React, { useState, ChangeEvent, useContext, useCallback } from "react";

import { useHistory, useLocation } from "react-router-dom";

import { CONSTANTS } from "../../constants/constants";
import { MESSAGES } from "../../constants/messages";
import { USER_LOGIN_ACTION } from "../../reducers/rootActions";
import { LoginService } from "../../services/LoginService";
import { LoginValidation } from "../../utils/validations/LoginValidation";
import Button from "../Button/Button";
import FormField from "../FormField/FormField";
import FormSubHeading from "../FormSubHeading/FormSubHeading";
import Input from "../Input/Input";
import { UserAuthContext } from "../UserAuth/UserAuth";
import styles from "./LoginForm.module.scss";

const LoginForm: React.FunctionComponent = () => {
  console.log("Component - Login Form");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { dispatch } = useContext(UserAuthContext);
  const history = useHistory();
  const location = useLocation();

  const { from } = (location.state as { from: object }) || {
    from: { pathname: CONSTANTS.ROUTES.HOME.path },
  };

  const handleEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (errorMessage) setErrorMessage("");
    },
    [errorMessage]
  );

  const handlePasswordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      if (errorMessage) setErrorMessage("");
    },
    [errorMessage]
  );

  const handleLogin = useCallback(async () => {
    try {
      const emailValidationOutput = LoginValidation.validateEmail(email);
      const passwordValidationOutput = LoginValidation.validatePassword(
        password
      );

      const error = emailValidationOutput || passwordValidationOutput;
      if (error) {
        setErrorMessage(error);
        return;
      }

      const { username } = await LoginService.authenticateUser(email, password);

      if (username) {
        const userAction = USER_LOGIN_ACTION;
        userAction.payload.name = username;
        dispatch(userAction);
        history.replace(from);
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  }, [dispatch, email, from, history, password]);

  const handleKeyPress = useCallback(
    (target: React.KeyboardEvent<HTMLInputElement>) => {
      if (target.charCode === 13) handleLogin();
    },
    [handleLogin]
  );

  return (
    <div className={styles.loginForm}>
      <FormSubHeading className={styles.formSubHeading} text="Login" />
      <p>{MESSAGES.FORMS.LOGIN}</p>
      <FormField className={styles.formField} label="Email" required>
        <Input
          type="email"
          required
          className={styles.input}
          value={email}
          onChange={handleEmailChange}
          onKeyPress={handleKeyPress}
        />
      </FormField>
      <FormField className={styles.formField} label="Password" required>
        <Input
          type="password"
          required
          className={styles.input}
          value={password}
          onChange={handlePasswordChange}
          onKeyPress={handleKeyPress}
        />
      </FormField>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <Button
        className={styles.loginButton}
        label="LOGIN"
        onClick={handleLogin}
      />
    </div>
  );
};

export default LoginForm;

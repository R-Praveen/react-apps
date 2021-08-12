import React from "react";

import styles from "./UserInfoBar.module.scss";

interface UserInfoBarInterface {
  username: string;
}

const UserInfoBar: React.FunctionComponent<UserInfoBarInterface> = ({
  username,
}) => {
  console.log("Component - User Info Bar");

  return <span className={styles.userInfoBar}>Hi {username}</span>;
};

export default UserInfoBar;

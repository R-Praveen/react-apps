import "./UserInfoBar.scss";
import React, { useContext } from "react";

import { UserContext } from "../../screens/Home/Home";

const UserInfoBar: React.FunctionComponent = () => {
  console.log("Component - User Info Bar");

  const user = useContext(UserContext);

  return (
    <div className="user-info-bar">
      <span>{user.name && `Hi, ${user.name}`}</span>
    </div>
  );
};

export default UserInfoBar;

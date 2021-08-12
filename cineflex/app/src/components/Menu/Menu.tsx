import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import { CONSTANTS } from "../../constants/constants";
import { UserAuthContext } from "../UserAuth/UserAuth";
import styles from "./Menu.module.scss";

const Menu: React.FunctionComponent = () => {
  console.log("Component - Menu");

  const { state: user } = useContext(UserAuthContext);
  const { ROUTES } = CONSTANTS;

  return (
    <ul className={styles.menu}>
      {Object.values(ROUTES).map((item) => {
        if (item.path === ROUTES.LOGIN.path) return null;
        if (item.path === ROUTES.NOW_SHOWING.path && !user.isAuthenticated)
          return null;

        return (
          <li className={styles.menuItem} key={item.name}>
            <NavLink
              exact={item.path === ROUTES.HOME.path}
              activeClassName={styles.selected}
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;

import React, { useContext, useCallback } from "react";

import { Link, useHistory } from "react-router-dom";

import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import Poster from "../../components/Poster/Poster";
import { UserAuthContext } from "../../components/UserAuth/UserAuth";
import { CONSTANTS } from "../../constants/constants";
import styles from "./Trailer.module.scss";

const Trailer: React.FunctionComponent = () => {
  console.log("Component - Trailer");

  const { state: user } = useContext(UserAuthContext);
  const history = useHistory();

  return (
    <Container heading="Trailers" className={styles.trailer}>
      {!user.isAuthenticated && (
        <div className={styles.subHeading}>
          You need to sign in to view Trailers.{" "}
          <Link to={CONSTANTS.ROUTES.LOGIN.path}>Sign In Now</Link>
        </div>
      )}
      <div className={styles.wrapper}>
        <Poster className={styles.poster} posterUrl={CONSTANTS.ASSETS.COVER} />
        <div className={styles.trailerDesc}>
          <div className={styles.title}>{CONSTANTS.SINTEL.TITLE}</div>
          <p>{CONSTANTS.SINTEL.DESCRIPTION}</p>
          <Button
            label="WATCH NOW"
            className={styles.watchNowButton}
            onClick={useCallback(
              () =>
                history.push(
                  user.isAuthenticated
                    ? CONSTANTS.ROUTES.NOW_SHOWING.path
                    : CONSTANTS.ROUTES.LOGIN.path
                ),
              [history, user]
            )}
          ></Button>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Trailer);

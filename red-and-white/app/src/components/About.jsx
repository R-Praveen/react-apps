import "../styles/About.scss";
import React from "react";

import { Link } from "react-router-dom";

import { CONSTANTS } from "../constants/constants";
import Button from "./Button";
import Features from "./Features";
import Header from "./Header";

/**
 * Displays About Page and components associated with it.
 */
const About = () => {
  const { IMAGE_PATHS } = CONSTANTS;
  return (
    <div className="about">
      <Header />
      <div className="content-wrapper">
        <div className="top-banner">
          <img src={IMAGE_PATHS.ABOUT_TOP_BANNER} alt="about-top-banner" />
        </div>
        <div className="middle-banner">
          <img
            src={IMAGE_PATHS.ABOUT_MIDDLE_BANNER}
            alt="about-middle-banner"
          />
        </div>
        <Features />
        <div className="button-wrapper">
          <Link to="/">
            <Button className="btn primary-btn">SHOP NOW</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

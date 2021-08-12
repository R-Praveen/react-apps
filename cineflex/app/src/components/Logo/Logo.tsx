import React from "react";

import { CONSTANTS } from "../../constants/constants";

interface LogoInterface {
  className?: string;
}

const Logo: React.FunctionComponent<LogoInterface> = ({ className }) => {
  console.log("Component - Logo");

  return (
    <div className={className}>
      <img src={CONSTANTS.ASSETS.LOGO} alt="logo" />
    </div>
  );
};

export default React.memo(Logo);

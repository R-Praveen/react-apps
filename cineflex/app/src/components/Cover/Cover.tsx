import React from "react";

import { CONSTANTS } from "../../constants/constants";

interface CoverInterface {
  className?: string;
  children?: object;
}

const Cover: React.FunctionComponent<CoverInterface> = ({
  className,
  children,
}) => {
  console.log("Component - Cover");

  return (
    <div className={className}>
      <img src={CONSTANTS.ASSETS.COVER} alt="cover" />
      {children}
    </div>
  );
};

export default Cover;

import React from "react";

interface IconInterface {
  className: string;
}

const Icon: React.FunctionComponent<IconInterface> = ({ className }) => {
  console.log("Component - Icon");

  return <i className={className}></i>;
};

export default React.memo(Icon);

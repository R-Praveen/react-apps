import "./ButtonGroup.scss";
import React from "react";

import Button from "../Button/Button";

interface ButtonGroupInterface {
  onClick: Function;
  buttonData: { label: string; onClickValue?: string | number }[];
}

const ButtonGroup: React.FunctionComponent<ButtonGroupInterface> = ({
  onClick,
  buttonData,
}) => {
  console.log("Component - Button Group");

  return (
    <div className="button-group">
      {buttonData.map((entry) => (
        <Button
          key={entry.label}
          onClick={() =>
            entry.onClickValue ? onClick(entry.onClickValue) : onClick()
          }
          label={entry.label}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;

import React, { Fragment } from "react";

const Input: React.FunctionComponent<React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>> = (props) => {
  console.log("Component - Input");

  return (
    <Fragment>
      <input {...props} />
    </Fragment>
  );
};

export default React.memo(Input);

import React, { Fragment } from "react";

const Input: React.FunctionComponent<React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>> = (props) => {
  return (
    <Fragment>
      <input {...props} />
    </Fragment>
  );
};

export default Input;

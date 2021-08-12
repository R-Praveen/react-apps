import React from "react";

interface FormSubHeadingInterface {
  text: string;
  className?: string;
}

const FormSubHeading: React.FunctionComponent<FormSubHeadingInterface> = ({
  text,
  className,
}) => {
  console.log("Component - Form Sub Heading");
  return <div className={className}>{text}</div>;
};

export default React.memo(FormSubHeading);

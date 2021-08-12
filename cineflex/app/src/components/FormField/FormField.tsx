import React from "react";

import styles from "./FormField.module.scss";

interface FormFieldInterface {
  label?: string;
  required?: boolean;
  error?: string;
  className?: string;
  contentStyle?: string;
  errorStyle?: string;
  children: object;
}

const FormField: React.FunctionComponent<FormFieldInterface> = (props) => {
  console.log("Component - Form Field");

  const {
    label,
    required = false,
    error,
    className,
    contentStyle,
    errorStyle,
  } = props;

  return (
    <div className={className}>
      {label && (
        <label>
          {label} {required && <span>*</span>}
        </label>
      )}
      <div className={contentStyle}>{props.children}</div>
      {error && (
        <div className={`${styles.error} ${errorStyle ? errorStyle : ""}`}>
          {error}
        </div>
      )}
    </div>
  );
};

export default React.memo(FormField);

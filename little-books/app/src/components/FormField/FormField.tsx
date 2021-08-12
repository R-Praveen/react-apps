import React from 'react';

import styles from './FormField.module.scss';

interface FormFieldInterface {
    label?: string;
    required?: boolean;
    error?: string;
    className?: string;
    contentStyle?: string;
    errorStyle?: string;
    touched?: boolean;
    children: object;
}

const FormField: React.FunctionComponent<FormFieldInterface> = (props) => {
    console.log('Component - Form Field');

    const {
        label,
        required = false,
        error,
        className,
        contentStyle,
        errorStyle,
        touched = true,
    } = props;

    return (
        <div className={className}>
            {label ? (
                <label>
                    {label} {required && <span>*</span>}
                </label>
            ) : null}
            <div className={contentStyle}>{props.children}</div>
            {touched && error ? (
                <div
                    className={`${styles.error} ${
                        errorStyle ? errorStyle : ''
                    }`}
                >
                    {error}
                </div>
            ) : null}
        </div>
    );
};

export default FormField;

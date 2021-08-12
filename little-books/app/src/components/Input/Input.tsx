import React from 'react';

const Input: React.FunctionComponent<React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>> = (props) => {
    console.log('Component - Input');

    return <input {...props} />;
};

export default Input;

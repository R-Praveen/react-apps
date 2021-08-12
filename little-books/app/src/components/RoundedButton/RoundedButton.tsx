import React from 'react';

import styles from './RoundedButton.module.scss';

interface ButtonInterface {
    label: string;
    disabled?: boolean;
    onClick: () => void;
    className?: string;
}

const RoundedButton: React.FunctionComponent<ButtonInterface> = (props) => {
    console.log('Component - Rounded Button');

    const { onClick, disabled = false, label, className } = props;

    return (
        <button
            className={`${styles.button} ${className ? className : ''}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default React.memo(RoundedButton);

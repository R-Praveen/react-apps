import React from 'react';

import styles from './Checkbox.module.scss';

interface CheckboxInterface {
    id: string;
    label?: string;
    checked?: boolean;
    value?: string;
    onChange?: Function;
}

const Checkbox: React.FunctionComponent<CheckboxInterface> = (props) => {
    console.log('Component - Checkbox');

    const { id, label, checked, value, onChange } = props;

    return (
        <label className={styles.checkbox}>
            <input
                id={id}
                type="checkbox"
                value={value}
                checked={checked}
                onChange={(event) => onChange && onChange(event.target.value)}
            />
            <span className={styles.checkmark}></span>
            <label className={styles.label} htmlFor={id}>
                {label}
            </label>
        </label>
    );
};

export default Checkbox;

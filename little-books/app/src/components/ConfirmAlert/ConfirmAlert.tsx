import React from 'react';

import RoundedButton from '../RoundedButton/RoundedButton';
import styles from './ConfirmAlert.module.scss';

interface ConfirmAlertInterface {
    onClose: Function;
    onConfirm: Function;
    alertStyle: {};
}

const ConfirmAlert: React.FunctionComponent<ConfirmAlertInterface> = (
    props
) => {
    console.log('Component - ConfirmAlert');

    const { onClose, onConfirm, alertStyle } = props;

    return (
        <div className={styles.confirmAlert} style={alertStyle}>
            <div className={styles.heading}>
                <h1>Are you sure?</h1>
            </div>
            <div className={styles.subHeading}>Your progress is not saved</div>
            <div className={styles.actionWrapper}>
                <RoundedButton
                    className={styles.no}
                    label="No"
                    onClick={() => onClose()}
                />
                <RoundedButton
                    className={styles.yes}
                    label="Yes, Proceed"
                    onClick={() => {
                        onConfirm();
                        onClose();
                    }}
                />
            </div>
        </div>
    );
};

export default ConfirmAlert;

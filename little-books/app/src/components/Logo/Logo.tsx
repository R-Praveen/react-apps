import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../redux/rootReducer';
import styles from './Logo.module.scss';

const Logo: React.FunctionComponent = () => {
    console.log('Component - Logo');

    const themeData = useSelector((state: RootState) => state.theme);
    const { isDarkMode, textColor } = themeData;

    return (
        <div className={styles.logo}>
            <span
                className={styles.titleLeft}
                style={{ color: isDarkMode && textColor }}
            >
                Little
            </span>{' '}
            <span className={styles.titleRight}>Book</span>
        </div>
    );
};

export default React.memo(Logo);

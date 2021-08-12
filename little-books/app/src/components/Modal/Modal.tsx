import React from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../redux/rootReducer';
import styles from './Modal.module.scss';

interface ModalInterface {
    title?: string;
}

const Modal: React.FunctionComponent<ModalInterface> = ({
    children,
    title,
}) => {
    console.log('Component - Modal');

    const themeData = useSelector((state: RootState) => state.theme);
    const { isDarkMode, addBlogBackground, textColor } = themeData;

    return (
        <div
            className={styles.modal}
            onClick={(e) => {
                e.stopPropagation();
            }}
            style={{
                backgroundColor: isDarkMode && addBlogBackground,
            }}
        >
            <div
                className={styles.title}
                style={{ color: isDarkMode && textColor }}
            >
                {title}
            </div>
            {children}
        </div>
    );
};

export default Modal;

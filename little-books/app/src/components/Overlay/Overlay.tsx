import React from 'react';

import styles from './Overlay.module.scss';

interface OverlayInterface {
    toggleOverlay?: Function;
}

const Overlay: React.FunctionComponent<OverlayInterface> = ({
    toggleOverlay,
    children,
}) => {
    console.log('Component - Overlay');

    return (
        <div
            className={styles.overlay}
            onClick={() => {
                toggleOverlay && toggleOverlay();
            }}
        >
            {children}
        </div>
    );
};

export default Overlay;

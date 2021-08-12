import React from 'react';

import SideBar from '../../containers/SideBar/SideBar';
import styles from './Page.module.scss';

interface PageInterface {
    showSideBar?: boolean;
    title?: string;
    className?: string;
    contentStyle?: string;
    toggleOverlay?: Function;
}

const Page: React.FunctionComponent<PageInterface> = (props) => {
    console.log('Component - Page');

    const {
        showSideBar = true,
        contentStyle,
        className,
        toggleOverlay,
    } = props;

    return (
        <div className={`${styles.page} ${className ? className : ''}`}>
            {showSideBar && <SideBar toggleOverlay={toggleOverlay} />}
            <div className={contentStyle ? contentStyle : ''}>
                {props.children}
            </div>
        </div>
    );
};

export default Page;

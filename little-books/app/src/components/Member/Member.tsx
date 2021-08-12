import React from 'react';

import { useSelector } from 'react-redux';

import { CONSTANTS } from '../../constants/constants';
import { RootState } from '../../redux/rootReducer';
import { Member as MemberType } from '../../types/types';
import Poster from '../Poster/Poster';
import styles from './Member.module.scss';

interface MemberInterface {
    member: MemberType;
}

const Member: React.FunctionComponent<MemberInterface> = ({ member }) => {
    console.log('Component - Member');

    const { name, photo, city } = member;
    const themeData = useSelector((state: RootState) => state.theme);
    const { isDarkMode, textColor, cityTextColor } = themeData;

    return (
        <div className={styles.member}>
            <Poster
                className={styles.memberPoster}
                posterUrl={`${CONSTANTS.DOMAIN}${photo}`}
            />
            <div
                className={styles.name}
                style={{ color: isDarkMode && textColor }}
            >
                {name}
            </div>
            <div
                className={styles.city}
                style={{
                    color: isDarkMode && cityTextColor,
                    fontWeight: isDarkMode && 500,
                }}
            >
                {city}
            </div>
        </div>
    );
};

export default Member;

import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchMembers } from '../../redux';
import { RootState } from '../../redux/rootReducer';
import { Member as MemberType } from '../../types/types';
import Member from '../Member/Member';
import styles from './MemberList.module.scss';

const MemberList: React.FunctionComponent = () => {
    console.log('Component - Member List');

    const dispatch = useDispatch();
    const members = useSelector(
        (state: RootState) => state.member.members as MemberType[]
    );

    useEffect(() => {
        dispatch(fetchMembers());
    }, [dispatch]);

    return (
        <div className={styles.memberList}>
            {members.map((member, index) => (
                <Member key={index} member={member} />
            ))}
        </div>
    );
};

export default MemberList;

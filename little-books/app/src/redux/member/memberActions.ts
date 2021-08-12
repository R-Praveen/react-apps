import { Dispatch, AnyAction } from 'redux';

import { BlogService } from '../../services/BlogService';
import { Member } from '../../types/types';
import {
    FETCH_MEMBERS,
    FETCH_MEMBERS_SUCCESS,
    FETCH_MEMBERS_FAILURE,
} from './memberTypes';

export const fetchMembers = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        dispatch({ type: FETCH_MEMBERS });

        try {
            const members = await BlogService.fetchMembers();

            dispatch(fetchMembersSuccess(members));
        } catch (err) {
            dispatch(fetchMembersFailure(err.message));
        }
    };
};

const fetchMembersSuccess = (members: Member[]) => {
    return {
        type: FETCH_MEMBERS_SUCCESS,
        payload: members,
    };
};

const fetchMembersFailure = (message: string) => {
    return {
        type: FETCH_MEMBERS_FAILURE,
        payload: message,
    };
};

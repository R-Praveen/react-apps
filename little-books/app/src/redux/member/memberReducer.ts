import { Member } from '../../types/types';
import { ActionInterface } from '../rootReducer';
import {
    FETCH_MEMBERS,
    FETCH_MEMBERS_SUCCESS,
    FETCH_MEMBERS_FAILURE,
} from './memberTypes';

type MemberState = {
    loading: boolean;
    error: string;
    members: Member[];
};

const initialMembersState = {
    loading: false,
    error: '',
    members: [],
};

export const memberReducer = (
    state: MemberState = initialMembersState,
    action: ActionInterface
) => {
    switch (action.type) {
        case FETCH_MEMBERS:
            return {
                ...state,
                loading: true,
            };
        case FETCH_MEMBERS_SUCCESS:
            return {
                ...state,
                loading: false,
                members: action.payload ? action.payload : [],
            };
        case FETCH_MEMBERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload ? action.payload : '',
            };
        default:
            return state;
    }
};

import { Blog } from '../../types/types';
import { modifyBlogs } from '../../utils/blogUtil';
import { ActionInterface } from '../rootReducer';
import {
    FETCH_BLOGS,
    FETCH_BLOGS_SUCCESS,
    FETCH_BLOGS_FAILURE,
    MODIFY_BLOGS,
} from './blogTypes';

type BlogState = {
    loading: boolean;
    error: string;
    blogs: Blog[];
};

const initialBlogsState = {
    loading: false,
    error: '',
    blogs: [],
};

export const blogReducer = (
    state: BlogState = initialBlogsState,
    action: ActionInterface
) => {
    switch (action.type) {
        case FETCH_BLOGS:
            return {
                ...state,
                loading: true,
            };
        case FETCH_BLOGS_SUCCESS:
            return {
                ...state,
                loading: false,
                blogs: action.payload ? action.payload : [],
            };
        case FETCH_BLOGS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload ? action.payload : '',
            };
        case MODIFY_BLOGS:
            return {
                ...state,
                blogs: modifyBlogs(state.blogs, action.payload),
            };
        default:
            return state;
    }
};

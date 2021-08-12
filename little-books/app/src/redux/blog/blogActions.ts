import { Dispatch, AnyAction } from 'redux';

import { BlogService } from '../../services/BlogService';
import { Blog } from '../../types/types';
import {
    FETCH_BLOGS_SUCCESS,
    FETCH_BLOGS_FAILURE,
    FETCH_BLOGS,
    MODIFY_BLOGS,
} from './blogTypes';

export const fetchBlogs = () => {
    return async (dispatch: Dispatch<AnyAction>) => {
        dispatch({ type: FETCH_BLOGS });
        try {
            const blogs = await BlogService.fetchBlogs();

            dispatch(fetchBlogsSuccess(blogs));
        } catch (err) {
            dispatch(fetchBlogsFailure(err.message));
        }
    };
};

const fetchBlogsSuccess = (blogs: Blog[]) => {
    return {
        type: FETCH_BLOGS_SUCCESS,
        payload: blogs,
    };
};

const fetchBlogsFailure = (message: string) => {
    return {
        type: FETCH_BLOGS_FAILURE,
        payload: message,
    };
};

export const modifyBlogs = (blog: Blog) => {
    return {
        type: MODIFY_BLOGS,
        payload: blog,
    };
};

import { v4 as uuid } from 'uuid';

import { CONSTANTS } from '../constants/constants';
import { MESSAGES } from '../constants/messages';
import { Blog, MembersData, Member } from '../types/types';
import BlogApi from './Api';

export class BlogService {
    static fetchBlogs = async () => {
        try {
            const { data } = await BlogApi.get(CONSTANTS.API_PATHS.BLOGS);

            const blogs = (data as Blog[]).map((blog) => {
                return {
                    ...blog,
                    id: uuid(),
                };
            });

            return blogs;
        } catch (err) {
            throw new Error(MESSAGES.ERRORS.FETCH_FAILURE);
        }
    };

    static fetchMembers = async () => {
        try {
            const { data } = await BlogApi.get(CONSTANTS.API_PATHS.USERS);

            const members = (data as MembersData[]).map((member) => {
                return {
                    name: member.name,
                    photo: member.photo,
                    city: member.address.city,
                } as Member;
            });

            return members;
        } catch (err) {
            throw new Error(MESSAGES.ERRORS.FETCH_FAILURE);
        }
    };
}

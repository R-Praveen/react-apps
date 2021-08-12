import _ from 'lodash';
import { v4 as uuid } from 'uuid';

import { Blog, Facets } from '../types/types';

export const filterBlogs = (blogs: Blog[], facets: Facets) => {
    return blogs.filter((blog) => {
        const _blog = blog as { [key: string]: string };

        for (const [type, filters] of Object.entries(facets)) {
            for (const { checked, value } of filters) {
                if (_blog[type] === value && !checked) {
                    return false;
                }
            }
        }

        return true;
    });
};

export const modifyBlogs = (blogs: Blog[], blog: Blog) => {
    if (!blog.id) {
        return [{ ...blog, id: uuid() }, ...blogs];
    } else {
        const _blogs = blogs.filter((_blog) => _blog.id !== blog.id);
        return [blog, ..._blogs];
    }
};

export const extractFacets = (blogs: Blog[]) => {
    const blogTypes = _.uniq(_.map(blogs, 'type')).map((type: string) => {
        return {
            value: type,
            checked: true,
        };
    });

    return {
        type: blogTypes,
    };
};

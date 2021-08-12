import React from 'react';

import { Blog as BlogType } from '../../types/types';
import Blog from '../Blog/Blog';
import styles from './BlogList.module.scss';

interface BlogListInterface {
    blogs: BlogType[];
}

const BlogList: React.FunctionComponent<BlogListInterface> = ({ blogs }) => {
    console.log('Component - Blog List');

    return (
        <div className={styles.blogList}>
            {blogs.map((blog, index) => (
                <Blog key={index} blog={blog} />
            ))}
        </div>
    );
};

export default BlogList;

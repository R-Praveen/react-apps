import React, { useContext, Suspense, Fragment } from 'react';

import { confirmAlert } from 'react-confirm-alert';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/rootReducer';
import { BlogContext } from '../../screens/Home/Home';
import { Blog as BlogType } from '../../types/types';
import styles from './Blog.module.scss';

import 'react-confirm-alert/src/react-confirm-alert.css';

const ConfirmAlert = React.lazy(() => import('../ConfirmAlert/ConfirmAlert'));
const Slide = React.lazy(() => import('../Slide/Slide'));

interface BlogInterface {
    blog: BlogType;
}

const Blog: React.FunctionComponent<BlogInterface> = ({ blog }) => {
    console.log('Component - Blog');

    const { title, details, type, id } = blog;
    const themeData = useSelector((state: RootState) => state.theme);
    const {
        isDarkMode,
        blogBackground,
        blogSelectedBackground,
        blogDetailsBackground,
        textColor,
    } = themeData;
    const { id: selectedBlogId, onBlogSelection, readOnly } = useContext(
        BlogContext
    );

    const onClick = () => {
        if (!readOnly)
            confirmAlert({
                // eslint-disable-next-line react/display-name
                customUI: ({ onClose }) => (
                    <Suspense fallback={() => {}}>
                        <Slide direction="right" duration={600}>
                            <ConfirmAlert
                                onClose={onClose}
                                onConfirm={() => onBlogSelection(blog)}
                                alertStyle={{
                                    backgroundColor:
                                        isDarkMode && blogDetailsBackground,
                                    color: isDarkMode && textColor,
                                }}
                            />
                        </Slide>
                    </Suspense>
                ),
            });
        else onBlogSelection(blog);
    };

    return (
        <div
            className={`${styles.blog} ${
                id === selectedBlogId ? styles.selected : ''
            }`}
            onClick={onClick}
            style={{
                backgroundColor:
                    isDarkMode &&
                    (id === selectedBlogId
                        ? blogSelectedBackground
                        : blogBackground),
                color: isDarkMode && textColor,
            }}
        >
            <div className={styles.title}>{title}</div>
            <div className={styles.type}>{type.toUpperCase()}</div>
            <div className={styles.details}>{details}</div>
        </div>
    );
};

export default Blog;

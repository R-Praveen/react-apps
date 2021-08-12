import React, { useContext, useEffect, useState, useCallback } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import BlogList from '../../components/BlogList/BlogList';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import Search from '../../components/Search/Search';
import { populateFacets, fetchBlogs } from '../../redux';
import { RootState } from '../../redux/rootReducer';
import { BlogContext } from '../../screens/Home/Home';
import { Blog } from '../../types/types';
import { filterBlogs, extractFacets } from '../../utils/blogUtil';
import styles from './BlogDisplay.module.scss';

interface BlogDisplayInterface {
    toggleAddBlogOverlay?: Function;
}

const BlogDisplay: React.FunctionComponent<BlogDisplayInterface> = ({
    toggleAddBlogOverlay,
}) => {
    console.log('Component - Blog Display');

    const dispatch = useDispatch();
    const blogs = useSelector((state: RootState) => state.blog.blogs as Blog[]);
    const facets = useSelector((state: RootState) => state.facet);
    const themeData = useSelector((state: RootState) => state.theme);
    const { isDarkMode, blogDisplayBackground } = themeData;
    const [filteredBlogs, setFilteredBlogs] = useState(blogs);
    const [facetFilteredBlogs, setFacetFilteredBlogs] = useState(filteredBlogs);
    const [clearSearch, setClearSearch] = useState(false);
    const { onBlogSelection } = useContext(BlogContext);

    useEffect(() => {
        setClearSearch(true);
    }, [facets]);

    useEffect(() => {
        dispatch(fetchBlogs());
    }, [dispatch]);

    useEffect(() => {
        if (blogs.length) {
            const facets = extractFacets(blogs);
            dispatch(populateFacets(facets));
        }
    }, [blogs]);

    useEffect(() => {
        if (filteredBlogs.length) onBlogSelection(filteredBlogs[0]);
    }, [filteredBlogs, onBlogSelection]);

    useEffect(() => {
        const _filteredBlogs = filterBlogs(blogs, facets);

        setFilteredBlogs(_filteredBlogs);
        setFacetFilteredBlogs(_filteredBlogs);
    }, [facets, blogs]);

    useEffect(() => setFilteredBlogs(blogs), [blogs]);

    const handleSearch = useCallback(
        (searchValue: string) => {
            const _filteredBlogs = facetFilteredBlogs.filter((blog) => {
                if (
                    blog.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                    return true;

                return false;
            });

            setFilteredBlogs(_filteredBlogs);
        },
        [facetFilteredBlogs]
    );

    return (
        <div
            className={styles.blogDisplay}
            style={{ backgroundColor: isDarkMode && blogDisplayBackground }}
        >
            <div className={styles.header}>
                <Search
                    placeholder="Search Blogs"
                    onSearch={handleSearch}
                    clearSearch={clearSearch}
                    onClear={useCallback(() => setClearSearch(false), [])}
                />
                <RoundedButton
                    className={styles.newButton}
                    label="NEW"
                    onClick={useCallback(() => {
                        toggleAddBlogOverlay && toggleAddBlogOverlay();
                    }, [toggleAddBlogOverlay])}
                />
            </div>
            <BlogList blogs={filteredBlogs} />
        </div>
    );
};

export default BlogDisplay;

import React, { useEffect, Fragment } from 'react';

import { connect, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import {
    isValid,
    isSubmitting,
    submit,
    // eslint-disable-next-line import/named
    FormSubmitHandler,
} from 'redux-form';

import AddOrEditForm, {
    FormSubmitInterface,
    AddOrEditFormInterface,
} from '../../components/AddOrEditForm/AddOrEditForm';
import Poster from '../../components/Poster/Poster';
import RoundedButton from '../../components/RoundedButton/RoundedButton';
import { CONSTANTS } from '../../constants/constants';
import { modifyBlogs } from '../../redux';
import { RootState } from '../../redux/rootReducer';
import { Blog, BlogForm } from '../../types/types';
import styles from './BlogDetails.module.scss';

const { FORMS } = CONSTANTS;

interface BlogDetailsInterface extends FormSubmitInterface {
    blog: Blog;
    dispatchUpdateBlog: Function;
    isAddBlogOverlayToggled: boolean;
    readOnly: boolean;
    toggleReadOnly: Function;
}

const BlogDetails: React.FunctionComponent<BlogDetailsInterface> = (props) => {
    console.log('Component - Blog Details');

    const {
        blog,
        formEnabled,
        submitForm,
        readOnly,
        dispatchUpdateBlog,
        isAddBlogOverlayToggled,
        toggleReadOnly,
    } = props;
    const themeData = useSelector((state: RootState) => state.theme);
    const { isDarkMode, blogDetailsBackground, textColor } = themeData;

    useEffect(() => toggleReadOnly(true), [blog, toggleReadOnly]);

    useEffect(() => {
        if (isAddBlogOverlayToggled) toggleReadOnly(true);
    }, [isAddBlogOverlayToggled, toggleReadOnly]);

    const handleEditOrSave = (save: boolean = false) => {
        if (save) submitForm();
        else toggleReadOnly();
    };

    const handleSubmit = (values: BlogForm) => {
        if (blog.title !== values.title || blog.details !== values.details)
            dispatchUpdateBlog({ ...blog, ...values });

        toggleReadOnly();
    };

    return (
        <div
            className={styles.blogDetails}
            style={{
                backgroundColor: isDarkMode && blogDetailsBackground,
                color: isDarkMode && textColor,
            }}
        >
            <Poster className={styles.blogPoster} posterUrl={blog.photo} />
            <div className={styles.editForm}>
                {readOnly ? (
                    <Fragment>
                        <div className={styles.title}>{blog.title}</div>
                        <div className={styles.details}>{blog.details}</div>
                    </Fragment>
                ) : (
                    <AddOrEditForm
                        initialValues={{
                            title: blog.title,
                            details: blog.details,
                        }}
                        onSubmit={
                            (handleSubmit as unknown) as Function &
                                FormSubmitHandler<
                                    {},
                                    AddOrEditFormInterface,
                                    string
                                >
                        }
                        titleStyle={isDarkMode && styles.dark}
                        detailsStyle={isDarkMode && styles.dark}
                        checkTouched={false}
                    />
                )}
            </div>

            <div className={styles.actionWrapper}>
                <RoundedButton
                    className={styles.editOrCancel}
                    label={readOnly ? 'EDIT CONTENT' : 'CANCEL'}
                    onClick={() => handleEditOrSave(false)}
                />
                {!readOnly ? (
                    <RoundedButton
                        className={styles.save}
                        label="SAVE CONTENT"
                        disabled={!formEnabled}
                        onClick={() => handleEditOrSave(true)}
                    />
                ) : null}
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootState) => {
    return {
        formEnabled:
            isValid(FORMS.ADD_OR_EDIT_FORM)(state) &&
            !isSubmitting(FORMS.ADD_OR_EDIT_FORM)(state),
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        submitForm: () => dispatch(submit(FORMS.ADD_OR_EDIT_FORM)),
        dispatchUpdateBlog: (blog: Blog) => dispatch(modifyBlogs(blog)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogDetails);

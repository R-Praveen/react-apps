import React from 'react';

import { connect, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import {
    submit,
    isValid,
    isSubmitting,
    // eslint-disable-next-line import/named
    FormSubmitHandler,
    reset,
} from 'redux-form';

import { CONSTANTS } from '../../constants/constants';
import { modifyBlogs } from '../../redux';
import { RootState } from '../../redux/rootReducer';
import { BlogForm, Blog } from '../../types/types';
import AddOrEditForm, {
    FormSubmitInterface,
    AddOrEditFormInterface,
} from '../AddOrEditForm/AddOrEditForm';
import RoundedButton from '../RoundedButton/RoundedButton';
import styles from './AddBlog.module.scss';

interface AddBlogInterface extends FormSubmitInterface {
    toggleOverlay: Function;
    dispatchAddBlog: Function;
}

const { FORMS } = CONSTANTS;

const AddBlog: React.FunctionComponent<AddBlogInterface> = (props) => {
    console.log('Component - Add blog');

    const {
        formEnabled,
        submitForm,
        resetForm,
        toggleOverlay,
        dispatchAddBlog,
    } = props;
    const themeData = useSelector((state: RootState) => state.theme);
    const { isDarkMode } = themeData;

    const handleSubmit = (values: BlogForm) => {
        dispatchAddBlog({
            ...values,
            photo: CONSTANTS.ASSETS.PLACEHOLDER,
            type: CONSTANTS.BLOG_TYPES.LOCAL,
        });
        resetForm && resetForm();
        toggleOverlay();
    };

    return (
        <div className={styles.addBlog}>
            <AddOrEditForm
                initialValues={{
                    title: '',
                    details: '',
                }}
                onSubmit={
                    (handleSubmit as unknown) as Function &
                        FormSubmitHandler<{}, AddOrEditFormInterface, string>
                }
                titleStyle={isDarkMode ? styles.dark : styles.blogTitle}
                detailsStyle={isDarkMode ? styles.dark : ''}
            />
            <RoundedButton
                className={styles.add}
                label="ADD"
                disabled={!formEnabled}
                onClick={() => submitForm()}
            />
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
        resetForm: () => dispatch(reset(FORMS.ADD_OR_EDIT_FORM)),
        dispatchAddBlog: (blog: Blog) => dispatch(modifyBlogs(blog)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog);

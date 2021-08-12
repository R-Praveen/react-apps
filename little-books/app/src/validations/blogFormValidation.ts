import { BlogForm } from '../types/types';

export const validate = (values: BlogForm) => {
    const errors: { [key: string]: string } = {};

    if (!values.title) {
        errors.title = 'Title is required';
    } else if (values.title.length < 3) {
        errors.title = 'Title must contain atleast 3 characters';
    }

    if (!values.details) {
        errors.details = 'Content is required';
    } else if (values.details.length < 300) {
        errors.details = 'Content must contain atleast 300 characters';
    }

    return errors;
};

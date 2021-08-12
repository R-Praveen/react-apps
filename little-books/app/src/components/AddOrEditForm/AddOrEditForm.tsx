import React, { useState } from 'react';

import {
    Form,
    Field,
    reduxForm,
    // eslint-disable-next-line import/named
    InjectedFormProps,
    // eslint-disable-next-line import/named
    FormSubmitHandler,
} from 'redux-form';

import { CONSTANTS } from '../../constants/constants';
import { validate } from '../../validations/blogFormValidation';
import FormField from '../FormField/FormField';
import Textarea from '../Textarea/Textarea';
import styles from './AddOrEditForm.module.scss';

const { FORMS } = CONSTANTS;

export interface FormSubmitInterface {
    formEnabled: boolean;
    submitForm: Function;
    resetForm?: Function;
}

export interface AddOrEditFormInterface {
    title?: string;
    titleStyle?: string;
    details?: string;
    detailsStyle?: string;
    className?: string;
    onSubmit: Function & FormSubmitHandler<{}, AddOrEditFormInterface, string>;
    checkTouched?: boolean;
}

const renderTextareaField = (props: any) => {
    const {
        input,
        className,
        textareaWrapperStyle,
        textareaStyle,
        titleRef,
        checkTouched,
        meta: { error, touched },
        ...rest
    } = props;

    return (
        <FormField
            touched={!checkTouched ? undefined : touched}
            error={error}
            className={className}
            contentStyle={textareaWrapperStyle ? textareaWrapperStyle : ''}
        >
            <Textarea
                ref={titleRef ? titleRef : undefined}
                className={textareaStyle}
                {...input}
                {...rest}
            />
        </FormField>
    );
};

const AddOrEditForm: React.FunctionComponent<
    InjectedFormProps<{}, AddOrEditFormInterface> & AddOrEditFormInterface
> = (props) => {
    console.log('Component - Add Or Edit Form');

    const {
        handleSubmit,
        titleStyle,
        detailsStyle,
        className,
        checkTouched = true,
    } = props;
    const [titleElement, setTitleElement] = useState<
        HTMLTextAreaElement | undefined
    >(undefined);

    const onKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
        if ((event.charCode || event.keyCode) === 13) {
            event.preventDefault();
        }
    };

    return (
        <Form
            onSubmit={handleSubmit}
            onKeyDown={onKeyDown}
            className={`${styles.addOrEditForm} ${className ? className : ''}`}
        >
            <Field
                name="title"
                component={renderTextareaField}
                placeholder="Name your blog"
                className={styles.titleFormField}
                textareaStyle={`${styles.title} ${
                    titleStyle ? titleStyle : ''
                }`}
                titleRef={(titleRef: HTMLTextAreaElement) => {
                    if (titleRef && !titleElement) {
                        titleRef.focus();
                        setTitleElement(titleRef);
                    }
                }}
                rows={2}
                checkTouched={checkTouched}
            />
            <Field
                name="details"
                component={renderTextareaField}
                placeholder="Write Content Here"
                className={styles.detailsFormField}
                textareaWrapperStyle={styles.detailsWrapper}
                textareaStyle={`${styles.details} ${
                    detailsStyle ? detailsStyle : ''
                }`}
                checkTouched={checkTouched}
            />
        </Form>
    );
};

export default reduxForm<{}, AddOrEditFormInterface>({
    form: FORMS.ADD_OR_EDIT_FORM,
    validate,
    enableReinitialize: true,
})(AddOrEditForm);

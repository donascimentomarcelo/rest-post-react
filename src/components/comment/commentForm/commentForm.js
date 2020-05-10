import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';

import * as CONST from './../../../helpers/constants';

import FormGroupLabel from '../../../layouts/form/formGroupLabel';
import Submit from '../../../layouts/buttons/submit';
import ButtonGroup from '../../../layouts/buttons/buttonGroup';

export class CommentForm extends Component {

    submit = comment => this.props.sendComment(comment);

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))}>
                <FormGroupLabel label={CONST.COMMENT_TITLE_FORM}>
                    <Field 
                            component="input" 
                            className="form-control"
                            name='text'/>
                </FormGroupLabel>
                <ButtonGroup>
                    <Submit
                        title={CONST.SAVE}
                        pristine={pristine}
                        submitting={submitting}/>
                </ButtonGroup>
            </form>
        )
    }
}

CommentForm = reduxForm(
    {
        form: CONST.COMMENT_FORM,
        destroyOnUnmount: false
    }
)(CommentForm);

export default CommentForm

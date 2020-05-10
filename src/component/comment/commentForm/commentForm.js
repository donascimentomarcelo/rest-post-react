import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import * as CONST  from '../../../helpers/constants'

import FormGroupLabel from '../../../layouts/form/formGroupLabel'
import ButtonGroup from '../../../layouts/buttons/buttonGroup'

export class CommentsForm extends Component {

    submit = post => console.log(post)

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))}>
                <FormGroupLabel label='Texto'>
                    <Field 
                            component="input" 
                            className="form-control"
                            name='text'/>
                </FormGroupLabel>
                <ButtonGroup>
                    <button type="submit" className="btn btn-outline-secondary" disabled={pristine || submitting}>
                        Salvar
                    </button>
                </ButtonGroup>
            </form>
        )
    }
}

CommentsForm = reduxForm(
    {
        form: CONST.COMMENT_FORM,
        destroyOnUnmount: false
    }
)(CommentsForm);

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsForm)

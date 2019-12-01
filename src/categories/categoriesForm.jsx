import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';

export class CategoriesForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name='name' component='input'/>
                    <Field name='description' component='input'/>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'categoriesForm'})(CategoriesForm)

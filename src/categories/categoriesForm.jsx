import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import labelAndinput from '../common/form/labelAndinput';

export class CategoriesForm extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field 
                        name='name' 
                        component={labelAndinput}
                        label="Nome"
                        cols="12 6"
                        placeholder="Informe o nome"/>
                    <Field 
                        name='description' 
                        component={labelAndinput}
                        label="Descrição"
                        cols="12 6"
                        placeholder="Informe a descrição"/>
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'categoriesForm'})(CategoriesForm)

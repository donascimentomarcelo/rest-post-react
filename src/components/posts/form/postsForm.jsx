import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import FormGroupLabel from '../../../common/form/formGroupLabel';
import ButtonGroup from '../../../common/form/buttonGroup';

export class PostsForm extends Component {

    submit(val) {
        console.log('submit')
    }

    renderCategoriesOptions() {
        const list = this.props.categories || [];
        return list.map(category => (
            <option
                key={category.id} 
                value={category.id}>{category.name}</option>
        ));
    }

    renderSubcategoriesOptions() {
        const list = this.props.subcategories || [];
        return list.map(subcategory => (
            <option
                key={subcategory.id} 
                value={subcategory.id}>{subcategory.name}</option>
        ));
    }

    render() {
        const {handleSubmit, pristine, submitting} = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))}>
                
                <FormGroupLabel label='Categoria'>
                    <Field name='categoryId' component='select' className="form-control">
                        <option value=''>---</option> 
                        {this.renderCategoriesOptions()}
                    </Field>
                </FormGroupLabel>

                <FormGroupLabel label='Subcategoria'>
                    <Field name='subcategoryId' component='select' className="form-control">
                        <option value=''>---</option> 
                        {this.renderSubcategoriesOptions()}
                    </Field>
                </FormGroupLabel>

                <FormGroupLabel label='Título'>
                    <Field 
                        component='input' 
                        name='title' 
                        className="form-control" 
                        placeholder='Insira o título'/>
                </FormGroupLabel>

                <FormGroupLabel label='Descrição'>
                    <Field 
                        component='textarea' 
                        name='description' 
                        className="form-control" 
                        placeholder='Escreva o post aqui.'/>
                </FormGroupLabel>

                <ButtonGroup>
                    <button type="submit" className='btn btn-primary' disabled={pristine || submitting}>
                        Salvar
                    </button>
                    <button type="button" className="btn btn-default">Voltar</button>
                </ButtonGroup>
            </form>
        )
    }
}

PostsForm = reduxForm(
    {
        form: 'postsForm',
        destroyOnUnmount: false
    }
)(PostsForm);

export default PostsForm;

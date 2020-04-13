import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form';

import ContentHeader from '../../../layouts/header/contentHeader';
import ContentOptions from '../../../layouts/body/contentOptions';
import FormGroupLabel from '../../../layouts/form/formGroupLabel';
import ButtonGroup from '../../../layouts/buttons/buttonGroup';

import './../../../styles/category.css';

export class CategoryForm extends Component {

    componentDidMount = () => console.log('Componente form');

    submit = value => console.log(value);

    actionBack = () => this.props.history.goBack();

    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        return (
            <div className='category-container'>
            <ContentHeader title='Formulário de Categoria'/>
            <ContentOptions
                buttonBack={true}
                actionBack={this.actionBack}/>

                <form onSubmit={handleSubmit(this.submit.bind(this))}>
                    <FormGroupLabel label='Nome'>
                        <Field 
                                component='input' 
                                name='name' 
                                className="form-control" 
                                placeholder='Insira o nome'/>
                    </FormGroupLabel>
                    <FormGroupLabel label='Descrição'>
                        <Field 
                                component='input' 
                                name='description' 
                                className="form-control" 
                                placeholder='Insira a descrição'/>
                    </FormGroupLabel>
                    <FormGroupLabel label='Ícone'>
                        <Field 
                                component='input' 
                                name='icon' 
                                className="form-control" 
                                placeholder='Insira o ícone'/>
                    </FormGroupLabel>
                    <ButtonGroup>
                        <button type="submit" className="btn btn-outline-secondary" disabled={pristine || submitting}>
                            Salvar
                        </button>
                    </ButtonGroup>
                </form>
            </div>
        )
    }
}

CategoryForm = reduxForm(
    {
        form: 'categoryForm',
        destroyOnUnmount: false
    }
)(CategoryForm);

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm)

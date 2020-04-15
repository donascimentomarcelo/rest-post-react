import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import ContentHeader from '../../../layouts/header/contentHeader';
import ContentOptions from '../../../layouts/body/contentOptions';
import FormGroupLabel from '../../../layouts/form/formGroupLabel';
import ButtonGroup from '../../../layouts/buttons/buttonGroup';

import { saveCategory, initCategoryForm } from './../../../actions/categoryAction';

import * as CONST from './../../../helpers/constants';

import './../../../styles/category.css';
import { bindActionCreators } from 'redux';


export class CategoryForm extends Component {
    
    history = this.props.history;

    componentDidMount = () => console.log('Componente form');

    submit = value => this.props.location.pathname === CONST.CATEGORIES_NEW ? this.newCategory(value) : this.updateCategory(value);

    actionBack = () => this.history.goBack();

    newCategory = value => {
        this.props.saveCategory(value, this.history)
            .then(() => this.actionsAfterCreate())
            .catch(error => console.log(error));
    }

    actionsAfterCreate = () => {
        this.props.initCategoryForm()
        this.history.goBack();
        toastr.success('Sucesso!', 'Categoria criada com sucesso!');
    }

    updateCategory = value => console.log(value);

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

const mapStateToProps = (state) => (
    {

    }
)

const mapDispatchToProps = dispatch => bindActionCreators (
    {
        saveCategory,
        initCategoryForm,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm)

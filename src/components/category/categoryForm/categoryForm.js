import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form';
import { toastr } from 'react-redux-toastr';

import ContentHeader from '../../../layouts/header/contentHeader';
import ContentOptions from '../../../layouts/body/contentOptions';
import FormGroupLabel from '../../../layouts/form/formGroupLabel';
import ButtonGroup from '../../../layouts/buttons/buttonGroup';

import { saveCategory, updateCategory, initCategoryForm } from './../../../actions/categoryAction';

import * as CONST from './../../../helpers/constants';

import './../../../styles/category.css';
import { bindActionCreators } from 'redux';


export class CategoryForm extends Component {
    
    history = this.props.history;

    componentDidMount = () => console.log('Componente form');

    submit = category => this.props.location.pathname === CONST.CATEGORY_NEW ? this.newCategory(category) : this.updateCategory(category);

    actionBack = () => {
        this.props.initCategoryForm();
        this.history.goBack();
    };

    newCategory = category => {
        this.props.saveCategory(category, this.history)
            .then(() => this.actionsAfterSuccess(CONST.CATEGORY_CREATED))
            .catch(error => console.log(error));
    }

    actionsAfterSuccess = msg => {
        this.actionBack();
        toastr.success(CONST.SUCCESS, msg);
    }

    updateCategory = category => {
        const id = this.props.match.params.id;
        this.props.updateCategory(category, id)
            .then(() => this.actionsAfterSuccess(CONST.CATEGORY_UPDATED))
            .catch(error => console.log(error));
    };

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <>
            <ContentHeader title={CONST.CATEGORY_CONTENT_HEADER}/>
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
            </>
        )
    }
}

CategoryForm = reduxForm(
    {
        form: CONST.CATEGORY_FORM,
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
        updateCategory,
        initCategoryForm,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(CategoryForm)

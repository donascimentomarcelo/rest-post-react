import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../../../layouts/header/contentHeader';
import ContentOptions from '../../../layouts/body/contentOptions';
import FormGroupLabel from '../../../layouts/form/formGroupLabel';
import ButtonGroup from '../../../layouts/form/buttonGroup';

import * as CONST from './../../../helpers/constants';

import { getAllCategories } from './../../../actions/categoryAction'
import { findByCategory } from '../../../actions/subcategoryAction';
import { bindActionCreators } from 'redux';
import { reduxForm, Field } from 'redux-form';

export class PostForm extends Component {

    componentWillMount = () => this.props.getAllCategories();

    actionBack = () => {
        this.props.history.goBack();
    };

    submit = values => console.log(values);

    findByCategory = event => {
        this.props.findByCategory(event.target.value)
    };

    renderCategories = () => {
        return this.props.categories.map(category => {
            return <option value={category.id} key={category.id} >{category.name}</option>
        });
    }

    renderSubcategories = () => {
        return this.props.subcategories.map(subcategory => {
            return <option value={subcategory.id} key={subcategory.id} >{subcategory.name}</option>
        });
    }

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <>
                <ContentHeader title={CONST.POST_CONTENT_HEADER} />
                <ContentOptions
                    buttonBack={true}
                    actionBack={this.actionBack}/>
                
                <form onSubmit={handleSubmit(this.submit.bind(this))}>
                    <FormGroupLabel label='Categoria'>
                        <Field 
                            component="select" 
                            className="form-control"
                            name='categoryId' 
                            onChange={this.findByCategory.bind(this)}>
                                <option value="">Selecione a categoria</option>
                                {this.renderCategories()}
                        </Field>
                    </FormGroupLabel>
                    <FormGroupLabel label='Subcategoria'>
                        <Field 
                            component="select" 
                            className="form-control"
                            name='subcategoryId'>
                                <option value="">Selecione a subcategoria</option>
                                {this.renderSubcategories()}
                        </Field>
                    </FormGroupLabel>
                    <FormGroupLabel label='Título'>
                        <Field 
                                component="input" 
                                className="form-control"
                                name='title'/>
                    </FormGroupLabel>
                    <FormGroupLabel label='Descrição'>
                        <Field 
                                component="textarea" 
                                className="form-control"
                                name='description'/>
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

PostForm = reduxForm(
    {
        form: CONST.POST_FORM,
        destroyOnUnmount: false
    }
)(PostForm);

const mapStateToProps = (state) => (
    {
        categories: state.categoryReducer.categories,
        subcategories: state.subcategoryReducer.subcategories,
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getAllCategories,
        findByCategory,
    }, 
dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)

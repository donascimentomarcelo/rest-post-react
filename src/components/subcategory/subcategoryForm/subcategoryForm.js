import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { toastr } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import { getAllCategories } from '../../../actions/categoryAction';
import { saveSubcategory } from '../../../actions/subcategoryAction';

import ContentHeader from '../../../layouts/header/contentHeader';
import ContentOptions from '../../../layouts/body/contentOptions';
import FormGroupLabel from '../../../layouts/form/formGroupLabel';
import ButtonGroup from '../../../layouts/buttons/buttonGroup';

import * as CONST from './../../../helpers/constants';

export class SubcategoryForm extends Component {

    componentDidMount = () => this.props.getAllCategories();

    submit = subcategory => this.props.location.pathname === CONST.SUBCATEGORY_NEW ? this.newSubcategory(subcategory) : this.updateSubategory(subcategory);
    
    newSubcategory = subcategory => {
        this.props.saveSubcategory(subcategory)
            .then(() => this.actionsAfterSuccess(CONST.SUBCATEGORY_CREATED))
            .catch(error => console.log(error));
    }

    actionsAfterSuccess = msg => {
        this.actionBack();
        toastr.success(CONST.SUCCESS, msg);
    }
    
    updateSubategory = subcategory => {

    }
    
    actionBack = () => {
        this.props.history.goBack();
    }

    onChange = event => console.log(event.target.value);

    renderOpitions = () => {
        return this.props.categories.map(category => {
            return <option value={category.id} key={category.id} >{category.name}</option>
        });
    }

    render() {
        const { handleSubmit, pristine, submitting } =  this.props;
        return (
            <>
            <ContentHeader title={CONST.SUBCATEGORY_CONTENT_HEADER}/>
            <ContentOptions
                buttonBack={true}
                actionBack={this.actionBack}/>

                <form onSubmit={handleSubmit(this.submit.bind(this))}>
                    <FormGroupLabel label='Categoria'>
                        <Field 
                            component="select" 
                            className="form-control"
                            name='categoryId' 
                            onChange={this.onChange.bind(this)}>
                                <option value="">Selecione a categoria</option>
                                {this.renderOpitions()}
                        </Field>
                    </FormGroupLabel>
                    <FormGroupLabel label='Nome'>
                        <Field 
                                component='input' 
                                name='name' 
                                className="form-control" 
                                placeholder='Insira o nome'/>
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

SubcategoryForm = reduxForm(
    {
        form: 'subcategoryForm',
        destroyOnUnmount: false
    }
)(SubcategoryForm);

const mapStateToProps = (state) => ({
    categories: state.categoryReducer.categories
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getAllCategories,
        saveSubcategory,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryForm);

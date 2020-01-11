import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form';
import FormGroupLabel from '../../../common/form/formGroupLabel';
import ButtonGroup from '../../../common/form/buttonGroup';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getList as getCategoties, setSelectCategories } from '../../categories/categoriesActions';
import { findSubcategoryByCategory } from '../../subcategories/subcategoriesActions';
import { create, init } from '../postsActions';

export class PostsForm extends Component {

    componentWillMount() {
        this.props.getCategoties();
    }

    submit(post) {
        this.props.create(post);
        this.props.router.goBack();
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

    getSubcategoties(ev) {
        const categoryId = ev.target.value;
        this.props.setSelectCategories(categoryId);
        this.props.findSubcategoryByCategory(categoryId);
    }

    render() {
        const {handleSubmit, pristine, submitting, categoryId} = this.props;
        return (
            <form onSubmit={handleSubmit(this.submit.bind(this))}>
                
                <FormGroupLabel label='Categoria'>
                    <select 
                        name='categoryId' 
                        className="form-control"
                        value={categoryId}
                        onChange={this.getSubcategoties.bind(this)}>
                        <option value=''>---</option> 
                        {this.renderCategoriesOptions()}
                    </select>
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

const mapStateToProps = state => (
    {
        categories: state.categories.list,
        subcategories: state.subcategories.list,
        categoryId: state.posts.categoryId,
        enableReinitialize: true
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(
    { getCategoties, setSelectCategories, findSubcategoryByCategory, create, init },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(PostsForm);

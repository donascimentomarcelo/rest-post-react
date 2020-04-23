import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import { reduxForm, Field } from 'redux-form';
import { 
    getAllCategories, 
    deleteCategory, 
    openModal, 
    findByCategoryName, 
    resetCategoriesSearched,
    resetCategoryFieldSearch,
    setCategoryId,
    setCategoryForm,
    removeCategoryFromSearch,
} from '../../actions/categoryAction';
import CategoryList from './categoryList/categoryList';
import SearchModal from '../../layouts/modal/searchModal';
import FormGroupLabel from '../../layouts/form/formGroupLabel';
import ValueBox from '../../layouts/box/valueBox';
import './../../styles/category.css'

import * as CONST from './../../helpers/constants';

export class Category extends Component {

    UNSAFE_componentWillMount () {
        this.load();
    }

    load = () => this.props.getAllCategories();

    create = () => this.props.history.push('/categories/new');

    delete = id => {
        this.props.deleteCategory(id)
            .then(() => {
                this.load();
                toastr.success(CONST.SUCCESS, CONST.CATEGORY_REMOVED);
                if (this.props.categoryId) {
                    this.props.removeCategoryFromSearch(this.props.categoryId);
                    this.props.setCategoryId(null);
                }
            })
            .catch(error => console.log(error))
    }

    search = value => {
        this.props.resetCategoriesSearched();
        this.props.resetCategoryFieldSearch(null);
        this.props.openModal(value);
    }

    submit = value => this.props.findByCategoryName(value.name);

    showCategoriesCards = () => {
        const categoriesSearched = this.props.categoriesSearched || [];
        if (categoriesSearched.length) {
            return (
                <div className="row modal-table-size">
                    {
                        categoriesSearched.map(category => (
                            <ValueBox
                                key={category.id}
                                cols='6 6' 
                                color='gray' 
                                icon={category.icon}
                                type='small'
                                value={category.name}
                                showOptions={true}
                                edit={this.edit.bind(this, category)}
                                confirm={this.confirm.bind(this, category.id)}/>
                            )
                        )
                    }
                </div>
            )
        }
    }

    edit = category => {
        this.props.setCategoryForm(category);
        this.props.history.push(`/categories/${category.id}/edit`)
    }

    confirm = id => {
        this.props.setCategoryId(id);
        toastr.confirm(CONST.CATEGORY_ALERT, this.toastrConfirmOptions);
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <>
                <CategoryList 
                    categories={this.props.categories}
                    delete={this.delete}
                    load={this.load}
                    search={this.search}
                    create={this.create}
                    edit={this.edit}
                    confirm={this.confirm}/>
                
                <SearchModal
                    show={this.props.show}
                    title={CONST.CATEGORY_SEARCH}
                    onHide={this.search.bind(this, false)}
                    handleSubmit={handleSubmit(this.submit.bind(this))}
                    data={this.showCategoriesCards()}>
                        <FormGroupLabel label='Nome'>
                            <Field 
                                    component='input' 
                                    name='name' 
                                    className="form-control" 
                                    placeholder='Insira o nome'/>
                        </FormGroupLabel>
                </SearchModal>
            </>
        )
    }

    toastrConfirmOptions = {
        onOk: () => this.delete(this.props.categoryId),
        onCancel: () => null,
        okText: CONST.YES,
        cancelText: CONST.NO,
    };
}

Category = reduxForm(
    {
        form: 'categorySearchForm',
        destroyOnUnmount: false
    }
)(Category);

const mapStateToProps = state => (
    {
        categories: state.categoryReducer.categories,
        show: state.categoryReducer.show,
        categoriesSearched: state.categoryReducer.categoriesSearched,
        categoryId: state.categoryReducer.categoryId,
        enableReinitialize: true,
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getAllCategories,
        deleteCategory,
        openModal,
        findByCategoryName,
        resetCategoriesSearched,
        resetCategoryFieldSearch,
        setCategoryId,
        setCategoryForm,
        removeCategoryFromSearch,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Category);

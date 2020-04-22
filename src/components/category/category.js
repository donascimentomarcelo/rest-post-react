import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import { 
    getAllCategories, 
    deleteCategory, 
    openModal, 
    findByCategoryName, 
    resetCategoriesSearched,
    resetCategoryFieldSearch
} from '../../actions/categoryAction';
import CategoryList from './categoryList/categoryList';
import SearchModal from '../../layouts/modal/searchModal';
import FormGroupLabel from '../../layouts/form/formGroupLabel';
import ValueBox from '../../layouts/box/valueBox';
import './../../styles/category.css'

import * as CONST from './../../helpers/constants';
import { reduxForm, Field } from 'redux-form';

export class Category extends Component {

    UNSAFE_componentWillMount () {
        this.load();
    }

    load = () => this.props.getAllCategories();

    delete = id => {
        this.props.deleteCategory(id)
            .then(() => {
                this.load();
                toastr.success(CONST.SUCCESS, CONST.CATEGORY_REMOVED);
            })
            .catch(error => console.log(error))
    }

    search = value => {
        this.props.resetCategoriesSearched();
        this.props.resetCategoryFieldSearch(null);
        this.props.openModal(value);
    }

    submit = value => {
        this.props.findByCategoryName(value.name)
            .then(resp => console.log(resp))
            .catch(error => console.log(error));
    }

    showCategoriesCards = () => {
        const {categoriesSearched} = this.props || [];
        if (categoriesSearched) {
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
                                showOptions={true}/>
                            )
                        )
                    }
                </div>
            )
        }
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <>
                <CategoryList 
                    categories={this.props.categories}
                    delete={this.delete}
                    actionReload={this.load}
                    actionSearch={this.search}
                    history={this.props.history}/>
                
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
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Category);

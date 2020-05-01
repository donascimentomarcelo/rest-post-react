import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import { 
    getAllSubcategories,
    setSubcategoryForm,
    setSubcategoryId,
    deleteSubcategory,
    setSubcategoryModal,
    resetSubcategorySearchList,
    resetSubcategorySearchForm,
    findSubcategoryByParams
} from '../../actions/subcategoryAction';
import { getAllCategories } from '../../actions/categoryAction';
import SubcategoryList from './subcategoryList/subcategoryList';
import SearchModal from '../../layouts/modal/searchModal';
import SubcategoryFields from './subcategoryForm/subcategoryFields';
import ValueBox from '../../layouts/box/valueBox';

import * as CONST from './../../helpers/constants';

export class Subcategory extends Component {

    UNSAFE_componentWillMount = () => this.load();

    load = () => this.props.getAllSubcategories();

    create = () => this.props.history.push(CONST.SUBCATEGORY_NEW);
    
    search = value => {
        this.props.setSubcategoryModal(value);
        this.props.resetSubcategorySearchList();
        this.props.resetSubcategorySearchForm();
        this.props.getAllCategories();
    }

    submit = params => this.props.findSubcategoryByParams(params);

    edit = subcategory => {
        const object = {
            categoryId: subcategory.category.id,
            name: subcategory.name,
            icon: subcategory.icon,
        };
        this.props.setSubcategoryForm(object);
        this.props.history.push(`/subcategories/${subcategory.id}/edit`);
    }

    confirm = id => {
        this.props.setSubcategoryId(id);
        toastr.confirm(CONST.SUBCATEGORY_ALERT, this.toastrConfirmOptions);
    };

    delete = id => {
        this.props.deleteSubcategory(id)
            .then(() => {
                this.load();
                toastr.success(CONST.SUCCESS, CONST.SUBCATEGORY_REMOVED);
            })
            .catch(error => console.log(error))
    }

    showSubcategoriesCards = () => {
        const subcategories = this.props.subcategoriesSearched || [];

        if (subcategories.length) {
            return (
                <div className="row modal-table-size">
                {
                    subcategories.map(subcategory => (
                        <ValueBox
                            key={subcategory.id}
                            cols='6 6' 
                            color='gray' 
                            icon={subcategory.icon}
                            type='small'
                            value={subcategory.name}
                            showOptions={true}
                            edit={this.edit.bind(this, subcategory)}
                            confirm={this.confirm.bind(this, subcategory.id)}/>
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
                <SubcategoryList
                    subcategories={this.props.subcategories}
                    load={this.load}
                    create={this.create}
                    search={this.search}
                    edit={this.edit}
                    confirm={this.confirm}/>

                <SearchModal
                    show={this.props.show}                   
                    title={CONST.SUBCATEGORY_SEARCH}
                    onHide={this.search.bind(this, false)}
                    handleSubmit={handleSubmit(this.submit.bind(this))}
                    data={this.showSubcategoriesCards()}>
                        <SubcategoryFields
                            categories={this.props.categories}/>
                </SearchModal>
            </>
        )
    }

    toastrConfirmOptions = {
        onOk: () => this.delete(this.props.subcategoryId),
        onCancel: () => null,
        okText: CONST.YES,
        cancelText: CONST.NO,
    };
}

Subcategory = reduxForm(
    {
        form: CONST.SUBCATEGORY_SEARCH_FORM,
        destroyOnUnmount: false
    }
)(Subcategory);

const mapStateToProps = (state) => ({
    subcategories: state.subcategoryReducer.subcategories,
    subcategoryId: state.subcategoryReducer.subcategoryId,
    show: state.subcategoryReducer.show,
    subcategoriesSearched: state.subcategoryReducer.subcategoriesSearched,
    categories: state.categoryReducer.categories,
    enableReinitialize: true,
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getAllSubcategories,
        setSubcategoryForm,
        setSubcategoryId,
        deleteSubcategory,
        setSubcategoryModal,
        resetSubcategorySearchList,
        resetSubcategorySearchForm,
        getAllCategories,
        findSubcategoryByParams
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Subcategory);

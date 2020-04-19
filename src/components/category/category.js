import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toastr } from 'react-redux-toastr';
import { getAllCategories, deleteCategory } from '../../actions/categoryAction';
import  CategoryList  from './categoryList/categoryList';

import * as CONST from './../../helpers/constants';

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

    render() {
        return (
            <CategoryList 
                categories={this.props.categories}
                delete={this.delete}
                history={this.props.history}/>
        )
    }
}

const mapStateToProps = state => (
    {
        categories: state.categoryReducer.categories,
        enableReinitialize: true,
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getAllCategories,
        deleteCategory,
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Category);

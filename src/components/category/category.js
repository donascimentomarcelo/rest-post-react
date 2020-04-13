import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllCategories } from '../../actions/categoryAction';
import  CategoryList  from './categoryList/categoryList';

export class Category extends Component {

    UNSAFE_componentWillMount () {
        this.props.getAllCategories();
    }

    render() {
        return (
            <CategoryList 
                categories={this.props.categories}
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
    },
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Category);

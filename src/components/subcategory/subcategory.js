import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getAllSubcategories 
} from '../../actions/subcategoryAction';
import SubcategoryList from './subcategoryList/subcategoryList';
import { bindActionCreators } from 'redux';

export class Subcategory extends Component {
    UNSAFE_componentWillMount = () => this.load();

    load = () => this.props.getAllSubcategories();

    render() {
        return (
            <>
                <SubcategoryList
                    subcategories={this.props.subcategories}/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    subcategories: state.subcategoryReducer.subcategories
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getAllSubcategories
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Subcategory);

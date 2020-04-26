import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    getAllSubcategories 
} from '../../actions/subcategoryAction';
import SubcategoryList from './subcategoryList/subcategoryList';
import { bindActionCreators } from 'redux';
import * as CONST from './../../helpers/constants';

export class Subcategory extends Component {

    UNSAFE_componentWillMount = () => this.load();

    load = () => this.props.getAllSubcategories();

    create = () => this.props.history.push(CONST.SUBCATEGORY_NEW);
    
    search = value => console.log(value);

    edit = value => console.log(value);

    confirm = id => console.log(id);

    render() {
        return (
            <>
                <SubcategoryList
                    subcategories={this.props.subcategories}
                    load={this.load}
                    create={this.create}
                    search={this.search}
                    edit={this.edit}
                    confirm={this.confirm}/>
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

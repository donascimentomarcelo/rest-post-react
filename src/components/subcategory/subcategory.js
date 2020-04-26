import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { 
    getAllSubcategories,
    setSubcategoryForm,
    setSubcategoryId,
    deleteSubcategory,
} from '../../actions/subcategoryAction';
import SubcategoryList from './subcategoryList/subcategoryList';
import { bindActionCreators } from 'redux';
import * as CONST from './../../helpers/constants';

export class Subcategory extends Component {

    UNSAFE_componentWillMount = () => this.load();

    load = () => this.props.getAllSubcategories();

    create = () => this.props.history.push(CONST.SUBCATEGORY_NEW);
    
    search = value => console.log(value);

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

    toastrConfirmOptions = {
        onOk: () => this.delete(this.props.subcategoryId),
        onCancel: () => null,
        okText: CONST.YES,
        cancelText: CONST.NO,
    };
}

const mapStateToProps = (state) => ({
    subcategories: state.subcategoryReducer.subcategories,
    subcategoryId: state.subcategoryReducer.subcategoryId,
})

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        getAllSubcategories,
        setSubcategoryForm,
        setSubcategoryId,
        deleteSubcategory,
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Subcategory);

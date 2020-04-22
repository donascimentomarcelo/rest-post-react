import React, { Component } from 'react';

import Content from '../../../layouts/body/content';
import Row from '../../../layouts/body/row';
import ValueBox from '../../../layouts/box/valueBox';
import ContentHeader from '../../../layouts/header/contentHeader';
import ContentOptions from '../../../layouts/body/contentOptions';

import './../../../styles/category.css';
import { withRouter } from 'react-router';

import { setCategoryForm, setCategoryId } from '../../../actions/categoryAction';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { toastr } from 'react-redux-toastr';

import * as CONST from './../../../helpers/constants'

export class CategoryList extends Component {

    toastrConfirmOptions = {
        onOk: () => this.props.delete(this.props.categoryId),
        onCancel: () => null,
        okText: CONST.YES,
        cancelText: CONST.NO,
    };

    actionEdit = (category) => {
        this.props.setCategoryForm(category);
        this.props.history.push(`/categories/${category.id}/edit`)
    };
    
    actionDelete = (category) => {
        this.props.setCategoryId(category.id);
        toastr.confirm(CONST.CATEGORY_ALERT, this.toastrConfirmOptions);
    };

    showCategoriesCards = () => {
        const {categories} = this.props || [];
        return categories.map(category => (
                <ValueBox
                    key={category.id}
                    cols='6 6' 
                    color='gray' 
                    icon={category.icon}
                    type='medium'
                    value={category.name}
                    text={category.description}
                    showOptions={true}
                    actionEdit={this.actionEdit.bind(this, category)}
                    actionDelete={this.actionDelete.bind(this, category)}/>
            )
        );
    }

    actionNew = () => this.props.history.push('/categories/new');

    actionSearch = () => this.props.actionSearch(true);

    actionReload = () => this.props.actionReload();

    render() {
        return (
            <div className='category-container'>
                <ContentHeader title='Categorias'/>
                <ContentOptions
                    buttonNew={this.props.buttonNew}
                    buttonSearch={this.props.buttonSearch}
                    buttonReload={this.props.buttonReload}
                    actionNew={this.actionNew}
                    actionSearch={this.actionSearch}
                    actionReload={this.actionReload}/>
                <Content>
                    <Row>
                        {this.showCategoriesCards()}
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => (
    {
        categoryId: state.categoryReducer.categoryId,
        buttonNew: state.categoryReducer.buttonNew,
        buttonSearch: state.categoryReducer.buttonSearch,
        buttonReload: state.categoryReducer.buttonReload,
    }
);

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setCategoryForm,
        setCategoryId,
    }, 
    dispatch
);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryList));

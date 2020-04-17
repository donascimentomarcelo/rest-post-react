import React, { Component } from 'react';

import Content from '../../../layouts/body/content';
import Row from '../../../layouts/body/row';
import ValueBox from '../../../layouts/box/valueBox';
import ContentHeader from '../../../layouts/header/contentHeader';
import ContentOptions from '../../../layouts/body/contentOptions';

import './../../../styles/category.css';
import { withRouter } from 'react-router';

import { setCategoryForm } from '../../../actions/categoryAction';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

export class CategoryList extends Component {

    componentDidUpdate = () => console.log(this.props);

    actionEdit = (category) => {
        this.props.setCategoryForm(category);
        this.props.history.push(`/categories/${category.id}/edit`)
    };
    
    actionDelete = (id) => console.log(id);

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

    actionSearch = () => console.log('action s');

    render() {
        return (
            <div className='category-container'>
                <ContentHeader title='Categorias'/>
                <ContentOptions
                    buttonNew={true}
                    buttonSearch={true}
                    actionNew={this.actionNew}
                    actionSearch={this.actionSearch}/>
                <Content>
                    <Row>
                        {this.showCategoriesCards()}
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(
    {
        setCategoryForm
    }, 
    dispatch
);

export default withRouter(connect(null, mapDispatchToProps)(CategoryList));

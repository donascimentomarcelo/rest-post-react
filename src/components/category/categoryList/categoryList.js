import React, { Component } from 'react';
import { connect } from 'react-redux'

import Content from '../../../layouts/body/content';
import Row from '../../../layouts/body/row';
import ValueBox from '../../../layouts/box/valueBox';
import ContentHeader from '../../../layouts/header/contentHeader';
import ContentOptions from '../../../layouts/body/contentOptions';

import './../../../styles/category.css';

export class CategoryList extends Component {

    showCategoriesCards = () => {
        const categories = this.props.categories || [];
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
                    edit={this.edit.bind(this, category)}
                    confirm={this.confirm.bind(this, category.id)}/>
            )
        );
    }

    create = () => this.props.create();

    search = () => this.props.search(true);

    load = () => this.props.load();

    edit = category => this.props.edit(category);
    
    confirm = id => this.props.confirm(id);

    render() {
        return (
            <div className='category-container'>
                <ContentHeader title='Categorias'/>
                <ContentOptions
                    buttonNew={this.props.buttonNew}
                    buttonSearch={this.props.buttonSearch}
                    buttonReload={this.props.buttonReload}
                    create={this.create}
                    search={this.search}
                    load={this.load}/>
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
        buttonNew: state.categoryReducer.buttonNew,
        buttonSearch: state.categoryReducer.buttonSearch,
        buttonReload: state.categoryReducer.buttonReload,
    }
);

export default connect(mapStateToProps, null)(CategoryList);

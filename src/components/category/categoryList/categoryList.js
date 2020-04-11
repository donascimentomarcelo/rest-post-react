import React, { Component } from 'react';

import Content from '../../../layouts/body/content';
import Row from '../../../layouts/body/row';
import ValueBox from '../../../layouts/box/valueBox';
import ContentHeader from '../../../layouts/header/contentHeader';
import ContentOptions from '../../../layouts/body/contentOptions';

import './../../../styles/category.css';

export class CategoryList extends Component {

    componentDidUpdate () {
        console.log(this.props)
    }

    showCategoriesCards = () => {
        const {categories} = this.props || [];
        return categories.map(category => (
                <ValueBox
                    key={category.id}
                    cols='6 6' 
                    color='gray' 
                    icon={category.icon}
                    type='small'
                    value={category.name}
                    text={category.description}/>
            )
        );
    }

    actionNew = () => {console.log('action n')}
    actionSearch = () => {console.log('action s')}

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

export default CategoryList;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContentHeader from '../../../layouts/header/contentHeader';
import ContentOptions from '../../../layouts/body/contentOptions';
import Content from '../../../layouts/body/content';
import Row from '../../../layouts/body/row';
import ValueBox from '../../../layouts/box/valueBox';

export class SubcategoryList extends Component {

    showSubcategoriesCards = () => {
        const subcategories = this.props.subcategories || [];
        return subcategories.map(subcategory => (
                <ValueBox
                    key={subcategory.id}
                    cols='6 6' 
                    color='gray' 
                    icon={subcategory.icon}
                    type='small'
                    value={subcategory.name}
                    showOptions={true}/>
            )
        )
    }

    render() {
        return (
            <div className='category-container'>
                <ContentHeader title='Subcategorias'/>

                <Content>
                    <Row>
                        {this.showSubcategoriesCards()}
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = dispatch => null;

export default connect(mapStateToProps, mapDispatchToProps)(SubcategoryList)

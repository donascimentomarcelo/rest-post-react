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
                    showOptions={true}
                    edit={this.edit.bind(this, subcategory.id)}
                    confirm={this.confirm.bind(this, subcategory.id)}/>
            )
        )
    }

    create = () => this.props.create();

    search = () => this.props.search(true);

    load = () => this.props.load();

    edit = id => this.props.edit(id);
    
    confirm = id => this.props.confirm(id);

    render() {
        return (
            <div className='category-container'>
                <ContentHeader title='Subcategorias'/>
                <ContentOptions
                    buttonNew={this.props.buttonNew}
                    buttonSearch={this.props.buttonSearch}
                    buttonReload={this.props.buttonReload}
                    create={this.create}
                    search={this.search}
                    load={this.load}/>
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
    buttonNew: state.categoryReducer.buttonNew,
    buttonSearch: state.categoryReducer.buttonSearch,
    buttonReload: state.categoryReducer.buttonReload,
})

export default connect(mapStateToProps, null)(SubcategoryList);

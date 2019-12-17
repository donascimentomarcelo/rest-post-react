import React, { Component } from 'react';

import ContentHeader from '../../common/template/contentHeader';
import Content from '../../common/template/content';

import Tabs from '../../common/tab/tabs';
import TabsHeader from '../../common/tab/tabsHeader';
import TabsContent from '../../common/tab/tabsContent';
import TabHeader from '../../common/tab/tabHeader';
import TabContent from '../../common/tab/tabContent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CategoriesList from './categoriesList';
import CategoriesForm from './categoriesForm';
import { init, create, update, remove } from './categoriesActions';

export class Categories extends Component {

    componentWillMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <ContentHeader title='Categorias' small='manter categorias'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='listar' icon='bars' target='tabList'/>
                            <TabHeader label='incluir' icon='plus' target='tabCreate'/>
                            <TabHeader label='alterar' icon='pencil' target='tabUpdate'/>
                            <TabHeader label='excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <CategoriesList/>
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <CategoriesForm 
                                    onSubmit={this.props.create}
                                    submitLabel='Incluir'
                                    submitClass='primary'/>
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <CategoriesForm  
                                    onSubmit={this.props.update}
                                    submitLabel='Alterar'
                                    submitClass='info'/>
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <CategoriesForm  
                                    onSubmit={this.props.remove} 
                                    readOnly={true}
                                    submitLabel='Excluir'
                                    submitClass='danger'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init, create, update, remove}
    , dispatch);
export default connect(null, mapDispatchToProps)(Categories);
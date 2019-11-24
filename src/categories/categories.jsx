import React, { Component } from 'react';

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';

import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabsContent from '../common/tab/tabsContent';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';

export class Categories extends Component {
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
                                Lista
                            </TabContent>
                            <TabContent id='tabCreate'>
                                Criar
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                Atualizar
                            </TabContent>
                            <TabContent id='tabDelete'>
                                Deletar
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default Categories

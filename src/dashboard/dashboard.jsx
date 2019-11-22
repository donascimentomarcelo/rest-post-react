import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader';
import Content from '../common/template/content';
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    <Row>
                        <ValueBox 
                        cols='12 4' 
                        color='green' 
                        icon='list-ol'
                        value='10'
                        text='Total de categorias'/>

                        <ValueBox 
                        cols='12 4' 
                        color='red' 
                        icon='list-ul'
                        value='100'
                        text='Total de subcategorias'/>

                        <ValueBox 
                        cols='12 4' 
                        color='blue' 
                        icon='align-left'
                        value='20'
                        text='Total de wikis'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard;

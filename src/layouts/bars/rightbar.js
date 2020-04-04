import React from 'react';
import './../../styles/bar.css';

import Content from '../body/content';
import Row from '../../layouts/body/row'
import ValueBox from '../box/valueBox';
import ContentHeader from '../header/contentHeader';

const Rightbar = () => {
    return (
        <aside className="main-rightbar">
            <div className="slimScrollDiv">
                <section className="rightbar">
                    <ContentHeader title='Inicializacao rapida'/>
                    <Content>
                        <Row>
                            <ValueBox
                                cols='12 12' 
                                color='gray' 
                                icon='list-ol'
                                type='small'
                                value={500}
                                text='Total de categorias'/>
                            <ValueBox
                                cols='12 12' 
                                color='gray' 
                                icon='list-ol'
                                type='small'
                                value={500}
                                text='Total de categorias'/>
                        </Row>
                    </Content>
                </section>
            </div>
        </aside>
    )
}

export default Rightbar;

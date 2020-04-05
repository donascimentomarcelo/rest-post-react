import React, { Component } from 'react'
import { connect } from 'react-redux'

import ContentHeader from '../../layouts/header/contentHeader'
import Content from '../../layouts/body/content'
import Row from '../../layouts/body/row'
import ValueBox from '../../layouts/box/valueBox'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Novidades'/>
                <Content>
                    <Row>
                        <ValueBox
                            cols='12 12 12 5' 
                            color='gray' 
                            icon='list-ol'
                            type='large'
                            value={500}
                            text='Total de categorias'/>
                        <ValueBox
                            cols='12 12 12 5' 
                            color='gray' 
                            icon='list-ol'
                            type='large'
                            value={500}
                            text='Total de categorias'/>
                    </Row>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

import React from 'react'
import './../../styles/menu.css';
import MenuItem from './menuItem';

const MenuConfig = props => {
    return (
        <ul className="menu-config">
            <MenuItem path='/#' label='Configurações' icon='cog'/>
            <MenuItem path='/#' label={props.username} icon='user-circle'/>
        </ul>
    )
}

export default MenuConfig

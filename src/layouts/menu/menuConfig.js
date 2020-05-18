import React from 'react'
import MenuItem from './menuItem';
import MenuDropdown from './menuDropdown';
import './../../styles/menu.css';

const MenuConfig = props => {
    return (
        <ul className="menu-config">
            <MenuItem path='/#' label='Configurações' icon='cog'/>
            <MenuDropdown label={props.username} icon='user-circle'/>
        </ul>
    )
}

export default MenuConfig

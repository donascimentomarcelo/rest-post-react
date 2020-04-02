import React from 'react';
import './../../styles/menu.css';
import MenuItem from './menuItem';

const Menu = () => {
    return (
        <ul className="sidebar-menu">
            <MenuItem path='#' label='Início' icon='home'/>
        </ul>
    )
}

export default Menu

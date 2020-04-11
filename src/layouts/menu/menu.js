import React from 'react';
import './../../styles/menu.css';
import MenuItem from './menuItem';

const Menu = () => {
    return (
        <ul className="sidebar-menu">
            <MenuItem path='#' label='Início' icon='home'/>
            <MenuItem path='/categories' label='Categorias' icon='list-ol'/>
        </ul>
    )
}

export default Menu

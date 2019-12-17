import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

export default props => (
    <ul className="sidebar-menu">
        <MenuItem path='#' label='Dashboard' icon='dashboard'/>
        <MenuTree label='Configurações' icon='edit'>
            <MenuItem path='#categories' label='Categorias' icon='list-ol'/>
            <MenuItem path='#subcategories' label='Subcategorias' icon='list-ul'/>
        </MenuTree>
    </ul>
);
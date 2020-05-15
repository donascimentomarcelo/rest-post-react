import React from 'react';
import './../../styles/menu.css'
import Menu from './menu';
import MenuConfig from './menuConfig';
import { getUserData } from './../../services/loginService';

const Sidebar = () => {
    
    const getNameUserData = () => getUserData() ? getUserData().name : null;

    return (
        <aside className="main-sidebar">
            <div className="slimScrollDiv">
                <section className="sidebar">
                    <Menu/>
                    <MenuConfig
                        username={getNameUserData()}/>
                </section>
            </div>
        </aside>
    )
}

export default Sidebar;

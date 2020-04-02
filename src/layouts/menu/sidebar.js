import React from 'react';
import './../../styles/menu.css'
import Menu from './menu';

const Sidebar = () => {
    return (
        <aside className="main-sidebar">
            <div className="slimScrollDiv">
                <section className="sidebar">
                    <Menu/>
                </section>
            </div>
        </aside>
    )
}

export default Sidebar;

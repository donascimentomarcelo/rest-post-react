import React from 'react';
import './../../styles/menu.css';

const MenuItem = (props) => {
    return (
        <li>
            <a href={props.path}>
                <i className={`fa fa-${props.icon}`}></i> {props.label}
            </a>
        </li>
    )
}

export default MenuItem;

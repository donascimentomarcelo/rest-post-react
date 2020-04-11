import React from 'react';
import './../../styles/iconButton.css';

const IconButton = (props) => {
    return (
        <button type="button" className="btn btn-outline-secondary" onClick={props.action}>
            <i className={props.icon}></i>
        </button>
    )
}

export default IconButton

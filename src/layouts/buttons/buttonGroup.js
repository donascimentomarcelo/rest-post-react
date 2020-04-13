import React from 'react';
import './../../styles/button.css'

const ButtonGroup = props => {
    return (
        <div className="btn-group align-to-right">
            {props.children}
        </div>
    )
}

export default ButtonGroup;

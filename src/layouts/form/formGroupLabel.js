import React from 'react'

const FormGroupLabel = props => (
    <div className="form-group">
        <label>{props.label}</label>
            {props.children}
    </div>
);

export default FormGroupLabel;
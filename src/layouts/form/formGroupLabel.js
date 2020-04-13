import React from 'react'

const FormGroupLabel = props => (
    <div className="form-group col-md-12">
        <label>{props.label}</label>
            {props.children}
    </div>
);

export default FormGroupLabel;
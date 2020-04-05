import React from 'react'
import Grid from '../grid/grid'
import './../../styles/box.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ValueBox = (props) => {

    function checkBoxClass(props) {
        return props.type === 'large' ? `large-box bg-${props.color}` : `small-box bg-${props.color}`;
    }

    return (
        <Grid cols={props.cols}>
            <div className={checkBoxClass(props)}>
                <div className="inner">
                    <h3>{props.value}</h3>
                    <p>{props.text}</p>
                </div>
                <div className="icon">
                    <i className={`fa fa-${props.icon}`}></i>
                </div>
            </div>
        </Grid>
    )
}

export default ValueBox

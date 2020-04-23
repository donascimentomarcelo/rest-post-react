import React from 'react'
import Grid from '../grid/grid'
import './../../styles/box.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import IconButton from '../buttons/iconButton';

const ValueBox = (props) => {

    const {
        type,
        color,
        showOptions,
        cols,
        value,
        text,
        icon,
        edit,
        confirm,
    } = props;

    const checkBoxClass = () => {
        if (type === 'large') return `large-box bg-${color}`
        if (type === 'medium') return `medium-box bg-${color}`
        if (type === 'small') return `small-box bg-${color}`
    }

    const showButtonsOptions = () => {
        if (showOptions) {
            return (
                <div className="align-button-box">
                    <IconButton icon='fa fa-pencil-alt' action={edit}/>
                    <IconButton icon='fa fa-trash' action={confirm}/>
                </div>
            )
        }
    }

    return (
        <Grid cols={cols}>
            <div className={checkBoxClass()}>
                <div className="inner">
                    <h3>{value}</h3>
                    <p className="text">{text}</p>
                </div>
                <div className="icon">
                    <i className={`fa fa-${icon}`}></i>
                </div>
                {showButtonsOptions()}
            </div>
        </Grid>
    )
}

export default ValueBox

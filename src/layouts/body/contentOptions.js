import React from 'react'

import IconButton from '../buttons/iconButton';

import './../../styles/content.css'

const ContentOptions = (props) => {

    const { 
        buttonNew, 
        buttonSearch, 
        buttonTrash,
        buttonBack,
        actionNew, 
        actionSearch, 
        actionTrash,
        actionBack
    } = props;

    const setButtonNew = () => {
        if (buttonNew) {
            return (<IconButton icon='fa fa-plus' action={actionNew}/>);
        }
    }

    const setButtonSearch = () => {
        if (buttonSearch) {
            return (<IconButton icon='fa fa-search' action={actionSearch}/>);
        }
    }

    const setButtonTrash = () => {
        if (buttonTrash) {
            return (<IconButton icon='fa fa-trash' action={actionTrash}/>);
        }
    }

    const setButtonBack = () => {
        if (buttonBack) {
            return (<IconButton icon='fa fa-arrow-alt-circle-left' action={actionBack}/>);
        }
    }

    return (
        <div className='content-option'>
            {setButtonNew()}
            {setButtonSearch()}
            {setButtonTrash()}
            {setButtonBack()}
        </div>
    )
}

export default ContentOptions;

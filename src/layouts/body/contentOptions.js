import React from 'react'

import IconButton from '../buttons/iconButton';

import './../../styles/content.css'

const ContentOptions = (props) => {

    const { 
        buttonNew, 
        buttonSearch, 
        buttonTrash,
        buttonBack,
        buttonReload,
        
        create, 
        search, 
        actionTrash,
        actionBack,
        load,
    } = props;

    const setButtonNew = () => {
        if (buttonNew) {
            return (<IconButton icon='fa fa-plus' action={create}/>);
        }
    }

    const setButtonSearch = () => {
        if (buttonSearch) {
            return (<IconButton icon='fa fa-search' action={search}/>);
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

    const setButtonReload = () => {
        if (buttonReload) {
            return (<IconButton icon='fa fa-sync-alt' action={load}/>);
        }
    }

    return (
        <div className='content-option'>
            {setButtonNew()}
            {setButtonSearch()}
            {setButtonTrash()}
            {setButtonBack()}
            {setButtonReload()}
        </div>
    )
}

export default ContentOptions;

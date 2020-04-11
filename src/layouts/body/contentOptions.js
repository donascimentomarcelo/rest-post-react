import React from 'react'

import IconButton from '../buttons/iconButton';

import './../../styles/content.css'

const ContentOptions = (props) => {

    const { buttonNew, buttonSearch, actionNew, actionSearch} = props;

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

    return (
        <div className='content-option'>
            {setButtonNew()}
            {setButtonSearch()}
        </div>
    )
}

export default ContentOptions;

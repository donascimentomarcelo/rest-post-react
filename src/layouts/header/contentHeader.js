import React from 'react';
import './../../styles/header.css'

const ContentHeader = (props) => {
    return (
        <section className="content-header">
            <small>
                {props.title}
            </small>
        </section>
    )
}

export default ContentHeader

import React from 'react';
import './../../styles/body.css';

const Content = (props) => {
    return (
        <section className="content">
            {props.children}
        </section>
    )
}

export default Content;

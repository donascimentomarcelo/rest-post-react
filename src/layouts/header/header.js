import React from 'react'
import './../../styles/header.css'

const Header = () => {
    return (
        <header className="main-header">
            <a href="/dashboard" className="logo">
                <span className="logo-lg">
                    <i className="fa fa-code">
                        <b> Epic</b> Post
                    </i>
                </span>
            </a>
        </header>
    )
}

export default Header;

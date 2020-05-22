import React, { Component } from 'react'

import { setToken, setUserData} from './../../services/loginService'

import './../../styles/menuDropdown.css';

export class MenuDropdown extends Component {

    constructor(props) {
        super(props);
        console.log(props)
        this.state = { showMenu: false };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu = event => {
        // this.setState({ showMenu: !this.state.showMenu });
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu = event => {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.addEventListener('click', this.closeMenu);
            });
        }
    }

    metodo = () => this.state.showMenu ? 'dropup-content-show' : 'dropup-content';

    logout = () => {
        setToken(null);
        setUserData(null);
    }

    redirectToUserAccessApp = () => {}

    redirectToFavorites = () => {}

    dropDown = () => {
        return (
            <div className="dropup">
                <ul className={this.metodo()}
                    ref={(element) => this.dropdownMenu = element}>
                    <li>
                         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='/' onClick={this.logout}><i>Sair</i></a>
                    </li>
                    <li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='#' onClick={this.redirectToUserAccessApp}><i>Gerenciar Conta</i></a>
                    </li>
                    <li>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a href='#' onClick={this.redirectToFavorites}><i>Favoritos</i></a>
                    </li>
                </ul>
            </div>
        );
    }

    render() {
        return (
            <>
                <li onClick={this.showMenu}>
                    <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                </li>
                {this.dropDown()}
            </>
        )
    }
}

export default MenuDropdown;
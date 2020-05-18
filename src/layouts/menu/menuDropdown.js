import React, { Component } from 'react'
import './../../styles/menuDropdown.css';

export class MenuDropdown extends Component {

    constructor() {
        super();

        this.state = { showMenu: false };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu = event => {
        this.setState({ showMenu: !this.state.showMenu });
    }

    closeMenu = event => {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.addEventListener('click', this.closeMenu);
            });
        }
    }

    metodo = () => this.state.showMenu ? 'dropup-content-show' : 'dropup-content';

    dropDown = () => {
        return (
            <div className="dropup">
                <ul className={this.metodo()}
                    ref={(element) => this.dropdownMenu = element}>
                    <li>
                        <i>Menu item 1</i>
                    </li>
                    <li>
                        <i>Menu item 2</i>
                    </li>
                    <li>
                        <i>Menu item 3</i>
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
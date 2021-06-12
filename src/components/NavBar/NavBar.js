import React from 'react';
import cookie from "js-cookie";

import './NavBar.css';

const NavBar = (props) => {

    return (
        <nav className="navBar">
            <ul className="navBar__list">
                <li className="navBar__listItem active"><a className="navBar__link" href={props.link}>{props.linkName}</a></li>
                <li className="navBar__listItem"><a className="navBar__link" href="/admin" onClick={cookie.remove("token")}>Uitloggen</a></li>
            </ul>
        </nav>

    )
}

export default NavBar;
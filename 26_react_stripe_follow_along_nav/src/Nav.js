import React from 'react'
import './Nav.css'
import DropdownBackground from "./DropdownBackground";
import Cool from "./Cool";

function Nav(props) {
    return <nav className="top">
        <DropdownBackground />
        <Cool />
    </nav>;
}

export default Nav;

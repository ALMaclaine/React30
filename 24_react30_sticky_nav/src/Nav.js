import React, {forwardRef} from 'react';
import './Nav.css';

function Nav(props, impRef) {
    return <nav ref={impRef}>
        <ul>
            <li className="logo"><a href="/">LOST.</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Images</a></li>
            <li><a href="/">Locations</a></li>
            <li><a href="/">Maps</a></li>
        </ul>
    </nav>
}

export default forwardRef(Nav);

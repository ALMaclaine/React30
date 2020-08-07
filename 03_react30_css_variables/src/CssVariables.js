import React from 'react';
import './CssVariables.css';
import Controls from "./Controls";

function CssVariables(props) {
    return <>
        <h2>Update CSS Variables with <span className='hl'>JS</span></h2>
        <Controls />
        <img alt={"To be affected"} src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
    </>;
}

export default CssVariables;

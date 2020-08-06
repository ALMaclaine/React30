import React from 'react';
import './ClockHand.css';

function ClockHand(props) {
    const {degrees, style} = props;
    let transform = `rotate(${degrees}deg)`;
    if (style && style.transform) {
        transform += ` ${props.style.transform}`;
    }
    return <div className={`hand ${props.className}`} style={{transform}}/>
}

export default ClockHand;

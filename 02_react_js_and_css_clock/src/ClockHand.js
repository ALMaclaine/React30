import React from 'react'
import './ClockHand.css'

function ClockHand(props) {
    const { degrees } = props;
    let transform = `rotate(${degrees}deg)`;
    if(props.style && props.style.transform) {
        transform += ` ${props.style.transform}`;
    }
    return <div className={`hand ${props.className}`} style={{ transform }} />
}

export default ClockHand;

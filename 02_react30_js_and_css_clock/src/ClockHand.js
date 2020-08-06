import React from 'react';
import './ClockHand.css';

function ClockHand(props) {
    const {degrees, style, className} = props;
    let transform = `rotate(${degrees}deg)`;
    if (style && style.transform) {
        transform += ` ${props.style.transform}`;
    }
    const finalClass = 'hand' + (className ? ` ${className}`: '');
    return <div className={finalClass} style={{transform}}/>
}

export default ClockHand;

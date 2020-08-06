import React from 'react'
import ClockHand from "./ClockHand";
import './HourHand.css';

function HourHand(props) {
    const {mins, hours} = props;
    const hourDegrees = ((hours / 12) * 360) + ((mins / 60) * 30);
    return <ClockHand degrees={hourDegrees} className='hour-hand' style={{transform: "translateY(-6px)"}}/>
}

export default HourHand;

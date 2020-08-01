import React from 'react'
import ClockHand from "./ClockHand";
import './SecondHand.css'

function SecondHand(props) {
    const { seconds } = props;
    const secondsDegrees = ((seconds / 60) * 360);
    return <ClockHand degrees={secondsDegrees} className='second-hand' />
}

export default SecondHand;

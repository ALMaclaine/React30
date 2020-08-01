import React from 'react'
import ClockHand from "./ClockHand";

function MinHand(props) {
    const { seconds, mins } = props;
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6);
    return <ClockHand degrees={minsDegrees} />
}

export default MinHand;

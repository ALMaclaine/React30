import React, {useState, useEffect} from 'react';
import './ClockFace.css';

import SecondHand from "./SecondHand";
import MinHand from "./MinHand";
import HourHand from "./HourHand";

function ClockFace(props) {
    const {updateRate} = props;
    const [firstDate] = useState(new Date());

    const startTime = {
        milliseconds: firstDate.getMilliseconds(),
        seconds: firstDate.getSeconds(),
        mins: firstDate.getMinutes(),
        hours: firstDate.getHours(),
    };

    const [seconds, setSeconds] = useState(startTime.seconds);
    const [mins, setMins] = useState(startTime.mins);
    const [hours, setHours] = useState(startTime.hours);

    useEffect(() => {
        let currentDate = firstDate;
        let ellapsedMilliseconds = 0;

        function updateLastDate() {
            const newDate = new Date();
            const dateDiff = (newDate - currentDate);
            currentDate = newDate;
            ellapsedMilliseconds += dateDiff;
            const seconds = startTime.seconds + (startTime.milliseconds / 1000) + ellapsedMilliseconds / 1000;
            const mins = startTime.mins + (ellapsedMilliseconds / 60000);
            const hour = startTime.hours + (ellapsedMilliseconds / 3600000);
            setSeconds(seconds);
            setMins(mins);
            setHours(hour);
        }

        const timer = setInterval(updateLastDate, updateRate);

        return () => clearInterval(timer);
    }, [firstDate, updateRate]);


    return <div className='clock-face'>
        <HourHand mins={mins} hours={hours}/>
        <MinHand seconds={seconds} mins={mins}/>
        <SecondHand seconds={seconds}/>
    </div>
}

export default ClockFace;

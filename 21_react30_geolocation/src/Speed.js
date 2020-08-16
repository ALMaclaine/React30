import React, {useEffect, useState} from 'react'
import './Speed.css'

function Speed(props) {
    const [speed, setSpeed] = useState(0);
    const {setHeading} = props;

    useEffect(() => {
        const navigatorHandler = (speed, heading) => {
            setSpeed(speed);
            setHeading(heading);
        };

        navigator.geolocation.watchPosition((data) => {
            navigatorHandler(data.coords.speed, data.coords.heading);
        }, (err) => {
            console.error(err);
        });
    }, [setHeading]);

    return <h1 className="speed">
        <span className="speed-value">{speed}</span>
        <span className="units">KM/H</span>
    </h1>;
}

export default Speed;

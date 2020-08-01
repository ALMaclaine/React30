import React, {useState} from 'react';
import './Control.css'

function Slider(props) {
    const { min, max, startingValue, name, dataSizing } = props;
    const [value, setValue] = useState(startingValue);

    function handleUpdate(e) {
        const suffix = dataSizing || '';
        const value = e.target.value;
        document.documentElement.style.setProperty(`--${name}`, value + suffix);
        setValue(value);
    }

    return <>
            <label htmlFor={name}>{`${name[0].toUpperCase() + name.slice(1)}:`}</label>
            <input onChange={handleUpdate} onMouseMove={handleUpdate} type="range" name={name} min={min} max={max} value={value} />
        </>
}

export default Slider;

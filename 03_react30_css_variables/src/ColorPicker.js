import React, {useState} from 'react';
import './Control.css';

function ColorPicker(props) {
    const { startingValue, name } = props;
    const [value, setValue] = useState(startingValue);

    function handleUpdate(e) {
        const value = e.target.value;
        document.documentElement.style.setProperty(`--${name}`, value);
        setValue(value);
    }

    return <>
            <label htmlFor={name}>{`${name[0].toUpperCase() + name.slice(1)}:`}</label>
            <input onChange={handleUpdate} onInput={handleUpdate} type="color" name={name} value={value} style={{ position: "relative", top: "-6px" }} />
        </>
}

export default ColorPicker;

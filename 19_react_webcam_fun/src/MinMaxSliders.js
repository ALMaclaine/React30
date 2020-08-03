import React, {useState, useRef} from 'react'

function MinMaxSliders(props) {
    const { name, min, max, updateMin, updateMax} = props;
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minRef = useRef();
    const maxRef = useRef();

    const minHandler = (e) => {
        const val = parseInt(e.target.value);
        if(val <= maxVal) {
            updateMin(val);
            setMinVal(val);
        }
    }

    const maxHandler = (e) => {
        const val = parseInt(e.target.value);
        if(minVal <= val) {
            updateMax(val);
            setMaxVal(val);
        }
    }

    return <>
            <label>{name} Min:</label>
            <input ref={minRef} onChange={minHandler} type="range" min={min} max={max} value={minVal}/>
            <label>{name} Max:</label>
            <input ref={maxRef} onChange={maxHandler} type="range" min={min} max={max} value={maxVal}/>
        </>;
}

export default MinMaxSliders;

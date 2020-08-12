import React from 'react';
import './Plates.css';

const fillerElement = <li>Loading Tapas...</li>;
const plateElement = (plate, markDone) => {
    return <li onClick={markDone} key={plate.text}>
        <input onChange={() => {
        }} type="checkbox" checked={plate.done}/>
        <label>{plate.text}</label>
    </li>
}

function Plates(props) {
    const {plates, markDone} = props;
    return <ul className="plates">
        {plates ? plates.map((e, i) => plateElement(e, () => markDone(i))) : fillerElement}
    </ul>;
}

export default Plates;

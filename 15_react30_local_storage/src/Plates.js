import React from 'react'
import './Plates.css'

const fillerElement = <li>Loading Tapas...</li>;
const plateElement = (plate, markDone) => {
    return <li onClick={markDone} key={plate.text}>
        <input onChange={() => {}} type="checkbox" checked={plate.done} />
        <label>{plate.text}</label>
    </li>
}

function Plates(props) {
    const { plates, markDone } = props;
    let elems;
    if(plates) {
        elems = [];
        for(let i = 0; i < plates.length; i++) {
            elems.push(plateElement(plates[i],() => markDone(i)));
        }
    } else {
        elems = fillerElement;
    }
    return <ul className="plates">
            {elems}
           </ul>;
}

export default Plates;

import React from 'react';
import './Bands.css';

const strip = (bandName) => bandName.replace(/^(a |the |an )/i, '').trim();
const sortFunction = (a, b) => strip(a) > strip(b) ? 1 : -1
const bandElement = (band) => <li key={band}>{band}</li>

function Bands(props) {
    const {bands} = props;
    const sortedBands = bands.sort(sortFunction);
    return <ul className="bands">
        {sortedBands.map(e => bandElement(e))}
    </ul>;
}

export default Bands;

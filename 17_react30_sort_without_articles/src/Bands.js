import React from 'react'
import './Bands.css'

const strip = (bandName) => bandName.replace(/^(a |the |an )/i, '').trim();
const sortFunction = (a, b) => strip(a) > strip(b) ? 1 : -1
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const sortedBands = bands.sort(sortFunction);

const bandElement = (band) => <li key={band}>{band}</li>

function Bands(props) {
    return <ul className="bands">
        {sortedBands.map(e => bandElement(e))}
    </ul>;
}

export default Bands;

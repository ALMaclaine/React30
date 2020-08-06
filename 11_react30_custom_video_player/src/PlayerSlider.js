import React from 'react'
import './PlayerSlider.css'

function PlayerSlider(props) {
    const { name, min, max, step, update, value } = props;
    return <input onChange={(e) => update(e.target.value)} type="range" name={name} className="player__slider" min={min} max={max} step={step} value={value} />;
}

export default PlayerSlider;

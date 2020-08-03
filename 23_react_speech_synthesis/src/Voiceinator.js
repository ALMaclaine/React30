import React, {useState, useEffect, useRef} from 'react'
import './Voiceinator.css'
import Voices from "./Voices";

const defaultMsg = 'Hello! I love JavaScript 👍';

function Voiceinator(props) {
    const [voices, setVoices] = useState([]);
    const utteranceRef = useRef(new SpeechSynthesisUtterance());

    function toggle(startOver = true) {
        speechSynthesis.cancel();
        if (startOver) {
            speechSynthesis.speak(utteranceRef.current);
        }
    }

    function changeVoice(voiceName) {
        utteranceRef.current.voice = voices.find(voice => voice.name === voiceName);
        toggle();
    }

    function setOption(e) {
        utteranceRef.current[e.target.name] = e.target.value;
    }

    useEffect(() => {
        utteranceRef.current.text = defaultMsg;
        function populateVoices() {
            setVoices(this.getVoices());
        }

        speechSynthesis.addEventListener('voiceschanged', populateVoices);

    }, []);
    return <div className="voiceinator">
        <h1>The Voiceinator 5000</h1>
        <Voices changeVoice={changeVoice} voices={voices}/>

        <label htmlFor="rate">Rate:</label>
        <input onChange={setOption} name="rate" type="range" min="0" max="3" defaultValue="1" step="0.1"/>

        <label htmlFor="pitch">Pitch:</label>

        <input onChange={setOption} name="pitch" type="range" min="0" max="2" step="0.1"/>

        <textarea onChange={setOption} name="text" defaultValue={defaultMsg}/>

        <button onClick={() => toggle(false)} id="stop">Stop!</button>
        <button onClick={toggle} id="speak">Speak</button>
    </div>;
}

export default Voiceinator;

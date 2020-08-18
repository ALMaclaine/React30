import React from 'react';

function Voices(props) {
    const {voices, changeVoice} = props;
    let elem;
    if (voices && voices.length !== 0) {
        elem = [];
        for (const voice of voices) {
            if (!voice.lang.includes('en')) continue;
            elem.push(<option key={voice.name} value={voice.name}>{voice.name} ({voice.lang})</option>);
        }
    } else {
        elem = <option value="">Select A Voice</option>
    }
    return <select onChange={changeVoice} name="voice" id="voices">
        {elem}
    </select>;
}

export default Voices;

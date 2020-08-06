import React, {useRef, useState, useImperativeHandle, forwardRef} from 'react';
import KeyIcon from "./KeyIcon";

function Key(props, impRef) {
    const { keyLetter, keyName, soundName } = props;
    const [inProp, setInProp] = useState(false);
    const audioRef = useRef();

    const click = () => {
        setInProp(true);
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    }

    useImperativeHandle(impRef, () => ({
        play: click
    }));

    return <div onClick={click}>
        <KeyIcon playing={inProp} keyLetter={keyLetter} keyName={keyName} onEntered={() => setInProp(false)} />
        <audio id='test' ref={audioRef} src={`sounds/${soundName}.wav`} />
    </div>
}

export default forwardRef(Key);

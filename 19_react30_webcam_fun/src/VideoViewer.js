import React, {forwardRef, useEffect} from 'react';
import './VideoViewer.css';

async function setup(video) {
    try {
        const localMediaStream = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
        video.srcObject = localMediaStream;
        video.play();
    } catch (err) {
        console.error(`OH NO!!!`, err);
    }
}

function VideoViewer(props, impRef) {
    useEffect(() => {
        setup(impRef.current)
            .then(e => console.log('Succeeded setting up video.'))
            .catch(e => console.error('Failed setting up video.'))
    }, [impRef]);
    return <video ref={impRef} className="player"/>;
}

export default forwardRef(VideoViewer);

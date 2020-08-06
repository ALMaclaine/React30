import React, {useRef, useImperativeHandle, forwardRef, useEffect} from 'react';
import './Player.css'

function VideoPlayer(props, impRef) {
    const { videoSrc, onClick, timeUpdate, volume, playbackRate } = props;
    const videoRef = useRef();
    const play = () => videoRef.current.play();
    const pause = () => videoRef.current.pause();
    const updateTime = (time) => videoRef.current.currentTime += time;
    const changeVolume = (vol) => videoRef.current.volume = vol;
    const changePlaybackRate = (rate) => videoRef.current.playbackRate = rate;
    const setTimePercent = (percent) => videoRef.current.currentTime = percent * videoRef.current.duration;

    useImperativeHandle(impRef, () => ({
        play,
        pause,
        updateTime,
        changeVolume,
        changePlaybackRate,
        setTimePercent
    }));

    useEffect(() => {
        changeVolume(volume);
        changePlaybackRate(playbackRate);
    }, [volume, playbackRate]);

    return <video onTimeUpdate={timeUpdate} onClick={onClick} ref={videoRef} className="player__video" src={videoSrc} />;
}

export default forwardRef(VideoPlayer);

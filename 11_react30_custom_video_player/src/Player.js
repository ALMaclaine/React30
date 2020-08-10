import React, {useRef, useState} from 'react';
import './Player.css';
import VideoPlayer from "./VideoPlayer";
import PlayerControls from "./PlayerControls";

function Player(props) {
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [playPercent, setPlayPercent] = useState(0);
    const [volume, setVolume] = useState(1);
    const [playbackRate, setPlaybackRate] = useState(1);
    const videoRef = useRef();

    function togglePlay() {
        if (videoPlaying) {
            videoRef.current.pause()
            setVideoPlaying(false);
        } else {
            videoRef.current.play();
            setVideoPlaying(true);
        }
    }

    function onTimeUpdate(e) {
        const percent = (e.target.currentTime / e.target.duration) * 100;
        setPlayPercent(percent);
    }

    function changeTime(value) {
        videoRef.current.updateTime(value);
    }

    function setTimePercent(time) {
        videoRef.current.setTimePercent(time);
    }

    function changeVolume(value) {
        setVolume(value);
    }

    function changePlaybackRate(value) {
        setPlaybackRate(value);
    }

    return <div className="player">
        <VideoPlayer timeUpdate={onTimeUpdate} onClick={togglePlay} ref={videoRef} volume={volume}
                     playbackRate={playbackRate} videoSrc="652333414.mp4"
        />
        <PlayerControls videoPlaying={videoPlaying}
                        playPercent={playPercent}
                        changeTime={changeTime}
                        setTimePercent={setTimePercent}
                        changeVolume={changeVolume}
                        changePlaybackRate={changePlaybackRate}
                        togglePlay={togglePlay}
                        volume={volume}
                        playbackRate={playbackRate}
        />
    </div>;
}

export default Player;

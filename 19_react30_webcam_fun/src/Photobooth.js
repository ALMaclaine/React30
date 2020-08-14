import React, {useState, useRef, useEffect} from 'react';
import './Photobooth.css';
import PhotoViewer from "./PhotoViewer";
import VideoViewer from "./VideoViewer";
import Controls from "./Controls";
import Strip from "./Strip";

function rgbSplit(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i - 150] = pixels.data[i]; // RED
        pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
        pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    }
    return pixels;
}

function greenScreen(pixels, levels) {
    for (let i = 0; i < pixels.data.length; i = i + 4) {
        const red = pixels.data[i];
        const green = pixels.data[i + 1];
        const blue = pixels.data[i + 2];
        const alpha = pixels.data[i + 3];

        if (red >= levels.rMin
            && green >= levels.gMin
            && blue >= levels.bMin
            && red <= levels.rMax
            && green <= levels.gMax
            && blue <= levels.bMax) {
            // take it out!
            pixels.data[i + 3] = 0;
        }
    }
    return pixels;
}

function redEffect(pixels) {
    for (let i = 0; i < pixels.data.length; i += 4) {
        pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
        pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
        pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    }
    return pixels;
}

function initializePhotoContext(video, photo, levels) {
    const {videoWidth: width, videoHeight: height} = video;
    const ctx = photo.getContext('2d');
    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
        // take the pixels out
        let pixels = ctx.getImageData(0, 0, width, height);
        // mess with them
        pixels = redEffect(pixels);

        pixels = rgbSplit(pixels);

        pixels = greenScreen(pixels, levels);
        // put them back
        ctx.putImageData(pixels, 0, 0);
    }, 16);
}

function Photobooth(props) {
    const [photoWidth, setPhotoWidth] = useState(0);
    const [photoHeight, setPhotoHeight] = useState(0);
    const [photos, setPhotos] = useState([]);

    const snapRef = useRef();
    const videoRef = useRef();
    const photoRef = useRef();
    const levels = useRef({
        rMin: 0,
        rMax: 255,
        gMin: 0,
        gMax: 255,
        bMin: 0,
        bMax: 255
    })

    function takePhoto() {
        snapRef.current.currentTime = 0;
        snapRef.current.play();
        const data = photoRef.current.toDataURL('image/jpeg');
        setPhotos([...photos, data]);
    }

    const levelsControllers = {
        changeRMin: (n) => levels.current.rMin = n,
        changeRMax: (n) => levels.current.rMax = n,
        changeGMax: (n) => levels.current.gMax = n,
        changeGMin: (n) => levels.current.gMin = n,
        changeBMin: (n) => levels.current.bMin = n,
        changeBMax: (n) => levels.current.bMax = n,
    }

    useEffect(() => {
        videoRef.current.addEventListener('canplay', () => {
            setPhotoWidth(videoRef.current.videoWidth);
            setPhotoHeight(videoRef.current.videoHeight);
            return initializePhotoContext(videoRef.current, photoRef.current, levels.current);
        });
    }, [])

    return <div className="photobooth">
        <Controls {...levelsControllers} takePhoto={takePhoto}/>
        <VideoViewer ref={videoRef}/>
        <PhotoViewer ref={photoRef} width={photoWidth} height={photoHeight}/>
        <audio ref={snapRef} src={"snap.mp3"}/>
        <Strip photos={photos}/>
    </div>;
}

export default Photobooth;

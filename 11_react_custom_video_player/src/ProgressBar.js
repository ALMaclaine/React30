import React, {useState, useEffect} from 'react'
import './ProgressBar.css'

function ProgressBar(props) {
    const [mouseDown, setMouseDown] = useState(false);
    const { playPercent, setTimePercent } = props;
    const scrub = (e) => {
        const percent = e.nativeEvent.offsetX / e.currentTarget.offsetWidth;
        setTimePercent(percent);
    }

    useEffect(() => {
        const progress = document.getElementById('progress');
        const mouseup = () => setMouseDown(false);
        let counter2 = 0;
        const windowScrub = (e) => {
            if(counter2++ % 5 !== 0) return;
            const percent = e.offsetX / progress.offsetWidth;
            setTimePercent(percent);
        }
        const mousemove = (e) => mouseDown && windowScrub(e);
        window.addEventListener('mouseup', mouseup);
        window.addEventListener('mousemove', mousemove)

        return () => {
            window.removeEventListener('mouseup', mouseup);
            window.removeEventListener('mousemove', mousemove);
        }
    }, [mouseDown]);

    return <div id="progress" onMouseDown={() => setMouseDown(true)}
                onMouseUp={() => setMouseDown(false)}
                onClick={scrub}
                className="progress">
                <div className="progress__filled" style={{flexBasis: `${playPercent}%`}}
            />
    </div>;
}

export default ProgressBar;

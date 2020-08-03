import React, {useEffect, useRef} from 'react'
import './Highlighter.css'

function Highlighter(props) {
    const highlightRef = useRef();
    const positionData = useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    });

    useEffect(() => {
        const triggers = document.querySelectorAll('a');
        function highlightLink() {
            const linkCoords = this.getBoundingClientRect();
            console.log(linkCoords);
            positionData.current = {
                width: linkCoords.width,
                height: linkCoords.height,
                top: linkCoords.top + window.scrollY,
                left: linkCoords.left + window.scrollX
            };

            highlightRef.current.style.width = `${positionData.current.width}px`;
            highlightRef.current.style.height = `${positionData.current.height}px`;
            highlightRef.current.style.transform = `translate(${positionData.current.left}px, ${positionData.current.top}px)`;

        }
        triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

        return () => {
            triggers.forEach(a => a.removeEventListener('mouseenter', highlightLink));
        }
    }, []);

    return <span className="highlight" ref={highlightRef} />;
}

export default Highlighter;

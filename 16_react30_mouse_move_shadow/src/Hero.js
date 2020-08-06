import React, {useRef, useEffect, useState} from 'react'
import './Hero.css'

function Hero(props) {
    const [style, setStyle] = useState('initial');
    const heroRef = useRef();
    const calcData = useRef({
        walk: 500
    });

    useEffect(() => {
        function shadow(e) {
            const { walk } = calcData.current;
            const { offsetWidth: width, offsetHeight: height } = heroRef.current;
            let { offsetX: x, offsetY: y } = e;

            if (this !== e.target) {
                x = x + e.target.offsetLeft;
                y = y + e.target.offsetTop;
            }

            const xWalk = Math.round((x / width * walk) - (walk / 2));
            const yWalk = Math.round((y / height * walk) - (walk / 2));
            setStyle(`
              ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
              ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
              ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
              ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
            `);
        }
        window.addEventListener('mousemove', shadow);

        return () => {
            window.removeEventListener('mousemove', shadow);
        }
    }, []);

    return <div ref={heroRef} className="hero">
            <h1 style={{textShadow: style}} contentEditable={true} suppressContentEditableWarning={true}>
                <span role="img" aria-label="fire emoji">🔥</span>WOAH!
            </h1>
           </div>;
}

export default Hero;

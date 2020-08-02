import React, {useState, useEffect} from 'react'
import './Inbox.css'
import Item from "./Item";

const texts = [
    "This is an inbox layout.",
    "Check one item",
    "Hold down your Shift key",
    "Check a lower item",
    "Everything in between should also be set to checked",
    "Try do it without any libraries",
    "Just regular JavaScript",
    "Good Luck!",
    "Don't forget to tweet your result!"
];

function Inbox(props) {
    const [lastChecked, setLastChecked] = useState(null);
    const [lastLastChecked, setLastLastChecked] = useState(null);
    const [shiftHeld, setShiftHeld] = useState(false);
    const refs = [];
    const setRef = (key, ref) => refs.push(ref);

    const updateTrackers = (e, i) => {
        setLastChecked(i);
        setLastLastChecked(lastChecked);
        setShiftHeld(e.shiftKey);
    }

    useEffect(() => {
        if(shiftHeld) {
            if(lastChecked !== null && lastLastChecked !== null) {
                if(lastChecked !== lastLastChecked) {
                    const min = lastChecked < lastLastChecked ? lastChecked : lastLastChecked;
                    const max = lastChecked > lastLastChecked ? lastChecked : lastLastChecked;
                    console.log(min, max);
                    for(let i = min; i < max; i++) {
                        refs[i].check();
                    }
                }
            }
        }
        setShiftHeld(false);
    }, [lastChecked, lastLastChecked])
    //
    // useEffect(() => {
    //     const downHandler = (e) => {
    //         console.log(e.target.key)
    //     }
    //
    //     window.addEventListener('keydown', downHandler);
    //     return () => {
    //         window.removeEventListener('keydown', downHandler);
    //     };
    // }, []);

    let elems = [];
    for(let i = 0; i < texts.length; i++) {
        const text = texts[i];
        elems.push(<Item onClick={(e) => updateTrackers(e, i)} ref={(ref) => setRef(text, ref)} text={text} key={text} />);
    }


    return <div className="inbox">
            {elems}
           </div>;
}

export default Inbox;

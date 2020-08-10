import React, {useState} from 'react';
import './Inbox.css';
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
    const [checked, setChecked] = useState(Array(texts.length).fill(false));
    const [lastClicked, setLastClicked] = useState(null);
    const clickHandler = (e, i) => {
        if(e.shiftKey && lastClicked !== null) {
            const min = lastClicked < i ? lastClicked : i;
            const max = lastClicked > i ? lastClicked : i;
            let value = checked[lastClicked];
            for(let i = min; i < max; i++) {
                checked[i] = value;
            }
            checked[i] = value;
            setChecked(checked);
        } else {
            setChecked([
                ...checked.slice(0, i),
                !checked[i],
                ...checked.slice(i + 1)
            ]);
        }
        setLastClicked(i);
    }

    return <div className="inbox">
            {texts.map((e, i) => <Item text={e} checked={checked[i]} onClick={(e) => clickHandler(e, i)} key={e} />)}
           </div>;
}

export default Inbox;

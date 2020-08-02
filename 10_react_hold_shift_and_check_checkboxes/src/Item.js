import React, {useState, useImperativeHandle, forwardRef} from 'react'
import './Item.css'

function Item(props, impRef) {
    const [checked, setChecked] = useState(false);
    const { text, onClick } = props;

    const check = (e) => {
        setChecked(!checked)
        onClick(e);
    }

    useImperativeHandle(impRef, () => ({
        check: () => setChecked(true)
    }));

    return <div className="item">
                <input type="checkbox" onClick={check} onChange={() => {}} checked={checked} />
                <p>{text}</p>
           </div>;
}

export default forwardRef(Item);

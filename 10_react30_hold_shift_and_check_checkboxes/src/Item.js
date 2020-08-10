import React from 'react';
import './Item.css';

function Item(props) {
    const {text, onClick, checked} = props;
    return <div className="item">
        <input type="checkbox" onClick={onClick} onChange={() => {
        }} checked={checked || false}/>
        <p>{text}</p>
    </div>;
}

export default Item;

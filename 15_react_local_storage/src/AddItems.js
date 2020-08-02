import React, {useState} from 'react'
import './AddItems.css'

function AddItems(props) {
    const [text, setText] = useState('');
    const { addItem } = props;

    function onChange(e) {
        setText(e.target.value);
    }

    function clickHandler() {
        addItem(text);
        setText('');
    }

    function keyPressHandler(e) {
        if(e.key === 'Enter') {
            clickHandler();
        }
    }

    return <div className="add-items">
            <input onKeyPress={keyPressHandler} type="text" name="item" placeholder="Item Name" value={text} onChange={onChange} />
            <input type="button" value="+ Add Item" onClick={clickHandler} />
    </div>
}

export default AddItems;

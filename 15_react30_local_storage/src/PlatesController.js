import React, {useState} from 'react'
import Plates from "./Plates";
import AddItems from "./AddItems";

function PlatesController(props) {
    const [plates, setPlates] = useState(JSON.parse(localStorage.getItem('items')) || []);

    function addItem(newPlate) {
        const item = {
            text: newPlate,
            done: false
        };
        const tmpPlates = [...plates];
        tmpPlates.push(item);
        setPlates(tmpPlates);
        localStorage.setItem('items', JSON.stringify(tmpPlates));
    }

    function markDone(i) {
        plates[i].done = !plates[i].done
        setPlates([
            ...plates
        ]);
    }

    return <>
        <Plates markDone={markDone} plates={plates}/>
        <AddItems addItem={addItem}/>
    </>
}

export default PlatesController;

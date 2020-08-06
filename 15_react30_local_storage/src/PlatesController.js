import React, {useState} from 'react'
import Plates from "./Plates";
import AddItems from "./AddItems";

function PlatesController(props) {
    const [plates, setPlates] = useState(JSON.parse(localStorage.getItem('items')) || []);
    function addItem(newPlate) {
        console.log(newPlate);
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
        console.log("???")
        plates[i].done = !plates[i].done
        setPlates([
            ...plates.slice(0, i),
            plates[i],
            ...plates.slice(i + 1)
        ]);
    }

    return <>
            <Plates markDone={markDone} plates={plates} />
            <AddItems addItem={addItem} />
           </>
}

export default PlatesController;

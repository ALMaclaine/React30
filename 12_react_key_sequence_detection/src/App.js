import React, {useEffect, useState, useRef} from 'react';

const secretCode = 'wesbos';

function App(props) {
    const valRef = useRef([]);
    useEffect(() => {
        const onKey = (e) => {
            let tmp = [...valRef.current];
            tmp.push(e.key);
            tmp.splice(-secretCode.length - 1, tmp.length - secretCode.length);
            if (tmp.join('').includes(secretCode)) {
                window.cornify_add();
            }
            valRef.current = tmp;
        }
        window.addEventListener('keypress', onKey);

        return () => {
            window.removeEventListener('keypress', onKey);
        }
    });
    return <></>;
}

export default App;

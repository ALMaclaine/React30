import React, {useEffect, useState} from 'react';
import './Words.css';

function Words(props) {
    const [words, setWords] = useState([]);
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        const resultHandler = (e) => {
            if (e.results[0].isFinal) {
                const transcript = Array.from(e.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');

                const poopScript = transcript.replace(/poop|poo|shit|dump/gi, '💩');

                setWords([...words, poopScript]);
            }
        }
        recognition.addEventListener('result', resultHandler);
        recognition.addEventListener('end', recognition.start);
        recognition.start();

        return () => {
            recognition.removeEventListener('result', resultHandler);
            recognition.removeEventListener('end', recognition.start);
        }
    }, [words]);
    return <div className="words" contentEditable={true} suppressContentEditableWarning={true}>
        {
            words.map((e) => <p key={e}>{e}</p>)
        }
    </div>
}

export default Words;

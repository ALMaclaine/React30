import React from 'react';
import CSSTransition from "react-transition-group/cjs/CSSTransition";

import './KeyIcon.css'

function KeyIcon(props) {
    const { playing, keyLetter, keyName, onEntered } = props;
    const timeout = {
        appear: 0,
        enter: 70,
        exit: 0,
    };
    const classNames = { enter: 'playing' }

    return  <CSSTransition in={playing}
                           timeout={timeout}
                           classNames={classNames}
                           onEntered={onEntered}
            >
                <div className="key">
                    <kbd>{keyLetter}</kbd>
                    <span className="sound">{keyName}</span>
                </div>
            </CSSTransition>;
}

export default KeyIcon;

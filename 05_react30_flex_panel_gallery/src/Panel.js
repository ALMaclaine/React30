import React, {useState} from 'react';
import './Panel.css';
import {CSSTransition} from 'react-transition-group';

function Panel(props) {
    const {children, className} = props;
    const [open, setOpen] = useState(false);

    const timeout = {
        appear: 0,
        enter: 500,
        exit: 700,
    };
    const classNames = {enter: 'open', enterDone: 'open-active', exit: 'close-active'}

    const finalClassName = 'panel' + (className ? ` ${className}` : '');
    return <CSSTransition in={open}
                          timeout={timeout}
                          classNames={classNames}
            >
        <div onClick={() => setOpen(!open)} className={finalClassName}>
            {children}
        </div>
    </CSSTransition>
}

export default Panel;

import React from 'react';
import './PlayerButton.css';

function PlayerButton(props) {
    const {className, children, skip, onClick, ...otherProps} = props;
    const finalClass = 'player__button' + (className ? ` ${className}` : '');
    const clickHandler = skip ? () => onClick(parseFloat(skip)) : onClick;
    return <button onClick={clickHandler} className={finalClass} {...otherProps}>
        {children}
    </button>
}

export default PlayerButton;

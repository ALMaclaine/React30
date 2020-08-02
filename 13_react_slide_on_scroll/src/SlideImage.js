import React, {forwardRef} from 'react'
import './SlideImage.css'

function SlideImage(props, fRef) {
    const { slideType, src, active } = props;
    const classes = 'slide-in' + (slideType ? ` ${slideType}` : '')
        + (active ? ' active' : '');
    return <img ref={fRef} alt={"Random filler"} src={src} className={classes} />;
}

export default forwardRef(SlideImage);

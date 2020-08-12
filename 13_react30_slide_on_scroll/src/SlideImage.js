import React, {forwardRef} from 'react'
import './SlideImage.css'

function SlideImage(props, impRef) {
    const {slideType, src, active} = props;
    const classes = 'slide-in' + (slideType ? ` ${slideType}` : '')
        + (active ? ' active' : '');
    return <img ref={impRef} alt={"Random filler"} src={src} className={classes}/>;
}

export default forwardRef(SlideImage);

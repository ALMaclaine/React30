import React, {forwardRef} from 'react';
import './SlideImageRight.css';
import SlideImage from "./SlideImage";

function SlideImageRight(props, fRef) {
    const {src, active} = props;
    return <SlideImage ref={fRef} slideType='align-right' active={active} src={src}/>
}

export default forwardRef(SlideImageRight);

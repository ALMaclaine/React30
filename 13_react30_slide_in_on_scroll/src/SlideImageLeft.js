import React, {forwardRef} from 'react';
import './SlideImageLeft.css';
import SlideImage from "./SlideImage";

function SlideImageLeft(props, fRef) {
    const {src, active} = props;
    return <SlideImage ref={fRef} slideType='align-left' active={active} src={src}/>
}

export default forwardRef(SlideImageLeft);

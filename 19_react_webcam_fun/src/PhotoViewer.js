import React, {forwardRef} from 'react'
import './PhotoViewer.css'

function PhotoViewer(props, impRef) {
    const { width, height } = props;
    return <canvas ref={impRef} width={width} height={height} className="photo" />
}

export default forwardRef(PhotoViewer);

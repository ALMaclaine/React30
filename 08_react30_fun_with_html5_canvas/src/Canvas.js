import React, {useState, useEffect, useRef} from 'react'

function Canvas(props) {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const [ctx, setCtx] = useState(null);
    const canvasRef = useRef();
    const canvasValuesRef = useRef({
        isDrawing: false,
        lastX: 0,
        lastY: 0,
        hue: 0,
        direction: true
    });

    useEffect(() => {
        setCtx(canvasRef.current.getContext('2d'));
    }, []);

    useEffect(() => {
        if (!ctx) return;
        ctx.strokeStyle = '#BADA55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 100;
    }, [ctx])

    useEffect(() => {
        const handler = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        }
    }, []);

    useEffect(() => {
        const {current} = canvasRef;

        function draw(ref, e) {
            const {current} = ref;
            const {isDrawing, lastX, lastY, hue} = current;
            if (!isDrawing || !ctx) return; // stop the fn from running when they are not moused down
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.beginPath();
            // start from
            ctx.moveTo(lastX, lastY);
            // go to
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            [current.lastX, current.lastY] = [e.offsetX, e.offsetY];

            current.hue++;
            if (current.hue >= 360) {
                current.hue = 0;
            }

            if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
                current.direction = !current.direction;
            }

            if (current.direction) {
                ctx.lineWidth++;
            } else {
                ctx.lineWidth--;
            }
        }

        const mouseDownHandler = (e) => {
            canvasValuesRef.current.isDrawing = true;
            [canvasValuesRef.current.lastX, canvasValuesRef.current.lastY] = [e.offsetX, e.offsetY];
        }
        current.addEventListener('mousedown', mouseDownHandler);


        const drawHandler = (e) => draw(canvasValuesRef, e);
        current.addEventListener('mousemove', drawHandler);

        const drawingFalse = () => canvasValuesRef.current.isDrawing = false;

        current.addEventListener('mouseup', drawingFalse);
        current.addEventListener('mouseout', drawingFalse);

        return () => {
            current.removeEventListener('mousedown', mouseDownHandler);
            current.removeEventListener('mousemove', drawHandler);
            current.removeEventListener('mouseup', drawingFalse);
            current.removeEventListener('mouseout', drawingFalse);
        }
    }, [ctx]);

    return <canvas ref={canvasRef} id="draw" width={width} height={height}/>;
}

export default Canvas;

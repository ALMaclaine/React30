import React, {useRef, useEffect} from 'react'
import './Panel.css'


function Panel(props) {
    const ref = useRef();

    useEffect(() => {
        const toggleOpen = () => ref.current.classList.toggle('open');
        const toggleActive = (e) => {
            if (e.propertyName.includes('flex')) {
                ref.current.classList.toggle('open-active');
            }
        }

        ref.current.addEventListener('click', toggleOpen);
        ref.current.addEventListener('transitionend', toggleActive);

        const current = ref.current;

        return () => {
            current.removeEventListener('click', toggleOpen);
            current.removeEventListener('transitionend', toggleActive);
        }
    });

    const className = "panel " + props.className;
    return <div className={className} ref={ref}>
        {props.children}
    </div>
}

export default Panel;

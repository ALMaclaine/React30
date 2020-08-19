import React, {useRef, useEffect} from 'react';
import Header from "./Header";
import Nav from "./Nav";
import SiteWrap from "./SiteWrap";

function StickyNav(props) {
    const navRef = useRef();

    useEffect(() => {
        const offsetTop = navRef.current.offsetTop;

        function fixNav() {
            if (window.scrollY >= offsetTop) {
                document.body.style.paddingTop = `${navRef.current.offsetHeight}px`;
                document.body.classList.add('fixed-nav');
            } else {
                document.body.classList.remove('fixed-nav');
                document.body.style.paddingTop = '0';
            }
        }

        window.addEventListener('scroll', fixNav);
    })

    return <>
        <Header/>
        <Nav ref={navRef}/>
        <SiteWrap/>
    </>;
}

export default StickyNav;

import React from 'react';
import './SiteWrap.css';

const ranString = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const loremIpsum = () => <p key={ranString()}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora
    rerum, est autem
    cupiditate,
    corporis a qui libero ipsum delectus quidem dolor at nulla, adipisci veniam in reiciendis aut asperiores
    omnis blanditiis quod quas laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt
    esse magni, ut, dignissimos.</p>

const ipsumTimes = (n) => Array(n).fill(0).map(e => loremIpsum());

function SiteWrap(props) {
    return <div className="site-wrap">
        {ipsumTimes(10)}
        <img alt="dummy filler" src="http://unsplash.it/400/400"/>
        {ipsumTimes(10)}
        <img alt="dummy filler" src="http://unsplash.it/400/400"/>
        {ipsumTimes(20)}
        <img alt="dummy filler" src="http://unsplash.it/400/400"/>
        {ipsumTimes(10)}
    </div>
}

export default SiteWrap;

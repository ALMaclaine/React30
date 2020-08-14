import React from 'react';
import './Strip.css';

function Strip(props) {
    const {photos} = props;
    return <div className="strip">
        {photos.map(e => {
            console.log(e);
            return <a href={e} download={"handsome"}><img key={e.slice(0, 1000)} src={e} alt="Handsome Man"
                                                          download={"handsome"}/></a>
        })}
    </div>;
}

export default Strip;

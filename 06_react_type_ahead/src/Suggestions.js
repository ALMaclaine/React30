import React from 'react';
import './Suggestions.css'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function DummySuggestion(props) {
    return <>
            <li>Filter for a city</li>
            <li>or a state</li>
        </>;
}

function Suggestion(props) {
    const { place } = props;
    const cityName = <span className="hl">{place.city}</span>
    const stateName = <span className="hl">{place.state}</span>
    return <>
        {cityName}, {stateName}
        </>
}

function SuggestionHolder(props) {
    const { place } = props;
    return <li>
        <span className="name"><Suggestion place={place} /></span>
        <span className="population">{numberWithCommas(place.population)}</span>
    </li>
}

function Suggestions(props) {
    const { results } = props;
    let elem;
    if(results.length === 0) {
        elem = <DummySuggestion />
    } else {
        elem = results.map(e => <SuggestionHolder key={`${e.city}${e.state}`} place={e} />);
    }
    return <ul className="suggestions">
        {elem}
    </ul>
}

export default Suggestions;

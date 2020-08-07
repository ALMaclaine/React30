import React, {useState, useEffect} from 'react';
import './SearchContainer.css';
import Search from "./Search";
import Suggestions from "./Suggestions";

const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

function findMatches(wordToMatch, cities) {
    if (wordToMatch === "") return [];
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}

function SearchContainer(props) {
    const [results, setResults] = useState([]);
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        fetch(endpoint)
            .then(blob => blob.json())
            .then(data => setData([...data]));
    }, []);

    useEffect(() => {
        setResults(findMatches(searchTerm, data));
    }, [searchTerm, data])

    return <div className="search-container">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Suggestions results={results}/>
    </div>;
}

export default SearchContainer;

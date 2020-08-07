import React from 'react';
import './Search.css';

function Search(props) {
    const { searchTerm, setSearchTerm } = props;
    const handler = (e) => setSearchTerm(e.target.value);
    return <input type="text" value={searchTerm} onKeyUp={handler} onChange={handler} className="search" placeholder="City or State" />;
}

export default Search;

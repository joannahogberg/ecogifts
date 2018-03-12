import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SortSelect from '../SortSelect/SortSelect';
import './searchsortsection.css';

function SearchSortSection(props) {
    return (
        <section className="search-sort-section">
            <SearchBar {...props} />
            <SortSelect {...props} />
        </section>
    );
}

export default SearchSortSection;
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SortSelect from '../SortSelect/SortSelect';
import './searchsortsection.css';

function SearchSortSection() {
    return (
        <section className="search-sort-section">
            <SearchBar />
            <SortSelect />
        </section>
    );
}

export default SearchSortSection;
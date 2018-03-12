import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Search } from "react-feather";

import './searchbar.css';

class SearchBar extends Component {
  render() {
    const { search } = this.props.giftsActions;
    return (
      <div className="search-bar-wrapper">
        <Search size={16} />
        <input
          className="search-input"
          placeholder="SÖK PRESENT..."
          onChange={(e) => search(e.target.value)}
        />
      </div>
    );
  }
}

SearchBar.propTypes = {
  giftsActions: PropTypes.shape({
    search: PropTypes.func.isRequired,
  }),
};
export default SearchBar;
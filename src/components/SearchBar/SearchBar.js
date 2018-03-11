import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../../actions/actionCreators';
import PropTypes from 'prop-types'
import { Search } from "react-feather";

import './searchbar.css';

class SearchBar extends Component {
  render() {
    const { search } = this.props;
    return (
      <div className="search-bar-wrapper">
      <Search size={16}/>
      <input
        className="search-input"
        placeholder="SÖK PRESENT..."
        onChange={(e) => search(e.target.value)}
      />
      </div>
    );
  }
}

SearchBar.defaultsProps = {
  search: () => { }
};

SearchBar.propTypes = {
  search: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    gifts: state.gifts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    search: bindActionCreators(search, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
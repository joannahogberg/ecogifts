import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {search} from '../../actions/actionCreators';
import PropTypes from 'prop-types'

class SearchBar extends Component {
  render() {
    const {search } = this.props;
    return (
        <input
          className="form-control"
          placeholder = "Sök present"
          onChange={(e) => search(e.target.value)}
          />
    );
  }
} 
SearchBar.defaultsProps = {
    placeholder: "Sök present",
    search: () => {}
  };

SearchBar.propTypes = {
    placeholder: PropTypes.string,
    search: PropTypes.func.isRequired
  };

function mapStateToProps(state) {
    return {
        gifts: state.gifts
    };
  }
  

function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
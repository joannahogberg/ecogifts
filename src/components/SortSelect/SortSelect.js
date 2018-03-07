import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/actionCreators';
import * as types from "../../actions/actionTypes";
// import PropTypes from 'prop-types'


class SortSelect extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <select onChange={e => {
        e.preventDefault()
        onChange(e.target.value)
      }}>
        <option value={types.SHOW_ALL}>SORTERA</option>
        <option value={types.SHOW_BY_ASC}>A-Ö</option>
        <option value={types.SHOW_BY_DESC}>Ö-A</option>
        <option value={types.SHOW_BY_LOW_PRICE}>LÄGSTA PRIS</option>
        <option value={types.SHOW_BY_HIGH_PRICE}>HÖGSTA PRIS</option>
      </select>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifts: state.gifts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortSelect);

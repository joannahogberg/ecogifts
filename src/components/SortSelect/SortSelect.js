import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/actionCreators';
import * as types from "../../actions/actionTypes";
import { Sliders } from "react-feather";
// import PropTypes from 'prop-types'
import './sortselect.css';


class SortSelect extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="select-wrapper">
      <Sliders size={14}/>
      <select onChange={e => {
        e.preventDefault()
        onChange(e.target.value)
      }}
      className="sort-select"
      >
        <option value={types.SHOW_ALL}>SORTERA</option>
        <option value={types.SHOW_BY_ASC}>A-Ö</option>
        <option value={types.SHOW_BY_DESC}>Ö-A</option>
        <option value={types.SHOW_BY_LOW_PRICE}>LÄGSTA PRIS</option>
        <option value={types.SHOW_BY_HIGH_PRICE}>HÖGSTA PRIS</option>
      </select>
      </div>
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

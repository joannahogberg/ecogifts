import React, { Component } from 'react';
import * as types from "../../actions/actionTypes";
import { Sliders } from "react-feather";
import PropTypes from 'prop-types'
import './sortselect.css';

class SortSelect extends Component {
  render() {
    const { setVisibilityFilter } = this.props.giftsActions;
    return (
      <div className="select-wrapper">
      <Sliders size={14}/>
      <select onChange={e => {
        e.preventDefault()
        setVisibilityFilter(e.target.value)
      }}
      className="sort-select"
      >
        <option value={types.SHOW_ALL}>SORTERA EFTER</option>
        <option value={types.SHOW_BY_ASC}>A-Ö</option>
        <option value={types.SHOW_BY_DESC}>Ö-A</option>
        <option value={types.SHOW_BY_LOW_PRICE}>LÄGSTA PRIS</option>
        <option value={types.SHOW_BY_HIGH_PRICE}>HÖGSTA PRIS</option>
      </select>
      </div>
    );
  }
}

export default SortSelect;

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import {select} from '../../actions/actionCreators';
import {setVisibilityFilter} from '../../actions/actionCreators';
import PropTypes from 'prop-types'


class Select extends Component {
  render() {
    const {onChange } = this.props;
    return (
    
        //   <select onChange={(e) => select(e.target.value)}>
        <select onChange={e => {
            e.preventDefault()
            onChange(e.target.value)
          }}>
          <option value="SHOW_ALL"></option>
<option value="SHOW_SELECTED">test</option>
            </select>
    );
  }
} 

function mapStateToProps(state) {
    return {
        gifts: state.gifts
    };
  }
  

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({select}, dispatch);
// }
// const mapStateToProps = (state, ownProps) => {
//     return {
//       active: ownProps.filter === state.visibilityFilter
//     }
//   }
const mapDispatchToProps = (dispatch) => {

    return {
      onChange: (filter) => {
        dispatch(setVisibilityFilter(filter))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Select);
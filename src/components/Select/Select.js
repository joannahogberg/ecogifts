import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {select} from '../../actions/actionCreators';
import { sortSelector } from '../../selectors/selectors';

import PropTypes from 'prop-types'


class Select extends Component {
    
  render() {
    // const {select, gifts } = this.props;
 
      return (
          <select  onChange={() => sortSelector()}>
              <option value="ASC"></option>
              <option value="DEC">test</option>
          </select>
         // <button onClick={()=> sortSelector() }>test</button>
   
      );
  }
} 

// function mapStateToProps(state) {
//     return {
//         gifts: state.gifts
//     };
//   }
// const mapStateToProps = (state) => {
//     return {
//       gifts: sortSelector(state.gifts)
//     }
//   }

  const makeMapStateToProps = () => {
    const getBarState = sortSelector()
    const mapStateToProps = (state, props) => {
      return {
         gifts: getBarState(state, props)
      }
     }
    return mapStateToProps
   }
  

//   function mapDispatchToProps(dispatch) {
//     return {
//       select: bindActionCreators(select, dispatch)
//     };
// }

export default connect(makeMapStateToProps)(Select);
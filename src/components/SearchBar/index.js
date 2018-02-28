import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {search} from '../../actions/actionCreators';

class SearchBar extends Component {
  render() {
    const {search, value} = this.props;
// console.log(value)
    return (
        <input
          className="form-control"
          placeholder = "Sök present"
          onChange={(e) => search(e.target.value)}
          value={value} />
    );
  }
} 

// function mapStateToProps({works}) {
//   return {value: works.value};
// }

function mapStateToProps(state) {
    return {
        gifts: state.gifts
    };
  }
  

function mapDispatchToProps(dispatch) {
  return bindActionCreators({search}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
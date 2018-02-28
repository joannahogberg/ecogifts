import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { renderRandom } from "../../actions/actionCreators";
// import SearchBar from './../SearchBar/SearchBar';
// import ButtonGroup from "./../ButtonGroup/ButtonGroup";

class Header extends Component {

  render() {
    return (
      <header>
          <h1>
          <Link to="/" onClick={()=>this.props.renderRandom()}>ecoGifts</Link>
          </h1>
          {/* <Link to="/gift-form">Sök present</Link>
          <SearchBar /> */}
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
      gifts: state.gifts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    renderRandom: () => dispatch(renderRandom())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
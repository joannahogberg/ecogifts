import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'
import { renderRandom } from '../actions/actionCreators'
import GiftsGrid from '../views/GiftsGrid'
import SingleGift from '../views/SingleGift'
import GiftFormContainer from '../views/GiftFormContainer'
import { connect } from "react-redux";

// import { bindActionCreators } from 'redux'
// import { reduxForm } from 'redux-form'

import {persistStore} from 'redux-persist';

import '../styles/main.css';

// componentDidMount = () => {

// }

class Main extends Component {

// startStage = () => {

// dispatch(renderRandom());

// }


  render() {
    return (

      <main>
        <h1>
          <Link to="/" onClick={() => this.props.renderRandom()} >ecoGifts</Link>
          <Link to="/gift-form">Sök present</Link>
        </h1>

        <br />

        <Route exact path="/" component={GiftsGrid} />
        <Route path="/view/:gift_Id" component={SingleGift} />
        <Route path="/gift-form" component={GiftFormContainer} />
      </main>
    );
  }
}


function mapStateToProps(state, props) {
  return {
    gifts: state.gifts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    renderRandom: () => dispatch(renderRandom())
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
// export default Main;
import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
<<<<<<< HEAD
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
=======
import { renderRandom } from "../actions/actionCreators";
import GiftsGrid from '../views/GiftsGrid'
import SingleGift from '../views/SingleGift'
import GiftFormContainer from '../views/GiftFormContainer'
import { connect } from 'react-redux';
import SearchBar from './SearchBar/index';
>>>>>>> 17877d869de17ba14c2c1964d426ef54d3709ba3

// }

class Main extends Component {

<<<<<<< HEAD
// startStage = () => {

// dispatch(renderRandom());

// }


=======
>>>>>>> 17877d869de17ba14c2c1964d426ef54d3709ba3
  render() {
    return (

      <main>
        <h1>
<<<<<<< HEAD
          <Link to="/" onClick={() => this.props.renderRandom()} >ecoGifts</Link>
=======
          <Link to="/" onClick={()=>this.props.renderRandom()}>ecoGifts</Link>
>>>>>>> 17877d869de17ba14c2c1964d426ef54d3709ba3
          <Link to="/gift-form">Sök present</Link>
  <SearchBar />
        </h1>

        <br />

        <Route exact path="/" component={GiftsGrid} />
        <Route path="/view/:gift_Id" component={SingleGift} />
        <Route path="/gift-form" component={GiftFormContainer} />
      </main>
    );
  }
}

<<<<<<< HEAD

function mapStateToProps(state, props) {
  return {
    gifts: state.gifts
=======
function mapStateToProps(state) {
  return {
      gifts: state.gifts
>>>>>>> 17877d869de17ba14c2c1964d426ef54d3709ba3
  };
}

function mapDispatchToProps(dispatch) {
  return {
    renderRandom: () => dispatch(renderRandom())
<<<<<<< HEAD
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
// export default Main;
=======
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
>>>>>>> 17877d869de17ba14c2c1964d426ef54d3709ba3

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'

import GiftsGrid from '../views/GiftsGrid'
import SingleGift from '../views/SingleGift'

import FormContainer from '../views/FormContainer'


import { reduxForm } from 'redux-form'
// import ObjectSelect from './ObjectSelect'

class Main extends Component {
  render() {
    return (
      <main>
        <h1>
          <Link to="/">ecoGifts</Link>
        </h1>

        <FormContainer />
        <br />
        <Route exact path="/" component={GiftsGrid} />
        <Route path="/view/:giftId" component={SingleGift} />
      </main>
    );
  }
}

export default Main;
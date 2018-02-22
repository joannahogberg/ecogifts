import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'

import GiftsGrid from '../views/GiftsGrid'
import SingleGift from '../views/SingleGift'
import GiftFormContainer from '../views/GiftFormContainer'


class Main extends Component {
  render() {
    return (
      <main>
        <h1>
          <Link to="/">ecoGifts</Link>
          <Link to="/gift-form">Sök present</Link>
        </h1>
        <Route exact path="/" component={GiftsGrid} />
        <Route path="/view/:giftId" component={SingleGift} />
        <Route path="/gift-form" component={GiftFormContainer} />
      </main>
    );
  }
}

export default Main;
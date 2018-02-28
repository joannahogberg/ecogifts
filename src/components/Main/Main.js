import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import GiftsGrid from '../../views/GiftsGrid/GiftsGrid'
import SingleGift from '../../views/SingleGift/SingleGift'
import GiftFormContainer from '../../views/GiftFormContainer/GiftFormContainer'
import Header from './../Header/Header';

class Main extends Component {
  render() {
    return (
      <main>
        <Header />
        <Route exact path="/" component={GiftsGrid} />
        <Route path="/view/:giftId" component={SingleGift} />
        <Route path="/gift-form" component={GiftFormContainer} />
      </main>
    );
  }
}

export default Main;

import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import GiftsGrid from '../../views/GiftsGrid/GiftsGrid'
import SingleGift from '../../views/SingleGift/SingleGift'
import GiftFormContainer from '../../views/GiftFormContainer/GiftFormContainer'
import Header from './../Header/Header';
import GiftsList from './../GiftsList/GiftsList';
import './main.css';

class Main extends Component {
  render() {
    return (
      <div className="wrapper">
          <Header />
      <main>
        <div className="container">
        <Route exact path="/" component={GiftsGrid} />
        <Route path="/view/:giftId" component={SingleGift} />
        <Route path="/gift-form" component={GiftFormContainer} />
        </div>
        <GiftsList />
       
      </main>
      </div>
    );
  }
}

export default Main;

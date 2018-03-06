import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import GiftsGrid from '../../views/GiftsGrid/GiftsGrid'
import SingleGift from '../../views/SingleGift/SingleGift'
import About from '../../views/About/About'
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
        <Route path="/header" component={About} />
        </div>
        <GiftsList />
      </main>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     gifts: state.gifts
//   };
// }
// export default connect(mapStateToProps)(Main);

export default Main;

import React from 'react';
import { Route } from 'react-router-dom'
import GiftsGrid from '../../views/GiftsGrid/GiftsGrid'
import SingleGift from '../../views/SingleGift/SingleGift'
import About from '../../views/About/About'
import Header from './../Header/Header';
import FavoritesList from './../FavoritesList/FavoritesList';
import './main.css';

function Main(props) {
  return (
    <div className="wrapper">
      <Header {...props}/>
      <main>
        <div className="container">
          <Route exact path="/" component={GiftsGrid} />
          <Route path="/view/:giftId" component={SingleGift} />
          <Route path="/header" component={About} />
        </div>
        {/* <FavoritesList /> */}
      </main>
    </div>
  );
}

export default Main;

import React from 'react';
import { Route} from 'react-router-dom'

import GiftsGrid from '../../views/GiftsGrid/GiftsGrid'
import SingleGift from '../../views/SingleGift/SingleGift'
import Header from '../Header/Header';

import './app.css';

function App() {
    return (
        <div className="wrapper">
            <div id="top"></div>
            <Header />
            <Route exact path="/ecoGifts" component={GiftsGrid} />
            <Route path="/view/:giftId" component={SingleGift} />
        </div>
    );
}

export default App;
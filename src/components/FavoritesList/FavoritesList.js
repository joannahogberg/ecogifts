import React from 'react';
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import { X } from "react-feather";

import './favoriteslist.css';

function FavoritesList(props) {
  const logoSmall = require('../../media/logo/ecogifts_logo_small.png');
  const favorites  = props.favorites;
  const {removeGiftFromList, fetchSingleGift } = props.giftsActions;
  const heading = favorites.length > 0 ? "MINA FAVORITER" : "";
  return (
    <aside className="side-bar">
      <h2>{heading}</h2>
      <ul>
        {favorites.map(gift => {
          return (
            <li key={gift.id}>
              <img src={logoSmall} className="favorites-logo" alt="logo small" />
              <Link to={`/view/${gift.id}`} className="btn-link" id={gift.id} onClick={() => fetchSingleGift(gift.id)}> {gift.productName}</Link>
              <X onClick={() => removeGiftFromList(gift)} size={18} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

FavoritesList.propTypes = {
  favorites: PropTypes.array.isRequired,
  giftsActions: PropTypes.shape({
    removeGiftFromList: PropTypes.func.isRequired,
    fetchSingleGift: PropTypes.func.isRequired
  }),

};

export default FavoritesList




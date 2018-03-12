import React from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { X } from "react-feather";
import { Link } from "react-router-dom";
import { fetchSingleGift, removeGiftFromList } from '../../actions/actionCreators';
import './favoriteslist.css';

function FavoritesList(props) {
  const logoSmall = require('../../media/logo/ecogifts_logo_small.png');
  const { favorites, changeId, remove } = props;
  const heading = props.favorites.length > 0 ? "MINA FAVORITER" : "";
  return (
    <aside className="side-bar">
      <h2>{heading}</h2>
      <ul>
        {favorites.map(gift => {
          return (
            <li key={gift.id}>
              <img src={logoSmall} className="favorites-logo" alt="logo small" />
              <Link to={`/view/${gift.id}`} className="btn-link" id={gift.id} onClick={() => changeId(gift.id)}> {gift.productName}</Link>
              <X onClick={() => remove(gift)} size={18} />
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

FavoritesList.propTypes = {
  favorites: PropTypes.array.isRequired,
  changeId: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired

};

function mapStateToProps(state) {
  return {
    favorites: state.favorites
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (giftId) => {
      dispatch(removeGiftFromList(giftId))
    },
    changeId: (giftId) => {
      dispatch(fetchSingleGift(giftId))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesList);


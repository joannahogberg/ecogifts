// import React, { Component } from "react";
// import PropTypes from 'prop-types'
// import { X } from "react-feather";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import './favoriteslist.css';

// import * as favoritesActions from '../../actions/actionCreators';

// class FavoritesList extends Component {

// componentWillMount() {
//     this.props.favoritesActions.getFromLocalStorage();
// }
// removeFavorite=(id)=>{
//   this.props.favoritesActions.removeGiftFromList(id)
// }
// onClick=(giftId)=>{
//   this.props.favoritesActions.fetchSingleGift(giftId);
// }

//   render() {
//     const logoSmall = require('../../media/logo/ecogifts_logo_small.png');
//     console.log(this.props)
//     const { favorites } = this.props;
//     const heading = favorites.length > 0 ? "MINA FAVORITER": "";
//     let giftsToRender = favorites.map(gift => {
//       return (
//         <li key={gift.id}>
//         <img src={logoSmall} className="favorites-logo" alt="logo small" />
//          <Link to={`/view/${gift.id}`} className="btn-link" id={gift.id} onClick={()=> this.onClick(gift.id)}> {gift.productName}</Link>
//          <X onClick={()=>this.removeFavorite(gift)} size={18} />
//         </li>
//       );
//     });

//     return <aside className="side-bar">
//         <h2>{heading}</h2>
//         <ul>{giftsToRender}</ul>
//       </aside>;
//   }
// }
// FavoritesList.defaultProps = {
//  favorites: [
//    {id: "id0",
//     productName: ""
//   }
//  ]
// };

// FavoritesList.propTypes = {
//   favorites: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       productName: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       description: PropTypes.string.isRequired,
//       src: PropTypes.string.isRequired,
//       href: PropTypes.string.isRequired,
//       interest: PropTypes.array.isRequired,
//       personality: PropTypes.array.isRequired,
//       material: PropTypes.array.isRequired,
//       receiver: PropTypes.array.isRequired
//     })
//   ),
//   favoritesActions: PropTypes.shape({
//     getFromLocalStorage: PropTypes.func.isRequired,
//     removeGiftFromList: PropTypes.func.isRequired,
//     fetchSingleGift: PropTypes.func.isRequired
//   }).isRequired
// };

// function mapStateToProps(state) {
//   return {
//     favorites: state.favorites
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     favoritesActions: bindActionCreators(favoritesActions, dispatch)
//   };
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(FavoritesList);

import React from 'react';
// import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { X } from "react-feather";
import { Link } from "react-router-dom";
// import * as favoritesActions from '../../actions/actionCreators';
import { fetchSingleGift,removeGiftFromList  } from '../../actions/actionCreators';
import './favoriteslist.css';

function FavoritesList(props) {
console.log(props)
  const logoSmall = require('../../media/logo/ecogifts_logo_small.png');
  const { favorites, changeId, remove } = props;
  const heading = favorites.length > 0 ? "MINA FAVORITER": "";
  let giftsToRender = favorites.map(gift => {
    return (
      <li key={gift.id}>
      <img src={logoSmall} className="favorites-logo" alt="logo small" />
       <Link to={`/view/${gift.id}`} className="btn-link" id={gift.id} onClick={()=> changeId(gift.id)}> {gift.productName}</Link>
       <X onClick={()=>remove(gift)} size={18} />
      </li>
    );
  });

  return (
    <aside className="side-bar">
    <h2>{heading}</h2>
    <ul>{giftsToRender}</ul>
  </aside>
  );
}

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


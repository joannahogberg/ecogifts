import React, { Component } from "react";
import { X} from "react-feather";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './giftslist.css';

import * as favoritesActions from '../../actions/actionCreators';

class GiftsList extends Component {
  

componentWillMount() {
    this.props.favoritesActions.getFromLocalStorage();
}
removeFavorite=(id)=>{
  this.props.favoritesActions.removeGiftFromList(id)
}
onClick=(giftId)=>{
  this.props.favoritesActions.fetchSingleGift(giftId);
}

  render() {
    const logoSmall = require('../../media/logo/ecoLogo_leaf.png');
    const { gifts } = this.props;
    const heading = gifts.length > 0 ? "MINA FAVORITER": "";
console.log(this.props)
    let giftsToRender = gifts.map(gift => {
      return (
        <li key={gift.id}>
        {/* <Heart size={14} /> */}
        <img src={logoSmall} className="favorites-logo" alt="logo small" />
         <Link to={`/view/${gift.id}`} className="btn-link" id={gift.id} onClick={()=> this.onClick(gift.id)}> {gift.productName}</Link>
         <X onClick={()=>this.removeFavorite(gift)} size={20} />
        </li>
      );
    });

    return <aside className="side-bar">
        <h2>{heading}</h2>
        <ul>{giftsToRender}</ul>
      </aside>;
  }
}

function mapStateToProps(state) {
  return {
    gifts: state.favorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    favoritesActions: bindActionCreators(favoritesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftsList);

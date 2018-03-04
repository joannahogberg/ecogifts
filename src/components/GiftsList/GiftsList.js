import React, { Component } from "react";
import { Heart } from "react-feather";
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
    const { gifts } = this.props;
console.log(this.props)
    let giftsToRender = gifts.map(gift => {
      return (
        <li key={gift.id}><Heart size={14} />
         <Link to={`/view/${gift.id}`} className="btn-link" id={gift.id} onClick={()=> this.onClick(gift.id)}> {gift.productName}</Link>
         <button onClick={()=>this.removeFavorite(gift)}>remove</button>
        </li>
      );
    });

    return <aside className="side-bar">
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

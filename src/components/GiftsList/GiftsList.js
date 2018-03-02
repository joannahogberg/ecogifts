import React, { Component } from "react";
import { Heart } from "react-feather";
// import { ChevronsLeft, ChevronsRight } from "react-feather";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import './giftslist.css';
import {getFromLocalStorage} from '../../actions/actionCreators';

class GiftsList extends Component {

  componentWillMount() {
    this.props.getFromLocalStorage();
}


  render() {
    const { gifts } = this.props;
console.log(gifts)
    let giftsToRender = gifts.map(gift => {
      return (
        <li key={gift.id}><Heart size={14} />
         <Link to={`/view/${gift.id}`} className="btn-link"> {gift.productName}</Link>
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
// function mapDispatchToProps(dispatch) {
//   return {
//      giftsActions: bindActionCreators(giftsActions, dispatch)
//   };
// }

function mapDispatchToProps(dispatch) {
  return {
    getFromLocalStorage: bindActionCreators(getFromLocalStorage, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftsList);

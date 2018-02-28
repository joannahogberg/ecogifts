import React, { Component } from "react";
import { ChevronsLeft, ChevronsRight } from "react-feather";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {} from "../../actions/actionCreators";

class GiftsList extends Component {
  render() {
    const { gifts } = this.props;

    let giftToRender = gifts.map(gift => {
      return (
        <li key={gift.id} className="grid-figure">
          {gift.productName}
        </li>
      );
    });
    console.log(gifts);

    return <ul> {giftToRender} </ul>;
  }
}

function mapStateToProps(state) {
  return {
    gifts: state.favorites
  };
}

export default connect(mapStateToProps)(GiftsList);

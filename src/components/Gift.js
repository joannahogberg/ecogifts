import React, { Component } from "react";
import { ChevronsRight } from "react-feather";
import { showGift } from "../actions/actionCreators";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

// import { bindActionCreators } from 'redux'
import { connect } from "react-redux";

class Gift extends Component {
  render() {
    const { gift } = this.props;

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${gift.id}`}>
            {/* <img
              src={gift.src}
              alt={gift.productName}
              className="grid-photo"
              style={{ width: "100px" }}
            /> */}
          </Link>
        </div>
        <figcaption>
          <h2>{gift.productName}</h2>
          <div className="control-buttons">
            {/* <button onClick={() => this.props.showGift(gift)}>Go to about page via redux</button> */}
            <Link to={`/view/${gift.id}`} className="button">
              Mer info
            </Link>
            <a href={gift.href} target="_blank" className="button">
              Gå till butik <ChevronsRight color="grey" size={24} />
            </a>
          </div>
        </figcaption>
      </figure>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    gifts: state.gifts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showGift: gift => dispatch(showGift(gift))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gift);

import React, { Component } from "react";
import { ChevronsLeft, ChevronsRight } from "react-feather";
// import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SingleGift extends Component {
  render() {
    const { giftId } = this.props.match.params;
    const i = this.props.gifts.findIndex((gift) => gift.id === giftId);
    // const gift = this.props.gifts[giftId - 1];
    const gift = this.props.gifts[i];
console.log(this.props.gifts)
    return (
      <div className="single-photo">
        <Link to={`/`} className="button">
          <ChevronsLeft color="grey" size={24} />
        </Link>
        <figure className="grid-figure">
          <div className="grid-photo-wrap">
            <img
              src={gift.src}
              alt={gift.productName}
              className="grid-photo"
              style={{ width: "100px" }}
            />
          </div>
          <figcaption>
            <h2>{gift.productName}</h2>
            <p>{gift.description}</p>
            <div className="control-buttons">
              <a href={gift.href} target="_blank" className="button">
                Gå till butik <ChevronsRight color="grey" size={24} />
              </a>
            </div>
          </figcaption>
        </figure>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifts: state.gifts
});

export default connect(mapStateToProps)(SingleGift);

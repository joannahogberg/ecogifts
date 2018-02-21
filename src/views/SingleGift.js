import React, { Component } from "react";
import { ChevronsLeft, ChevronsRight } from "react-feather";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SingleGift extends Component {
  render() {
    const { giftId } = this.props.match.params;
    const gift = this.props.gifts.filter(gift => gift.id + "" === giftId);
    let giftToRender = gift.map(gift => {
      return (
        <figure key={gift.id} className="grid-figure">
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
      );
    });
    return (
      <div className="single-photo">
        <Link to={`/`} className="button">
          <ChevronsLeft color="grey" size={24} />
        </Link>
        {giftToRender}
      </div>
    );
  }
}

SingleGift.propTypes = {
  gifts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      interest: PropTypes.array.isRequired,
      personality: PropTypes.array.isRequired,
      material: PropTypes.array.isRequired,
      type: PropTypes.array.isRequired
    })
  )
};

const mapStateToProps = state => ({
  gifts: state.gifts
});

export default connect(mapStateToProps)(SingleGift);

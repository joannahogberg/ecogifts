import React, { Component } from "react";
import { ChevronRight } from "react-feather";
import { PropTypes } from 'prop-types'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleGift } from "../../actions/actionCreators";
import { bindActionCreators } from 'redux';
import AddToFavoritesBtn from '../../components/AddToFavoritesBtn/AddToFavoritesBtn';
import './singlegift.css';

class SingleGift extends Component {

  componentWillMount() {
    const { giftId } = this.props.match.params;
    this.props.fetchSingleGift(giftId);

  }
  render() {
    const { gifts } = this.props;
    const gift = gifts[0];
    const price = gift.material.includes("giftcard")
      ? "Från " + gift.price
      : gift.price;

    const src = require('../../media/images/' + gift.id + '.png')
    return (

      <div className="single-gift-wrapper">
        <div className="bread-crumbs"><Link to={`/`} className="btn-link">
          <span>HEM</span><ChevronRight color="grey" size={18} />
        </Link><span>{gift.productName}</span></div>
        <section className="single-gift-container">
          <div className="single-gift-photo-wrap">
            <img
              src={src}
              alt={gift.productName}
              className="grid-photo"
              style={{ width: "100%" }}
            />
          </div>
          <div className="single-gift-content">
            <h2>{gift.productName}</h2>
            <p>{price}kr</p>
            <p>{gift.description}</p>
            <div className="control-btns">
              <AddToFavoritesBtn gift={gift} />
              <a href={gift.href} target="_blank" className="btn-link">
                Gå till butik<ChevronRight color="grey" size={18} />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


SingleGift.propTypes = {
  gifts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      interest: PropTypes.array.isRequired,
      personality: PropTypes.array.isRequired,
      material: PropTypes.array.isRequired,
      receiver: PropTypes.array.isRequired
    })
  ),
    fetchSingleGift: PropTypes.func.isRequired
  };

const mapStateToProps = (state) => ({
  gifts: state.gifts
});

function mapDispatchToProps(dispatch) {
  return {
    fetchSingleGift: bindActionCreators(fetchSingleGift, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleGift);



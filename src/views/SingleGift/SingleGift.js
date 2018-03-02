import React, { Component } from "react";
import { ChevronsLeft, ChevronsRight } from "react-feather";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchSingleGift } from "../../actions/actionCreators";
import {bindActionCreators} from 'redux';
import AddToFavoritesBtn from '../../components/AddToFavoritesBtn/AddToFavoritesBtn'

class SingleGift extends Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.gifts[0].id === this.props.match.params.giftId) {
      return true;
    }
    return false;
  }
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
    return (
      <div className="single-gift">
        <Link to={`/`} className="btn-link">
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
            <p>{price}kr</p>
            <p>{gift.description}</p>
            <div className="control-btns">
              <AddToFavoritesBtn gift={gift} />
              <a href={gift.href} target="_blank" className="btn-link">
                Gå till butik <ChevronsRight color="grey" size={24} />
              </a>
            </div>
          </figcaption>
        </figure>
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
  )
};

const mapStateToProps = state => ({
  gifts: state.gifts
});

function mapDispatchToProps(dispatch) {
  return {
    fetchSingleGift: bindActionCreators(fetchSingleGift, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleGift);



import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import { ChevronRight } from "react-feather";

import './gift.css';

class Gift extends Component {

  render() {
    const { gift } = this.props;
    const {fetchSingleGift} = this.props.giftsActions;
    const small = require('../../media/thumbs/' + gift.id + '_tn.jpg');
    const large = require('../../media/images/' + gift.id + '.png')
    const price = gift.material.includes("giftcard") ? "Från " + gift.price : gift.price;
    return (
      <div className="gift-wrapper">
        <div className="gift-photo-wrap">
        <Link to={`/view/${gift.id}`} onClick={() => fetchSingleGift(gift.id)} >
            <img
              srcSet={`${small} 300w, ${large} 700w`}
              src={small}
              alt={gift.productName}
              className="grid-photo"
              style={{ width: "100%" }}
            />
          </Link>
        </div>
        <div className="gift-content-wrap">
        <Link to={`/view/${gift.id}`} onClick={() => fetchSingleGift(gift.id)} >
          <h2 className="gift-heading">{gift.productName}</h2>
           </Link>
          <p>{price}kr</p>
       
        </div>
        <div className="control-btns">
            <Link to={`/view/${gift.id}`} className="btn-link" onClick={() => fetchSingleGift(gift.id)}>
              Mer info
              <ChevronRight color="grey" size={16} />
            </Link>
            <a href={gift.href} target="_blank" className="btn-link">
              Gå till butik <ChevronRight color="grey" size={16} />
            </a>
          </div>
      </div>
    );
  }
}


Gift.propTypes = {
  gift: PropTypes.shape({
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
    }),
  giftsActions: PropTypes.shape({
    fetchSingleGift: PropTypes.func.isRequired,
  }),
};


export default Gift;

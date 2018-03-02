import React, { Component } from "react";
import { ChevronsRight } from "react-feather";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import { connect } from "react-redux";

class Gift extends Component {



  render() {
    const { gift } = this.props;
    const price = gift.material.includes("giftcard") ? "Från " + gift.price : gift.price;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${gift.id}`}>
            <img
              src={gift.src}
              alt={gift.productName}
              className="grid-photo"
              style={{ width: "100px" }}
            />
          </Link>
        </div>
        <figcaption>
          <h2>{gift.productName}</h2>
          <p>{price}kr</p>
          <div className="control-btns">
            <Link to={`/view/${gift.id}`} className="btn-link" >
              Mer info
            </Link>
            <a href={gift.href} target="_blank" className="btn-link">
              Gå till butik <ChevronsRight color="grey" size={24} />
            </a>
          </div>
        </figcaption>
      </figure>
    );
  }
}


Gift.propTypes = {
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

function mapStateToProps(state, props) {
  return {
    gifts: state.gifts
  };
}

export default connect(mapStateToProps)(Gift);

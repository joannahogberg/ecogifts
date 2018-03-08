import React from "react";
import PropTypes from "prop-types";
import Gift from "../Gift/Gift";
import './giftslist.css';

function GiftsList(props) {
    return (
        <div className="gifts-list">
            {props.gifts.map((gift, i) => (
                <Gift {...props} key={i} i={i} gift={gift} />
            ))}
        </div>
    );
}

GiftsList.propTypes = {
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

export default GiftsList;
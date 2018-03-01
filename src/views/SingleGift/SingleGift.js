import React, { Component } from "react";
import { ChevronsLeft, ChevronsRight } from "react-feather";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addGiftToList } from "../../actions/actionCreators";
import * as types from "../../actions//actionTypes";

class SingleGift extends Component {

  render() {    
    const { giftId } = this.props.match.params;
    const gift = this.props.gifts.filter(gift => gift.id + "" === giftId);
    let giftToRender = gift.map(gift => {
      const price = gift.material.includes("giftcard") ? "Från " + gift.price : gift.price;
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
            <p>{price}kr</p>
            <p>{gift.description}</p>
            
            {/* <button onClick={() => saveToLocalStorage(gift.id)}>SPARA</button> */}
            
            <button onClick={() => this.addToFavoritesList(gift)}>SPARA</button> 
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
      <div className="single-gift">
        <Link to={`/`} className="btn-link">
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

const mapDispatchToProps = dispatch => {
  // onClick:
  // // return {
  // //   addGiftToList: (gift) => dispatch(addGiftToList(gift))
  // // }

  return {
    addGiftToList: (gift) => dispatch(addGiftToList(gift))
    // dispatch,
    // onClick: (gift) => dispatch(addGiftToList(gift))
    // onClick: (gift) => dispatch(addGiftToList({type: types.ADD_GIFT_TO_LIST, gift}))
  };
};

  


export default connect(mapStateToProps)(SingleGift);



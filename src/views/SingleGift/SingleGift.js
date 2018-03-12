import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { ChevronRight } from "react-feather";
import AddToFavoritesBtn from '../../components/AddToFavoritesBtn/AddToFavoritesBtn';
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import Main from '../../components/Main/Main';
import * as giftsActions from "../../actions/actionCreators";
import './singlegift.css';

class SingleGift extends Component {

  render() {
    const { gifts } = this.props;
    const gift = gifts[0];
    const price = gift.material.includes("giftcard")
      ? "Från " + gift.price
      : gift.price;

    const src = require('../../media/images/' + gift.id + '.png')
    return (
      <div className="container">
        <Main>
          <div className="single-gift-wrapper">
            <div className="bread-crumbs"><Link to={`/ecoGifts`} className="btn-link">
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
        </Main>
        <FavoritesList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gifts: state.gifts,
  favorites: state.favorites
});

function mapDispatchToProps(dispatch) {
  return {
    giftsActions: bindActionCreators(giftsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleGift);




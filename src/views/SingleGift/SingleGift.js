import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { ChevronRight } from "react-feather";

import FavoritesList from "../../components/FavoritesList/FavoritesList";
import Main from "../../components/Main/Main";
import Loader from "../../components/Loader/Loader";
import SingleGiftItem from "../../components/SingleGiftItem/SingleGiftItem";

import * as giftsActions from "../../actions/actionCreators";

import "./singlegift.css";


class SingleGift extends Component {
  render() {
    const { gifts, error, loading } = this.props;
    const contentToShow = error ?
      <Loader heading={error.content} error={true} />
      : <SingleGiftItem {...this.props} />

    const renderSingleGift = loading ? <Loader error={false} /> : contentToShow;
    
    const productName = gifts && !error ? gifts[0].productName : "";

    return (
      <div className="container">
        <Main>
          <div className="single-gift-wrapper">
            <div className="bread-crumbs">
              <Link to={`/ecoGifts`} className="btn-link">
                <span>HEM</span>
                <ChevronRight color="grey" size={18} />
              </Link>
              <span>{productName}</span>
            </div>
            {renderSingleGift}
          </div>
        </Main>
        <FavoritesList {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gifts: state.gifts.gifts,
  favorites: state.favorites,
  error: state.gifts.error,
  loading: state.gifts.loading
});

function mapDispatchToProps(dispatch) {
  return {
    giftsActions: bindActionCreators(giftsActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleGift);

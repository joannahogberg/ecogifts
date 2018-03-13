import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";
import _ from 'lodash';

import { ChevronUp } from "react-feather";

import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import GiftFormContainer from "../../components/GiftFormContainer/GiftFormContainer";
import GiftsList from "../../components/GiftsList/GiftsList";
import SearchSortSection from "../../components/SearchSortSection/SearchSortSection";
import PresentIcon from "../../components/PresentIcon/PresentIcon";
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import Main from '../../components/Main/Main';
import Banner from '../../components/Banner/Banner';
import Loader from '../../components/Loader/Loader';

import * as giftsActions from "../../actions/actionCreators";
import * as types from "../../actions/actionTypes";

import "./giftsgrid.css";

const getVisibleGifts = (gifts, filter) => {
  switch (filter) {
    case types.SHOW_ALL:
      let showAll = [...gifts];
      return showAll;
    case types.SHOW_BY_ASC:
      let byTitleASC = [...gifts];
      byTitleASC.sort(function (a, b) {
        return a.productName > b.productName
          ? 1
          : b.productName > a.productName ? -1 : 0;
      });
      return byTitleASC;
    case types.SHOW_BY_DESC:
      let byTitleDESC = [...gifts];
      byTitleDESC.sort(function (a, b) {
        return a.productName < b.productName
          ? 1
          : b.productName < a.productName ? -1 : 0;
      });
      return byTitleDESC;
    case types.SHOW_BY_LOW_PRICE:
      let priceSortLow = [...gifts];
      priceSortLow.sort(function (a, b) {
        return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      });
      return priceSortLow;
    case types.SHOW_BY_HIGH_PRICE:
      let priceSortHigh = [...gifts];
      priceSortHigh.sort(function (a, b) {
        return a.price < b.price ? 1 : b.price < a.price ? -1 : 0;
      });
      return priceSortHigh;
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

class GiftsGrid extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      showLoader: false
    };
  }
  componentWillMount() {
    this.props.giftsActions.fetchGifts();
    setTimeout(function () { this.setState({ showLoader: true }); }.bind(this), 1000);
  }

  componentWillUpdate(nextProps, nextState) {
    const prevState = this.props.gifts;
    const newState = nextProps.gifts;

    if (_.isEqual(prevState, newState)) {
      return
    } else {
      this.setState({ showLoader: false });
    }
  }


  componentDidUpdate() {
    if (!this.state.showLoader) {
      setTimeout(function () { this.setState({ showLoader: true }); }.bind(this), 2000);
    }
  }

  showForm = () => {
    if (!this.state.showForm) {
      this.setState({
        showForm: true
      });
    } else {
      this.setState({ showForm: false });
    }
  };

  render() {
    const { showForm } = this.state;
    const btnText = showForm ? "DÖLJ FORMULÄR" : "PRESENTTIPSGENERATOR";
    const showBorder = showForm
      ? "gift-generator-wrapper border"
      : "gift-generator-wrapper";

    const renderGifts = this.state.showLoader ? <GiftsList {...this.props} /> : <Loader />;

    return (
      <div className="container">
        <Main>
          <Banner />
          <ButtonGroup {...this.props} />
          <div className={showBorder}>
            <button
              className="gift-generator-btn"
              onClick={() => this.showForm()}
            >
              {btnText} <PresentIcon />
            </button>
            {showForm && <GiftFormContainer showForm={this.showForm} />}
          </div>
          <SearchSortSection {...this.props} />
          {renderGifts}
        </Main>
        <Link smooth to="#top" className="to-top-link" >
          <ChevronUp size={30} />
        </Link>
        <FavoritesList {...this.props} />
      </div>
    );
  }
}

GiftsGrid.propTypes = {
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
  giftsActions: PropTypes.shape({
    fetchGifts: PropTypes.func.isRequired
  })
};

const mapStateToProps = state => ({
  gifts: getVisibleGifts(state.gifts, state.visibilityFilter),
  favorites: state.favorites
});

function mapDispatchToProps(dispatch) {
  return {
    giftsActions: bindActionCreators(giftsActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(GiftsGrid);

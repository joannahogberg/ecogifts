import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { HashLink as Link } from "react-router-hash-link";
import { ChevronUp } from "react-feather";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import GiftFormContainer from "../../components/GiftFormContainer/GiftFormContainer";
import GiftsList from "../../components/GiftsList/GiftsList";
import SearchSortSection from "../../components/SearchSortSection/SearchSortSection";
import * as giftsActions from "../../actions/actionCreators";
import * as types from "../../actions/actionTypes";
import PresentIcon from "../../components/PresentIcon/PresentIcon";
import "./giftsgrid.css";

const getVisibleGifts = (gifts, filter) => {
  switch (filter) {
    case types.SHOW_ALL:
      let showAll = [...gifts];
      return showAll;
    case types.SHOW_BY_ASC:
      let byTitleASC = [...gifts];
      byTitleASC.sort(function(a, b) {
        return a.productName > b.productName
          ? 1
          : b.productName > a.productName ? -1 : 0;
      });
      return byTitleASC;
    case types.SHOW_BY_DESC:
      let byTitleDESC = [...gifts];
      byTitleDESC.sort(function(a, b) {
        return a.productName < b.productName
          ? 1
          : b.productName < a.productName ? -1 : 0;
      });
      return byTitleDESC;
    case types.SHOW_BY_LOW_PRICE:
      let priceSortLow = [...gifts];
      priceSortLow.sort(function(a, b) {
        return a.price > b.price ? 1 : b.price > a.price ? -1 : 0;
      });
      return priceSortLow;
    case types.SHOW_BY_HIGH_PRICE:
      let priceSortHigh = [...gifts];
      priceSortHigh.sort(function(a, b) {
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
      showForm: false
    };
  }
  componentWillMount() {
    this.props.giftsActions.fetchGifts();
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
    const { gifts } = this.props;
    const btnText = showForm ? "DÖLJ FORMULÄR" : "PRESENTTIPSGENERATOR";
    console.log("--->", this.props);
    const showBorder = showForm
      ? "gift-generator-wrapper border"
      : "gift-generator-wrapper";

      const logoSmallLeft = require('../../media/logo/leaf_left.png');
      const logoSmallRight = require('../../media/logo/leaf_right.png');
    return (
      <div>
        <div className="intro-text">
          <p>
            ECOGIFTS vill inspirera dig som ska köpa presenter att välja
            produkter som kommer till användning och samtidigt gör gott för
            andra och vår miljö!
          </p>
          <img src={logoSmallLeft} className="leaf-left" alt="leaf-left-logo"  />
          <p>
            Genom de 6 kategorierna nedan går det filtrera presenter utifrån intresse.
          </p>
          <img src={logoSmallRight} className="leaf-right" alt="leaf-right-logo"  />
          <p>
            Det finns även en presenttipsgenerator där det går att filtrerar
            presenttips utifrån olika intressen, personligheter, material, och
            typ av mottagare.{" "}
          </p>
        </div>
        <ButtonGroup />

        <div className={showBorder}>
          <button
            className="gift-generator-btn"
            onClick={() => this.showForm()}
          >
            {btnText} <PresentIcon />
          </button>

          {showForm && <GiftFormContainer />}
        </div>
        <SearchSortSection />
        <GiftsList gifts={gifts} />
        <Link smooth to="#top" className="to-top-link">
          <ChevronUp />
        </Link>
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
  favoritesActions: PropTypes.shape({
    fetchGifts: PropTypes.func.isRequired
  })
};

const mapStateToProps = state => ({
  gifts: getVisibleGifts(state.gifts, state.visibilityFilter)
});

function mapDispatchToProps(dispatch) {
  return {
    giftsActions: bindActionCreators(giftsActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(GiftsGrid);

import React, { Component } from "react";
import {bindActionCreators} from 'redux';
// import PropTypes from "prop-types";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import GiftFormContainer from "../../components/GiftFormContainer/GiftFormContainer";
import GiftsList from "../../components/GiftsList/GiftsList";
import SearchBar from '../../components/SearchBar/SearchBar';
import SortSelect from '../../components/SortSelect/SortSelect';
import * as giftsActions from '../../actions/actionCreators';
import * as types from "../../actions/actionTypes";
import { connect } from "react-redux";
import './giftsgrid.css';

const getVisibleGifts = (gifts, filter) => {
  switch (filter) {
    case types.SHOW_ALL:
      let showAll = [...gifts];
      return showAll;
    case types.SHOW_BY_ASC:
      let byTitleASC = [...gifts];
      byTitleASC.sort(function (a, b) { return (a.productName > b.productName) ? 1 : ((b.productName > a.productName) ? -1 : 0); });
      return byTitleASC;
    case types.SHOW_BY_DESC:
      let byTitleDESC = [...gifts];
      byTitleDESC.sort(function (a, b) { return (a.productName < b.productName) ? 1 : ((b.productName < a.productName) ? -1 : 0); });
      return byTitleDESC;
    case types.SHOW_BY_LOW_PRICE:
      let priceSortLow = [...gifts];
      priceSortLow.sort(function (a, b) { return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0); });
      return priceSortLow;
    case types.SHOW_BY_HIGH_PRICE:
      let priceSortHigh = [...gifts];
      priceSortHigh.sort(function (a, b) { return (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0); });
      return priceSortHigh;
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

class GiftsGrid extends Component {

  constructor() {
    super();
    this.state = {
      showForm: false
    }
  }
  componentWillMount() {
    this.props.giftsActions.fetchGifts();
  }

  showForm = () => {
    if (!this.state.showForm) {
      this.setState({ showForm: true })
    } else {
      this.setState({ showForm: false })
    }
  }

  render() {
    const { showForm } = this.state;
    const {gifts}=this.props;
    const btnText = showForm ? "DÖLJ FORMULÄR" : "PRESENTTIPSGENERATOR";
    console.log(this.props)
    return (
      <div>
        <SearchBar />
        <ButtonGroup />
        <button onClick={() => this.showForm()} className="filter-btn">{btnText}</button>
        {showForm && (
          <GiftFormContainer />
        )}
        <SortSelect />
        <GiftsList gifts={gifts}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  gifts: getVisibleGifts(state.gifts, state.visibilityFilter)
})

function mapDispatchToProps(dispatch) {
  return {
    giftsActions: bindActionCreators(giftsActions, dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GiftsGrid)


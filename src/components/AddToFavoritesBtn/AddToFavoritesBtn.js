import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addGiftToList } from "../../actions/actionCreators";
import './AddToFavoritesBtn.css';

class AddToFavoritesBtn extends Component {

  render() {
    const logoSmall = require('../../media/logo/ecoLogo_leaf.png');

    return (
      <div onClick={() => this.props.addGiftToList(this.props.gift)} className="logo-wrapper">
        <img src={logoSmall} className="favorites-logo" alt="save it" />
        <span> Spara som favorit</span>
      </div>
    );
  }
}

AddToFavoritesBtn.propTypes = {
  addGiftToList: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  gifts: state.gifts
});

const mapDispatchToProps = dispatch => {
  return {
    addGiftToList: (gift) => dispatch(addGiftToList(gift))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToFavoritesBtn)
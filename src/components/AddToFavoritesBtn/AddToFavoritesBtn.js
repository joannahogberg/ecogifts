import React, { Component } from "react";
import PropTypes from "prop-types";
import { addGiftToList } from "../../actions/actionCreators";
import { connect } from "react-redux";

class AddToFavoritesBtn extends Component {
  render() {
    return (
        <button onClick={() => this.props.addGiftToList(this.props.gift)} className="filter-btn">Spara</button>

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
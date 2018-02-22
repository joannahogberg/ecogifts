import React, {Component} from 'react';
import { connect } from 'react-redux';
import GiftForm from '../components/GiftForm/index';

import { renderGiftsByForm } from "../actions/actionCreators";

class GiftFormContainer extends Component {
  render() {
    return (
      <GiftForm {...this.props} onSubmit={renderGiftsByForm} />
    )
  }
  }
  


const mapDispatchToProps = (dispatch) => ({
  renderGiftsByForm: () => dispatch(renderGiftsByForm()),
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(GiftFormContainer);
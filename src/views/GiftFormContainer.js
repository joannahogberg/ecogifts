import React, {Component} from 'react';
import { connect } from 'react-redux';
import GiftForm from '../components/GiftForm/index';

import { renderGiftsByForm } from "../actions/actionCreators";

class GiftFormContainer extends Component {

  handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  }

  render() {
    return (
      // <GiftForm {...this.props} onSubmit={renderGiftsByForm} />
      <GiftForm {...this.props} onSubmit={renderGiftsByForm} />
    )
  }
  }
  


const mapDispatchToProps = (dispatch) => ({
  renderGiftsByForm: () => dispatch(renderGiftsByForm()),
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(GiftFormContainer);
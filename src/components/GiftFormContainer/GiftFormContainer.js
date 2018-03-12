import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import GiftForm from '../GiftForm/GiftForm';
import _ from 'lodash';
import './giftformcontainer.css';

import { renderGiftsByForm } from "../../actions/actionCreators";

class GiftFormContainer extends Component {

  returnTrueChecked = (obj) =>{
    var trues = _(obj).reduce(function(trues, v, k) {
      if(v === true)
          trues.push(k);
      return trues;
  }, [ ]);
  return trues;
}

  handleSubmit = (values, dispatch) => {

    let valueArrs;
    if(values){
      const interestsArr = values.interests ? this.returnTrueChecked(values.interests) : [];
      const personalityArr = values.personality ? this.returnTrueChecked(values.personality) : [];
      const materialArr = values.material ? this.returnTrueChecked(values.material) : [];
      const receiverArr = values.receiver ? this.returnTrueChecked(values.receiver)  : [];
      valueArrs = { interestsArr: interestsArr, personalityArr: personalityArr, materialArr: materialArr, receiverArr: receiverArr };
    }
    else{
      valueArrs = { interestsArr: [], personalityArr: [], materialArr: [], receiverArr: [] };
    }
    dispatch(renderGiftsByForm(valueArrs));
    // this.props.showForm()
  }

  render() {
    return (
      <div className="form-container">
      <p>Här kan du göra ett avancerat sök av presenttips utifrån intressen, personlighet, material eller om presenten skall vara till en vuxen eller kanske ett husdjur :) </p>
      <GiftForm {...this.props} onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

GiftFormContainer.propTypes = {
  showForm: PropTypes.func.isRequired
};

export default connect(

)(GiftFormContainer);
import React, {Component} from 'react';
import { connect } from 'react-redux';
import GiftForm from '../components/GiftForm/index';
import SubmitFormBtn from '../components/SubmitFormBtn/index';
import { Redirect } from 'react-router-dom'
import _ from 'lodash';



//TEST
import { renderGiftsByForm } from "../actions/actionCreators";

class GiftFormContainer extends Component {

  constructor () {
    super();
    this.state = {
      fireRedirect: false
    }
  }

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

 
    this.setState({ fireRedirect: true })
  console.log( valueArrs)
  dispatch(renderGiftsByForm(valueArrs));
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state;

    return (
      <div>
      <GiftForm {...this.props} onSubmit={this.handleSubmit}/>
      {fireRedirect && (
        <Redirect to={from || '/'}/>
      )}
      </div>
    )
  }
  }


  // const mapDispatchToProps = dispatch => {
  //   return {
  //     renderGiftsByForm: () => dispatch(renderGiftsByForm())
  //   }
  // }


export default connect(
  // () => ({}),
  // mapDispatchToProps
)(GiftFormContainer);
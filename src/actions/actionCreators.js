// import * as types from './actionTypes';
// import data from '../data/data';
import _ from 'lodash';

export const showGift = (gift) => {

    return {
      type: 'REQUESTED_GIFT',
      gift
    }
}

export const filterByCategory = (category) => {
  return {
    type: 'FILTERED_BY_CATEGORY',
    category
  }
}

export function returnTrueChecked(obj){
  var trues = _(obj).reduce(function(trues, v, k) {
    if(v === true)
        trues.push(k);
    return trues;
}, [ ]);
return trues;

}

  export function renderGiftsByForm() {
    return (dispatch, getState) => {
      const form = getState().form;
      console.log(form.giftform.values)
      let valueArrs;
      if(form.giftform.values){
        const interestsArr = form.giftform.values.interests ? returnTrueChecked(form.giftform.values.interests) : [];
        const personalityArr = form.giftform.values.personality ? returnTrueChecked(form.giftform.values.personality) : [];
        const materialArr = form.giftform.values.material ? returnTrueChecked(form.giftform.values.material) : [];
        const typeArr = form.giftform.values.type ? returnTrueChecked(form.giftform.values.type)  : [];
        valueArrs = { interestsArr: interestsArr, personalityArr: personalityArr, materialArr: materialArr, typeArr: typeArr };
      }
      else{
        valueArrs = { interestsArr: [], personalityArr: [], materialArr: [], typeArr: [] };
      }
  
console.log(valueArrs)
      dispatch({ 
        type: "FILTER_BY_FORM",
        valueArrs
      });
    };
  }





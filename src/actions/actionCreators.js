import * as types from './actionTypes';
// import _ from 'lodash';
// import {reset} from 'redux-form';



export const showGift = (gift) => {
    return {
      type: 'REQUESTED_GIFT',
      gift
    }
}

export const filterByCategory = (category) => {
  return {
    type: types.FILTERED_BY_CATEGORY,
    category
  }
}

export function renderGiftsByForm(valueArrs) {
  console.log(valueArrs);
  return {
    type: types.FILTER_BY_FORM,
    valueArrs
  };
}

export const renderRandom = () => {
  console.log("Hello renderRandom")
  return {
    type: types.RENDER_RANDOM
  }
}





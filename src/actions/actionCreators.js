// import * as types from './actionTypes';
// import data from '../data/data';

export const showGift = (gift) => {
     // console.log(gift)
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

export const renderGiftsByForm = () => {
    console.log("action form")
    return {
      type: 'FILTERED_BY_FORM'
    }
  }

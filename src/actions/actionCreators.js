// import * as types from './actionTypes';
// import data from '../data/data';

export const showGift = (gift) => {
      console.log(gift)
    return {
      type: 'REQUESTED_GIFT',
      gift
    }
  }

  export const showCategory = () => {
    // console.log(category)
  return {
    type: 'SHOW_CATEGORY'
  }
}

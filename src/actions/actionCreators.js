import * as types from './actionTypes';

export const showGift = (gift) => {
    return {
      type: 'REQUESTED_GIFT',
      gift
    }
}

export const filterByCategory = (category, filter) => {
  return {
    type: types.FILTERED_BY_CATEGORY,
    category
  }
}
  

export function renderGiftsByForm(valueArrs) {
  return {
    type: types.FILTER_BY_FORM,
    valueArrs
  };
}

export function renderRandom() {
  return {
    type: types.RENDER_RANDOM
  };
}

export function search(value) {
  console.log(value)
  return {
    type: types.SEARCH, 
    value
  };
}









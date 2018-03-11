import initialState from "./initialState";
import * as types from "../actions//actionTypes";
// Reducer for gift favorites added by user to localstorage
export default function favorites(state = initialState.favorites, action) {
  // let newState;
  switch (action.type) {
    case types.ADD_GIFT_TO_LIST:
      const addGift = state.find(gift => gift.id === action.gift.id);
      if (addGift) {
        return state.map(gift => {
          return gift.id === action.gift.id
            ? Object.assign({}, action.gift)
            : gift;
        });
      } else {
        return [...state, Object.assign({}, action.gift)];
      }
    case types.REMOVE_GIFT_FROM_LIST:
    console.log(action.gift.id)
      return state.filter(i => i.id !== action.gift.id);

    case types.ADD_TO_LOCALSTORAGE:
    let favorites;
      if (action.favorites) {
        favorites = action.favorites;
      } else {
        favorites = initialState.favorites;
      }
      return favorites;
    default:
      return state;
  }
}
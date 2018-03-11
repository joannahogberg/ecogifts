import initialState from "./initialState";
import * as types from "../actions//actionTypes";
// Reducer for gift favorites added by user to localstorage
export default function favorites(state = initialState.favorites, action) {

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
    console.log(state)
      if (action.favorites.length > 0) {
        console.log(action.favorites.length)
        return action.favorites;
      } else {
 
        // favorites = initialState.favorites;
        return state
      }
      // console.log(favorites)
      // return favorites;
 
    default:
      return state;
  }
}

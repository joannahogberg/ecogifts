import initialState from "./initialState";
import * as types from "../actions//actionTypes";

export default function favorites(state = initialState.favorites, action) {
  let newState;
  
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
      return state.filter(i => i.id !== action.gift.id);
    
      case types.ADD_TO_LOCALSTORAGE:
      if (action.favorites) {
        newState = action.favorites;
      } else {
        newState = initialState.favorites;
      }
      return newState;
    default:
      return state;
  }
}

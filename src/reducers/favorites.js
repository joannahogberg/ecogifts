import initialState from "./initialState";
import * as types from "../actions//actionTypes";

export default function favorites(state = initialState.favorites, action) {
  console.log(state);
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

    default:
      return state;
  }
}

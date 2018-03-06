import initialState from "./initialState";
import * as types from "../actions//actionTypes";

export default function gifts(state = initialState.gifts, action) {
  console.log(action.type)
  let newState;
  switch (action.type) {
    case types.FETCH_GIFTS:
      return action;
    case types.RECEIVE_GIFTS:
      newState = action.gifts;

      return newState;

    case types.RENDER_RANDOM:
      state = initialState.gifts;

      const randomGifts = [];
      for (var i = 0; i < 20; i++) {
        randomGifts[i] = state[Math.floor(Math.random() * state.length)];
      }

      return randomGifts;

    case types.REQUESTED_GIFT:
      newState = action.gift;
      return newState;

    case types.FILTERED_BY_CATEGORY:
      newState = action.gifts;
      return newState;

    case types.SEARCH:
      newState = action.result;
      return newState;

      case types.SELECT:
      console.log(action.result)
      newState = action.result;
      return newState;  

    default:
      return state;
  }
}

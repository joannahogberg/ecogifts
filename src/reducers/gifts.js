import initialState from "./initialState";
import * as types from "../actions//actionTypes";

export default function gifts(state = initialState.gifts, action) {
  let newState;
  switch (action.type) {
    case types.RECEIVE_GIFTS:
      newState = [...action.gifts];
      return newState;

    case types.REQUESTED_GIFT:
      return action.gift;

    case types.FILTERED_BY_CATEGORY:
      newState = [...action.gifts];
      return newState;

    case types.SEARCH:
      newState = [...action.result];
      return newState;

    case types.SELECT:
      newState = [...action.result];
      return newState;

    default:
      return state;
  }
}

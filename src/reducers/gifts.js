import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function gifts(state = initialState.gifts, action) {
  console.log(action.type)
  let newState;
  switch (action.type) {
    // case types.SORT_BY_ASC:
    //   console.log(action.gifts);

    //   newState = action.gifts;
    //   // newState = state.sort(function(a,b) {return (a.productName > b.productName) ? 1 : ((b.productName > a.productName) ? -1 : 0);} );
    //   // console.log(state)
    //   return newState;

    case types.RECEIVE_GIFTS:
      newState = action.gifts;
      return newState;

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
      console.log(state)
      // newState = action.result;
      return state.sort(function(a,b) {return (a.productName > b.productName) ? 1 : ((b.productName > a.productName) ? -1 : 0);} );
  

    default:
      return state;
  }
}

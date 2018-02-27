import initialState from "./initialState";
import * as types from "../actions//actionTypes";

export default function gifts(state = initialState.gifts, action) {
console.log(action.type)
  switch (action.type) {

    case types.INIT:
    return state
    .filter(gift =>
      gift.interest.some(interest => interest === "games")
    )
    .map(gift => {
      return gift;
    }, 0);

    case types.REQUESTED_GIFT:
      return state.filter(i => i.id === action.gift.id);

    case types.FILTERED_BY_CATEGORY:
      // reset state
      state = initialState.gifts;

      return state
        .filter(gift =>
          gift.interest.some(interest => interest === action.category)
        )
        .map(gift => {
          return gift;
        }, 0);

    case types.FILTER_BY_FORM:

      let newState1;
      // check array does not exist, is not an array, or is empty
      if (action.valueArrs.interestsArr.length === 0) {
        newState1 = initialState.gifts;
      } else {
        newState1 = state
          .filter(gift =>
            gift.interest.some(interest =>
              action.valueArrs.interestsArr.includes(interest)
            )
          )
          .map(gift => {
            return gift;
          }, 0);
      }

      let newState2;
      if (action.valueArrs.personalityArr.length === 0) {
        newState2 = newState1;
      } else {
        newState2 = newState1
          .filter(gift =>
            gift.personality.some(personality =>
              action.valueArrs.personalityArr.includes(personality)
            )
          )
          .map(gift => {
            return gift;
          }, 0);
      }

      let newState3;
      if (action.valueArrs.materialArr.length === 0) {
        newState3 = newState2;
      } else {
        newState3 = newState2
          .filter(gift =>
            gift.material.some(material =>
              action.valueArrs.materialArr.includes(material)
            )
          )
          .map(gift => {
            return gift;
          }, 0);
      }

      let newState4;
      if (action.valueArrs.receiverArr.length === 0) {
        newState4 = newState3;
      } else {
        newState4 = newState3
          .filter(gift =>
            gift.receiver.some(receiver =>
              action.valueArrs.receiverArr.includes(receiver)
            )
          )
          .map(gift => {
            return gift;
          }, 0);
      }

      state = newState4;

      return state;

    default:
      return state;
  }
}

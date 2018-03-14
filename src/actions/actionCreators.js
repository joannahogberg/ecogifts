import * as types from "./actionTypes";

export function filterBySearch(result) {
  return {
    type: types.SEARCH,
    result
  };
}

export function search(value) {
  return dispatch => {
    dispatch(fetchGiftsBegin());
    return fetch("https://ecogifts.herokuapp.com/gifts")
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        if (response.status === 200) {
          const newVal = value.toLowerCase();
          let result = response.data.filter(gift =>
            gift.productName.toLowerCase().includes(newVal)
          );

          dispatch(filterBySearch(result));
        } else {
          var error = {
            content:
              "There was an error getting the gifts list. Please try again."
          };
          dispatch(fetchGiftsError(error));
        }
      });
  };
}

export function receiveGifts(data) {
  return { type: types.RECEIVE_GIFTS, gifts: data };
}

export const fetchGiftsBegin = () => ({
  type: types.FETCH_GIFTS_BEGIN
});

export function fetchGifts() {
  return dispatch => {
    dispatch(fetchGiftsBegin());
    return fetch("https://ecogifts.herokuapp.com/gifts")
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        if (response.status === 200) {
          // dispatch(receiveGifts(response.data));
          setTimeout(function() {
            dispatch(receiveGifts(response.data));
          }, 700);
          //response.data from heroku, calls receiveGifts function
        } else {
          var error = {
            content:
              "There was an error getting the gifts list. Please try again."
          };
          dispatch(fetchGiftsError(error));
        }
      });
  };
}

export function filteredGifts(data) {
  return { type: types.FILTERED_BY_CATEGORY, gifts: data };
}

export const filterByCategory = category => {
  return dispatch => {
    dispatch(fetchGiftsBegin());
    return fetch("https://ecogifts.herokuapp.com/gifts")
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        if (response.status === 200) {
          const state = response.data;

          let newState1;
          if (category === 200) {
            newState1 = state.filter(gift => gift.price < 200);
          } else {
            newState1 = state
              .filter(gift =>
                gift.interest.some(interest => category.includes(interest))
              )
              .map(gift => {
                return gift;
              }, 0);
          }

          // dispatch(filteredGifts(newState1));
          setTimeout(function() {
            dispatch(filteredGifts(newState1));
          }, 700);
        } else {
          var error = {
            content:
              "There was an error getting the gifts list. Please try again."
          };
          dispatch(fetchGiftsError(error));
        }
      });
  };
};

export function receiveSingleGift(data) {
  return { type: types.REQUESTED_GIFT, gift: data };
}

export const fetchSingleGift = id => {
  return dispatch => {
    dispatch(fetchGiftsBegin());
    return fetch("https://ecogifts.herokuapp.com/gifts?id=" + id)
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        if (response.status === 200) {
          dispatch(receiveSingleGift(response.data));
        } else {
          var error = {
            content:
              "There was an error getting the gifts list. Please try again."
          };
          dispatch(fetchGiftsError(error));
        }
      });
  };
};

export function renderGiftsByForm(valueArrs) {
  return dispatch => {
    fetch("https://ecogifts.herokuapp.com/gifts")
      .then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        }))
      )
      .then(response => {
        if (response.status === 200) {
          const state = response.data;

          let newState1;
          // check array does not exist, is not an array, or is empty
          if (valueArrs.interestsArr.length === 0) {
            newState1 = state;
          } else {
            newState1 = state
              .filter(gift =>
                gift.interest.some(interest =>
                  valueArrs.interestsArr.includes(interest)
                )
              )
              .map(gift => {
                return gift;
              }, 0);
          }

          let newState2;
          if (valueArrs.personalityArr.length === 0) {
            newState2 = newState1;
          } else {
            newState2 = newState1
              .filter(gift =>
                gift.personality.some(personality =>
                  valueArrs.personalityArr.includes(personality)
                )
              )
              .map(gift => {
                return gift;
              }, 0);
          }

          let newState3;
          if (valueArrs.materialArr.length === 0) {
            newState3 = newState2;
          } else {
            newState3 = newState2
              .filter(gift =>
                gift.material.some(material =>
                  valueArrs.materialArr.includes(material)
                )
              )
              .map(gift => {
                return gift;
              }, 0);
          }

          let newState4;
          if (valueArrs.receiverArr.length === 0) {
            newState4 = newState3;
          } else {
            newState4 = newState3
              .filter(gift =>
                gift.receiver.some(receiver =>
                  valueArrs.receiverArr.includes(receiver)
                )
              )
              .map(gift => {
                return gift;
              }, 0);
          }

          dispatch(filteredGifts(newState4));
          // setTimeout(function() {
          //   dispatch(filteredGifts(newState4));
          // }, 1500);
        } else {
          var error = {
            content:
              "There was an error getting the gifts list. Please try again."
          };
          dispatch(fetchGiftsError(error));
        }
      });
  };
}

export function addGiftToList(gift) {
  return {
    type: types.ADD_GIFT_TO_LIST,
    gift
  };
}

export function removeGiftFromList(gift) {
  return {
    type: types.REMOVE_GIFT_FROM_LIST,
    gift: gift
  };
}

export function addToLocalStorage(favorites) {
  return {
    type: types.ADD_TO_LOCALSTORAGE,
    favorites
  };
}

export function getFromLocalStorage() {
  let favorites = [];
  const persistedState = localStorage.getItem("reduxState");
  if (persistedState) {
    favorites = JSON.parse(persistedState);
  }
  return dispatch => {
    dispatch(addToLocalStorage(favorites));
  };
}

export const setVisibilityFilter = filter => ({
  type: types.SET_VISIBILITY_FILTER,
  filter
});

export const fetchGiftsError = error => ({
  type: types.FETCH_ERROR,
  payload: error
});

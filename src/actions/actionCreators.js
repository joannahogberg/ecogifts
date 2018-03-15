import * as types from "./actionTypes";

export function filterBySearch(result) {
  return {
    type: types.SEARCH,
    result
  };
}

export function search(value) {
  return dispatch => {
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
            "Något blev fel vid laddningen. Vänligen försök igen."
          };
          dispatch(fetchGiftsError(error));
        }
      });
  };
}

export const fetchGiftsBegin = () => ({
  type: types.FETCH_GIFTS_BEGIN
});

export function receiveGifts(data) {
  return { type: types.RECEIVE_GIFTS, gifts: data };
}

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
          setTimeout(function() {
            dispatch(receiveGifts(response.data));
          }, 1200);
          //response.data from heroku, calls receiveGifts function
        } else {
          var error = {
            content:
            "Något blev fel vid laddningen. Vänligen försök igen."
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
            //Array.prototype.filter() method to create a new array with all elements that
            //pass the test implemented by the Object.prototype.some() method.
            
            //The array.prototype.map() method then creates a new array with the results of calling a provided
            //function on every element in this array.
            newState1 = state
              .filter(gift =>
                //Object.prototype.some() method to test whether
                //some element in the array match the category value that is implemented by the provided function.      
                gift.interest.some(interest => category.includes(interest))
              )
              .map(gift => {
                return gift;
              }, 0);
          }
            dispatch(filteredGifts(newState1));
       
        } else {
          var error = {
            content:
              "Något blev fel vid laddningen. Vänligen försök igen."
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
        } else {
          var error = {
            content:
            "Något blev fel vid laddningen. Vänligen försök igen."
          };
          dispatch(fetchGiftsError(error));
        }
      });
  };
}

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
          setTimeout(function() {
            dispatch(receiveSingleGift(response.data));
          }, 1000);
        } else {
          var error = {
            content:
              "Något blev fel... Vänligen försök igen."
          };
          dispatch(fetchGiftsError(error));
        }
      });
  };
};

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

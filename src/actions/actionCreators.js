import * as types from "./actionTypes";

export function renderRandom() {
  return {
    type: types.RENDER_RANDOM
  };
}



export function filterBySearch(result) {
  return {
    type: types.SEARCH,
    result
  };
}

export function filterBySelect(result) {
  console.log(result)
  return {
    type: types.SELECT,
    result
  };
}

export function select(value) {
  console.log(value)
  
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: types.SHOW_SELECTED
  };
  
  // return(dispatch, getState)=>{
  //   const state = getState().gifts;
  //   const newState = state.sort(function(a,b) {return (a.productName > b.productName) ? 1 : ((b.productName > a.productName) ? -1 : 0);} );
  //   console.log(state)
  //   dispatch(filterBySelect(newState));
  // }

  // return dispatch => {
  //   fetch("https://ecogifts.herokuapp.com/gifts")
  //     .then(response =>
  //       response.json().then(data => ({
  //         data: data,
  //         status: response.status
  //       }))
  //     )
  //     .then(response => {
  //       if (response.status === 200) {
  //         const newVal = value.toLowerCase();
  //         let result = response.data.filter(gift =>
  //           gift.productName.toLowerCase().includes(newVal)
  //         );

  //         dispatch(filterBySearch(result));
  //       } else {
  //         var flash = {
  //           type: "error",
  //           title: "Error getting gift list",
  //           content:
  //             "There was an error getting the gifts list. Please try again."
  //         };
  //         dispatch({ type: "DISPLAY_FLASH", data: flash });
  //       }
  //     });
  // };
}

export function search(value) {
  console.log(value)
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
          const newVal = value.toLowerCase();
          let result = response.data.filter(gift =>
            gift.productName.toLowerCase().includes(newVal)
          );

          dispatch(filterBySearch(result));
        } else {
          var flash = {
            type: "error",
            title: "Error getting gift list",
            content:
              "There was an error getting the gifts list. Please try again."
          };
          dispatch({ type: "DISPLAY_FLASH", data: flash });
        }
      });
  };
}

export function receiveGifts(data) {
  return { type: types.RECEIVE_GIFTS, gifts: data };
}

export function fetchGifts() {
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
          dispatch(receiveGifts(response.data));
        } else {
          var flash = {
            type: "error",
            title: "Error getting gift list",
            content:
              "There was an error getting the gifts list. Please try again."
          };
          dispatch({ type: "DISPLAY_FLASH", data: flash });
        }
      });
  };
}

export function filteredGifts(data) {
  return { type: types.FILTERED_BY_CATEGORY, gifts: data };
}

export const filterByCategory = category => {
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
          console.log(category);
          let newState1;
          if (category === 200) {
            console.log("yes");
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

          console.log(newState1);
          dispatch(filteredGifts(newState1));
        } else {
          var flash = {
            type: "error",
            title: "Error getting gift list",
            content:
              "There was an error getting the gifts list. Please try again."
          };
          dispatch({ type: "DISPLAY_FLASH", data: flash });
        }
      });
  };
};

export function receiveSingleGift(data) {
  return { type: types.REQUESTED_GIFT, gift: data };
}

export const fetchSingleGift = id => {
  return dispatch => {
    fetch("https://ecogifts.herokuapp.com/gifts?id=" + id)
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
          var flash = {
            type: "error",
            title: "Error getting gift",
            content: "There was an error getting the gift. Please try again."
          };
          dispatch({ type: "DISPLAY_FLASH", data: flash });
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
          var flash = {
            type: "error",
            title: "Error getting gift list",
            content:
              "There was an error getting the gifts list. Please try again."
          };
          dispatch({ type: "DISPLAY_FLASH", data: flash });
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
  console.log(gift);
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
  let initState = {};
  const persistedState = localStorage.getItem("reduxState");
  if (persistedState) {
    initState = JSON.parse(persistedState);
  }
  return dispatch => {
    dispatch(addToLocalStorage(initState));
  };
}


export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})



// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }
// import * as types from './actionTypes';
// import data from '../data/data';

export const showGift = (gift) => {
     // console.log(gift)
    return {
      type: 'REQUESTED_GIFT',
      gift
    }
}

export const filterByCategory = (category) => {
  return {
    type: 'FILTERED_BY_CATEGORY',
    category
  }
}

// export const renderGiftsByForm = () => {
//     console.log("action form")
//     return {
//       type: '@@redux-form/SET_SUBMIT_SUCCEEDED'
//     }
//   }


// export function renderGiftsByForm() {


//     return (dispatch, getState) => {
//       const form = getState().form;
//       console.log(form)
//       const checkboxArrays = {
//         interests: form.giftform.interests.value,
//         personality: form.giftform.personality.value,
//         material: form.giftform.material.value,
//         type: form.giftform.type.value
//       };
//       dispatch({
//         type: '@@redux-form/SET_SUBMIT_SUCCEEDED',
//         checkboxArrays
//       });
//     }
//   }

  function typeSomething(data){
    return {
        type: "FORMDATA",
        value: data
    }
}

export function renderGiftsByForm(data) {
  
    return (dispatch, getState) => {
      console.log(data)
        return dispatch(typeSomething(data))
    }
}

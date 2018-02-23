import initialState from './initialState';

export default function gifts(state = initialState.gifts, action){
<<<<<<< HEAD
    // console.log(state)
=======

>>>>>>> 367a0eae19b0dcd5c9fd612d74521a0c06c0224f
    switch (action.type) {
        case 'REQUESTED_GIFT':
  
            return state.filter( i => i.id === action.gift.id);

        case 'FILTERED_BY_CATEGORY':

        state = initialState.gifts;
        
        return state.filter(gift => 
            gift.interest.some(interest => interest === action.category)
          )
          .map(gift => {
            return gift;
          }, 0);
        case '@@redux-form/SET_SUBMIT_SUCCEEDED':
   
console.log(action)
        return state.filter(gift => 
          gift.interest.some(interest => interest === "fair-trade")
        )
        .map(gift => {
          return gift;
        }, 0);
        // return Object.assign({}, state, {
        
        //   test: [
        //     action.test
        //   ]
        // })
    
        default:
            return state;
        
    }
};
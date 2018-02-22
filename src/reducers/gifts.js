import initialState from './initialState';

export default function gifts(state = initialState.gifts, action){
 //   console.log(state)
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
        case 'FILTERED_BY_FORM':
          console.log("form")
          break
        default:
            return state;
    }
};
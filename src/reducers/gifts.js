import initialState from './initialState';

export default function gifts(state = initialState.gifts, action){
console.log("hej")
    switch (action.type) {
        case 'REQUESTED_GIFT':
  
            return state.filter( i => i.id === action.gift.id);
        default:
            return state;
    }
};
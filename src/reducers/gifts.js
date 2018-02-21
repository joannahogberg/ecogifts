import initialState from './initialState';

export default function gifts(state = initialState.gifts, action){
console.log("hej")
    switch (action.type) {
        case 'REQUESTED_GIFT':
  
            return state.filter( i => i.id === action.gift.id);

        case 'SHOW_CATEGORY':

            return state.filter((gift) => gift.interest.some((interest) => interest === "home"))
        .map(gift => {
            return gift;
        }, 0);
        
        default:
            return state;
    }
};
import initialState from './initialState';

export default function gifts(state = initialState.gifts, action){
<<<<<<< HEAD
=======
console.log(action.type)
>>>>>>> 93e31191725b91d376c9956b0da21aea1952ad9f
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
<<<<<<< HEAD
        case '@@redux-form/SET_SUBMIT_SUCCEEDED':
        console.log(action)
          return action

        // return state.filter(gift => 
        //   gift.interest.some(interest => interest === "fair-trade")
        // )
        // .map(gift => {
        //   return gift;
        // }, 0);
        // return Object.assign({}, state, {
        
        //   test: [
        //     action.test
        //   ]
        // })
=======
        case 'FILTER_BY_FORM':
       
       let newState1;
          // check array does not exist, is not an array, or is empty
       if (action.valueArrs.interestsArr.length === 0) {
        newState1 = initialState.gifts;
     
      }else{
        newState1 = state.filter(gift => 
          gift.interest.some(interest => action.valueArrs.interestsArr.includes(interest))
        )
        .map(gift => {
          return gift;
        }, 0);
      }
     
      let newState2;

      if (action.valueArrs.personalityArr.length === 0) {
        newState2 = newState1;
     
      }else{
        newState2 = newState1.filter(gift => 
          gift.personality.some(personality => action.valueArrs.personalityArr.includes(personality))
        )
        .map(gift => {
          return gift;
        }, 0);
      }
      let newState3;
     
      if (action.valueArrs.materialArr.length === 0) {
        newState3 = newState2;
     
      }else{
        newState3 = newState2.filter(gift => 
          gift.material.some(material => action.valueArrs.materialArr.includes(material))
        )
        .map(gift => {
          return gift;
        }, 0);
      }

      let newState4
      if (action.valueArrs.typeArr.length === 0) {
        newState4 = newState3;
     
      }else{
        newState3 = newState3.filter(gift => 
          gift.type.some(type => action.valueArrs.typeArr.includes(type))
        )
        .map(gift => {
          return gift;
        }, 0);
      }

   
    
      console.log(newState4)
       

          // return state = newState4;
         
>>>>>>> 93e31191725b91d376c9956b0da21aea1952ad9f
    
        default:
            return state;
        
    }
};
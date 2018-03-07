import { createSelector } from 'reselect'
// selector
const getGifts = (state) => state.gifts
const getSalongs = props => props.gifts;
//const getSorted =(state)=> state.gifts.sort((a, b) => a.productName.localeCompare(b.name));



const getSorted = (state, props) => {
    const id = props.id
    const sortedState = state.gifts.sort(function(a,b) {return (a.productName > b.productName) ? 1 : ((b.productName > a.productName) ? -1 : 0);} );

    return sortedState
  }
// reselect function
export const getGiftsState = createSelector(
  [ getGifts ],
  (gift) => gift
)

// The first parameter of the createSelector is the function you pass to it, the second is what is returned from the first function.
// export const sortSelector = createSelector(
//     console.log("hej")
//     [ getSorted ],
//     (gift) => gift
//   )

  export const sortSelector = () => createSelector(
    [ getSorted ],
    (gift) => gift
  )

// const getGifts = (state, props) => state.foo.bar.find( b => b.id === props.id )
// export const makeGetBarState = () => createSelector(
//   getBar,
//   (bar) => ({ bar })
// )
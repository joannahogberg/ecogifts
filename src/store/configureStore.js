import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers/index';
// import * as types from "../actions/actionTypes";
// import * as giftsActions from '../actions/actionCreators';

export const history = createHistory()

const enhancers = []
const middleware = [
    thunk,
    routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}



const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    composedEnhancers)

store.subscribe(() => {
    //set localstorage, namnge själva item, vad hämta state, endast favorites
    localStorage.setItem('reduxState', JSON.stringify(store.getState().favorites))
})
console.log(store.getState())
    // store.dispatch(giftsActions.fetchGifts())

export default store
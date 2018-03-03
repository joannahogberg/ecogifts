import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers/index';
import * as types from "../actions//actionTypes";

export const history = createHistory()

// const initialState = {}

// // TEST
let initState = {}
const persistedState = localStorage.getItem('reduxState')
    // console.log(persistedState)
    // if persistedState is not empty then assign parsed persistedState to initState
if (persistedState) {
    initState = JSON.parse(persistedState)
}

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
    // initialState,
    initState,
    composedEnhancers)


store.dispatch({
    type: types.ADD_TO_LOCALSTORAGE,
    initState
})

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState().favorites))
})

export default store
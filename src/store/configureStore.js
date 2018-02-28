import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers/index';
//import { autoRehydrate} from 'redux-presist'
// import { loadState, saveState } from './localstorage';
import { save, load } from "redux-localstorage-simple"
export const history = createHistory()

const initialState = {}
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
    applyMiddleware(...middleware, save()),
    ...enhancers
)
// const persistedState = loadState();

const store = createStore(
    rootReducer,
    initialState,
    // persistedState,
    composedEnhancers,
    load()
)


export default store
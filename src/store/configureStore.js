import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers/index';
import { renderRandom } from "../actions/actionCreators";
// import { loadState, saveState } from './localStorage'
import _ from 'lodash';

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

// const persistedState = loadState();

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers)

    // const configureStore = () => {

    //     const persistedState = loadState();
    //     const store = createStore(rootReducer,
    //         initialState,
    //         persistedState,
    //         composeEnhancers(
    //             applyMiddleware(...middleware),
    //             ...enhancers
    //           ))

    //     store.subscribe(_.throttle(() => {
    //       saveState({
    //         gifts: store.getState().gifts
    //       });
    //     }, 1000));
      
    //     return store;
    //   }
    
    // store.subscribe(_.throttle(() => {
       
    //     saveState({
    //       gifts: store.getState().gifts
    //     });
    //   }, 1000));

// const store = configureStore();

store.dispatch(renderRandom())

export default store
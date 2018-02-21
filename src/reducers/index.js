import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';


import gifts from './gifts';

const rootReducer = combineReducers({
  gifts,
  routing: routerReducer
});

export default rootReducer;
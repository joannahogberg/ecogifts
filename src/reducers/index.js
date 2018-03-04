import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import gifts from './gifts';
import favorites from './favorites';

//put data in state
const rootReducer = combineReducers({
    gifts,
    favorites,
    routing: routerReducer,
    form: formReducer
});

export default rootReducer;
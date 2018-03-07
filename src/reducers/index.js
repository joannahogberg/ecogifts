import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import gifts from './gifts';
import favorites from './favorites';
import visibilityFilter from './visibilityFilter';


// put data in state
const rootReducer = combineReducers({
    gifts,
    favorites,
    visibilityFilter,
    routing: routerReducer,
    form: formReducer
});

export default rootReducer;
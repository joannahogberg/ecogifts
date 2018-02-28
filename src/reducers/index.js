import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import gifts from './gifts';


//put data in state
const rootReducer = combineReducers({
    gifts,
    routing: routerReducer,
    form: formReducer
});

export default rootReducer;
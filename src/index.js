import React from 'react';
import {render} from 'react-dom';
//import components
import App from './components/App/App';
//import react router deps
import { Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store, {history} from './store/configureStore';



const router = (
    <Provider store={store} >
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App} />
    </Router>
    </Provider>

)

render(router, document.getElementById('root'));



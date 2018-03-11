import{ bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators.js';
import Main from './Main/Main';

function mapStateToProps(state){
    return{
        gifts: state.gifts,
        favorites: state.favorites
    }
}
function mapDispachToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
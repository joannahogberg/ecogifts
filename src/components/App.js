// import{ bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as actionCreators from '../actions/actionCreators.js';
// import Main from './Main/Main';

// function mapStateToProps(state){
//     return{
//         gifts: state.gifts,
//         favorites: state.favorites
//     }
// }
// function mapDispachToProps(dispatch){
//     return bindActionCreators(actionCreators, dispatch)
// }

// const App = connect(mapStateToProps, mapDispachToProps)(Main);

// export default App;

import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import{ bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import GiftsGrid from '../views/GiftsGrid/GiftsGrid'
import SingleGift from '../views/SingleGift/SingleGift'
import * as actionCreators from '../actions/actionCreators.js';

// import About from '../../views/About/About'
import Header from './Header/Header';
// import FavoritesList from './../FavoritesList/FavoritesList';
import Main from './Main/Main';

// function App(props) {
//   console.log(props)
//   return (
//     <div className="wrapper">
//     <div id="top"></div>
//       <Header {...props}/>
//       <Main>
//           <Route exact path="/" component={GiftsGrid} />
//           <Route path="/view/:giftId" component={SingleGift} />
//           {/* <Route path="/header" component={About} /> */}
   
//         {/* <FavoritesList {...props}/> */}
   
//      </Main>
//     </div>
//   );
// }

class App extends Component {
    render() {
        console.log(this.props)
      return (
        <div className="wrapper">
        <div id="top"></div>
          <Header />
          <Main {...this.props}>
              <Route exact path="/" component={GiftsGrid} />
              <Route path="/view/:giftId" component={SingleGift}/>
         </Main>
        </div>

      );
    }
  }

function mapStateToProps(state){
    return{
        gifts: state.gifts,
        favorites: state.favorites
    }
}
// function mapDispachToProps(dispatch){
//     return bindActionCreators(actionCreators, dispatch)
// }

function mapDispatchToProps(dispatch) {
    return {
        actionCreators: bindActionCreators(actionCreators, dispatch)
    };
}


export default connect(mapStateToProps,mapDispatchToProps )(App);
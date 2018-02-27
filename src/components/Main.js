import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Link, Route } from 'react-router-dom'
import { renderRandom } from "../actions/actionCreators";
import GiftsGrid from '../views/GiftsGrid'
import SingleGift from '../views/SingleGift'
import GiftFormContainer from '../views/GiftFormContainer'
import { connect } from 'react-redux';


class Main extends Component {

  handleClick=()=>{
    renderRandom()
console.log(this.props)

  }
  render() {
    return (
      <main>
        <h1>
          {/* <Link to="/" onClick={()=>this.handleClick()}>ecoGifts</Link> */}
          <Link to="/" onClick={()=>this.props.renderRandom()}>ecoGifts</Link>
          <Link to="/gift-form">Sök present</Link>
        </h1>
        <Route exact path="/" component={GiftsGrid} />
        <Route path="/view/:giftId" component={SingleGift} />
        <Route path="/gift-form" component={GiftFormContainer} />
      </main>
    );
  }
}

// export default Main;

function mapStateToProps(state, props) {
  return {
      gifts: state.gifts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    renderRandom: () => dispatch(renderRandom())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
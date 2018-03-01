import React, { Component } from "react";
import { Route } from "react-router-dom";
import GiftsGrid from "../../views/GiftsGrid/GiftsGrid";
import SingleGift from "../../views/SingleGift/SingleGift";
import GiftFormContainer from "../../views/GiftFormContainer/GiftFormContainer";
import Header from "./../Header/Header";
import GiftsList from "./../GiftsList/GiftsList";
import "./main.css";
import * as types from "../../actions/actionTypes";
import { connect } from "react-redux";

function fetchGiftsRequest() {
  return {
    type: types.FETCH_REQUEST
  };
}

function fetchGiftsSuccess(payload) {
  return {
    type: types.FETCH_SUCCESS,
    payload
  };
}

function fetchGiftsError() {
  return {
    type: types.FETCH_ERROR
  };
}
function fetchGifts() {
  const URL = "https://ecogifts.herokuapp.com/gifts";
  return fetch("https://ecogifts.herokuapp.com/gifts", { method: "GET" }).then(
    response => Promise.all([response, response.json()])
  );
}
function fetchGiftsRedux() {
  return dispatch => {
    dispatch(fetchGiftsRequest());
    return fetchGifts().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchGiftsSuccess(json));
      } else {
        dispatch(fetchGiftsError());
      }
    });
  };
}

// fetch("https://ecogifts.herokuapp.com/gifts")
// .then((resp) => resp.json())  
// .then(function(data) {
//   console.log(data)
//   });


class Main extends Component {
  componentDidMount() {
    fetchGiftsRedux();
  }

  render() {
    return (
      <div className="wrapper">
        <Header />


        <ul>
          {this.props.gifts &&
            this.props.gifts.map(gift => {
              return <li>{gift.productName}</li>;
            })}
        </ul>


        <main>
          <div className="container">
            <Route exact path="/" component={GiftsGrid} />
            <Route path="/view/:giftId" component={SingleGift} />
            <Route path="/gift-form" component={GiftFormContainer} />
          </div>
          <GiftsList />
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifts: state.gifts
  };
}
export default connect(mapStateToProps)(Main);

// export default Main;

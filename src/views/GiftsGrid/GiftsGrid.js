import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import Gift from "../../components/Gift/Gift";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import GiftFormContainer from "../../components/GiftFormContainer/GiftFormContainer";
import SearchBar from '../../components/SearchBar/SearchBar';
import Select from '../../components/Select/Select';
// import { fetchGifts, } from "../../actions/actionCreators";
import * as giftsActions from '../../actions/actionCreators';
import * as types from "../../actions//actionTypes";
import { connect } from "react-redux";
import './giftsgrid.css';


const getVisibleGifts = (gifts, filter) => {

  let newState
  switch (filter) {
    case types.SHOW_ALL:
   newState = gifts.sort(function(a,b) {return (a.productName > b.productName) ? 1 : ((b.productName > a.productName) ? -1 : 0);} );
      return newState
    case types.SHOW_SELECTED:
   newState = gifts.sort(function(a,b) {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0);} );
    return newState
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}


class GiftsGrid extends Component {

  constructor () {
    super();
    this.state = {
      showForm: false
    }
  }

  componentWillMount() {
    this.props.giftsActions.fetchGifts();
}
componentWillUpdate() {
  console.log(this.props)
  // L.geoJson(this.props.data).addTo(this.map)
}

showForm = () =>{
  if(!this.state.showForm){
    this.setState({showForm: true})
  }else{
    this.setState({showForm: false})
  }

}

// dispatching an action based on state change
// componentWillUpdate(nextProps, nextState) {
//   console.log(nextProps)
//   console.log(nextState)
//   // if (nextState.open == true && this.state.open == false) {
//   //   this.props.onWillOpen();
//   // }
// }

  render() {
    const { showForm } = this.state;

    const btnText = showForm ? "DÖLJ FORMULÄR":"PRESENTTIPSGENERATOR";

    console.log(this.props)
    return (
      <div>
      <div className="search-group">       
        <SearchBar />
        </div>
        <ButtonGroup />
        <button onClick={() => this.showForm ()} className="filter-btn">{btnText}</button>
   {showForm && (
       <GiftFormContainer/>
      )}
      <Select />
        <div className="gifts-grid">

          {this.props.gifts.map((gift, i) => (
            <Gift {...this.props} key={i} i={i} gift={gift} />
          ))}
        </div>
      </div>
    );
  }
}

GiftsGrid.propTypes = {
  gifts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      productName: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      interest: PropTypes.array.isRequired,
      personality: PropTypes.array.isRequired,
      material: PropTypes.array.isRequired,
      receiver: PropTypes.array.isRequired
    })
  )
};

// const mapStateToProps = state => ({
//   gifts: state.gifts
// });
const mapStateToProps = (state) => ({
  gifts: getVisibleGifts(state.gifts, state.visibilityFilter)
})


function mapDispatchToProps(dispatch) {
  return {
     giftsActions: bindActionCreators(giftsActions, dispatch)
  };
}
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GiftsGrid)



          {/* <div className="select-group"><SelectOptionsForm /></div> */}
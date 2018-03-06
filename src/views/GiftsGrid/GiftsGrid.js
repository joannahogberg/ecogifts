import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import Gift from "../../components/Gift/Gift";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import GiftFormContainer from "../../components/GiftFormContainer/GiftFormContainer";
import SearchBar from '../../components/SearchBar/SearchBar';
// import { fetchGifts, } from "../../actions/actionCreators";
import * as giftsActions from '../../actions/actionCreators';
import SelectOptionsForm from '../../components/GiftForm/SelectOptionsForm'
import { connect } from "react-redux";
import './giftsgrid.css';


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

showForm = () =>{
  if(!this.state.showForm){
    this.setState({showForm: true})
  }else{
    this.setState({showForm: false})
  }

}

// dispatching an action based on state change
componentWillUpdate(nextProps, nextState) {
  console.log(nextProps)
  console.log(nextState)
  // if (nextState.open == true && this.state.open == false) {
  //   this.props.onWillOpen();
  // }
}

  render() {
    const { showForm } = this.state;
    const btnText = showForm ? "DÖLJ FORMULÄR":"PRESENTTIPSGENERATOR";

    console.log(this.props)
    return (
      <div className="gifts-grid">
      <div className="search-goup">       
        <SearchBar />
        </div>
        <ButtonGroup />
        <button onClick={() => this.showForm ()} className="filter-btn">{btnText}</button>
   {showForm && (
       <GiftFormContainer/>
      )}
      <SelectOptionsForm />
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

const mapStateToProps = state => ({
  gifts: state.gifts
});


function mapDispatchToProps(dispatch) {
  return {
     giftsActions: bindActionCreators(giftsActions, dispatch)
  };
}
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GiftsGrid)


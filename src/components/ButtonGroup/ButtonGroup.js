import React, { Component } from "react";
import PropTypes from "prop-types";
import { filterByCategory} from "../../actions/actionCreators";
import { connect } from "react-redux";
import './buttongroup.css';
import { Search, DollarSign, Filter, Headphones, Heart, Wind, Sun, Anchor } from "react-feather";

// import * as giftsActions from '../../actions/actionCreators';

class ButtonGroup extends Component {
  render() {
    return (
      <div className="category-container">
        <div onClick={() => this.props.filterByCategory(["outdoor", "travel"])} className="category-item wide"> <Anchor size={20}/>ÄVENTYR & FRITIDSÄLSKAREN</div>
        <div onClick={() => this.props.filterByCategory(["nature", "animals", "gardening"])} className="category-item "><Sun size={20}/>NATUR & DJURÄLSKAREN </div>
        <div onClick={() => this.props.filterByCategory(["technology", "music"])} className="category-item"> <Headphones size={20}/>TEKNIKNÖRDEN</div>
        <div onClick={() => this.props.filterByCategory("charity")} className="category-item wide"><Heart size={20}/>PRESENTER SOM GÖR SKILLNAD </div> 
        <div onClick={() => this.props.filterByCategory(["food", "candy"])} className="category-item wide"><Filter size={20}/>FÖR MATENTUSIASTEN </div> 
        <div onClick={() => this.props.filterByCategory(200)} className="category-item"><DollarSign size={20}/>PRESENTER UNDER 200 </div> 
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  filterByCategory: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  gifts: state.gifts
});

function mapDispatchToProps(dispatch) { 
  return {
    filterByCategory: (category) => dispatch(filterByCategory(category))
  };
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ButtonGroup)
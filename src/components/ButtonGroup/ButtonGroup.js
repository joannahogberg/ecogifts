import React, { Component } from "react";
import PropTypes from "prop-types";
import { filterByCategory} from "../../actions/actionCreators";
import { connect } from "react-redux";
import './buttongroup.css';

// import * as giftsActions from '../../actions/actionCreators';

class ButtonGroup extends Component {
  render() {
    return (
      <div className="category-container">
        <div onClick={() => this.props.filterByCategory(["outdoor", "travel"])} className="category-item wide">ÄVENTYR & FRITIDSÄLSKAREN</div>
        <div onClick={() => this.props.filterByCategory(["nature", "animals", "gardening"])} className="category-item">NATUR & DJURÄLSKAREN</div>
        <div onClick={() => this.props.filterByCategory(["technology", "music"])} className="category-item">TEKNIKNÖRDEN</div>
        <div onClick={() => this.props.filterByCategory("charity")} className="category-item wide">PRESENTER SOM GÖR SKILLNAD</div> 
        <div onClick={() => this.props.filterByCategory(["food", "candy"])} className="category-item wide">FÖR MATENTUSIASTEN</div> 
        <div onClick={() => this.props.filterByCategory(200)} className="category-item">PRESENTER UNDER 200</div> 
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
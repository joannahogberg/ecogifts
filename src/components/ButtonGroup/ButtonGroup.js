import React, { Component } from "react";
import PropTypes from "prop-types";
import { filterByCategory} from "../../actions/actionCreators";
import { connect } from "react-redux";
import './buttongroup.css';

// import * as giftsActions from '../../actions/actionCreators';

class ButtonGroup extends Component {
  render() {
    return (
      <div className="btn-group">
        <button onClick={() => this.props.filterByCategory(["outdoor", "travel"])} className="filter-btn">ÄVENTYR & FRITIDSÄLSKAREN</button>
        <button onClick={() => this.props.filterByCategory(["nature", "animals", "gardening"])} className="filter-btn">NATUR & DJURÄLSKAREN</button>
        <button onClick={() => this.props.filterByCategory(["technology", "music"])} className="filter-btn">TEKNIKNÖRDEN</button>
        <button onClick={() => this.props.filterByCategory("charity")} className="filter-btn">PRESENTER SOM GÖR SKILLNAD</button> 
        <button onClick={() => this.props.filterByCategory(["food", "candy"])} className="filter-btn">FÖR MATENTUSIASTEN</button> 
        <button onClick={() => this.props.filterByCategory(200)} className="filter-btn">PRESENTER UNDER 200</button> 
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
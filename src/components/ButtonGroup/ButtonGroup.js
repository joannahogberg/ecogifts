import React, { Component } from "react";
import PropTypes from "prop-types";
import { filterByCategory} from "../../actions/actionCreators";
import { connect } from "react-redux";
import './buttongroup.css';

// import * as giftsActions from '../../actions/actionCreators';

class ButtonGroup extends Component {
  render() {
    return (
      <div className="btn-goup">
        <button onClick={() => this.props.filterByCategory("home")} className="filter-btn">INREDNING</button>
        <button onClick={() => this.props.filterByCategory("outdoor")} className="filter-btn">FRILUFTSLIV</button>
        <button onClick={() => this.props.filterByCategory("fair-trade")} className="filter-btn">FAIR-TRADE</button>
        <button onClick={() => this.props.filterByCategory("charity")} className="filter-btn">VÄLGÖRENHET</button>
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
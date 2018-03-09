import React, { Component } from "react";
import PropTypes from "prop-types";
import { HashLink as Link } from 'react-router-hash-link';
import { filterByCategory} from "../../actions/actionCreators";
import { connect } from "react-redux";
import { DollarSign, Filter, Headphones, Heart, Sun, Anchor } from "react-feather";
import './buttongroup.css';
class ButtonGroup extends Component {
  render() {
    return (
      <div className="category-container">
        <div onClick={() => this.props.filterByCategory(["outdoor", "travel"])} className="category-item wide"><Anchor size={20}/><Link smooth to="#gifts" className="anchor-link">ÄVENTYR & FRITIDSÄLSKAREN</Link></div>
        <div onClick={() => this.props.filterByCategory(["nature", "animals", "gardening"])} className="category-item "><Sun size={20}/><Link smooth to="#gifts" className="anchor-link">NATUR & DJURÄLSKAREN</Link> </div>
        <div onClick={() => this.props.filterByCategory(["technology", "music"])} className="category-item"> <Headphones size={20}/><Link smooth to="#gifts" className="anchor-link">TEKNIKNÖRDEN</Link></div>
        <div onClick={() => this.props.filterByCategory("charity")} className="category-item wide"><Heart size={20}/><Link smooth to="#gifts" className="anchor-link">PRESENTER SOM GÖR SKILLNAD</Link></div> 
        <div onClick={() => this.props.filterByCategory(["food", "candy"])} className="category-item wide"><Filter size={20}/><Link smooth to="#gifts" className="anchor-link">FÖR MATENTUSIASTEN</Link></div> 
        <div onClick={() => this.props.filterByCategory(200)} className="category-item"><DollarSign size={20}/><Link smooth to="#gifts" className="anchor-link">PRESENTER UNDER 200</Link></div> 
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
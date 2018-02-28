import React, { Component } from "react";
import PropTypes from "prop-types";
import Gift from "../components/Gift";
import { filterByCategory} from "../actions/actionCreators";
import { connect } from "react-redux";


class GiftsGrid extends Component {


  render() {
    return (
      <div className="photo-grid">
        <button onClick={() => this.props.filterByCategory("home", "SHOW_ALL")}>HOME</button>
        <button onClick={() => this.props.filterByCategory("fair-trade", "SHOW_ALL")}>FAIR-TRADE</button>
        <button onClick={() => this.props.filterByCategory("outdoor", "SHOW_ALL")}>OUTDOOR</button>
        {this.props.gifts.map((gift, i) => (
          <Gift {...this.props} key={i} i={i} gift={gift} />
        ))}
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
    filterByCategory: (category, filter) => dispatch(filterByCategory(category, filter))
  };
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GiftsGrid)


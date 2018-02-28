import React, { Component } from "react";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import Gift from "../../components/Gift/Gift";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import SearchBar from '../../components/SearchBar/SearchBar';
// import { filterByCategory} from "../../actions/actionCreators";
import { connect } from "react-redux";

class GiftsGrid extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/gift-form">Sök present</Link>
        <SearchBar />
        <ButtonGroup />
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


// function mapDispatchToProps(dispatch) {  
//   return {
//     filterByCategory: (category) => dispatch(filterByCategory(category))
//   };
// }

  export default connect(
    mapStateToProps
  )(GiftsGrid)


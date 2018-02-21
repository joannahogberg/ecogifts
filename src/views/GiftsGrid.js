import React, { Component } from "react";
// import PropTypes from "prop-types";
import Gift from "../components/Gift";

// import { push } from 'react-router-redux'
// import { bindActionCreators } from 'redux'
import { connect } from "react-redux";

class GiftsGrid extends Component {
  render() {

    return (
      <div className="photo-grid">
        {this.props.gifts.map((gift, i) => (
          <Gift {...this.props} key={i} i={i} gift={gift} />
        ))}
      </div>
    );
  }
}

// GiftsGrid.propTypes = {
//   gifts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       productName: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       description: PropTypes.string.isRequired,
//       src: PropTypes.string.isRequired,
//       href: PropTypes.string.isRequired,
//       interest: PropTypes.array.isRequired,
//       personality: PropTypes.array.isRequired,
//       material: PropTypes.array.isRequired,
//       type: PropTypes.array.isRequired
//     })
//   )
// };

const mapStateToProps = state => ({
  gifts: state.gifts
});

//   const mapDispatchToProps = dispatch => bindActionCreators({
//     changePage: () => push('/')
//   }, dispatch)

//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(GiftsGrid)

export default connect(mapStateToProps)(GiftsGrid);

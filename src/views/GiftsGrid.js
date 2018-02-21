import React, { Component } from "react";
// import PropTypes from "prop-types";
import Gift from "../components/Gift";
import { showCategory } from '../actions/actionCreators';

// import { push } from 'react-router-redux'
// import { bindActionCreators } from 'redux'
import { connect } from "react-redux";

class GiftsGrid extends Component {
  render() {

    return (
      <div className="photo-grid">

      <button onClick={() => this.props.showCategory("home")}>Show Category 1</button>
      <button onClick={() => this.props.showCategory("animal")}>Show Category 2</button>

            

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

function mapDispatchToProps(dispatch) {
  return {
    showCategory: gift => dispatch(showCategory())
  };
}



// function mapDispatchToProps(dispatch) {
//   return {
//     actions: {
//       todoActions: bindActionCreators(todoActions, dispatch),
//       counterActions: bindActionCreators(counterActions, dispatch)
//     }
//   };
// }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GiftsGrid)

// export default connect(mapStateToProps)(GiftsGrid);

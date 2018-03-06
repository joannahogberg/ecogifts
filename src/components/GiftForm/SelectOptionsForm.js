import React, { Component } from "react";
// import { reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { sortByAsc } from "../../actions/actionCreators";
import { bindActionCreators } from "redux";
// import { Field, formValueSelector} from 'redux-form';
// import MultiCheckboxField from '../MultiCheckboxField/MultiCheckboxField';
// import PropTypes from "prop-types";

class SelectOptionsForm extends Component {

 
  sortOptions = (event) => {
    console.log()
  this.props.sortByAsc(event.target.value); 
    // this.setState({value: event.target.value});

  }



  render() {
  
    // const { handleSubmit, sortIt } = this.props;

    return (
      // <form onSubmit={this.handleSubmit}>
   <label>
     Sort:
     <select onChange={this.sortOptions} >
       <option value="price-low">Pris Lägsta</option>
       <option value="price-high">Pris Högsta</option>
       <option value="A-Ö">A-Ö</option>

      
     </select>
   </label>

    );
  }
}


const mapStateToProps = state => ({
  gifts: state.gifts
});

function mapDispatchToProps(dispatch) {
  return {
    sortByAsc: bindActionCreators(sortByAsc, dispatch)
  };
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SelectOptionsForm)
 


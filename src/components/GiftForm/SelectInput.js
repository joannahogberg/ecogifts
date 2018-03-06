import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { Field, formValueSelector} from 'redux-form';
// import MultiCheckboxField from '../MultiCheckboxField/MultiCheckboxField';
import PropTypes from "prop-types";

class SelectSortForm extends Component {

handleSubmit = (values, dispatch) => {
 
   console.log(values);
   console.log("hej");
   
  }


  render() {
    const { handleSubmit, sortIt } = this.props;
console.log(this.props)
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div>
          <label>Sortera</label>
          <div>
            <Field name="sortIt" component="select">
              <option />
              <option value="Pris">Pris</option>
              <option value="A-Ö">A-Ö</option>
            </Field>
          </div>
        </div>
        {/* <div>
          <button type="submit">Submit</button>
        </div> */}
      </form>
    );
  }
}

// GiftForm.propTypes = {
//   handleSubmit: PropTypes.func.isRequired,
//   onSubmit: PropTypes.func.isRequired,
//   fields: PropTypes.array.isRequired
// };


// Decorate with redux-form
SelectSortForm = reduxForm({
  form: "selectForm" // a unique identifier for this form
  
//   onChange: (values, dispatch, props, previousValues) => {
//     props.onSubmit();
// }
})(SelectSortForm);

// Decorate with connect to read form values
// const selector = formValueSelector("selectForm"); // <-- same as form name

// SelectSortForm = connect(
//   state => {
//     // can select values individually
//     const sortValue = selector(state, 'sortIt')
//     return {
//       sortValue
//     }
//   }
// )(SelectSortForm)

 




 

export default SelectSortForm;

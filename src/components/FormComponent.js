import React, { Component } from "react";
import { Field } from 'redux-form';
// import Checkboxes from './/Checkboxes';
import { reduxForm } from "redux-form";
import MultiCheckbox from './MultiCheckbox';
// import FormContainer from './FormContainer';

// export const FormComponent = ({ handleSubmit, onSubmit }) => {
    class FormComponent extends Component {


          handleSubmit() {
  
            // e.preventDefault();
            console.log("submit")
    
          
        }


        render() {

const interestOptions = [{id:1, label:"inredning", value:"interest"}, {id:2, label:"hälsa", value:"health"}];

const personalityOptions = [{id:1, label:"praktisk", value:"practical"}];

const { handleSubmit} = this.props;


  return (
    <div>
      <h1>Form</h1>
      
      <form
        // onSubmit={handleSubmit()}
        onSubmit={handleSubmit(this.handleSubmit)}
      >
        <Field
          name="interest"
          label="Intressen"
          type="text"
          component={MultiCheckbox}
          options={interestOptions}
          field={this.props}

        />
        <Field
          name="personality"
          label="Personlighet"
          type="text"
          component={MultiCheckbox}
          options={personalityOptions}
          field={this.props}
        />

        
        <button
          type="submit"
        >
          Submit it
        </button>
      </form>
    </div>
  );
}
    }

export default reduxForm({
    form: "giftform"

})(FormComponent);




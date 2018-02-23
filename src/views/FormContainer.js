import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";

import FormComponent from "../components/FormComponent";
import actions from "redux-form/lib/actions";

// export const FormContainer = ({ handleSubmit }) => {

class FormContainer extends Component {
  render() {


    return (
          <FormComponent
    {...this.props}
      />
    );
  }
}



// const mapDispatchToProps = (dispatch) => ({
//     renderGiftsByForm: () => dispatch(renderGiftsByForm()),
// })

const formConfiguration = {
    form: "theForm"
  };

export default reduxForm(formConfiguration)(FormContainer);


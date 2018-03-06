// import React from 'react';
import React, { Component } from "react";
import { Field, FormSection } from "redux-form";
import Checkbox from "../Checkbox/Checkbox";
import PropTypes from "prop-types";
import "./multicheckbox.css";

class MultiCheckboxField extends Component {
  render() {
    console.log(this.props.name);
    const { options, name } = this.props;
    const checkboxes = options.map(option => {
      return (
        <div className="checkbox-field" key={option.id}>
          <Field name={option.value} component={Checkbox} type="checkbox" />
          {option.label}
        </div> 
      );
    });

    return (
       
        <FormSection name={name} className="form-group">
          {checkboxes}
        </FormSection>
      
    );
  }
}

MultiCheckboxField.defaultProps = {
  options: [],
  name: ""
};

MultiCheckboxField.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  name: PropTypes.string.isRequired
};

export default MultiCheckboxField;

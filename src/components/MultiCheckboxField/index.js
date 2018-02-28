// import React from 'react';
import React, {Component} from 'react';
import { Field, FormSection} from 'redux-form';
import Checkbox from '../Checkbox'


class MultiCheckboxField extends Component {

  render() {

    const {options, name, props} = this.props;
    const checkboxes = options.map(option => {
      return (
        <label key={option.id}>
          {option.label}<Field
            name={option.value}
            component={Checkbox}
            type="checkbox"
            {...props}
          /> 
        </label> 
      );
    });

      return <FormSection name={name}>
          {checkboxes} 
        </FormSection>
  }
}

export default MultiCheckboxField;

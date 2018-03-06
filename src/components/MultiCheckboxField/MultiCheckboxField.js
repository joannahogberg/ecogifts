// import React from 'react';
import React, {Component} from 'react';
import { Field, FormSection} from 'redux-form';
import Checkbox from '../Checkbox/Checkbox'
import PropTypes from 'prop-types'


class MultiCheckboxField extends Component {

  render() {
console.log(this.props.name)
    const {options, name} = this.props;
    const checkboxes = options.map(option => {
      return (
        <label key={option.id}>
          {option.label}<Field
            name={option.value}
            component={Checkbox}
            type="checkbox"
          />
        </label>
      );
    });

      return <FormSection name={name} className="form-group">
         {checkboxes} 
         </FormSection>
  }
}

MultiCheckboxField.defaultProps = {
  options: [],
  name: ''
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

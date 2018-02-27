import React, { Component, PropTypes } from "react";
import { reduxForm } from "redux-form";

import isUndefined from "lodash/isUndefined";
import isArray from "lodash/isArray";

class MultiCheckbox extends Component {
  constructor() {
    super();
    this.getCurrentValues = this.getCurrentValues.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getCurrentValues() {
    const { value, initialValue } = this.props;

    let previousValues = [];

    if (!isUndefined(value) && value !== "") {
      previousValues = value;
    } else if (!isUndefined(initialValue) && initialValue !== "") {
      previousValues = initialValue;
    }

    const currentValues = isArray(previousValues)
      ? [...previousValues]
      : [previousValues];

    console.log(currentValues);

    return currentValues;
  }

  handleChange(event, value) {
    const { field } = this.props;
    const { change } = field;
    // const {onChange} = this.props;
    const values = this.getCurrentValues();

    if (event.target.checked) {
      values.push(value);
    } else {
      values.splice(values.indexOf(value), 1);
    }
    // console.log(values)
    return change(values);
  }

  render() {
    const { label, value, options, field, onBlur, ...rest } = this.props;
    const values = this.getCurrentValues();

    return (
      <div className="form-group">
        {label && <label>{label}</label>}

        <div>
          {options.map((option, index) => {
            // const isChecked = values.indexOf(option.id) > -1;
            // console.log(options)
            return (
              <div key={index} className="checkbox">
                <label>
                  <input
                    {...field}
                    type="checkbox"
                    onChange={event => this.handleChange(event, option.value)}
                    // onBlur={() => onBlur(values)}
                    checked={this.props.input.checked}
                    value={option.value}
                  />

                  {option.label}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// MultiCheckboxField.propTypes = {
//   label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
//     })
//   ).isRequired,
//   field: PropTypes.object.isRequired
// };

export default MultiCheckbox;

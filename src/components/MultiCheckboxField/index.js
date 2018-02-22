import React, {Component} from 'react';
import PropTypes from 'prop-types';
// import { change } from 'redux-form';
import isUndefined from 'lodash/isUndefined';
import isArray from 'lodash/isArray';

class MultiCheckboxField extends Component {
    constructor() {
        super();
        this.getCurrentValues = this.getCurrentValues.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    getCurrentValues() {
        const {field} = this.props;
        const {value, initialValue} = field;
      

        let previousValues = [];

        if (!isUndefined(value) && value !== '') {
            previousValues = value;
        }
        else if (!isUndefined(initialValue) && initialValue !== '') {
            previousValues = initialValue;
        }

        const currentValues = isArray(previousValues) ? [...previousValues] : [previousValues];

        return currentValues;
    }

    handleChange(event, value) {
        const {field} = this.props;
        const {change} = field;
      
        const values = this.getCurrentValues();
    

        if (event.target.checked) {
            values.push(value);
        }
        else {
            values.splice(values.indexOf(value), 1);
            // return
        }

        console.log(values)
        return change(values);
    }

    render() {
        const {label, options, field} = this.props;
        const {blur} = field;
        const values = this.getCurrentValues();
    

        return (
            <div className="form-group">
                {label &&
                <label>{label}</label>
                }

                <div>
                    {options.map(option => {
                        // const isChecked = values.indexOf(option.id) > -1;

                        return (
                            <div
                                key={option.id}
                                className="checkbox"
                            >
                                <label>
                                    <input
                                        {...field}
                                        type="checkbox"
                                        onChange={event => this.handleChange(event, option.value)}
                                        onBlur={() => blur(values)}
                                        // checked={isChecked}
                                        checked={this.props.input.checked}
                                        value={option.id}
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

MultiCheckboxField.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ]),
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            label: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.node
            ]).isRequired
        })
    ).isRequired,
    field: PropTypes.object.isRequired
};

export default MultiCheckboxField;
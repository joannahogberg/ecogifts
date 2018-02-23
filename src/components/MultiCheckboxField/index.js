import React, {Component} from 'react';
import { Field} from 'redux-form'


class MultiCheckboxField extends Component {
  render() {
    const { options } = this.props;
    const fields = options.map(option => {
      return (
        <label key={option.id}>
          {option.label}
          <Field name={option.value} component="input" type="checkbox" />
        </label>
      );
    });

    return <div>{fields}</div>;
  }
}

export default MultiCheckboxField;

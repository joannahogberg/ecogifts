// import React from 'react';
// import { object } from 'prop-types';
// import { Field} from 'redux-form';
// import { Checkbox as CheckboxUI } from 'semantic-ui-react';

// const Checkbox = ({
//   input: { value, onChange, ...input },
//   meta: { touched, error },
//   ...rest
// }) => (
//   <div>
//     <CheckboxUI
//       {...input}
//       {...rest}
//       defaultChecked={!!value}
//       onChange={(e, data) => onChange(data.checked)}
//       type="checkbox"
//     />
//     {touched && error && <span>{error}</span>}
//   </div>
// );

// // Checkbox.propTypes = {
// //   input: object.isRequired,
// //   meta: object.isRequired
// // };

// // Checkbox.defaultProps = {
// //   input: null,
// //   meta: null
// // };


// export default props => <Field {...props} component={Checkbox} />;

import React, { Component } from 'react'

class Checkbox extends Component {
 
   handleChange(event, id) {
        const {input} = this.props;
        const {onChange} = input;
        if (event.target.checked) {
            return onChange(true);
        }
        else {
            return onChange(false);
        }
    }

  render() {
    const { input} = this.props

    return <div>
        <input type="checkbox" 
        onChange={event => this.handleChange(event)} 
        />
      </div>;
  }
}

export default Checkbox;
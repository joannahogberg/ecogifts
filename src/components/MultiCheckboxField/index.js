// import React from 'react';
import React, {Component} from 'react';
import { Field, FormSection} from 'redux-form';
import Checkbox from '../Checkbox'



const renderField = ({ input, meta}) => (
// console.log(input)
// console.log(label, name, input, meta)
      // <input {...input} type={type} placeholder={label} />

      <input type="checkbox"
      name={input.name}
      value={input.name}
      checked={input.checked}
      // checked={input.value}
      // onBlur={() => input.onBlur(input.value)}
      // onChange={(e, checked) => input.onChange(checked)}
      // onChange={value => input.onChange(value === true)}
      />


);


// const MultiCheckboxField = ({ options, name}) => {

//   const checkboxes = options.map(option => {
//     return (
//       <label key={option.id}>
//         {option.label}
//         <Field
//           name={option.value}
//           component="input"
//           // component={renderField}
//           type="checkbox"
//         />
//       </label>
//     );
//   });
//   return <FormSection name={name}> {checkboxes}</FormSection>;;
// };

class MultiCheckboxField extends Component {

  render() {
   
    const {options, name, props} = this.props;
    const checkboxes = options.map(option => {
      return (
        <label key={option.id}>
          {option.label}
          <Field
            name={option.value}
            // component="input"
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

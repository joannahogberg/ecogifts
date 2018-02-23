import React from 'react';

export const Checkboxes = ({ label, input }) => {
  return (


    <div className="mv4 w-100">
      <div className="b sans-serif pv2 w-100">
        {label}
      </div>
      <input
        {...input}
        type="checkbox"
        // onChange={event => this.handleChange(event, option.id)}
        // onBlur={() => onBlur(values)}
        // checked={isChecked}
        // value={option.id}
      />
    </div>
  );
}

export default Checkboxes;

 
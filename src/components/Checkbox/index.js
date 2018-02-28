
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

    return <input type="checkbox" className="inputCheckbox" onChange={event => this.handleChange(event)} />;
  }
}

export default Checkbox;
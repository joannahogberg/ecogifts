
import React, { Component } from 'react'

class Checkbox extends Component {
 
   handleChange(event) {
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
    const { input } = this.props
    return <input type="checkbox" onChange={event => this.handleChange(event)} />;
  }
}

export default Checkbox;
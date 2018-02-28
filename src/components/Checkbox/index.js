
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
<<<<<<< HEAD
    const { input} = this.props

    return <input type="checkbox" className="inputCheckbox" onChange={event => this.handleChange(event)} />;
=======
    const { input } = this.props
    return <input type="checkbox" onChange={event => this.handleChange(event)} />;
>>>>>>> 17877d869de17ba14c2c1964d426ef54d3709ba3
  }
}

export default Checkbox;
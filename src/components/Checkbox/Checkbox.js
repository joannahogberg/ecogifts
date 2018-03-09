
import React, { Component } from 'react'
import PropTypes from 'prop-types'

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
    return <input className="single-checkbox" type="checkbox" onChange={event => this.handleChange(event)} />;
  }
}

  Checkbox.propTypes = {
      input: PropTypes.object.isRequired,
  };

export default Checkbox;
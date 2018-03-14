import React from 'react';
import PropTypes from 'prop-types'

import './loader.css';

function Loader(props) {
  const heading = props.error ? <h1 className="loader-heading error">{props.heading}</h1> : <h1 className="loader-heading" data-text="Laddar presenttips…">Laddar presenttips…</h1>
  return (
    <div className="banner-wrapper-outer">
      <div className="banner-wrapper-inner">
        {heading}
      </div>
    </div>
  );
}

Loader.propTypes = {
  error: PropTypes.bool.isRequired,
  heading: PropTypes.string
};

export default Loader;
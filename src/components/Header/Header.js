import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.css';

class Header extends Component {

  render() {
    return (
      <header>
          <h1>
          <Link to="/" className="logo-link">ecoGifts</Link>
          </h1>
      </header>
    );
  }
}
export default Header;

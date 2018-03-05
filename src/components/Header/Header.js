import React, { Component } from 'react';
import { Link } from 'react-router-dom' 
import EcoLogo from '../../media/logo/EcoLogo'
import './header.css';

class Header extends Component {

  render() {


    return (
      <header>
          <h1>
          <Link to="/" className="logo-link">
          <EcoLogo className="logo" /></Link>
          </h1>
      </header>
    );
  }
}
export default Header;

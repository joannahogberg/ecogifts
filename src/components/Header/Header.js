import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './../Logo/Logo'
import './header.css';


class Header extends Component {
  render() {
    return (
      <header className="header-wrapper">
        <Link to="/ecogifts" className="logo-link">
          <Logo />
        </Link>
      </header>
    );
  }
}


export default Header; 

 
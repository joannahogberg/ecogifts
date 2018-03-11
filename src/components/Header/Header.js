import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import SearchBar from '../SearchBar/SearchBar';
import './header.css';
import Logo from './../Logo/Logo'
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

 
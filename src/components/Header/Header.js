import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from './../Logo/Logo'
class Header extends Component {

  render() {


    return (
      <header className="header-nav">
         <h1>
          <Link to="/" className="logo-link">
          <Logo />
          </Link>
         
          </h1>
      </header>
    );
  }
}


export default Header; 

 
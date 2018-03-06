import React, { Component } from 'react';
import { Link } from 'react-router-dom' 
import EcoLogo from '../../media/logo/EcoLogo'
import './header.css';


class Header extends Component {

  render() {


    return (
      <header className="header-nav">
         <h1>
          <Link to="/" className="logo-link">
          <EcoLogo /></Link></h1>
          {/* <p><Link to="/header">
          ABOUT</Link></p> */}

          
    
      </header>
    );
  }
}


export default Header; 

 
import React, { Component } from "react";
import './navbar.css';
import Logo from '../image/download.png';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div id="navbar">
        <img src={Logo} alt="logo du campus Ynov Nantes"/>
        <h1>Yevents</h1>
        <link to="../image/register.js">
        </link>
      </div>
    );
  }
}

export default Navbar;



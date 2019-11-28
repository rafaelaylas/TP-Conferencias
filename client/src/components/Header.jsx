import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Header.scss';
// import logo from '../assets/static/conferenceGroup.png';
// import userIcon from '../assets/static/user-icon.png';
import Login from './Login';

const Header = () => (
  <header className="header">
    <div className="logotexto"> 
      <h1>Portal Conferencias</h1>
    </div>
    <div className="header__menu">
      <div><Login /></div>
    </div>
  </header>
);

export default Header;

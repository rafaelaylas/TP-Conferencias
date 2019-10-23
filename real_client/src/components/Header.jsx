import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/conferenceGroup.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="Conference" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><Link to="/login">Cuenta</Link></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
    <div className="header__menu">
      <div>Estoy logeado</div>
      <div>Salir</div>
    </div>
  </header>
);

export default Header;

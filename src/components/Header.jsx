import React from "react";
import '../assets/styles/components/Header.scss'

const Header = () => (
  <header className="header">
    <img
      className="header--logo"
      src="./Assets/icons/logo-platzi-video-BW2.png"
      alt="Platzi logo"
    />
    <div className="header--menu">
      <div className="header--menu_profile">
        <img src="./Assets/icons/user-icon.png" alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href="/">Cuenta</a>
        </li>
        <li>
          <a href="index.html">Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;

// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/logo2.png";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="company-name">Rattanmerce</span>
      </div>
      <div className="navbar-center">
        <input type="text" className="search-bar" placeholder="Buscar" />
        <button className="search-button">Buscar</button>
      </div>
      <div className="navbar-right">
        <div className="user-info">
          <span className="username">jluchett@gmail.com</span>
          <button className="logout-button">Cerrar sesion</button>
        </div>
        <a href="/cart" className="cart-icon">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="badge">0</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

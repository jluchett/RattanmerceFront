// eslint-disable-next-line no-unused-vars
import React from "react";
import logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
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
        <button className="search-button">  
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="navbar-right">
        <div className="user-info">
          <span className="username">Hola, Bienvenido</span>
          <Link className="logout-button" to="/login">
            <span className="login-text">Inicia sesión</span>
          </Link>
        </div>
        <Link to="/cart" className="cart-icon">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="badge">0</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

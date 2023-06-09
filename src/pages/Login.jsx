// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import "../styles/Login.css"; // Archivo CSS para los estilos del componente

const Login = () => {
  return (
    <>
      <div className="logo-container">
        <img src={Logo} alt="Logo Rattanmerce" />
        <h1>Rattanmerce</h1>
      </div>
      <div className="login-container">
        <div className="form-container">
          <h2>Inicia Sesión</h2>
          <form>
            <input type="email" placeholder="Correo electrónico" />
            <button type="submit">Enviar</button>
          </form>
          <Link to="/terminos" className="login-condition">
            <p>Condiciones de uso y aviso de privacidad</p>
          </Link>
        </div>
        <div className="register-container">
        <p>¿Aún no tienes cuenta?</p>
          <Link to="/register">
          
          <button>Regístrate aquí</button>
          </Link>
          
        </div>
      </div>
      <div className="footer-container">
        <hr />
        <div className="footer-links">  
          <a href="#">Términos y condiciones</a>
          <a href="#">Aviso de privacidad</a>
        </div>
        <p>
          © {new Date().getFullYear()} Rattanmerce. Todos los derechos
          reservados.
        </p>
      </div>
    </>
  );
};

export default Login;

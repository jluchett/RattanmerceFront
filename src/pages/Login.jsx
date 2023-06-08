// eslint-disable-next-line no-unused-vars
import React from "react";
import Logo from "../assets/logo2.png";
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
          <a href="#">Condiciones de uso y aviso de privacidad</a>
        </div>
        <div className="register-container">
          <p>¿Aún no tienes cuenta?</p>
          <button>Regístrate en nuestra página</button>
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

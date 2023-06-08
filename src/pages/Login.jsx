// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/Login.css'; // Archivo CSS para los estilos del componente

const Login = () => {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src="logo.png" alt="Logo de la empresa" />
        <h1>Nombre de la Empresa</h1>
      </div>
      <div className="form-container">
        <form>
          <input type="email" placeholder="Correo electrónico" />
          <button type="submit">Enviar</button>
        </form>
        <p>Condiciones de uso y aviso de privacidad</p>
      </div>
      <div className="register-container">
        <p>¿Aún no tienes cuenta?</p>
        <button>Regístrate en nuestra página</button>
      </div>
      <div className="footer-container">
        <hr />
        <div className="footer-links">
          <a href="#">Términos y condiciones</a>
          <a href="#">Aviso de privacidad</a>
        </div>
        <p>© {new Date().getFullYear()} Nombre de la Empresa. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Login;

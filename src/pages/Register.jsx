
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import '../styles/Register.css'

const Register = () => {
  return (
    <>
      <div className="logo-container">
        <img src={Logo} alt="Logo Rattanmerce" />
        <h1>Rattanmerce</h1>
      </div>
      <div className="registro-container">
        <div className="form-container">
          <h2>Crea tu cuenta</h2>
          <form>
            <span>Correo electrónico</span>
            <input type="email" placeholder="Correo electrónico" />
            <span>Contraseña</span>
            <input type="password" name="contra" placeholder='Contraseña' />
            <span>Confirmar contraseña</span>
            <input type="password" name="confContra" placeholder='Vuelve a escribir la contraseña' />
            <button type="submit">Enviar</button>
          </form>
          <Link to="/terminos" className="login-condition">
            <p>Condiciones de uso y aviso de privacidad</p>
          </Link>
        </div>
        <div className="register-container">
        <p>¿Ya tienes cuenta?</p>
          <Link to="/login">
          
          <button>Inicia sesión aquí</button>
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
  )
}

export default Register
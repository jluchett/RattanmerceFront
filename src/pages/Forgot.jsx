// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/logo2.png";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
    setIsValid("");
  };
  // Función para realizar la solicitud de inicio de sesión al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setErrorMessage("Debes ingresar un correo electrónico");
    } else if (!isValidEmail(email)) {
      setErrorMessage("Digite un correo electrónico valido");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:3001/users/forgotPass",
          {
            email,
          }
        );

        const { success, message } = response.data;

        if (success) {
          setErrorMessage(message);
        } else {
          setLoading(false);
          setErrorMessage(message);
        }
      } catch (error) {
        setErrorMessage("Error al enviar email");
        console.log(error);
      }
    }
  };

  const isValidEmail = (email) => {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  return (
    <>
      <div className="logo-container">
        <img src={Logo} alt="Logo Rattanmerce" />
        <h1>Rattanmerce</h1>
      </div>
      {isValid && (
        <div className="backend-message">
          <span>Hubo un problema</span>
          <p>{isValid}</p>
          <p>Verifica tu correo o registrate para continuar</p>
        </div>
      )}
      <div className="login-container">
        <div className="form-container">
          <h2>Recuperar contraseña</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Correo electrónico"
              value={email}
              onChange={handleEmailChange}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button type="submit">{loading ? "Cargando..." : "Enviar"}</button>
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

export default Forgot;

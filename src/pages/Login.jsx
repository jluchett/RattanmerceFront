// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import queryString from 'query-string';
import "../styles/Login.css"; // Archivo CSS para los estilos del componente

const Login = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isValid, setIsValid] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
    setIsValid("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      setErrorMessage("Debes ingresar un correo electrónico");
    } else if (!isValidEmail(email)) {
      setErrorMessage("Digite un correo electrónico valido");
    } else {
      setLoading(true);
      // Aquí puedes realizar la acción de envío del formulario
      fetch(`http://localhost:3001/users/login?email=${email}`)
        .then((response) => response.json())
        .then((data) => {
          setLoading(false);
          if (data.success) {
            // Redirigir a la página de inicio de sesión exitosa
            const queryParams = queryString.stringify({ email }); // Formatear el email como parámetro de URL
            navigate('/singin', { state: { email }, search: queryParams }); // Pasar el email como estado y parámetro de URL
          } else {
            console.log(data)
            setIsValid(data.message);
          }
        })
        .catch((error) => {
          setLoading(false);
          setIsValid("Error al obtener los datos del usuario");
          console.log(error);
        });
      console.log("Formulario enviado");
      setIsValid("");
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
          <h2>Inicia Sesión</h2>
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

export default Login;

// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/logo2.png";
import "../styles/Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const loginEmail = location.state?.email || "";

  useEffect(() => {
    setEmail(loginEmail);
  }, [loginEmail]);

  // Función para realizar la solicitud de inicio de sesión al backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length == 0) {
      setErrorMessage("Ingrese la contraseña");
      return;
    }
    try {
      const response = await axios.post("http://localhost:3001/users/singin", {
        email,
        password,
      });

      const { success, message, token } = response.data;

      if (success) {
        // Realizar acciones adicionales con el token, como guardar en el estado global
        console.log("Token del usuario:", token);

        // Redirigir a la página de inicio
        navigate("/");
      } else {
        setErrorMessage(message);
      }
    } catch (error) {
      setErrorMessage("Error al iniciar sesión");
      console.log(error);
    }
  };

  return (
    <div>
      <div className="logo-container">
        <img src={Logo} alt="Logo Rattanmerce" />
        <h1>Rattanmerce</h1>
      </div>
      <div className="login-container">
        <div className="form-container">
          <h1>Inicia sesión</h1>
          <div className="email">
            <p>{email}</p>
            <Link to="/login">Cambiar</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <label>Contraseña:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value), setErrorMessage("");
              }}
            />
            <p>
              <Link to="/forgot">¿Olvidaste la contraseña?</Link>
            </p>
            <button type="submit">Iniciar sesión</button>
          </form>

          {errorMessage && <p className="error-message">{errorMessage}</p>}
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
    </div>
  );
};

export default Signin;

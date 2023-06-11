// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import "../styles/Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    // Función de validación de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones de los campos de entrada
    if (!validateEmail(email)) {
      setErrorMessage("Ingresa un correo electrónico válido.");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    // Realizar el fetch a la base de datos aquí
    // Puedes usar la función fetch o una librería como axios
    fetch("http://localhost:3001/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Registro exitoso, puedes redirigir a la página de inicio de sesión
          console.log("respuesta ok")
        } else {
          // Manejo de errores, por ejemplo:
          throw new Error("Error en la solicitud");
        }
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage("Ocurrió un error durante el registro.");
      });
    // Resetear los campos de entrada y mostrar mensaje de éxito
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrorMessage("¡Registro exitoso!");

    // Aquí puedes redirigir a la página de inicio de sesión u otra página
  };
  return (
    <>
      <div className="logo-container">
        <img src={Logo} alt="Logo Rattanmerce" />
        <h1>Rattanmerce</h1>
      </div>
      <div className="registro-container">
        <div className="form-container">
          <h2>Crea tu cuenta</h2>
          <form onSubmit={handleSubmit}>
            <span>Correo electrónico</span>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Contraseña</span>
            <input
              type="password"
              name="contra"
              placeholder="Debe tener minimo 8 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Confirmar contraseña</span>
            <input
              type="password"
              name="confContra"
              placeholder="Vuelve a escribir la contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errorMessage && (
              <span className="error-message">{errorMessage}</span>
            )}
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
  );
};

export default Register;

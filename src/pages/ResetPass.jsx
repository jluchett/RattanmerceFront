// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Logo from "../assets/logo2.png";
import { Link, useParams } from "react-router-dom";

const ResetPass = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const { resetToken } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones de los campos de entrada
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
    fetch(`http://localhost:3001/users/resetPass/${resetToken}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        newPassword: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Registro exitoso, puedes redirigir a la página de inicio de sesión
          setRegistrationSuccess(true);
          setErrorMessage(data.message);
        } else {
          // Manejo de errores, por ejemplo:
          setErrorMessage(data.message);
        } 
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Ocurrió un error durante el reestablecimiento");
      });
  };
  return (
    <>
      <div className="logo-container">
        <img src={Logo} alt="Logo Rattanmerce" />
        <h1>Rattanmerce</h1>
      </div>
      <div className="registro-container">
        {!registrationSuccess ? (
          <div className="form-container">
            <h2>Cambio de Contraseña</h2>
            <form onSubmit={handleSubmit}>
              <span>Contraseña</span>
              <input
                type="password"
                name="contra"
                placeholder="Debe tener minimo 8 caracteres"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
              />
              <span>Confirmar contraseña</span>
              <input
                type="password"
                name="confContra"
                placeholder="Vuelve a escribir la contraseña"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrorMessage("");
                }}
              />
              {errorMessage && (
                <span className="error-message">{errorMessage}</span>
              )}
              <button type="submit">Enviar</button>
            </form>
            <Link to="/terminos" className="login-condition">
              <p>Condiciones de uso y aviso de privacidad</p>
            </Link>
            <div className="register-container">
              <p>¿Ya tienes cuenta?</p>
              <Link to="/login">
                <button>Inicia sesión aquí</button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="success-container">
            <h2>{errorMessage}</h2>
            <Link to="/login">
              <button>Inicia sesión aquí</button>
            </Link>
          </div>
        )}
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

export default ResetPass
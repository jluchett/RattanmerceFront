import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="left-section">
          <div className="social-media">
            <h5>Síguenos en nuestras redes sociales:</h5>
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-section">
          <div className="contact-info">
            <h4>Contáctanos:</h4>
            <p>
              <i className="fab fa-whatsapp"></i> +3012723018
            </p>
          </div>
        </div>
      </footer>
      <footer className="footer2">
        <div className="rights-reserved">
          <p>Todos los derechos reservados &copy; 2023 Rattanmerce</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

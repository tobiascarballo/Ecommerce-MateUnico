import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Ahora creamos este CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        
        {/* Columna 1: Secciones */}
        <div className="footer-column">
          <h3 className="column-title">Secciones</h3>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/productos" className="footer-link">Productos</Link></li>
            <li><Link to="/carrito" className="footer-link">Carrito</Link></li>
          </ul>
        </div>

        {/* Columna 2: Productos */}
        <div className="footer-column">
          <h3 className="column-title">Productos</h3>
          <ul className="footer-links">
            <li><Link to="/categoria/mate" className="footer-link">Mate</Link></li>
            <li><Link to="/categoria/combo" className="footer-link">Combo</Link></li>
            <li><Link to="/filtros" className="footer-link">Filtros</Link></li>
          </ul>
        </div>
        
        {/* Columna 3: Logo central y Copyright */}
        <div className="footer-center-column">
          <div className="footer-logo">
            <span className="logo-text">Mate</span>
            <div className="logo-icon">🧉</div> {/* Aquí podrías usar tu logo.svg real */}
            <span className="logo-text">Único</span>
          </div>
          <p className="copyright">Mate Único @ 2025. Todos los derechos reservados.</p>
        </div>

        {/* Columna 4: Contacto */}
        <div className="footer-column">
          <h3 className="column-title">Contacto</h3>
          <ul className="footer-contact">
            <li>Tel: +54 3442-000000</li>
            <li>Tel: +54 3442-000000</li>
          </ul>
          <div className="social-icons">
            {/* YouTube */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C2 8 2 12 2 12s0 4 .46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C22 16 22 12 22 12s0-4-.46-5.58z"/><path d="M10 15l5-3-5-3z"/></svg>
            </a>
            {/* Facebook */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* Instagram */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
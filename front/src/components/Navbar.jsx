import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="navbar">
        <div className="container navbar-container">
          
          {/* ZONA IZQUIERDA: Menú + Buscador */}
          <div className="navbar-left">
            
            {/* Botón Hamburguesa (Las dos rayitas) */}
            <button className="menu-toggle" onClick={toggleMenu}>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>

            <div className="search-bar">
              {/* Icono Lupa SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input type="text" placeholder="Buscar" />
            </div>
          </div>

          {/* ZONA CENTRO: Logo Principal */}
          <div className="navbar-center">
            <Link to="/" className='logo-link'>
              <img src={logo} alt="Mate Único" className='navbar-logo-img' />
            </Link>
          </div>

          {/* ZONA DERECHA: Iconos */}
          <div className="navbar-right">
            <Link to="/carrito" className="nav-icon-link">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span className="cart-count">2</span>
              </div>
            </Link>

            <Link to="/login" className="nav-icon-link">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
          </div>

        </div>
      </header>

      {/* MENÚ DESPLEGABLE (OVERLAY + PANEL) */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="mobile-menu-panel" onClick={(e) => e.stopPropagation()}>
          
          {/* Botón para cerrar */}
          <button className="close-menu" onClick={toggleMenu}>✕</button>

          {/* Enlaces de Navegación */}
          <nav className="mobile-nav">
            <Link to="/productos" className="mobile-link" onClick={toggleMenu}>Productos</Link>
            <Link to="/categoria/combo" className="mobile-link" onClick={toggleMenu}>Combos</Link>
            <Link to="/nosotros" className="mobile-link" onClick={toggleMenu}>Nosotros</Link>
          </nav>

        </div>
      </div>
    </>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        
        {/* ZONA IZQUIERDA: Marca + Buscador */}
        <div className="navbar-left">
          <Link to="/" className="brand-text">🟰</Link>
          
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
          <span className="logo-text">Mate</span>
          {/* Acá iría tu imagen real del matecito, por ahora uso un emoji o un div */}
          <div className="logo-icon">🧉</div> 
          <span className="logo-text">Único</span>
        </div>

        {/* ZONA DERECHA: Iconos */}
        <div className="navbar-right">
          
          {/* Icono Bolsa de compras */}
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

          {/* Icono Usuario */}
          <Link to="/login" className="nav-icon-link">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar; 
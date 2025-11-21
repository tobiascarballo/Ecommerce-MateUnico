import React from 'react';
import './Login.css';
import loginImage from '../assets/login.png';

const Login = () => {

const handleGoogleLogin = () => {
    // Redirigimos al usuario a nuestro Back-End, que a su vez lo manda a Google.
    // Usamos window.open con "_self" para que ocurra en la misma pestaña.
    window.open("http://localhost:3001/auth/google", "_self");
  };

  return (
    <div className="login-container">
      
      {/* MITAD IZQUIERDA: IMAGEN CON DEGRADADO */}
      <div className="login-image-section" style={{ backgroundImage: `url(${loginImage})` }}>
        <div className="image-overlay"></div>
      </div>

      {/* MITAD DERECHA: FORMULARIO */}
      <div className="login-form-section">
        
        {/* Logo Mate Único */}
        <div className="login-logo">
          <span className="logo-text">Mate</span>
          <div className="logo-icon">🧉</div>
          <span className="logo-text">Único</span>
        </div>

        <div className="login-content">
          <h2>Iniciar Sesión</h2>
          
          {/* Botón de Google */}
          <button className="btn-google" onClick={handleGoogleLogin}>
            <svg className="google-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
            </svg>
            Continuar con Google
          </button>
        </div>

        {/* Footer del Login */}
        <div className="login-footer">
          <div className="social-login-icons">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg></a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
          </div>
          <p className="footer-slogan">Bienvenido a Mate Único, donde la tradición se viste de elegancia.</p>
        </div>

      </div>
    </div>
  );
};

export default Login;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer'; // Si ya tenés el Footer, importalo

// --- 1. COMPONENTE DE DISEÑO (LAYOUT) ---
// Este componente actúa como un "marco". 
// Tiene el Navbar arriba, el contenido cambiante en el medio (Outlet) y el Footer abajo.
const LayoutConNavegacion = () => {
  return (
    <>
      <Navbar />
      {/* "Outlet" es el lugar donde React va a renderizar el Home, Productos, etc. */}
      <Outlet /> 
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
          {/* GRUPO 1: Rutas que SÍ tienen Navbar y Footer */}
          <Route element={<LayoutConNavegacion />}>
            <Route path="/" element={<Home />} />
            {/* Acá irán las futuras rutas como:
            <Route path="/productos" element={<Productos />} /> 
            <Route path="/carrito" element={<Carrito />} /> 
            */}
          </Route>

          {/* GRUPO 2: Rutas que NO tienen nada (Pantalla completa) */}
          <Route path="/login" element={<Login />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
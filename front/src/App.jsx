import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Acá agregaremos más rutas después: */}
          {/* <Route path="/productos" element={<Productos />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
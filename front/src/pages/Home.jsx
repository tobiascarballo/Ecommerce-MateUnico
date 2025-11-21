import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Sidebar from '../components/Sidebar';

// IMPORTS DE IMÁGENES
import matePrincipal from '../assets/mate-principal-1.png';
import tresMedio from '../assets/tresmedio.png';
import imgMate2 from '../assets/image16.png';      
import imgMate3 from '../assets/image22.png';      

// --- CARRUSEL IMÁGENES REALES ---
import carrusel1 from '../assets/image11.png'; 
import carrusel2 from '../assets/image12.png';
import carrusel3 from '../assets/image13.png'; 

// Array del Carrusel
const slides = [
  { id: 1, url: carrusel1, alt: "Mate en el campo" },
  { id: 2, url: carrusel2, alt: "Mate en el campo 2" },
  { id: 3, url: carrusel3, alt: "Mate en el campo 3" }
];

// Array de imágenes para productos
const imagenesPrueba = [tresMedio, imgMate2, imgMate3];

const Home = () => {
  const [productos, setProductos] = useState([]);
  
  // ESTADO PARA EL CARRUSEL
  const [currentSlide, setCurrentSlide] = useState(0);

  // CONEXIÓN CON BACKEND
  useEffect(() => {
    axios.get('http://localhost:3001/api/productos')
      .then(response => setProductos(response.data))
      .catch(error => console.error("Error:", error));
  }, []);

  // Funciones del Carrusel
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Función auxiliar productos
  const obtenerImagen = (prod, index) => {
    if (prod.fotos && (prod.fotos.startsWith('http') || prod.fotos.startsWith('/'))) {
        return prod.fotos;
    }
    return imagenesPrueba[index % imagenesPrueba.length];
  };

  return (
    <div className="home">
      
      {/* --- PARTE 1: HERO --- */}
      <section className="hero-section container">
        <div className="hero-wrapper">
          <div className="hero-image-col">
            <img src={matePrincipal} alt="Bienvenidos" className="hero-img"/>
          </div>
          <div className="hero-text-col">
            <h1 className="hero-title">¡Bienvenidos a nuestra Tienda de Mates!</h1>
            <p className="hero-description">Descubrí un espacio pensado para los amantes del mate. Acá vas a encontrar mates de todo tipo, bombillas, bolsos y accesorios de calidad, ideales para acompañar cada momento de tu día. Queremos que disfrutes de la tradición con estilo y comodidad.</p>
            <button className="btn-hero">Ver ahora</button>
          </div>
        </div>
      </section>

      {/* --- PARTE 2: TIENDA --- */}
      <section className="shop-section">
        <Sidebar />
        <div className="shop-content">
          <div className="products-grid">
            {productos.length > 0 ? (
              productos.map((prod, index) => (
                <div key={prod.id} className="product-card">
                  <div className="card-image-container">
                    {index === 1 && <div className="badge-new"><span>Nuevo</span><span>Ingreso</span></div>}
                    <img src={obtenerImagen(prod, index)} alt={prod.descripcion} className="product-img"/>
                  </div>
                  <div className="card-info">
                    <h3 className="card-title">{prod.material || "Mate"} {prod.color}</h3>
                    <span className="card-price">${prod.precio}</span>
                  </div>
                </div>
              ))
            ) : (<p>Cargando productos...</p>)}
          </div>
          <div className="load-more-container">
              <button className="btn-load-more">Ver Más</button>
          </div>
        </div>
      </section>

      {/* --- PARTE 3: MÁS VENDIDOS --- */}
      <section className="best-sellers-section container">
        <div className="bs-text-col">
          <h2 className="bs-title">Vea nuestros más<br />vendidos</h2>
          <p className="bs-description">Estos son los productos que se ganaron el corazón de nuestros clientes. Perfectos para acompañarte en cualquier momento del día. Animate a probar los más elegidos de la tienda.</p>
          <button className="btn-hero">Ver Más</button>
        </div>
        <div className="bs-cards-container">
          {productos.slice(0, 3).map((prod, index) => (
            <div key={prod.id} className={`bs-card ${index !== 2 ? 'with-border' : ''}`}>
              <div className="bs-img-wrapper">
                <img src={obtenerImagen(prod, index)} alt={prod.descripcion} className="bs-img"/>
              </div>
              <div className="bs-info-row">
                <span className="bs-name">{prod.material || "Mate"}</span>
                <span className="bs-price">${prod.precio}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================
          PARTE 4: CARRUSEL GRANDE
      ========================================= */}
      <section className="carousel-section">
        <div className="carousel-wrapper">
          
          {/* CAPA DE SOMBREADO SUPERIOR*/}
          <div className="carousel-overlay-top"></div>

          {/* Botones */}
          <button className="carousel-btn prev" onClick={prevSlide}>❮</button>
          <button className="carousel-btn next" onClick={nextSlide}>❯</button>
          
          {/* Imagen */}
          <img 
            src={slides[currentSlide].url} 
            alt={slides[currentSlide].alt} 
            className="carousel-img"
          />

          {/* Barra Inferior Negra */}
          <div className="carousel-bar">
            <span>Mate Único</span>
          </div>

        </div>
      </section>

      {/* =========================================
          PARTE 5: TE AYUDAMOS (Texto final)
      ========================================= */}
      <section className="help-section container">
        <div className="help-content">
          
          {/* Título Izquierda */}
          <div className="help-title-col">
            <h2>Te ayudamos<br />a encontrar<br />tu mate!</h2>
          </div>

          {/* Texto Derecha */}
          <div className="help-text-col">
            <p>
              Encontrar el mate ideal no siempre es fácil. 
              Por eso, en nuestra tienda te acompañamos a descubrir ese mate que se adapta a vos. 
              Queremos que disfrutes de cada ronda con un producto pensado para tu manera de compartir. 
              Elegí con confianza, estamos acá para ayudarte en el camino.
            </p>
          </div>

        </div>
      </section>

      {/* Espacio final */}
      <div style={{height: '100px'}}></div>

    </div>
  );
};

export default Home;
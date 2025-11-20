import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Sidebar from '../components/Sidebar';
import matePrincipal from '../assets/mate-principal-1.png';
import tresMedio from '../assets/tresmedio.png';

const Home = () => {
  const [productos, setProductos] = useState([]);

  // CONEXIÓN CON BACKEND
  useEffect(() => {
    axios.get('http://localhost:3001/api/productos')
      .then(response => setProductos(response.data))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div className="home">
      
      {/* --- PARTE 1: HERO SECTION --- */}
      <section className="hero-section container">
        <div className="hero-wrapper">
          
          {/* Columna Izquierda: Imagen */}
          <div className="hero-image-col">
            <img 
              src={matePrincipal} 
              alt="Bienvenidos a Mate Único" 
              className="hero-img"
            />
          </div>

          {/* Columna Derecha: Texto */}
          <div className="hero-text-col">
            <h1 className="hero-title">¡Bienvenidos a nuestra Tienda de Mates!</h1>
            <p className="hero-description">
              Descubrí un espacio pensado para los amantes del mate. 
              Acá vas a encontrar mates de todo tipo, bombillas, bolsos y accesorios de calidad, 
              ideales para acompañar cada momento de tu día. 
              Queremos que disfrutes de la tradición con estilo y comodidad.
            </p>
            <button className="btn-hero">Ver ahora</button>
          </div>

        </div>
      </section>

      {/* --- PARTE 2: SECCIÓN DE FILTROS Y PRODUCTOS --- */}
      <section className="shop-section">
        
        {/* 1. Barra Lateral (Izquierda) */}
        <Sidebar />

        {/* 2. Grilla de Productos (Derecha) */}
        <div className="shop-content">
          
          {/* Grilla */}
          <div className="products-grid">
            {productos.length > 0 ? (
              productos.map((prod, index) => (
                <div key={prod.id} className="product-card">
                  
                  {/* --- ZONA DE IMAGEN --- */}
                  <div className="card-image-container">
                    
                    {/* Lógica del Badge: Muestra "Nuevo Ingreso" en el segundo producto (índice 1) 
                        para que se vea como en tu foto del medio. */}
                    {index === 1 && (
                      <div className="badge-new">
                        <span>Nuevo</span>
                        <span>Ingreso</span>
                      </div>
                    )}

                    {/* Imagen (Usa la de la BD o una de prueba si no hay) */}
                    <img 
                      src={tresMedio}  // <--- Ponela directo, sin condiciones
                      alt="Prueba" 
                      className="product-img"
                    />
                  </div>

                  {/* --- ZONA DE TEXTO --- */}
                  <div className="card-info">
                    {/* Título y Precio */}
                    <h3 className="card-title">{prod.material || "Mate"} {prod.color}</h3>
                    <span className="card-price">${prod.precio}</span>
                  </div>
                  
                  {/* Botón opcional por si querés que aparezca al pasar el mouse, 
                      si no lo querés visible siempre, podés borrarlo */}
                  {/* <button className="btn-add">Ver Más</button> */}

                </div>
              ))
            ) : (
              <p>Cargando productos...</p>
            )}
          </div>
          
          {/* Botón "Ver Más" general */}
          <div className="load-more-container">
              <button className="btn-load-more">Ver Más</button>
          </div>

        </div>
      </section>

      {/* Espacio temporal */}
      <div style={{height: '100px'}}></div> 

    </div>
  );
};

export default Home;
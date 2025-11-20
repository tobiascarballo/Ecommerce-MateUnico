import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // ESTADOS PARA LOS DESPLEGABLES (Visibilidad)
  const [showMate, setShowMate] = useState(true); // Arranca abierto para ver opciones
  const [showCalabaza, setShowCalabaza] = useState(true);
  const [showMadera, setShowMadera] = useState(false);

  // 1. ESTADO PARA LOS VALORES DE LOS FILTROS (Checkboxs)
  // Definimos el estado inicial "limpio" (todo en false)
  const initialFilters = {
    cat_mate: false,
    cat_combo: false,
    // Materiales
    mat_calabaza: false,
    mat_madera: false,
    mat_metal: false,
    mat_vidrio: false,
    // Modelos
    mod_imperial: false,
    mod_torpedo: false,
    mod_camionero: false,
    // Colores
    col_negro: false,
    col_marron: false,
    col_otros: false
  };

  const [filters, setFilters] = useState(initialFilters);

  // 2. FUNCIÓN PARA MARCAR/DESMARCAR
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters({
      ...filters,
      [name]: checked
    });
  };

  // 3. FUNCIÓN PARA LIMPIAR (El botón mágico)
  const cleanFilters = () => {
    setFilters(initialFilters); // Resetea todo al estado inicial (todo false)
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '❮' : '❯'}
      </button>

      <div className="sidebar-content">
        
        <div className="sidebar-header">
          <h3>Filtrar</h3>
          {/* 4. ASIGNAMOS LA FUNCIÓN AL BOTÓN */}
          <button className="btn-clean" onClick={cleanFilters}>Limpiar filtros</button>
        </div>

        {/* --- GRUPO 1: CATEGORÍAS --- */}
        <div className="filter-group">
          <h4>Categorías</h4>

          {/* MATE */}
          <div className="category-item">
            <div className="row-label">
              {/* Conectamos con el estado usando 'name', 'checked' y 'onChange' */}
              <input 
                type="checkbox" 
                id="cat-mate" 
                name="cat_mate"
                checked={filters.cat_mate}
                onChange={handleFilterChange}
              />
              <label htmlFor="cat-mate" className="label-text" onClick={(e) => {
                e.preventDefault(); 
                setShowMate(!showMate);
              }}>
                Mate <span className="arrow">{showMate ? '▼' : '▶'}</span>
              </label>
            </div>

            {showMate && (
              <div className="sub-menu level-1">
                
                {/* A. CALABAZA */}
                <div className="category-item">
                  <div className="row-label">
                    <input 
                      type="checkbox" 
                      id="mat-calabaza" 
                      name="mat_calabaza"
                      checked={filters.mat_calabaza}
                      onChange={handleFilterChange}
                    />
                    <label htmlFor="mat-calabaza" className="label-text" onClick={(e) => {
                       e.preventDefault();
                       setShowCalabaza(!showCalabaza);
                    }}>
                      Calabaza <span className="arrow">{showCalabaza ? '▼' : '▶'}</span>
                    </label>
                  </div>
                  {showCalabaza && (
                    <div className="sub-menu level-2">
                      <label className="simple-label">
                        <input 
                          type="checkbox" 
                          name="mod_imperial" 
                          checked={filters.mod_imperial} 
                          onChange={handleFilterChange} 
                        /> Imperial
                      </label>
                      <label className="simple-label">
                        <input 
                          type="checkbox" 
                          name="mod_torpedo" 
                          checked={filters.mod_torpedo} 
                          onChange={handleFilterChange}
                        /> Torpedo
                      </label>
                      <label className="simple-label">
                        <input 
                          type="checkbox" 
                          name="mod_camionero" 
                          checked={filters.mod_camionero} 
                          onChange={handleFilterChange}
                        /> Camionero
                      </label>
                    </div>
                  )}
                </div>

                {/* B. MADERA */}
                <div className="category-item">
                  <div className="row-label">
                    <input 
                      type="checkbox" 
                      id="mat-madera" 
                      name="mat_madera"
                      checked={filters.mat_madera}
                      onChange={handleFilterChange}
                    />
                    <label htmlFor="mat-madera" className="label-text" onClick={(e) => {
                       e.preventDefault();
                       setShowMadera(!showMadera);
                    }}>
                      Madera <span className="arrow">{showMadera ? '▼' : '▶'}</span>
                    </label>
                  </div>
                  {showMadera && (
                    <div className="sub-menu level-2">
                      <label className="simple-label">
                        <input type="checkbox" name="mod_imperial" checked={filters.mod_imperial} onChange={handleFilterChange}/> Imperial
                      </label>
                      <label className="simple-label">
                        <input type="checkbox" name="mod_torpedo" checked={filters.mod_torpedo} onChange={handleFilterChange}/> Torpedo
                      </label>
                    </div>
                  )}
                </div>

                {/* C. METAL */}
                <label className="simple-label">
                  <input 
                    type="checkbox" 
                    name="mat_metal" 
                    checked={filters.mat_metal} 
                    onChange={handleFilterChange}
                  /> Metal
                </label>

                {/* D. VIDRIO */}
                <label className="simple-label">
                  <input 
                    type="checkbox" 
                    name="mat_vidrio" 
                    checked={filters.mat_vidrio} 
                    onChange={handleFilterChange}
                  /> Vidrio
                </label>

              </div>
            )}
          </div>

          {/* COMBO */}
          <div className="category-item main-item">
             <label className="simple-label">
               <input 
                  type="checkbox" 
                  name="cat_combo" 
                  checked={filters.cat_combo} 
                  onChange={handleFilterChange}
               /> Combo
             </label>
          </div>
        </div>

        {/* --- GRUPO 2: COLORES --- */}
        <div className="filter-group">
          <h4>Color</h4>
          <div className="color-options-list">
            <label className="color-row">
              <span className="color-dot" style={{background: '#000'}}></span> Negro
              <input 
                type="checkbox" 
                className="chk-right" 
                name="col_negro" 
                checked={filters.col_negro} 
                onChange={handleFilterChange}
              />
            </label>
            <label className="color-row">
              <span className="color-dot" style={{background: '#8B4513'}}></span> Marrón
              <input 
                type="checkbox" 
                className="chk-right" 
                name="col_marron" 
                checked={filters.col_marron} 
                onChange={handleFilterChange}
              />
            </label>
            <label className="color-row">
              <span className="color-dot multi-color"></span> Otros
              <input 
                type="checkbox" 
                className="chk-right" 
                name="col_otros" 
                checked={filters.col_otros} 
                onChange={handleFilterChange}
              />
            </label>
          </div>
        </div>

        <button className="btn-apply">APLICAR</button>

      </div>
    </aside>
  );
};

export default Sidebar;
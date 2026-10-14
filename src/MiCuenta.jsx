import React, { useState } from 'react';
import './Estilos.css';

const Navbar = ({ usuario, onLogout }) => {
  const [busqueda, setBusqueda] = useState('');
  const [catalogoAbierto, setCatalogoAbierto] = useState(false);

  // Verificacion si el usuario ingresado es Administrador
  const esAdmin = usuario?.rol === 'admin';

  const manejarBusqueda = (e) => {
    e.preventDefault();
    console.log("Buscando prenda:", busqueda);
  };

  return (
    <nav className="navegacion-principal">
      {/* SECCION SUPERIOR: LOGO, BUSQUEDA E ICONOS */}
      <div className="contenedor-navegacion">
        
        {/* LOGO SVR */}
        <a href="#" className="logo-marca">
          SVR <span>SPORT & WORK</span>
        </a>

        {/* BARRA DE BUSQUEDA */}
        <form onSubmit={manejarBusqueda} className="contenedor-busqueda">
          <input 
            type="text" 
            placeholder="Buscar en ropa deportiva o de trabajo..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="campo-busqueda"
          />
          <button type="submit" className="boton-busqueda">
            🔍
          </button>
        </form>

        {/* SECCION DERECHA DE USUARIOS */}
        <div className="contenedor-iconos">
          {usuario ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontSize: '0.85rem', color: '#e0e1dd' }}>👤 {usuario.nombre}</span>
              <button onClick={onLogout} className="boton-salir" title="Cerrar Sesión">
                Salir
              </button>
            </div>
          ) : (
            <a href="#login" className="boton-icono" title="Ingresar / Mi Cuenta">
              👤
            </a>
          )}
        </div>

      </div>

      {/* SECCION INFERIOR: LOS 5 MENÚS PRINCIPALES */}
      <div className="barra-categorias">
        
        {/* 1. MENU INICIO / CATALOGO (con submenUs para ropa deportiva y de trabajo) */}
        <div 
          className="menu-item"
          onMouseEnter={() => setCatalogoAbierto(true)}
          onMouseLeave={() => setCatalogoAbierto(false)}
        >
          <span className="enlace-categoria">
             Catálogo 
          </span>

          {catalogoAbierto && (
            <div className="menu-desplegable">
              <div className="titulo-desplegable">Ropa Deportiva</div>
              <a href="#futbol" className="opcion-desplegable">Fútbol & Running</a>
              <a href="#gym" className="opcion-desplegable">Gimnasio & Training</a>
              <a href="#calzado" className="opcion-desplegable">Calzado Deportivo</a>
              
              <div className="divisor-desplegable"></div>
              
              <div className="titulo-desplegable">Ropa de Trabajo</div>
              <a href="#overoles" className="opcion-desplegable">Overoles & Uniformes</a>
              <a href="#seguridad" className="opcion-desplegable">Chalecos & Botas</a>
            </div>
          )}
        </div>

        {/* 2. MENÚ MI CARRITO */}
        <div className="menu-item">
          <a href="#carrito" className="enlace-categoria">
            Mi Carrito <span className="contador-carrito">0</span>
          </a>
        </div>

        {/* 3. MENU INVENTARIO (Solo Administrador) */}
        {esAdmin && (
          <div className="menu-item">
            <a href="#inventario" className="enlace-categoria enlace-admin">
               Inventario 
            </a>
          </div>
        )}

        {/* 4. MENU REPORTES & LOGS (Solo Administrador - Tu Modulo) */}
        {esAdmin && (
          <div className="menu-item">
            <a href="#reportes" className="enlace-categoria enlace-admin">
              Reportes & Logs 
            </a>
          </div>
        )}

        {/* 5. MENU MI CUENTA / AUTENTICACION (Tu Modulo) */}
        <div className="menu-item">
          <a href="#login" className="enlace-categoria">
            Mi Cuenta 
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
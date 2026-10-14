import React, { useState } from 'react';
import './Estilos.css';

export default function Inicio({ usuario, alCerrarSesion }) {
  const [busqueda, setBusqueda] = useState('');
  const [catalogoAbierto, setCatalogoAbierto] = useState(false);

  // Verificación de si el usuario ingresado es Administrador
  const esAdministrador = usuario?.rol === 'admin';

  const manejarBusqueda = (evento) => {
    evento.preventDefault();
    console.log('Buscando prenda:', busqueda);
  };

  return (
    <>
      <nav className="navegacion-principal">
        {/* SECCIÓN SUPERIOR: LOGO, BÚSQUEDA E ÍCONOS */}
        <div className="contenedor-navegacion">
          
          {/* LOGO SVR */}
          <a href="#" className="logo-marca">
            SVR <span>SPORT & WORK</span>
          </a>

          {/* BARRA DE BÚSQUEDA */}
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

          {/* SECCIÓN DERECHA DE USUARIOS */}
          <div className="contenedor-iconos">
            {usuario ? (
              <div className="bloque-usuario">
                <span className="texto-usuario">👤 {usuario.nombre}</span>
                <button onClick={alCerrarSesion} className="boton-salir" title="Cerrar Sesión">
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

        {/* SECCIÓN INFERIOR: LOS 5 MENÚS PRINCIPALES */}
        <div className="barra-categorias">
          
          {/* 1. MENÚ INICIO / CATÁLOGO (con submenús para ropa deportiva y de trabajo) */}
          <div 
            className="elemento-menu"
            onMouseEnter={() => setCatalogoAbierto(true)}
            onMouseLeave={() => setCatalogoAbierto(false)}
          >
            <span className="enlace-categoria">
              Catálogo ▾
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
          <div className="elemento-menu">
            <a href="#carrito" className="enlace-categoria">
              Mi Carrito <span className="contador-carrito">0</span>
            </a>
          </div>

          {/* 3. MENÚ INVENTARIO (Solo Administrador) */}
          {esAdministrador && (
            <div className="elemento-menu">
              <a href="#inventario" className="enlace-categoria enlace-administrador">
                Inventario
              </a>
            </div>
          )}

          {/* 4. MENÚ REPORTES & REGISTROS (Solo Administrador) */}
          {esAdministrador && (
            <div className="elemento-menu">
              <a href="#reportes" className="enlace-categoria enlace-administrador">
                Reportes & Registros
              </a>
            </div>
          )}

          {/* 5. MENÚ MI CUENTA / AUTENTICACIÓN */}
          <div className="elemento-menu">
            <a href="#login" className="enlace-categoria">
              Mi Cuenta
            </a>
          </div>

        </div>
      </nav>

      {/* PIE DE PÁGINA (FOOTER) */}
      <footer className="pie-pagina pt-5 pb-3">
        <div className="contenedor-pie">
          <div className="fila-pie gy-4">
            <div className="columna-pie">
              <h4 className="fw-bold logo-pie">SVR</h4>
              <p className="texto-pie">
                Te traemos lo mejor en ropa deportiva y de trabajo, con calidad y estilo para cada ocasión.
              </p>
            </div>

            <div className="columna-pie">
              <h5 className="titulo-pie">Contacto</h5>
              <p className="texto-pie mb-1">tiendavirtual517@gmail.com</p>
              <p className="texto-pie mb-3">+591 74026303</p>
              <div className="iconos-sociales">
                <a href="#"><i className="bi bi-facebook"></i></a>
                <a href="#"><i className="bi bi-instagram"></i></a>
                <a href="#"><i className="bi bi-whatsapp"></i></a>
              </div>
            </div>
          </div>

          <hr className="linea-pie my-4" />

          <div className="texto-centro derechos-pie">
            <small>© 2026 | Elaborado por: Melany Jhosel Pablo Mamani</small>
          </div>
        </div>
      </footer>
    </>
  );
}
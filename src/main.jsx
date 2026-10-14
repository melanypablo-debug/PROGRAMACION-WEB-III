import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Estilos.css'
// Se cambia 'App' por el nombre correspondiente de cada componente:
import MiCuenta from './MiCuenta.jsx'
import MiCarrito from './MiCarrito.jsx'
import Inicio from './Inicio.jsx'
import Inventario from './Inventario.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Inicio />
    {/*<MiCuenta />*/}
    {/* <MiCarrito /> */}
    {/*<Inventario />*/}
  </StrictMode>,
)
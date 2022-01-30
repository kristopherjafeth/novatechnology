import React, {useState} from 'react';
import logo from './logo.svg';
export const Navbar = () => {
    const [show, setShow] = useState(false);
  return <>
  <section className='navbar-bg'>
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
      <a href='https://novatechca.com'>
      <img src={logo} alt="insertar SVG con la etiqueta image" className='logo'></img>
      </a>
  

    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" onClick={()=>setShow(!show)}></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : ""}`} >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <a class="nav-link" href="#servicios">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#agencia">Agencia</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#ventajas">Ventajas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#precios">Planes de Pago</a>
        </li>

      </ul>
      <form class="d-flex">
         <a  class="btn btn-outline btn-style" href='#contacto'>
Contacto
      </a>
      </form>
    </div>
  </div>
</nav>

  </section>
  
  </>
      
};
export default Navbar;

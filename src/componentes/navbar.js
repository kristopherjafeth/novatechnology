import React, {useState} from 'react';
import { Route, Switch, Link} from 'react-router-dom';
import logo from './logo.svg';
export const Navbar = () => {
    const [show, setShow] = useState(false);
  return <>
  <section className='navbar-bg'>
  <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
      <a href='/'>
      </a>
      <Link to="/"> 
      <img src={logo} alt="insertar SVG con la etiqueta image" className='logo'></img>
      </Link>


    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" onClick={()=>setShow(!show)}></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : ""}`} >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link to="/"> 
            Inicio
          </Link>
        </li>
        <li class="nav-item">
          <Link to="/paginasweb"> 
            Paginas Web
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/tiendasonline"> 
            Tiendas Online
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/hosting"> 
            Hosting
          </Link>        </li>
        <li class="nav-item">
        <Link to="/tiendasonline"> 
            Dominios
          </Link>        </li> 

      </ul>
      <form class="d-flex">
         <a  class="btn btn-outline btn-style" href='http://mi.novatechca.com/clientarea.php'>
Ingresar
      </a>
      </form>
    </div>
  </div>
</nav>

  </section>

  </>

};
export default Navbar;

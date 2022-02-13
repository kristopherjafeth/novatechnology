import React from 'react';
import website from './imagenes/website.png'
function Headerpaginaweb() {
  return <>
        <header className='header'>     
        <section  className='container main-hero-container headerbg' id='inicio'>
        <div className='row'>
        <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
                <h1 className='display-3'>
                Páginas Web en Venezuela
                </h1>
                <p className='main-hero-para'>
                Tenemos soluciones de diseño web
                para cada presupuesto.                
                <br/>   
                </p>   
                <div className='input-group mt-3 formulario'>       
                        <div>
                         <a href="#precios"className='input-group-button btn btn-style btn-outline boton1'>Planes</a>
                         </div>            
                </div>
                <div className='row'>                              
                </div>
                       
                </div>
                <div className='col-12 col-lg-6 header-right-side d-flex            justify-content-center align-items-center'>
                 <img src={website} alt='heroimg' className='img-fluid foto-inicio'/>
                </div>
                </div>
        </section>
           
        </header>
  </>;
}

export default Headerpaginaweb;


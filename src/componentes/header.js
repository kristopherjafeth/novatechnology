import React from 'react';

function Header() {
  return <>
        <header className='header'>     
        <section  className='container main-hero-container headerbg' id='inicio'>
        <div className='row'>
        <div className='col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start'>
                <h1 className='display-3'>
                        Creamos tu <br/> Página Web! <i class="em em-computer iconosvg2" aria-role="presentation" aria-label="PERSONAL COMPUTER"></i>
                </h1>
                <p className='main-hero-para'>
                    Creamos largas relaciones con nuestros clientes, nos convertimos en su departamento de Marketing y logramos conseguir los objetivos marcados de cada organización.
                
                <br/>


                
                </p>   
                <div className='input-group mt-3 formulario'>       
                         <div>
                         <a href="#precios"className='input-group-button btn btn-style btn-outline boton1'>Planes</a>

                         </div>
                         
                                     
                        
            </div>
            <div className='row'>
                    <div className='col'>
                    <a href="#precios"className='input-group-button btn btn-style btn-outline botondeplanes col-12'>Planes</a>

                    </div>
                    <div className='col'>
                         <a href="https://mi.novatechca.com/'"className='input-group-button btn btn-style btn-outline botondeplanes2'>Ingresar</a>

                         </div>
                       </div>
                       
            </div>
                <div className='col-12 col-lg-6 header-right-side d-flex            justify-content-center align-items-center'>
           <img src='./hero1.webp' alt='heroimg' className='img-fluid foto-inicio'/>
                    </div>
                    

        </div>
        </section>
           
        </header>
  </>;
}

export default Header;


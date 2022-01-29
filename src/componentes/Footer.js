import React from 'react';

function Footer() {
  return <>
  
  
  <footer className='footer'>
      <div className='container'>
          <div className='row'>
              <div className='col-12 col-lg-10 mx-auto'>
                  <div className='row'>
                      <div className='col-6 col-lg-3'>
                          <h2>Empresa</h2>
                          <li>
                              <a href='#nosotros'>Nosotros</a>
                          </li>
                          <li>
                              <a href='#ventajas'>Ventajas</a>
                          </li>

                      </div>
                      <div className='col-6 col-lg-3'>
                          <h2>Servicios</h2>
                          <li>
                              <a href='#nosotros'>Paginas Web</a>
                          </li>
                          <li>
                              <a href='#nosotros'>Tiendas Online</a>
                          </li>
                          <li>
                              <a href='#nosotros'>Hosting</a>
                          </li>
                          <li>
                              <a href='#nosotros'>Todos los Servicios</a>
                          </li>
                      </div>
                      <div className='col-6 col-lg-3'>
                          <h2>Contacto</h2>
                          <li>
                              <a href='#nosotros'>Whatsapp</a>
                          </li>
                          <li>
                              <a href='#nosotros'>Correo</a>
                          </li>
                      </div>
                      <div className='col-6 col-lg-3'>
                          <h2>Redes Sociales</h2>
                          <div className='row'> 
                          <div className='col-3 mx-auto'>
                              <a href="https://www.facebook.com/novatechca" target="_blank">
                              <i><img  src="https://img.icons8.com/color/48/000000/facebook-circled--v4.png"/>  </i> 
                              </a>
                          </div>
                          <div className='col-3 mx-auto'>
                              <a href="https://twitter.com/novatechve" target="_blank">
                              <i><img src="https://img.icons8.com/fluency/48/000000/twitter-circled.png"/>  </i> 
                              </a>
                          </div>
                          <div className='col-3 mx-auto'>
                              <a href="https://instagram.com/novatechca" target="_blank">
                              <i><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png"/>  </i> 
                              </a>
                          </div>
                          </div>  
                                   
                      </div>
<hr></hr>
<div className='mt-6'>
    <p className='main-hero-para2 text-center w-100'>
            Copyright © 2022 Nova Technology. Todos los derechos reservados.
    </p>

</div>
                  </div>

              </div>

          </div>

      </div>
  </footer>
  </>;
}

export default Footer;

import React from 'react';

function Contact() {
  return <>
  <section className='contactus-section' id='contacto'>
      <div className='container'>
          <div className='row'>
              <div className='col-12 col-lg-10 mx-auto'>

                  <div className='row'>
                            <div className='contact-leftside col-12 col-lg-5'>
                            <img src="../contacto-min.webp" className='contactomujer' alt="about" />
                                 
                                    
                                    
                            </div>
                            <div className='contact-rightside col-12 col-lg-7'>
                            <h1 className='main-heading fw-bold'>
                                        Conecta con nuestro <br/> Equipo de Ventas.
                                    </h1>
                                    <p className='main-hero-para'>
                                        Estamos a un paso de comenzar con ese proyecto que tienes en mente y llevarlo a lo mas alto.
                                    </p>
                                        <form method="POST">
                                            <div className='row'>
                                                <div className='col-12 col-lg-6 contact-input-field'>

                                                    <input type="text"
                                                    name=''
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Nombre'>
                                                    
                                                    
                                                    </input>

                                                </div>
                                                <div className='col-12 col-lg-6 contact-input-field'>

                                                    <input type="text"
                                                    name=''
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Apellido'>
                                                    
                                                    
                                                    </input>

                                                </div>


                                            </div>
                                            <div className='row'>
                                                <div className='col-12 col-lg-6 contact-input-field'>

                                                    <input type="tel"
                                                    name='phone'
                                                    id='phone'
                                                    className='form-control'
                                                    placeholder='WhatsApp'>
                                                    
                                                    
                                                    </input>

                                                </div>
                                                <div className='col-12 col-lg-6 contact-input-field'>

                                                    <input type="email"
                                                    name=''
                                                    id=''
                                                    className='form-control'
                                                    placeholder='Correo Electronico'>
                                                    
                                                    
                                                    </input>

                                                </div>

                                   
                                    <div className='row-12'>
                                        <div className='col-12 form contact-input-field'>
                                            <input type="text" name='' id='' className='form-control' placeholder='Ingresa tu mensaje'>
                                            
                                            </input>
                                        </div>
                                    </div>
                                    <div className='form-check'>
                                        <input className='form-check-input'type="checkbox"value="" id='flexCheckChecked'/>
                                        <label class='form-check-label'className='main-hero-paraflex' for='flexCheckChecked'/>
                                        Deseo recibir correos electronicos con ofertas de los Servicios de Nova Technology
                                    </div>
                                    <button type='submit' className='btn btn-style primary w-100 botonenviar'>
Enviar Mensaje
                                    </button>
                                            </div>


                                        </form>

                                    </div>       
                  
                  </div>

              </div>
          </div>
      </div>
  </section>
  
  
  
  
  
  
  
  </>;
}

export default Contact

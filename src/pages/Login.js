import React from 'react';
import "./login.css"
import logo from '../componentes/logo.svg';

function Login() {
  return <div>
      <div>
      <div class="container-fluid">
    <div class="row no-gutter">

        <div class="col-md-6 d-none d-md-flex bg-image"></div>


        <div class="col-md-6 bg-light">
            <div class="login d-flex align-items-center py-5">


                <div class="container form">
                    <div class="row">
                    
                        <div class="col-lg-10 col-xl-7 mx-auto">
                        <a href='./'>
                        <img src={logo} alt="logo" className='logo'></img>
                                                    </a>
                            <h3 class="display-4">Bienvenido!</h3>
                            <p class="text-muted mb-4">Te damos la bienvenida a nuestro sistema.</p>
                            <form >
                                <div class="form-group mb-3">
                                    <input  
                                    type="email" name="correo" placeholder="Ingresa tu correo" 
                                    class="form-control rounded-pill border-0 shadow-sm px-4"
                                    
                                    />
                                </div>
                                <div class="form-group mb-3">
                                    <input type="password" name="clave"placeholder="Ingresa tu Contraseña" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                                   
                                    />
                                </div>
                                <div class="custom-control custom-checkbox mb-3">
                                    <input id="customCheck1" type="checkbox" checked class="custom-control-input"/>
                                    <label for="customCheck1" class="custom-control-label">Recordar Contraseña</label>
                                </div>
                                <button 
                                 

                                 className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Ingresar</button>
                                <div class="text-center d-flex justify-content-between mt-4"><p>Crea una cuenta <a href="./registro" class="font-italic text-muted"> 
                                        <u>Aquí</u></a></p></div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
  </div>;
  </div>;
}

export default Login;


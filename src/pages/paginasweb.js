import React from 'react';
import Navbar from '../componentes/navbar';
import Headerpaginaweb from './paginasweb/headerpaginaweb';
import Ventajaspaginaweb from './paginasweb/ventajaspaginasweb';
import Preciospaginaweb from './paginasweb/Preciospaginaweb.js';
import Footer from '../componentes/Footer';
function Paginasweb() {
  return <div>
        
<Navbar/>
<Headerpaginaweb />
<Ventajaspaginaweb />
<Preciospaginaweb />
<Footer/>
  </div>;
}

export default Paginasweb;

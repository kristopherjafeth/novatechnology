import React from 'react';
import Navbar from './componentes/navbar.js';
import Header from './componentes/header.js';
import Services from './componentes/services.js';
import About from './componentes/About.js';
import Services2 from './componentes/services2.js';
import Contact from './componentes/contact.js';
import Footer from './componentes/Footer';
import Preciospaginaweb from './componentes/Preciospaginaweb.js';

function Home() {
  return <>
              
            <Navbar/>
            <Header />
            <Services />
            <About />
            <Services2 />
            <Contact />
            <Footer />
  
  </>;
}

export default Home;
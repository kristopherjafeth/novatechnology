import React, {useState} from 'react';
import VentajasApi  from '../API/ventajasAPI';
function Services2() {
    const [serviceData, setServiceData] = React.useState (VentajasApi);
  return <>

<section className='service-main-container' id='ventajas'>
    <div className='container service-container'>
        <h1 className='main-heading text-center fw-bold'>
            Ventajas de nuestros servicios
        </h1>
            <div className='row'>
                {serviceData.map((curElem)=>{
                    const {id, logo, title, info} = curElem;
                        return (
                            <>
                             <div className='col-11 col-lg-4 col-xxl-4 work-container-sub-div' key={id}>
                <i className='icono'>{logo} </i>
                    <h3 className='sub-heading'>{title}</h3>
                    <p className='main-hero-para w-100'>{info}</p>
                </div>
                            </>
                        )
                })}
               

            </div>
    </div>

</section>
       

  
  
  
  </>;
}

export default Services2
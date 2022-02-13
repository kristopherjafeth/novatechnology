import React,{ useState } from 'react';
import workapi from '../../API/workApi2.js';
function Ventajaspaginaweb() {
    const [workData, setWorkData] = React.useState(workapi);
    console.log(workData);
  return <>
    
  <section>
      <div className='work-container container' id='servicios' >
            <h2 className='main-heading text-center'>Características</h2>
        <div className='row'>
            {workData.map((curElem) =>{
                const {id,logo,title,info} = curElem;
                    return <> 
                    <div className='col-12 col-lg-4 text-center work-container-subdiv'>
                    <i className='icono'>{logo} </i>
                    <h3 className='sub-heading'>{title}</h3>
                    <p className='main-hero-para w-100'>{info}</p>
            </div>
                    </>
            })}
        </div>
      </div>

  </section>

</>;
}

export default Ventajaspaginaweb;

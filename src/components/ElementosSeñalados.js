import React, {useState} from 'react';
import { BotonSeñalar } from './GetInTouch';

function ComponentePadre (){
    const [señalado, setSeñalado] = useState(false);

    // funcion q se activa cuando se hace click en el boton
    const señalarElementos = () => {
        setSeñalado(true);
    };

    return (
        <div className = {señalado ? 'señalado' : ''}>
            <BotonSeñalar onClick={señalarElementos}/>
           <div className= 'flex flex-col sm:flex-row  mt-3  social '  >
          
              <div className='icons mb-2 flex  social'>
            
            
               <div className='bg-primary p-2 shadow-md icon mx-2 h-10 w-10 rounded-full'>
              <a target={'_blank'} rel="noreferrer" alt='github' href='https://github.com/agusnazer'><img src='/assets/github.png' alt='social' ></img></a>
               </div>

               <div className='bg-primary p-2 shadow-md icon mx-2 h-10 w-10 rounded-full'>
                 <a target={'_blank'} rel="noreferrer" alt='email' href='mailto:Agustin.nazer@hotmail.com'><img src='/assets/email.png' alt='social' ></img></a>
               </div>

               <div className='bg-primary p-2 shadow-md icon mx-2 h-10 w-10 rounded-full'>
                 <a target={'_blank'} rel="noreferrer" alt='linkedin' href='https://linkedin.com/in/agustínnazer'><img src='/assets/linkedin.png' alt='social' ></img></a>
               </div>
               
              </div>
         
             </div>
             
          </div>
    )
}

export default ComponentePadre;
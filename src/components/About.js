// import React, {useState} from 'react'
import Slider from './Slider'
// import BotonSeñalar from './GetInTouch'
import ComponentePadre from './ElementosSeñalados'






 const About = () => {
  return (
    <div className='about'>
       <p className='font-mono mx-4 text-center text-gray-200'> I'm a Frontend developer from Argentina. 
        I like to study new technologies and I like build proyects because its the best way to learn for me, and I really enjoy it.
        </p>
        {/* <BotonSeñalar/> */}
            <ComponentePadre/>
       
    


          {/* <div className='flex flex-col sm:flex-row  mt-3  social border'>
            
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
         
          </div> */}
      

          
        <section className= 'p-5 pb-10 w-screen flex justify-center  lg:flex-row-reverse  '>
        
        <div className=' container flex justify-center'>
            
        
                

           <div className='  skillsLogo lg:w-2/4  lg:pl-8 m-5  '>
            <p className="ml-1 text-4xl lg:text-6xl font-bold text-pink-600">My <span className='text-gray-200 opacity-80 hover:opacity-100'>Tech Stack</span></p>
              <div className=' logos justify-evenly mb-4 mt-5 flex flex-wrap'>
                
                
             <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/html-5.png"alt="html" className="h-full w-fulls opacity-80 hover:opacity-100" />
              <p className="name text-lg text-gray-200">Html</p>
              </div>


              <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/css-3.png" alt="html" className="h-full w-full  opacity-80 hover:opacity-100"/>
              <p className="name text-lg text-gray-200">Css</p>
              </div>
              
              <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/bootstrap.png" alt="html" className="h-full w-full opacity-80 hover:opacity-100"/>
              <p className="name text-lg text-gray-200">Boostrap</p>
              </div>

              <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/tailwind.png" alt="html" className="h-full w-full opacity-80 hover:opacity-100"/>
              <p className="name text-lg text-gray-200">Tailwind</p>
              </div>

              <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/js.png" alt="html" className="h-full w-full opacity-80 hover:opacity-100"/>
              <p className="name text-lg text-gray-200">Javascript</p>
              </div>

              <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/nodejs.png" alt="html" className="h-full w-full opacity-80 hover:opacity-100"/>
              <p className="name text-lg text-gray-200 ">NodeJs</p>
              </div>

              <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/science.png" alt="html" className="h-full w-full opacity-80 hover:opacity-100"/>
              <p className="name text-lg text-gray-200 ">React</p>
              </div>

              <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/git.png" alt="html" className="h-full w-full opacity-80 hover:opacity-100"/>
              <p className="name text-lg text-gray-200">Git</p>
              </div>

              <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/github.png" alt="html" className="h-full w-full opacity-80 hover:opacity-100"/>
              <p className="name text-lg text-gray-200">Github</p>
              </div>

              <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/vite.svg" alt="html" className="h-full w-full opacity-80 hover:opacity-100"/>
              <p className="name text-lg text-gray-200">Vite</p>
              </div>

              <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/flutter.png" alt="html" className="h-full w-full opacity-80 hover:opacity-100"/>
              <p className="name text-lg text-gray-200">Flutter</p>
              </div>

              <div className='logo hover-scale flex mt-4 flex-col justify-center items-center lg:pr-20 p-4 w-1/4 sm:w-2/12 lg:w-1/4 '>
              <img src="./assets/Dart-logo.png" alt="html" className="h-full w-full opacity-80 hover:opacity-100"/>
              <p className="name text-lg text-gray-200">Dart</p>
              </div>
              
              
            </div>
            </div>
                
            </div>
           
        </section>

        <section className=''>
            <div className='proyects'/>
            <a href='https://github.com/AgusNazer' target='_blank' rel='noreferrer'> <p className='text-xl text-gray-300 hover:text-white cursor-pointer'>Some of my proyects</p></a>
             <div>
          <Slider></Slider>
             </div>
        </section>
    </div>

  )
}

export default About
 


import React from 'react'

import '../components/Slider.css'


const Slider = () => {
  return (

    <section class="overflow-hidden text-gray-700 ">
       <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
         <div class="flex flex-wrap -m-1 md:-m-2 PicProyectsContainer  ">
        
          <div class="flex flex-wrap w-1/3 picProyects ">
          <h3 className='textProyectsTitle text-xl'>Ecommerce shop</h3>
            <p className='textProyects '>A simple ecommerce app simulation, developed 100% by myself. Techs; ReactJs, and firebase. </p>
           <div class="w-full p-1 md:p-2">
            <a target={'_blank'} rel='noreferrer' href='https://agusnazer.github.io/entregaFinalNazer/'  > <img alt="shoes-ecommerce" class="block object-cover object-center w-full h-full rounded-lg"
                src='./assets/shoes.png'/></a>
            </div>
          </div>

          <div class="flex flex-wrap w-1/3 picProyects">
          <h3 className='textProyectsTitle text-xl'>Recipes & calories app</h3>
            <p className='textProyects '> This is a recipes and calories app and you can look out for any food. I used Javascript, and a API. </p>
            <div class="w-full p-1 md:p-2">
           <a target={'_blank'} rel='noreferrer' href='https://agusnazer.github.io/segundaEntregaJs/' > <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                src='./assets/recipes.png'/></a>
            </div>
          </div>

          <div class="flex flex-wrap w-1/3 picProyects">
          <h3 className='textProyectsTitle text-xl'>Web site</h3>
            <p className='textProyects '>Web site designed and developed about a coffee bar!. </p>
            
            <div class="w-full p-1 md:p-2">
            <a target={'_blank'} rel='noreferrer' href='https://agusnazer.github.io/3entrega/' > <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                src='./assets/coffeeHome.png'/></a>
               
                <a target={'_blank'} rel='noreferrer' href='https://agusnazer.github.io/3entrega/' > <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
                src='./assets/coffeeMenu.png'/></a>
                
                
                
            </div>
          </div>
          
          </div>
       </div>
    </section>
       
  )
}

export default Slider
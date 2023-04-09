import React from 'react'


import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);


  return (
    <div className="flex  justify-between border-b border-gray-400 py-8 nav ">
    <a href="/"> <div className=' justify-between items-center'> 
    
   
    </div>
      <img  className='rounded-full w-56 h-56 mx-6 border-2 border-gray-800 picMobile ' src="./assets/perfilPic.jpeg" alt="picPerfil" />
    </a>   
    <div className='textMobileMenor'>
   <p className='m-6 text-gray-200 font-bold'>Hey there 👋, I'm</p>
    <h2 className=' font-mono text-xl textMobile  text-gray-200'>Agustin Nazer,</h2>
    <h2 className='font-mono text-xl textMobile text-gray-200'>Front end developer</h2>
   </div>
   
    
    <nav className='navBurger'>
      <section className="MOBILE-MENU flex lg:hidden cursor-pointer">
        <div
          className="HAMBURGER-ICON space-y-2 m-6 "
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className=" cursor-pointer block h-0.5 w-8 animate-pulse bg-gray-300 "></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-300"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-300"></span>
        </div>

        <div className={isNavOpen ? "showMenuNav  " : "hideMenuNav "} >
          <div
            className="absolute top-0 right-0 px-8 py-8"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-gray-200 cursor-pointer hover:text-red-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between">
            <li className="  my-8 uppercase ">
              <a  className='text-gray-300 hover:text-red-400 ' href="/about">About me</a>
            </li>
            <li className="my-8 uppercase">
              <a className='text-gray-300 hover:text-red-400' href="/portfolio">Projects</a>
            </li>
            <li className="my-8 uppercase">
              <a className='text-gray-300 hover:text-red-400' href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </section>

      <ul className="DESKTOP-MENU hidden space-x-10 m-8 lg:flex">
        <li>
          <a className='text-gray-300  text-xl font-bold' href="/about">About me</a>
        </li>
        <li>
          <a className='text-gray-300 text-xl font-bold'  href="/portfolio">Projects</a>
        </li>
        <li>
          <a className='text-gray-300 text-xl font-bold' href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
    <style>{`
    .hideMenuNav {
      display: none;
      
    }
    .showMenuNav {
      display: block;
      position: absolute;
      width: 100%;
      height: 150vh;
      top: 0;
      left: 0;
      background: ;
      z-index: 10;
      display: flex;
      flex-direction: column;
    //   justify-content: space-evenly;
      align-items: center;
      
    }
  `}</style>
  </div>
  )
}

import React from 'react';


export  function BotonSeñalar(props){
    return (
      <button onClick={props.onClick} href="#" className="text-black bg-white outline-none p-2 rounded-md sm:mx-6 px-3 mx-2 sm:px-4 bg-opacity-20">
      {/* Señalas elementos  */}
      <a className='text-gray-200 hover:text-gray-800' href="#contact">Get In Touch</a>
    </button>
    )
  }

  export default BotonSeñalar;
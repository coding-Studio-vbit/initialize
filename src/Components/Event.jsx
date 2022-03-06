import React from 'react'
import Logo from './../frlogo.png'
export default function Event() {
  return (
    <div className='grid bg-[#121212] md:grid-cols-2 grid-cols-1 place-content-center w-[75%] gap-[4rem] m-auto mt-16' >
        <div className="self-center md:justify-self-start justify-self-center w-[90%] h-full 	">
            <img src={Logo} alt='logo'/>
        </div>
        <span className="text-[3rem] text-[#e1e1e1] md:text-right text-center self-center">

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem incidunt distinctio possimus facilis. 
        <span className="mt-4 block text-[1.1rem] md:text-right text-center" >Registration ends on 24th May 2022</span>

        </span>

        

    </div>
  )
}

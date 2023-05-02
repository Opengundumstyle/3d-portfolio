import React from 'react'
import { github } from '../../assets'
import { AiFillLinkedin } from "react-icons/ai";
const DeveloperModal = () => {
  return (
    <div className='text-[20px] flex flex-col items-center'>
      Growing up in the internet of things era, I was always curious and fascinated by how everything is pieced together on the other side of the user interface.
      <br />
      <br />
      <div>
         There is still much to learn and I hope you can join me on the journey.
      </div>
      <div className='flex flex-row items-center mt-[50px] gap-[10px] '>
      <div onClick={()=>window.open('https://github.com/Opengundumstyle',"_blank")} >
        <img src={github} alt="github" className="w-[50px] h-[50px] cursor-pointer hover:bg-violet-500 transition duration-100 ease-in-out rounded-lg "/>
     </div>
       <AiFillLinkedin size='50px' className='cursor-pointer hover:bg-violet-500 transition duration-100 ease-in-out rounded-lg'onClick={()=>window.open('https://www.linkedin.com/in/zlin31/',"_blank")} />
     </div>
  </div>
  )
}

export default DeveloperModal
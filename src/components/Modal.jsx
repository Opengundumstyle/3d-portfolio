import React,{useEffect} from 'react'
import {BiXCircle} from 'react-icons/bi'
const Modal = ({setOpen}) => {

    useEffect(() => {
        // add the class to disable scrolling
        document.body.classList.add('no-scroll')
        return () => {
          // remove the class when the component unmounts
          document.body.classList.remove('no-scroll')
        }
      }, [])
  
  return (
     <div className='w-full h-full fixed bg-[#000000a7] top-0 right-0 z-999 flex items-center justify-center fixed backdrop-blur-sm'>
            <div className='p-1 bg-gradient-to-tr from-fuchsia-600 to-teal-300 rounded-[20px] '>
                <div className='w-[600px] h-[600px] items-center bg-slate-900/75 rounded-[20px] shadow-card'>
                     <div className='relative top-[15px] left-[560px] cursor-pointer' onClick={()=>setOpen(false)}> <BiXCircle size="25px"></BiXCircle> </div>
                </div>
           </div>
    </div>
  )
}

export default Modal

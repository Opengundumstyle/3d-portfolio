import React,{useEffect} from 'react'
import {BiXCircle} from 'react-icons/bi'
import {motion} from 'framer-motion'


import DeveloperModal from './modals/DeveloperModal'
import CoFounderModal from './modals/CoFounderModal'
import BackendModal from './modals/BackendModal'
import ReactNaticveModal from './modals/ReactNativeModal'


const Modal = ({setOpen,title,icon}) => {

    useEffect(() => {
        // add the class to disable scrolling
        document.body.classList.add('no-scroll')
        return () => {
          // remove the class when the component unmounts
          document.body.classList.remove('no-scroll')
        }
      }, [])
  
  return (
     <div className='sm:disabled: w-full h-full  bg-[#000000a7] top-0 right-0 z-999 flex items-center justify-center fixed backdrop-blur-sm'>
            <div className='p-1 bg-gradient-to-tr from-fuchsia-600 to-teal-300 rounded-[20px] z-30'>
            <div className='sm:w-[400px] md:w-[500px] lg:w-[600px] sm:h-[400px] md:h-[500px] lg:h-[600px] items-center bg-slate-900/75 rounded-[20px] shadow-card relative'>
                     <div  className='absolute top-0 right-0 mt-[10px] mr-[10px] cursor-pointer' onClick={()=>setOpen(false)}> <BiXCircle size="25px"></BiXCircle> </div>
                     <div className='pt-[70px]'>
                          <div className='hidden md:flex flex-row justify-center items-center gap-[10px]'>
                              <motion.div whileHover={{ rotate: 360, transition: { duration: 0.8, ease: 'linear' } }}
                                    className="inline-block">
                              <img onClick={()=>setOpen(false)} src={icon} alt={title} className="w-16 h-16 object-contain cursor-pointer hidden sm:inline-block"/>
                              </motion.div>
                          </div>
                          <div className='p-[50px]'>
                              {title === 'Web Developer'&& <DeveloperModal/>}
                              {title === 'React Native Developer'&& <ReactNaticveModal/>}
                              {title === 'Backend Developer'&& <BackendModal/>}
                              {title === 'Co-Founder'&& <CoFounderModal/>}
                          </div>
                       </div>
                </div>
           </div>
    </div>
  )
}

export default Modal

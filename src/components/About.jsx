import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion' 
import { SectionWrapper } from '../hoc'
import Modal from './Modal'
import { useState} from 'react'


const ServiceCard = ({index,title,icon,setOpen,setSelectedService})=>{

   const scrollToTop = () => {
      window.scrollTo({
        top: 876,
        behavior: 'smooth'
      });
    };

   
   return (
    
       <Tilt className="xs:w-[250px] w-full cursor-pointer z-0" >
          <motion.div
            onClick={
                   ()=> {
                     setSelectedService({ title, icon });
                     setTimeout(()=>setOpen(true),500) 
                     scrollToTop()
                  }}
            variants={fadeIn("right","spring",0.5*index,0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
             <div
              options={{
                 max:45,
                 scale:1,
                 speed:450
              }}
              className="bg-tertiary rounded-[20px] py-5  px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
              </div>
          </motion.div>
       </Tilt>
       
   )
}



const About = () => {

   const [open,setOpen] = useState(false);
   const [selectedService, setSelectedService] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
         <p className={styles.sectionSubText}>Introduction</p>
         <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1 )}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] z-0">
              I've acquired proficiency in Typescript, React, Redux, SQL and MVC frameworks through my experience at App Academy's full-stack coding bootcamp and continuation of self-directed learning. My track record includes delivering dynamic features within tight deadlines, overseeing backend system design, and prioritizing user-centric approaches. 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service,index)=>( 
              <ServiceCard key={service.title} 
                            index={index} 
                            {...service} 
                            setOpen={setOpen}
                            setSelectedService={setSelectedService}/>
          ))}
      </div>
       {open && selectedService && <Modal 
                                    icon={selectedService.icon} 
                                    title={selectedService.title} 
                                    setOpen={setOpen}/>}
    </>
  )
}

export default SectionWrapper(About,'about')
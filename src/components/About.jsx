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
    
       <Tilt className="xs:w-[250px] w-full cursor-pointer" >
          <motion.div
            onClick={
                   ()=> {
                     setSelectedService({ title, icon });
                     setOpen(true);
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
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
           I am a software engineer with proficiency and enthusiasm in software engineering and web development. I've gained expertise in Ruby On Rails, React,
           Redux, and PostgreSQL from a full-stack coding bootcamp - App Academy. I have experience in delivering dynamic features within strict timelines, overseeing backend system design,
            and maintaining a user-focused approach. My attention to detail, multitasking skills, and ability to collaborate had made me 
            a flexible and capable candidate.
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
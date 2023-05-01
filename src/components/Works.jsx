import Tilt from "react-tilt"
import {motion} from 'framer-motion'

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"


const ProjectCard =({index,name,description,tags,image,source_code_link,demo_link})=>{

   

      return (
         <motion.div variants={fadeIn("up","spring",index*0.5,0.75)}>
          
             <Tilt
               options={{
                  max:45,
                  scale:1,
                  speed:450,
               }}
               className="bg-tertiary p-5 rounded-2xl sm:w-[300px] w-full">
                <div className="relative w-full h-[230px]">
                       <img 
                        src={image} 
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"/>
                       <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
                             <div
                                onClick={()=>window.open(source_code_link,"_blank")}
                                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                                <img src={github} alt="github" className="w-1/2 h-1/2 object-contain"/>
                             </div>
                       </div>
                </div>
                <div className="mt-5">
                       <a href={demo_link} target="_blank">
                        <h3 className="text-white font-bold text-[24px]">{name}</h3>
                        <p className="mt-2 text-secondary text-[14px]">{description}</p>
                        </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag)=>(
                       <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                        #{tag.name}
                       </p>
                    ))}
                </div>
             
             </Tilt>
         </motion.div>
      )
}



const Works = () => {

  return (
    <>
      <motion.div variants={textVariant()}>
         <p className={styles.sectionSubText}>My projects</p>
         <h2 className={styles.sectionHeadText}>Projects.</h2>
     </motion.div>
      <div className="w-full flex">
          <motion.p
            variants={fadeIn("","",0.1,1)}
            className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
            > 
            Following projects showcases my skills and experience through real-world example of my work.
            Each project is briefly described with links to code repositories and live demos in it. It reflects my ability 
            to solve complex problems, work with different technologies, and manage project effectively.
          </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
         <div className="mb-8">
              <div className="text-slate-400font-semibold text-lg">Full-Stacks</div>
              <div className="flex flex-wrap gap-7">
                {projects.map((project,index)=>(
                    project.category === 'fullstack' &&
                    <ProjectCard 
                      key ={`project-${index}`}
                      index={index}
                      {...project}/>
                
                ))}
              </div>
          </div>
          <div className="mb-8">
              <div className="text-slate-400 font-semibold text-lg">E-commerce & Ai</div>
              <div className="flex flex-wrap gap-7">
                {projects.map((project,index)=>(
                  project.category === 'Ecommerce & Ai' &&
                  <ProjectCard 
                    key ={`project-${index}`}
                    index={index}
                    {...project}/>
              ))}
              </div>
          </div>
          <div>
              <div className="text-slate-400 font-semibold text-lg">Game & Apps</div>
              <div className="flex flex-wrap gap-7">
                {projects.map((project,index)=>(
                  project.category === 'games & apps' &&
                  <ProjectCard 
                    key ={`project-${index}`}
                    index={index}
                    {...project}/>
              ))}
              </div>
          </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works,"projects")
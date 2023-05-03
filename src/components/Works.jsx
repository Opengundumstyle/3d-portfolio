import Tilt from "react-tilt"
import {AnimatePresence, motion} from 'framer-motion'

import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"
import { useState,useEffect} from "react"
import Pagination from "./Pagination"


const ProjectCardMotion = ({ index, children }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {children}
  </motion.div>
);



const ProjectCard =({name,description,tags,image,source_code_link,demo_link})=>{
      return (
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
    
      )
}



const Works = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const [projectCategory, setProjuctCategory] = useState('Full Stacks')
  const [projectsPerPage] = useState(4)

  const indexOfLastProject  = currentPage * projectsPerPage
  const indexOfFirstProject = indexOfLastProject - projectsPerPage
  const currentProjects = projects.slice(indexOfFirstProject,indexOfLastProject)

  const paginate = (pageNumber)=>setCurrentPage(pageNumber)

  useEffect(()=>{
        
        switch (currentPage) {
          case 1:
          setProjuctCategory('Full Stacks')
          break;
          case 2:
          setProjuctCategory('E-commerce & Ai')
          break;
          case 3:
          setProjuctCategory('Games & Apps')
          break;
          default:
            break;
        }
         
  },[currentPage])

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
           This portfolio includes various projects that exemplify my skills and experience in the field of software development. 
           Each project is briefly described, with links to code repositories and live demos included.
      
          </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
         <div className="mb-8">
              <motion.div variants={fadeIn("","",0.4,1)}>
                <div className="text-slate-400 font-semibold text-lg">{projectCategory}</div>
              </motion.div>
              <div className="flex flex-wrap gap-7">

                {currentProjects.map((project,index)=>(
                     <AnimatePresence  custom={currentPage}>
                        <ProjectCardMotion index={index} key={`project-${index}`}>
                            <ProjectCard {...project} />
                        </ProjectCardMotion>
                      </AnimatePresence>
                ))}

              </div>
             <motion.div variants={fadeIn("","",0.6,3)}>
              <Pagination 
                  projectsPerPage={projectsPerPage}
                  totalProjects={projects.length}
                  paginate={paginate}
                  currentPage={currentPage}
              />
              </motion.div>
          </div>
         
      </div>
    </>
  )
}

export default SectionWrapper(Works,"projects")
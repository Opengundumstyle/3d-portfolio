import {Suspense,useEffect,useState} from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Samurais = ({isMobile}) => {

  const samurai = useGLTF('https://raw.githubusercontent.com/Opengundumstyle/samurai-3d-model/main/scene.gltf')

  const [rotation, setRotation] = useState([0, 0, 0])
   
  useFrame((state, delta) => {
    // Calculate the new rotation angle based on the time elapsed since the last frame
    const angle = Math.sin(state.clock.elapsedTime * 0.4) * 0.1
       // Calculate the new Y position based on the time elapsed since the last frame
    const y = Math.sin(state.clock.elapsedTime * 0.1) * 0.02
       // Set the new rotation state with a small change in the Y-axis
       setRotation([0, angle, 0.02 + y])
  })
  return (
     <mesh mesh rotation={rotation}>
         <hemisphereLight intensity={0.15} groundColor="black"/>
         <pointLight intensity={1}/>
         <spotLight
           position={[-20,50,10]}
           angle={0.12}
           penumbra={1}
           intensity={1}
           castShadow
           shadow-mapSize={1024}
           />
         <primitive
          object={samurai.scene}
          scale={isMobile?3:6}
          position={isMobile?[0,-6,-2.2]:[-9,-11.5,-2]}
          rotation={[-0.01,-0.2,-0.1]}
         />
     </mesh>
  )
}

const SamuraisCanvas = ()=>{
     
    const [isMobile,setIsMobile] = useState(false)
  
    

    useEffect(()=>{

         // add a listener for changes to the screen size
         const mediaQuery = window.matchMedia('(max-width:700px)')
         // set the initial value of the 'isMobile' state variable 
         setIsMobile(mediaQuery.matches)
         // define a callback function to handle changes to the media query
         const handleMediaQueryChange = (e)=>{
                setIsMobile(e.matches)
         }
        // add the callback function as a listener or changes to the media query
         mediaQuery.addEventListener('change',handleMediaQueryChange)
         // remove the listener when the component is unmounted
         return ()=>{
           mediaQuery.removeEventListener('change',handleMediaQueryChange)
         }
    },[])

   
     return (
        <Canvas
         frameloop='demand'
         shadows
         camera={{position:[25,3,5],fov:25}}
         gl={{preserveDrawingBuffer:true}}
        >
        <Suspense fallback={<CanvasLoader/>}>
           <OrbitControls 
             enableZoom={false}
             maxPolarAngle={Math.PI/2}
             minPolarAngle={Math.PI/2}
            
           />
           <Samurais isMobile={isMobile} />
        </Suspense>

        <Preload all />
        
        </Canvas>
     )
}

export default SamuraisCanvas
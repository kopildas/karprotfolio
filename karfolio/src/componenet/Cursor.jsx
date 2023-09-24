import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
export default function Cursor({scaling}) {
    const [lgcircle, setLgCircle] = useState({x:0,y:0});
    const [smcircle, setSmCircle] = useState({x:0,y:0});

    useEffect(() => {
      const mousemove = (e) => {
        setLgCircle({x:e.clientX,y:e.clientY});
        setSmCircle({x:e.clientX,y:e.clientY});
      }
    window.addEventListener("mousemove", mousemove);
      return () => {
        window.removeEventListener("mousemove", mousemove);
      }
    }, [])
    


  return (
    <div>
      <motion.div animate={{x:lgcircle.x - 32,y:lgcircle.y - 32, transition: {type:"spring",mass:2}}} style={{scale: scaling ? 0.5 : 1}} className="w-16 h-16 rounded-full border border-indigo-200 fixed z-50 pointer-events-none">
        
      </motion.div>
      <motion.div animate={{x:smcircle.x -8,y:smcircle.y -8, transition: {type:"spring",mass:1}}} className="w-4 h-4 rounded-full bg-indigo-300 blur-sm fixed z-50 pointer-events-none">
        
      </motion.div>
    </div>
  )
}

import React from 'react'
import {motion} from "framer-motion"
const Apps = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth , transition:{duration: 0.1}}}
    >
    Apps
    </motion.div>
  )
}

export default Apps
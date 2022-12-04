import React from 'react'
import {motion} from "framer-motion"
const UploadReports = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth , transition:{duration: 0.1}}}
    >
    UploadReports
    </motion.div>
  )
}

export default UploadReports
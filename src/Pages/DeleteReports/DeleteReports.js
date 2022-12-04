import React from 'react'
import {motion} from "framer-motion"
const DeleteReports = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth , transition:{duration: 0.1}}}
    >
    DeleteReports
    </motion.div>
  )
}

export default DeleteReports
import React from 'react'
import Table from '../../Components/Table/Table'
import {motion} from "framer-motion"
const Users = () => {
 
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth ,transition:{duration: 0.1}}}
    >
      <Table />
    </motion.div>
  )
}

export default Users
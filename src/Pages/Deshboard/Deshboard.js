import React from 'react'
import {motion} from "framer-motion"
const Deshboard = () => {
  return (
<motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth , transition:{duration: 0.1}}}
    >
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos libero quibusdam labore similique beatae dolorum quasi magni id optio, voluptatem ea consequuntur dolorem architecto fuga doloremque culpa quae autem tenetur!
    </motion.div>  )
}

export default Deshboard
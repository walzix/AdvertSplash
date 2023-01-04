import React from 'react'
import "./DashboardCards.css"
import {FaEye} from "react-icons/fa"
import {TbClick} from "react-icons/tb"
import {FiFramer} from "react-icons/fi"
import {FiDollarSign} from "react-icons/fi"
import {motion} from "framer-motion"

const DashboardCards = () => {
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:"100%"}}
    exit={{x: window.innerWidth , transition:{duration: 0.1}}}
     className="cards">
        <div className='card1'>
          <div className='card_logo'>
          <FaEye />
          </div>
          <div className='views__count'>
            <div className='views'>Views</div>
            <div className='V__count'>1234567</div>
          </div>
        </div>
        <div className='card1'>
          <div className='card_logo'>
          <TbClick />
          </div>
          <div className='views__count'>
            <div className='views'>Clicks</div>
            <div className='V__count'>8380126</div>
          </div>
        </div>
        <div className='card1'>
          <div className='card_logo'>
          <FiFramer />
          </div>
          <div className='views__count'>
            <div className='views'>CTR</div>
            <div className='V__count'>2335.97</div>
          </div>
        </div>
        <div className='card1'>
          <div className='card_logo'>
          <FiDollarSign />
          </div>
          <div className='Revenue'>
            <div className='Revenue__h1'>Revenue</div>
            <div className='count__Revenue'>114885.26</div>
          </div>
        </div>
    </motion.div>    
  ) 
}

export default DashboardCards
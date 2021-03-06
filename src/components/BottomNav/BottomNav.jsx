import React from 'react'
import { AiOutlineHome, AiOutlineUser} from 'react-icons/ai';
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {BiCodeCurly} from 'react-icons/bi'
import {VscTools} from 'react-icons/vsc'

import {motion} from 'framer-motion';

import './BottomNav.scss'

const BottomNav = () => {
  return (
    <motion.div
      // whileInView={{opacity: [0,1]}}
      animate={{opacity: [0,1]}}
      transition={{ ease: "easeInOut",duration: 1 }}
    >
     <nav className="navbar">

        <a href='#'><AiOutlineHome/></a>
        <a href='#about'><AiOutlineUser/></a>
        <a href='#work' ><BiCodeCurly/></a>
        <a href='#skills'><VscTools/></a>
        <a href='#contact'><BiMessageSquareDetail/></a>
    </nav>
    </motion.div>


  )
}

export default BottomNav
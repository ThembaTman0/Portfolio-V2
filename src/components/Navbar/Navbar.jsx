import React, {useState} from 'react'
// import { HiMenuAlt4, HiX} from 'react-icons/hi';
// import { motion} from 'framer-motion';
 

import './Navbar.scss'
// import { images } from '../../constants'

const Navbar = () => {
  // const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/* <img src={images.logo} alt="logo"/>
         */}
         <a href='#'>Themba</a>
      </div>
      <ul className="app__navbar-links">
        {/* Map these to the nav bar list using this */}
        {[ 'about', 'work', 'skills', 'contact' ].map((item)=>(
          <li key={`link-${item}`} className='app__flex p-text'>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-logo'>
        <a href="https://github.com/ThembaTman0/Portfolio-V2/blob/main/src/pdf/RESUME.pdf" target="_blank"><button>Resume
            </button></a>
      </div>


    </nav>
    
  )
}

export default Navbar
import React from 'react'
import {motion} from 'framer-motion'

import { images } from '../../constants';

import './About.scss';
import { useEffect, useState } from 'react';

import { urlFor, client } from '../../client';
import { AppWrap,MotionWrap } from '../../wrapper';

// const about = [
//   {title: 'Web Development', description: 'I am a good web developer.', imgUrl: images.about01},
//   {title: 'Web Design', description: 'I am a good web developer.', imgUrl: images.about02},
//   {title: 'UI/UX', description: 'I am a good web developer.', imgUrl: images.about03},
//   {title: 'Web Animation', description: 'I am a good web developer.', imgUrl: images.about04}

// ];

  
  const About = () => {
    const [abouts, setAbouts] = useState([]);
  
    useEffect(() => {
      const query = '*[_type == "abouts"]';
  
      client.fetch(query).then((data) => {
        setAbouts(data);
      });
    }, []);

  return (
    <>
      <h3 className="head-text">
        I know that <span> Good Design </span>
        <br />
        means
        <span> Good Business </span>
      </h3>  

      <div className="head-paragraph">
        <p>Hello! My name is <span>Themba Ngobeni</span>, and I am a student majoring in <span>Computer Science</span>. My <br />fascination with <span>web development</span> began in 2017, when I decided to make my first <span>threeJS</span> <br />game for a school project.
Fast forward to now, and I've developed projects with <br /> <span>REACT JS</span>, <span>Python</span> and I've gained alot of interest in <span>AI and Machine Learning</span>.
        </p>
      </div>
      <div className="app__profile">
        {abouts.map((abouts, index)=> (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.05}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={abouts.title+index}
          >
            <img src={urlFor(abouts.imgUrl)} alt={abouts.title}/>
            <h2 className="bold-text" style={{marginTop: 20}}>{abouts.title}</h2>
            <p className="p-text" style={{marginTop: 10}}>{abouts.description}</p>
          </motion.div>
        ))}  
      </div>   
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about')
  ,'about',"black");
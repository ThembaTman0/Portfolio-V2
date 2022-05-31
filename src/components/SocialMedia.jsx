import React from 'react'

import {ImCodepen} from 'react-icons/im';
import {VscGithub} from 'react-icons/vsc';
import {BsLinkedin} from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="https://github.com/ThembaTman0" rel="noreferrer" target="_blank">
            <VscGithub/>
          </a>
            
        </div>
        <div>
        <a href="https://www.linkedin.com/in/themba-ngobeni-6a163b164/" rel="noreferrer" target="_blank">
          <BsLinkedin/>
        </a>
        
        </div>
        <div>
        <a href="https://codepen.io/thembatman0" rel="noreferrer" target="_blank">
          <ImCodepen/>
        </a>
            
        </div>
    </div>
  )
}

export default SocialMedia
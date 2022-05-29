import React from 'react'

import {ImCodepen} from 'react-icons/im';
import {VscGithub} from 'react-icons/vsc';
import {BsLinkedin} from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <VscGithub/>
        </div>
        <div>
            <ImCodepen/>
        </div>
        <div>
            <BsLinkedin/>
        </div>
    </div>
  )
}

export default SocialMedia
import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';
import {MdOutlineMail} from 'react-icons/md'
import {BsPhone} from 'react-icons/bs'
import {BiGitRepoForked} from 'react-icons/bi'

const Footer = () => {
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // const [loading, setLoading] = useState(false);

  // const { username, email, message } = formData;

  // const handleChangeInput = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = () => {
  //   setLoading(true);

  //   const contact = {
  //     _type: 'contact',
  //     name: formData.username,
  //     email: formData.email,
  //     message: formData.message,
  //   };

  //   client.create(contact)
  //     .then(() => {
  //       setLoading(false);
  //       setIsFormSubmitted(true);
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <h2 className="head-text">Get in <span>touch</span></h2>
      <div className="head-paragraph">
        <p>My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
      </div>
      
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <a href="mailto:thembatman0@gmail.com" rel="noreferrer" className="p-text">
            <div className="app__footer-card">
            <MdOutlineMail style={{color: '#ff9900', fontSize: '30px', margin: '1rem'}}/>
              thembatman0@gmail.com
            </div>
          </a>
        </div>

        <div className="app__footer-card">
        <a href="tel:+27606296365" className="p-text">
            <div className="app__footer-card">
            <BsPhone style={{color: '#ff9900', fontSize: '30px', margin: '1rem'}}/>
            +27606296365
            </div>
          </a>
        </div>
      </div>
      <div>

      </div>
      {/* {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )} */}

        <div className="head-paragraph"> 
          <a href="https://github.com/ThembaTman0/Portfolio-V2" target="_blank" rel="noreferrer">
           <h1  class="shimmer"> Designed & Built by Themba Ngobeni</h1>
          </a>
        </div>
      <div className="head-paragraph">
        <a href="https://thembatman.netlify.app/" target="_blank" rel="noreferrer " className="p-text">2021: Version 1.0</a>
      </div>
      <div className="head-paragraph">
        <p className="p-text"><span>@2022 Themba. All rights reserved</span></p>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'black',
);

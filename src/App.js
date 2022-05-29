import React from 'react';

import {  Header,About, Work, Skills,Testimonial,Footer} from './container';
import { Navbar, BottomNav } from './components';
import './App.scss'

export const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />      
      <Work />
      <Skills />
{/*       
      
      

      
      <Testimonial />
      <Footer />  */}
      
      <BottomNav/>
    </div>
  );
}


export default App;
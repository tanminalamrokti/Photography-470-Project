import React, {useContext} from 'react';
//import images
import WomanImg from '../img/about/woman.png';
//import link
import { Link } from 'react-router-dom';
//import motion
import { motion } from 'framer-motion';
//import transition
import { transition1 } from '../transitions';
//import cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext);
  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ transition1 }}
      className='section'
    >
      <div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* imange */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt='' />
          </div>
          {/* text */}
          <motion.div 
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={{ transition1 }}
            className='fles-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            
            <h1 className='h1'>About Me</h1>
            <p>
              I'm Alina Lee, a passionate photographer based in USA. From the bustling streets of urban landscapes to the serene beauty of nature's wonders, 
              <b>I find inspiration in every corner of the world.

              </b>
              <br />
              <br />
              Photography isn't just a profession for me, it's my life's passion. From the click of the shutter to the final edit, I pour my heart and soul into every image, ensuring each photograph reflects my vision and the essence of the moment captured.
            </p>
            <Link to={'/portfolio'} className='btn'>View My Work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}; 

export default About;
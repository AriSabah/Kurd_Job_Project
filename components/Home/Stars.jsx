import React from "react";
import { motion } from "framer-motion";

const Stars = () => {
  return (
    <>
      <motion.div className="absolute rounded bg-accent top-14 left-20 -z-50" initial={{opacity: 0.9, width: '5px', height: '5px'}} animate={{opacity: 0, scale: 0.3}} transition={{repeat: Infinity, repeatType: 'reverse', duration: 3, delay: 0, ease: 'easeOut'}}></motion.div>
      <motion.div className="absolute rounded bg-accent top-4 left-6 -z-50" initial={{opacity: 0.9, width: '4px', height: '4px'}} animate={{opacity: 0, scale: 0.3}} transition={{repeat: Infinity, repeatType: 'reverse', duration: 4, delay: 1, ease: 'easeOut'}}></motion.div>
      <motion.div className="absolute rounded bg-accent top-36 left-12 -z-50" initial={{opacity: 0.9, width: '4px', height: '4px'}} animate={{opacity: 0, scale: 0.3}} transition={{repeat: Infinity, repeatType: 'reverse', duration: 4.2, delay: 1.8, ease: 'easeOut'}}></motion.div>
      <motion.div className="absolute rounded bg-accent top-14 left-96 -z-50" initial={{opacity: 0.9, width: '3px', height: '3px'}} animate={{opacity: 0, scale: 0.3}} transition={{repeat: Infinity, repeatType: 'reverse', duration: 2.4, delay: 0.7, ease: 'easeOut'}}></motion.div>
      <motion.div className="absolute rounded bg-accent top-72 left-28 -z-50" initial={{opacity: 0.9, width: '5px', height: '5px'}} animate={{opacity: 0, scale: 0.3}} transition={{repeat: Infinity, repeatType: 'reverse', duration: 4.8, delay: 2.9, ease: 'easeOut'}}></motion.div>

      <motion.div className="absolute rounded bg-accent top-64 left-64 -z-50" initial={{opacity: 0.9, width: '5px', height: '5px'}} animate={{opacity: 0, scale: 0.3}} transition={{repeat: Infinity, repeatType: 'reverse', duration: 3, delay: 0, ease: 'easeOut'}}></motion.div>
      <motion.div className="absolute rounded bg-accent top-96 left-80 -z-50" initial={{opacity: 0.9, width: '4px', height: '4px'}} animate={{opacity: 0, scale: 0.3}} transition={{repeat: Infinity, repeatType: 'reverse', duration: 4, delay: 1, ease: 'easeOut'}}></motion.div>
      <motion.div className="absolute rounded bg-accent top-8 left-52 -z-50" initial={{opacity: 0.9, width: '4px', height: '4px'}} animate={{opacity: 0, scale: 0.3}} transition={{repeat: Infinity, repeatType: 'reverse', duration: 6.2, delay: 0.8, ease: 'easeOut'}}></motion.div>
      <motion.div className="absolute rounded bg-accent top-14 left-72 -z-50" initial={{opacity: 0.9, width: '3px', height: '3px'}} animate={{opacity: 0, scale: 0.3}} transition={{repeat: Infinity, repeatType: 'reverse', duration: 3.4, delay: 1.7, ease: 'easeOut'}}></motion.div>
      <motion.div className="absolute rounded bg-accent top-48 left-72 -z-50" initial={{opacity: 0.9, width: '5px', height: '5px'}} animate={{opacity: 0, scale: 0.3}} transition={{repeat: Infinity, repeatType: 'reverse', duration: 2.8, delay: 0.4, ease: 'easeOut'}}></motion.div>
    </>
  );
};

export default Stars;

import React from "react";
import { motion } from "framer-motion";

const animationVariants = {
  initial: {
    scale: 0.1,
    opacity: 0,
  },
  main: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      bounce: 0.6
    },
  },
  loop: d => ({
    rotate: 360,
    transition: {
      duration: 3,
      type: "spring",
      bounce: 0.6,
      repeatType: 'reverse',
      repeat: Infinity,
      repeatDelay: 0,
      ease: 'backIn',
      delay: d
    },
  }),
};

const Plus = ({ className, style, size, delay}) => {
  return (
    <motion.div initial="initial" whileInView={["main", 'loop']} custom={delay} variants={animationVariants} className={className} style={style}>
      <motion.svg xmlns="http://www.w3.org/2000/svg" height={`${size}px`} viewBox="0 0 24 24" width={`${size}px`} className="fill-accent">
        <motion.path initial={{pathLength: 0}} animate={{pathLength: 1}} transition={{duration: 1.5}} d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="none" strokeWidth='0.5px' className='stroke-accent' strokeLinecap='round' strokeLinejoin='round' />
      </motion.svg>
    </motion.div>
  );
};

export default Plus;

import React from 'react'
import { motion } from "framer-motion";

const Servers = () => {
  return (
    <div>
      <motion.h1 className="text-6xl text-accent text-center pb-4 sm:pt-4 md-pt-0 font-bold" initial={{x:300, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration: 1.5, type: 'spring', bounce: 0.5}}>Kurd Job Servers</motion.h1>
    </div>
  )
}

export default Servers
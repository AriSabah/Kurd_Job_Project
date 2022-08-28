import React from "react";
import { motion } from "framer-motion";
import { heroAnimation } from "../../animations/home";

import Stars from "./Stars";

const Hero = () => {
  return (
    <motion.div className="hero bg-neutral" whileInView="animate" initial="initial" variants={heroAnimation.backgroundAnimation}>
      <div className="hero-content flex-col lg:flex-row pb-0 pt-12 relative">
        <Stars />
        <motion.img src="a1.png" className="max-w-sm rounded-lg" whileInView="animate" initial="initial" variants={heroAnimation.imgAnimation} />
        <motion.div className="pb-5" whileInView="animate" initial="initial" variants={heroAnimation.textAnimation}>
          <h1 className="text-7xl font-bold text-accent">Kurd Job</h1>
          <p className="py-5 text-2xl">Kurd Job is one of the biggest platforms for finding jobs in Kurdistan, with over 10000 jobs you can find your dream job easier and faster.</p>
          <button className="btn btn-primary">Find Your Dream Job Now</button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;

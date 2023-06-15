import React from "react";
import { motion } from "framer-motion";

const serversVariants = {
  initial: {
    scale: 0.1,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      bounce: 0.5,
    },
  },
};

const textVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      bounce: 0.3,
    },
  },
};

const pVariants = {
  initial: {
    y: 120,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      type: "spring",
      bounce: 0.2,
    },
  },
};

const Servers = () => {
  return (
    <div>
      <motion.h1
        className="text-6xl text-accent text-center pb-0 pt-12 md-pt-0 font-bold"
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.5 }}
      >
        Kurd Job Servers
      </motion.h1>

      <div className="hero">
        <div className="flex items-center justify-center flex-col lg:flex-row">
          <motion.img variants={serversVariants} initial="initial" whileInView="animate" style={{ width: "700px" }} src="job.png" className="rounded-lg" />
          <div className="pl-20">
            <motion.h1 variants={textVariants} initial="initial" whileInView="animate"  className="text-4xl font-bold text-accent">Find Your Dream Job With Us</motion.h1>
            <motion.p variants={pVariants} initial="initial" whileInView="animate" className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. rovident cupiditate voluptatem et in.
              Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi rovident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi
            </motion.p>
          </div>
        </div>
      </div>

      <div className="hero mt-12">
        <div className="flex items-center justify-center flex-col lg:flex-row">
          <motion.img variants={serversVariants} initial="initial" whileInView="animate" style={{ width: "700px" }} src="cv.png" className="rounded-lg" />
          <div className="pl-20">
            <motion.h1 variants={textVariants} initial="initial" whileInView="animate"  className="text-4xl font-bold text-accent">Create A Professional and Stylish CV With US</motion.h1>
            <motion.p variants={pVariants} initial="initial" whileInView="animate" className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. rovident cupiditate voluptatem et in.
              Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi rovident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi
            </motion.p>
          </div>
        </div>
      </div>

      <div className="hero my-12">
        <div className="flex items-center justify-center flex-col lg:flex-row">
          <motion.img variants={serversVariants} initial="initial" whileInView="animate" style={{ width: "700px" }} src="employee.png" className="rounded-lg" />
          <div className="pl-20">
            <motion.h1 variants={textVariants} initial="initial" whileInView="animate"  className="text-4xl font-bold text-accent">Employ Professional And Skillful Employees With Us</motion.h1>
            <motion.p variants={pVariants} initial="initial" whileInView="animate" className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. rovident cupiditate voluptatem et in.
              Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi rovident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
              exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servers;

import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const style = {
  "stroke-linejoin": "round",
  "stroke-linecap": "round",
};

const Done = () => {
  return (
    <motion.svg
      className="ml-14 overflow-visible stroke-accent stroke-1"
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="100px"
      width="100px"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.path fill="none" d="M0 0h24v24H0V0" variants={pathVariants} />
      <motion.path
        fill="none"
        d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
        variants={pathVariants}
      />
    </motion.svg>
  );
};

export default Done;

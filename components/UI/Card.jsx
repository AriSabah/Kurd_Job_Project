import React from "react";
import { motion } from "framer-motion";

import style from './Card.module.css';

const cardAnimation = {
  initial: {
    'box-shadow': 'inset 0 0 1em #2666CF88',
    background: 'rgb(1,50,75)',
    background: 'linear-gradient(0deg, rgba(1,50,75,1) 0%, rgba(1,50,75,1) 92%, rgba(15,91,130,0.9) 100%'
  },
  animate: {
    background: 'linear-gradient(360deg, rgba(1,50,75,1) 0%, rgba(1,50,75,1) 92%, rgba(15,91,130,0.9) 100%',
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0
    },
  },
}

const Card = ({title, description, icon}) => {
  return (
    <motion.div className="card w-96 bg-neutral bg-opacity-50" initial='initial' animate='animate' variants={cardAnimation}>
      <div className="card-body">
        <img className={`w-24 mx-auto mb-3 ${style.icon}`} src={icon} alt={title} />
        <h2 className="text-3xl text-center text-accent font-bold">{title}</h2>
        <p className="text-center">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;

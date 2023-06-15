import React from "react";
import { motion } from "framer-motion";

const iconVariants = {
  initial: {
    scale: 0.1,
    rotate: 270,
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
    },
  },
  hover: {
    scale: 1.2,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
    },
  }
};

const logoVariants = {
  initial: {
    scale: 0.1,
    fill: 'none',
    translateY: -161.22,
    translateX: -198.93,
  },
  animate: {
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
    },
  },
};

const Footer = () => {
  return (
    <footer className="footer items-center p-4 md:px-10 bg-neutral text-neutral-content overflow-y-hidden grid-cols-2">
      <div className="items-center grid-flow-col">
        <motion.svg initial={{opacity: 0, translateX: -20, y: 20}} whileInView={{opacity: 1, translateX: 0, y: 0}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 602.15 677.56" width="36px" height="36px">
          <motion.path
            className="fill-accent"
            d="M769.41,314.82,525.66,174.1a51.31,51.31,0,0,0-51.32,0L230.59,314.82a51.33,51.33,0,0,0-25.66,44.45V640.73a51.33,51.33,0,0,0,25.66,44.45L474.34,825.9a51.31,51.31,0,0,0,51.32,0L769.41,685.18a51.33,51.33,0,0,0,25.66-44.45V359.27A51.33,51.33,0,0,0,769.41,314.82ZM500.6,435.08l52.3-70-22.5-18.82a6.61,6.61,0,0,1,3.06-11.57l115.93-21.18a6.61,6.61,0,0,1,7.8,6.52l-.38,117.86A6.61,6.61,0,0,1,646,442.94l-26.65-22.29L558,505.82a6.61,6.61,0,0,1-10.67.08L500.59,443A6.62,6.62,0,0,1,500.6,435.08ZM659.2,712.67H561.9a6.6,6.6,0,0,1-5.47-2.91l-77.8-114.93a6.61,6.61,0,0,0-12.08,3.42L465,634.75v71.31a6.61,6.61,0,0,1-6.61,6.61H373.92a6.61,6.61,0,0,1-6.61-6.61V293.94a6.61,6.61,0,0,1,6.61-6.61H458.4a6.61,6.61,0,0,1,6.61,6.61V413L664.64,702.31A6.61,6.61,0,0,1,659.2,712.67Z"
            initial="initial" animate="animate" variants={logoVariants}
          />
        </motion.svg>
        <motion.p initial={{opacity: 0, y: 20, scale: 0.4}} whileInView={{opacity: 1, y: 0, scale: 1}}>Copyright © 2022 - All right reserved</motion.p>
      </div>
      <div className="grid-flow-col gap-4 justify-self-end">
        <a>
          <motion.svg initial="initial" whileInView="animate" variants={iconVariants} whileHover='hover' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
          </motion.svg>
        </a>
        <a>
          <motion.svg initial="initial" whileInView="animate" variants={iconVariants} whileHover='hover' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </motion.svg>
        </a>
        <a>
          <motion.svg initial="initial" whileInView="animate" variants={iconVariants} whileHover='hover' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
          </motion.svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

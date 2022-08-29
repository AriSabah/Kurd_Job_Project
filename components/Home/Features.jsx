import React from "react";
import { motion } from "framer-motion";

import Card from "../UI/Card";
import Plus from "../Elements/Plus";

const Features = () => {
  return (
    <div className="lg:p-10 md:p-5">
      <div className="relative w-max h-max">
        <Plus className='absolute top-2 left-52' size={50} delay={0} />
        <Plus className='absolute top-80 left-5' size={40} delay={0.8} />
      </div>

      <div className="relative w-max h-max ml-auto">
        <Plus className='absolute top-64 right-5' size={45} delay={0.4}/>
        <Plus className='absolute top-14 right-40' size={35} delay={1.4} />
      </div>

      <motion.h1 className="text-6xl text-accent text-center pb-8 sm:pt-4 md-pt-0 font-bold" initial={{x:-300, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration: 1.5, type: 'spring', bounce: 0.5}}>Kurd Job Features</motion.h1>

      <div className="flex">
        <div className="grid grid-cols-4 gap-6 mx-auto">
          <Card
            icon="icons/ads_click.svg"
            title="Easy To Use"
            description="vgaegv avrfgv dvsf dc sdva dsv dsv dsfsef ds esv vgaegv avrfgv dvsf dc sdva dsv dsv dsfsef ds esv ghhffg ggf kjhb"
            delay={0}
          />

          <Card
            icon="icons/hourglass.svg"
            title="Find Job Faster"
            description="vgaegv avrfgv dvsf dc sdva dsv dsv dsfsef ds esv vgaegv avrfgv dvsf dc sdva dsv dsv dsfsef ds esv ghhffg ggf kjhb"
            delay={0.2}
          />

          <Card
            icon="icons/watch_later.svg"
            title="Saving Time"
            description="vgaegv avrfgv dvsf dc sdva dsv dsv dsfsef ds esv vgaegv avrfgv dvsf dc sdva dsv dsv dsfsef ds esv ghhffg ggf kjhb"
            delay={0.4}
          />

          <Card
            icon="icons/update.svg"
            title="Uptodate"
            description="vgaegv avrfgv dvsf dc sdva dsv dsv dsfsef ds esv vgaegv avrfgv dvsf dc sdva dsv dsv dsfsef ds esv ghhffg ggf kjhb"
            delay={0.6}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;

import React from "react";
import { motion } from "framer-motion";

import Card from "../UI/Card";

const Features = () => {
  return (
    <div className="lg:p-10 md:p-5">
      <motion.h1 className="text-6xl text-accent text-center pb-8 sm:pt-4 md-pt-0 font-bold" initial={{x:-300, opacity:0}} whileInView={{x:0, opacity:1}} transition={{duration: 1, type: 'spring', bounce: 0.5}}>Kurd Job Features</motion.h1>

      <div className="grid grid-cols-4 gap-4">
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
  );
};

export default Features;

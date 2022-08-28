export const heroAnimation = {
  imgAnimation: {
    initial: {
      x: -300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        duration: 0.8,
      },
    },
  },
  textAnimation: {
    initial: {
      x: 300,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 0.8,
      },
    },
  },
  backgroundAnimation: {
    initial: {
      background: "rgb(1,50,75)",
      background: "linear-gradient(21deg, rgba(1,50,75,1) 0%, rgba(1,50,75,1) 50%, rgba(15,91,130,1) 75%, rgba(34,121,164,1) 100%)",
    },
    animate: {
      background: "rgb(1,50,75)",
      background: "linear-gradient(21deg, rgba(34,121,164,1) 0%, rgba(15,91,130,1) 25%, rgba(1,50,75,1) 50%, rgba(1,50,75,1) 100%)",
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0,
        ease: 'easeInOut'
      },
    },
  },
};

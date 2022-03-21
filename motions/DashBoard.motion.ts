export const wrapperVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export const fadeFromLeft = {
  hidden: (xing: number) => {
    const result = {
      opacity: 0,
      x: xing,
    };
    return result;
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 35,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

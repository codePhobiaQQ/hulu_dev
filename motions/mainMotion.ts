export const contentVariant = () => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        // ease: "easeOut",
        // type: "spring",
        duration: 1.2,
      },
    },
  };
};

export const connectVariant = () => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.95,
      x: 100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        // ease: "easeOut",
        // type: "spring",
        duration: 1.2,
      },
    },
  };
};

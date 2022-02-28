export const formVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 70,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
      staggerChildren: 0.4,
    },
  },
};

export const inputVariant = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    x: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

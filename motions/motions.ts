interface WrapperVariantI {
  staggerChildren?: number;
}

export const wrapperVariant = ({ staggerChildren }: WrapperVariantI) => {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerChildren ? staggerChildren : 0.4,
      },
    },
  };
};

export const fadeFromLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "ease",
      type: "spring",
      stiffness: 30,
    },
  },
};

interface IBgImageVariant {
  duration?: number;
  delay?: number;
}

export const bgImageVariant = ({ delay, duration }: IBgImageVariant) => {
  return {
    hidden: {
      opacity: 0,
      scale: 1,
    },
    visible: {
      opacity: 1,
      scale: 1.05,
      transition: {
        ease: "easeOut",
        duration: duration ? duration : 0.4,
        delay: delay ? delay : 0,
      },
    },
  };
};

export const wrapperVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

interface IFadeLeft {
  xing: number;
  delaying: number;
}

export const fadeFromLeft = {
  hidden: ({ xing, delaying = 0 }: IFadeLeft) => {
    const result = {
      opacity: 0,
      x: xing,
    };
    return result;
  },
  visible: ({ xing, delaying = 0 }: IFadeLeft) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      delay: delaying,
    },
  }),
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

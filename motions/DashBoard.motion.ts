export const wrapperVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

interface IFadeLeft {
  xing?: number;
  delaying?: number;
  ying?: number;
  rotate?: number;
}

export const fadeFromLeft = {
  hidden: ({ xing = 0, delaying = 0, ying = 0, rotate = 0 }: IFadeLeft) => ({
    opacity: 0,
    rotate: rotate,
    x: xing,
    y: ying,
  }),
  visible: ({ xing = 0, delaying = 0, ying = 0, rotate = 0 }: IFadeLeft) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 50,
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

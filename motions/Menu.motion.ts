export const menuVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

export const fadeFromBot = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.1,
    },
  }),
};

export const wrapperVariant = {
  hidden: {},
  visible: {},
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: custom * 0.2,
    },
  }),
};

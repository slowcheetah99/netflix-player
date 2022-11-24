export const fadeOut = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.45, 0, 0.55, 1],
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 40,
    transition: {
      ease: [0.45, 0, 0.55, 1],
      duration: 1,
    },
  },
};

const collapse = {
  close: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.5 },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.5 },
  },
};

const movement = {
  initialY: (y) => ({ x: 0, y: y, opacity: 0 }),
  initialX: (x) => ({ x: x, y: 0, opacity: 0 }),
  endingXY: { x: 0, y: 0, opacity: 1 },
};

const rotate = {
  initialRotation: (deg) => ({ rotate: deg, opacity: 0 }),
  endingRotation: { rotate: 0, opacity: 1 },
};

const grow = {
  inactive: {
    scale: 1,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  active: {
    scale: 2.5,
    opacity: 0.3,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};

const Animations = { collapse, movement, rotate, grow };

export default Animations;

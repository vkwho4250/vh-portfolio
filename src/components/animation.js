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

const Animations = { collapse: collapse };

export default Animations;

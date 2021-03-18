import React, { useEffect, useState } from "react";
import Animations from "./animation";
import { motion, useMotionValue } from "framer-motion";
import NavBtn from "./NavBtn";

import "./Home.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home({ changeCursorActive }) {
   const [waterOpacity, setWaterOpacity] = useState(0.9);

   function hoverOpacity(e) {
      if (e.type === "mouseenter") {
         setWaterOpacity(0.9 - e.target.getAttribute("index") * 0.25);
      } else {
         setWaterOpacity(0.9);
      }
      changeCursorActive(e);
   }

   return (
      <div id="home-page" className="home page">
         <NavBtn />
         <motion.div
            className="vector-image city-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut", delay: 1 }}
         >
            <motion.div
               className="ice-city-container"
               intial={{ y: 0 }}
               animate={{ y: [0, -5, 0] }}
               transition={{
                  repeat: Infinity,
                  duration: 5,
                  times: [0, 0.5, 1],
               }}
            ></motion.div>
            <div className="water" style={{ opacity: waterOpacity }}></div>
            <div className="water-text">
               <h4>You're only at the tip of the iceberg!</h4>
               <h4>Keep scrolling for a deeper dive</h4>
            </div>
         </motion.div>
         <motion.div
            className="vector-image sun-container"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: -345, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
         >
            <div className="sun"></div>
         </motion.div>

         <div className="text-container">
            <motion.div
               className="divider"
               variants={Animations.movement}
               initial="initialY"
               custom={-200}
               animate="endingXY"
               transition={{ duration: 1.5, delay: 0.25 }}
            ></motion.div>
            <div className="home-text">
               <div className="left-border"></div>
               <div className="main-text">
                  <motion.div
                     className="border"
                     variants={Animations.movement}
                     initial="initialY"
                     custom={20}
                     animate="endingXY"
                     transition={{ duration: 1, delay: 0.5 }}
                  ></motion.div>
                  <motion.div
                     className="headers"
                     variants={Animations.movement}
                     initial="initialY"
                     custom={-20}
                     animate="endingXY"
                     transition={{ duration: 1, delay: 0.5 }}
                  >
                     <h5>Welcome! My name is</h5>
                     <h1>Victoria</h1>
                  </motion.div>
                  <motion.div
                     className="subheading"
                     variants={Animations.movement}
                     initial="initialY"
                     custom={20}
                     animate="endingXY"
                     transition={{ duration: 1, delay: 0.5 }}
                  >
                     <h5>And I'm a</h5>
                     <h2>
                        <span>Front-end Developer</span>
                     </h2>
                     <h2>
                        <span>Problem-Solver &</span>
                     </h2>
                     <h2>
                        <span>Creator</span>
                        <div className="period"></div>
                     </h2>
                  </motion.div>
                  <motion.div
                     className="blurb"
                     variants={Animations.movement}
                     initial="initialX"
                     custom={0}
                     animate="endingXY"
                     transition={{ duration: 0.5, delay: 1 }}
                  >
                     <p>
                        With a passion for creative solutions, I'm using code to
                        create experiences that resolve, enhance and delight!
                     </p>
                  </motion.div>

                  <div className="link-container">
                     <ul className="nav-links">
                        <motion.li
                           variants={Animations.movement}
                           initial="initialX"
                           custom={-15}
                           animate="endingXY"
                           transition={{ duration: 0.5, delay: 1.5 }}
                        >
                           <a href="/#about-page">
                              <h5
                                 index="1"
                                 onMouseEnter={hoverOpacity}
                                 onMouseLeave={hoverOpacity}
                              >
                                 01 / Learn more about me
                              </h5>
                              <motion.div
                                 className="arrow"
                                 initial={{ x: "-53%" }}
                                 whileHover={{ scale: 1.2, x: "-53%" }}
                              >
                                 <FontAwesomeIcon
                                    icon="chevron-down"
                                    className="icon"
                                    index="1"
                                    onMouseEnter={hoverOpacity}
                                    onMouseLeave={hoverOpacity}
                                 />
                              </motion.div>
                           </a>
                        </motion.li>
                        <motion.li
                           variants={Animations.movement}
                           initial="initialX"
                           custom={-15}
                           animate="endingXY"
                           transition={{ duration: 0.5, delay: 2 }}
                        >
                           <a href="/#projects-page">
                              <h5
                                 index="2"
                                 onMouseEnter={hoverOpacity}
                                 onMouseLeave={hoverOpacity}
                              >
                                 02 / View my work
                              </h5>
                              <motion.div
                                 className="arrow"
                                 initial={{ x: "-53%" }}
                                 whileHover={{ scale: 1.2, x: "-53%" }}
                              >
                                 <FontAwesomeIcon
                                    icon="chevron-down"
                                    className="icon"
                                    index="2"
                                    onMouseEnter={hoverOpacity}
                                    onMouseLeave={hoverOpacity}
                                 />
                              </motion.div>
                           </a>
                        </motion.li>
                        <motion.li
                           variants={Animations.movement}
                           initial="initialX"
                           custom={-15}
                           animate="endingXY"
                           transition={{ duration: 0.5, delay: 2.5 }}
                        >
                           <a href="/#contact-page">
                              <h5
                                 index="3"
                                 onMouseEnter={hoverOpacity}
                                 onMouseLeave={hoverOpacity}
                              >
                                 03 / Let's connect!
                              </h5>
                              <motion.div
                                 className="arrow"
                                 initial={{ x: "-53%" }}
                                 whileHover={{ scale: 1.2, x: "-53%" }}
                              >
                                 <FontAwesomeIcon
                                    icon="chevron-down"
                                    className="icon"
                                    index="3"
                                    onMouseEnter={hoverOpacity}
                                    onMouseLeave={hoverOpacity}
                                 />
                              </motion.div>
                           </a>
                        </motion.li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;

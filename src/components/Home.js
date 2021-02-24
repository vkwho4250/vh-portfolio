import React, { useState } from "react";
import Animations from "./animation";
import { motion } from "framer-motion";

import "./Home.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
   const [waterOpacity, setWaterOpacity] = useState(0.9);

   function hoverOpacity(e) {
      if (e.type === "mouseenter") {
         setWaterOpacity(0.9 - e.target.getAttribute("index") * 0.25);
      } else {
         setWaterOpacity(0.9);
      }
   }

   return (
      <div id="home-page" className="home">
         {/* == ICE-CITY SVG == */}
         <motion.div
            className="bg-image city-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
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
         </motion.div>
         <motion.div
            className="bg-image sun-container"
            initial={{ rotate: 60, opacity: 0 }}
            animate={{ rotate: 380, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
         >
            <div className="sun"></div>
         </motion.div>

         <motion.div
            className="circle-border"
            variants={Animations.rotate}
            initial="initialRotation"
            custom={-180}
            animate="endingRotation"
            transition={{ duration: 2, ease: "easeOut" }}
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
                     create experiences that delight, resolve, and satisfy, no
                     matter the challenge.
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
   );
}

export default Home;

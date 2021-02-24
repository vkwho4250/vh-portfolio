import React, { useState } from "react";
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

   const movement = {
      initialDown: { y: -20, opacity: 0 },
      initialUp: { y: 20, opacity: 0 },
      initialLeft: { x: -15, opacity: 0 },
      finalPosn: { x: 0, y: 0, opacity: 1 },
   };

   return (
      <div id="home-page" className="home page">
         <div className="bg-image">
            <motion.div
               intial={{ y: 0 }}
               animate={{ y: [0, -4, 0] }}
               transition={{
                  repeat: Infinity,
                  duration: 5,
                  times: [0, 0.5, 1],
               }}
               className="ice-city-container"
            ></motion.div>
            <div className="water" style={{ opacity: waterOpacity }}></div>
         </div>

         <div className="home-text">
            <div className="main-text">
               <motion.div
                  className="headers"
                  variants={movement}
                  initial="initialDown"
                  animate="finalPosn"
                  transition={{ duration: 1 }}
               >
                  <h5>Welcome! My name is</h5>
                  <h1>Victoria</h1>
               </motion.div>
               <motion.div
                  className="subheading"
                  variants={movement}
                  initial="initialUp"
                  animate="finalPosn"
                  transition={{ duration: 1 }}
               >
                  <h2>
                     <span>Front-end Developer</span>
                  </h2>
                  <h2>
                     <span>Problem-Solver</span>
                  </h2>
                  <h2>
                     <span>Creator</span>
                  </h2>
               </motion.div>
            </div>
            <div className="link-container">
               <div className="arrow-down">
                  <motion.div whileHover={{ scale: 1.1 }}>
                     <a href="/#about-page">
                        <FontAwesomeIcon icon="chevron-down" className="icon" />
                     </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                     <a href="/#projects-page">
                        <FontAwesomeIcon icon="chevron-down" className="icon" />
                     </a>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1 }}>
                     <a href="/#contact-page">
                        <FontAwesomeIcon icon="chevron-down" className="icon" />
                     </a>
                  </motion.div>
               </div>
               <ul className="nav-links">
                  <motion.li
                     variants={movement}
                     initial="initialLeft"
                     animate="finalPosn"
                     transition={{ duration: 0.5, delay: 1 }}
                  >
                     <a href="/#about-page">
                        <h5
                           index="1"
                           onMouseEnter={hoverOpacity}
                           onMouseLeave={hoverOpacity}
                        >
                           01 / Learn more about me
                        </h5>
                     </a>
                  </motion.li>
                  <motion.li
                     variants={movement}
                     initial="initialLeft"
                     animate="finalPosn"
                     transition={{ duration: 0.5, delay: 1.5 }}
                  >
                     <a href="/#projects-page">
                        <h5
                           index="2"
                           onMouseEnter={hoverOpacity}
                           onMouseLeave={hoverOpacity}
                        >
                           02 / View my work
                        </h5>
                     </a>
                  </motion.li>
                  <motion.li
                     variants={movement}
                     initial="initialLeft"
                     animate="finalPosn"
                     transition={{ duration: 0.5, delay: 2 }}
                  >
                     <a href="/#contact-page">
                        <h5
                           index="3"
                           onMouseEnter={hoverOpacity}
                           onMouseLeave={hoverOpacity}
                        >
                           03 / Let's connect!
                        </h5>
                     </a>
                  </motion.li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Home;

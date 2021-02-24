import React, { useState } from "react";
import Animations from "../animation";
import { motion } from "framer-motion";

import "./NavSideBar.scss";

function NavSideBar() {
   const navigation = ["home", "about", "projects", "contact"];

   return (
      <motion.div
         id="nav-side-bar"
         variants={Animations.movement}
         initial="initialX"
         custom={100}
         animate="endingXY"
         transition={{ duration: 1, delay: 2.5 }}
      >
         <a href="/#home-page">
            <div className="orange-dot"></div>
         </a>
         <ul>
            {navigation.map((page, index) => {
               return (
                  <li key={index}>
                     <a href={`/#${page}-page`}>
                        <h6>{page}</h6>
                     </a>
                  </li>
               );
            })}
         </ul>
      </motion.div>
   );
}

export default NavSideBar;

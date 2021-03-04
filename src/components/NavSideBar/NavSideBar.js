import React, { useState } from "react";
import Animations from "../animation";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavSideBar.scss";

function NavSideBar() {
   const navigation = ["home", "about", "projects", "contact"];
   const [showSocials, setShowSocials] = useState(false);

   return (
      <motion.div
         id="nav-side-bar"
         variants={Animations.movement}
         initial="initialX"
         custom={100}
         animate="endingXY"
         transition={{ duration: 1, delay: 2.5 }}
      >
         <div className="orange-dot"></div>
         <ul className="page-nav">
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

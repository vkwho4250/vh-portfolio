import React from "react";
import Animations from "./animation";
import ResumeBtn from "./ResumeBtn";
import { motion } from "framer-motion";
import "./NavBar.scss";

import { ReactComponent as Logo } from "../assets/SVG/logo.svg";

function NavBar({ changeCursorActive }) {
   const pages = ["about", "projects", "contact"];

   return (
      <motion.nav
         variants={Animations.movement}
         initial="initialY"
         custom={-100}
         animate="endingXY"
         transition={{ duration: 1, delay: 2.5 }}
      >
         <Logo className="logo" />
         <ul>
            {pages.map((page, index) => {
               return (
                  <li
                     key={index}
                     onMouseEnter={changeCursorActive}
                     onMouseLeave={changeCursorActive}
                  >
                     <a href={`/#${page}-page`}>
                        <h6>{page}</h6>
                     </a>
                  </li>
               );
            })}
            <li
               onMouseEnter={changeCursorActive}
               onMouseLeave={changeCursorActive}
            >
               <ResumeBtn />
            </li>
         </ul>
      </motion.nav>
   );
}

export default NavBar;

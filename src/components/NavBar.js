import React from "react";
import Animations from "./animation";
import ResumeBtn from "./ResumeBtn";
import { motion } from "framer-motion";
import "./NavBar.scss";

import { ReactComponent as Logo } from "../assets/SVG/logo.svg";

function NavBar() {
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
            <li>
               <a href="/#about-page">
                  <h6>About</h6>
               </a>
            </li>
            <li>
               <a href="/#projects-page">
                  <h6>Projects</h6>
               </a>
            </li>
            <li>
               <a href="/#contact-page">
                  <h6>Contact</h6>
               </a>
            </li>
            <li>
               <ResumeBtn />
            </li>
         </ul>
      </motion.nav>
   );
}

export default NavBar;

import React from "react";
import "./NavBar.scss";

import { ReactComponent as Logo } from "../assets/SVG/logo.svg";

function NavBar() {
   return (
      <nav>
         <Logo className="logo" />
         <ul>
            <li>
               <a href="/#home-page">
                  <h6>Home</h6>
               </a>
            </li>
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
         </ul>
      </nav>
   );
}

export default NavBar;

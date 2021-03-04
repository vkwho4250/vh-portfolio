import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Logo } from "../assets/SVG/logo.svg";

import "./SocialsBar.scss";

function SocialsBar() {
   return (
      <div id="socials-bar">
         <ul>
            <li>
               <a href="mailto:vkwho4250@gmail.com">
                  <FontAwesomeIcon icon="envelope" className="icon" />
               </a>
            </li>
            <li>
               <a href="https://www.linkedin.com/in/victoria-kw-ho/">
                  <FontAwesomeIcon
                     icon={["fab", "linkedin-in"]}
                     className="icon"
                  />
               </a>
            </li>
            <li>
               <a href="https://github.com/vkwho4250">
                  <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
               </a>
            </li>
         </ul>
      </div>
   );
}

export default SocialsBar;

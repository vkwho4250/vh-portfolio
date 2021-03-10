import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./SocialsBar.scss";

function SocialsBar({ changeCursorActive }) {
   return (
      <ul className="socials">
         <li
            onMouseEnter={changeCursorActive}
            onMouseLeave={changeCursorActive}
         >
            <a href="mailto:vkwho4250@gmail.com" target="_blank">
               <FontAwesomeIcon icon="envelope" className="icon" />
            </a>
         </li>
         <li
            onMouseEnter={changeCursorActive}
            onMouseLeave={changeCursorActive}
         >
            <a
               href="https://www.linkedin.com/in/victoria-kw-ho/"
               target="_blank"
            >
               <FontAwesomeIcon
                  icon={["fab", "linkedin-in"]}
                  className="icon"
               />
            </a>
         </li>
         <li
            onMouseEnter={changeCursorActive}
            onMouseLeave={changeCursorActive}
         >
            <a href="https://github.com/vkwho4250" target="_blank">
               <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
            </a>
         </li>
      </ul>
   );
}

export default SocialsBar;

import React from "react";
import "./NavBtn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBtn({ text, icon, page, changeCursorActive }) {
   return (
      <a
         href={`/#${page}-page`}
         className="nav-btn"
         onMouseEnter={changeCursorActive}
         onMouseLeave={changeCursorActive}
      >
         <h5>{text}</h5>
         <div>
            <FontAwesomeIcon icon={icon} className="icon" />
         </div>
      </a>
   );
}

export default NavBtn;

import React from "react";
import "./NavBtn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBtn({ text, icon, destination, target, changeCursorActive }) {
   return (
      <a
         href={destination}
         className="nav-btn"
         onMouseEnter={changeCursorActive}
         onMouseLeave={changeCursorActive}
         target={target}
      >
         <h5>{text}</h5>
         <div>
            <FontAwesomeIcon icon={icon} className="icon" />
         </div>
      </a>
   );
}

export default NavBtn;

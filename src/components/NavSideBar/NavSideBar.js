import React, { useState } from "react";
import "./NavSideBar.scss";

function NavSideBar() {
   const navigation = ["home", "about", "projects", "contact"];

   return (
      <div id="nav-side-bar">
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
      </div>
   );
}

export default NavSideBar;

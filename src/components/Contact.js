import React, { useState, useEffect } from "react";
import "./Contact.scss";

import SocialsBar from "./SocialsBar";
import NavBtn from "./NavBtn";

function Contact({ changeCursorActive }) {
   return (
      <div id="contact-page" className="contact-page">
         <div className="text-content">
            <div className="title-text">
               <h2>
                  <span>Let's connect!</span>
               </h2>
               <div className="title-paragraph">
                  <h3>
                     I'd love an opportunity to speak with you and hear about
                     your journey as well. Anything from experiences to your
                     latest milestone (maybe it's resisting the bag of chips
                     you've been eyeing the whole day, who knows?) - I'm all
                     ears.
                  </h3>
               </div>
            </div>
         </div>
         <div className="details">
            <NavBtn
               text="vkwho4250@gmail.com"
               icon="envelope"
               destination="mailto:vkwho4250@gmail.com"
               target="_blank"
               changeCursorActive={changeCursorActive}
            />
            <NavBtn
               text="victoria-kw-ho"
               icon={["fab", "linkedin-in"]}
               destination="https://www.linkedin.com/in/victoria-kw-ho/"
               target="_blank"
               changeCursorActive={changeCursorActive}
            />
         </div>
         <div className="cityscape"></div>
      </div>
   );
}

export default Contact;

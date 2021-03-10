import React from "react";
import "./Contact.scss";

import SocialsBar from "./SocialsBar";

function Contact({ changeCursorActive }) {
   return (
      <div id="contact-page" className="contact-page page">
         <div className="content">
            <div className="title-text">
               <h2>
                  <span>Let's connect!</span>
               </h2>
               <SocialsBar changeCursorActive={changeCursorActive} />
               <div className="title-paragraph">
                  <h3>
                     I'd love an opportunity to speak with you and hear about
                     your journey as well. Anything from experiences to your
                     latest milestone (maybe it's resisting the bag of chips
                     that's been eyeing you the whole day, who knows?) - I'm all
                     ears.
                  </h3>
               </div>
            </div>

            <div className="details">
               <h3
                  onMouseEnter={changeCursorActive}
                  onMouseLeave={changeCursorActive}
               >
                  <span>
                     Shoot me an email at{" "}
                     <a href="mailto:vkwho4250@gmail.com" target="_blank">
                        vkwho4250@gmail.com
                     </a>{" "}
                     or leave a message here.
                  </span>
               </h3>
            </div>

            <form>
               <input
                  type="text"
                  id="name"
                  name="name"
                  minLength="1"
                  placeholder="Name"
                  onMouseEnter={changeCursorActive}
                  onMouseLeave={changeCursorActive}
               ></input>

               <input
                  type="email"
                  name="email"
                  minLength="1"
                  placeholder="Email"
                  onMouseEnter={changeCursorActive}
                  onMouseLeave={changeCursorActive}
               ></input>

               <textarea
                  name="message"
                  minLength="1"
                  rows="4"
                  columns="10"
                  placeholder="Message"
                  onMouseEnter={changeCursorActive}
                  onMouseLeave={changeCursorActive}
               ></textarea>

               <button type="submit">On your mark, get set, let's chat!</button>
            </form>
         </div>
         <div className="ice-city-container"></div>
      </div>
   );
}

export default Contact;

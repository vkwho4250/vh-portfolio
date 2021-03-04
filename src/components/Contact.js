import React from "react";
import "./Contact.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact() {
   return (
      <div id="contact-page" className="contact-page page">
         <div className="content">
            <div className="main-text">
               <h2>
                  <span>Let's connect!</span>
               </h2>
               <div className="subheading">
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
               <h3>
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
               ></input>

               <input
                  type="email"
                  name="email"
                  minLength="1"
                  placeholder="Email"
               ></input>

               <textarea
                  name="message"
                  minLength="1"
                  rows="4"
                  columns="10"
                  placeholder="Message"
               ></textarea>

               <button type="submit">On your mark, get set, let's chat!</button>
            </form>
         </div>
         <div className="ice-city-container"></div>
      </div>
   );
}

export default Contact;

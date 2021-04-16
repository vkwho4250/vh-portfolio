import React, { useState } from "react";
import "./About.scss";

import TechInfo from "../data/TechInfo";
import Tech from "./Tech";
import ResumeBtn from "./ResumeBtn";
import SocialsBar from "./SocialsBar";

function About({ changeCursorActive }) {
   const [techInFocus, setTechInFocus] = useState(null);

   const changeTechInFocus = (techName) => {
      if (typeof techName === "string") {
         setTechInFocus(techName);
      } else {
         setTechInFocus(null);
      }
   };

   return (
      <div id="about-page">
         <div className="title">
            <h1>
               <span>About Me</span>
            </h1>
         </div>
         <div className="main-content">
            <div className="profile-container">
               <div className="profile-pic"></div>
               <div className="connect">
                  <a
                     href="/#contact-page"
                     onMouseEnter={changeCursorActive}
                     onMouseLeave={changeCursorActive}
                  >
                     <h5>Connect with me here</h5>
                  </a>
                  <SocialsBar changeCursorActive={changeCursorActive} />
                  <ResumeBtn className="resume-btn" />
               </div>
            </div>
            <div className="summary">
               <h2>
                  <span>Hi, I'm Victoria! </span>
               </h2>
               <p>
                  I am a front-end developer based in Toronto with experience in{" "}
                  <span>consulting</span>, working in{" "}
                  <span>cross-functional teams</span> and exchanging complex
                  technical problems for <span>actionable solutions</span>.
               </p>
               <p>
                  My experience at a global risk consulting firm means I’m
                  familiar with <span>assessing client needs</span>,
                  understanding <span>big picture goals</span>, and how to
                  achieve them using <span>analytics software</span> to
                  systematically transform raw data into workable information.
               </p>
               <p>
                  I pride myself on being unafraid to dig deep and presevering
                  when faced with a new challenge. Combining my technical
                  foundation and unique experiences, I choose clean, quality
                  code as my weapon of choice to solve problems, be creative and
                  get things done!
               </p>
            </div>
            <div className="skills">
               <h5
                  onClick={changeTechInFocus}
                  onMouseEnter={changeCursorActive}
                  onMouseLeave={changeCursorActive}
               >
                  {techInFocus === null
                     ? "My Toolkit"
                     : "Hide Featured Projects"}
               </h5>
               <div className="tech-display">
                  {TechInfo.map((tech, index) => {
                     return (
                        <Tech
                           key={index}
                           tech={tech}
                           techInFocus={techInFocus}
                           changeTechInFocus={changeTechInFocus}
                           changeCursorActive={changeCursorActive}
                        />
                     );
                  })}
               </div>
            </div>
            <div className="extras">
               <h5>Also a huge fan of</h5>
               <ul>
                  <li>
                     <p>Deep reflection</p>
                  </li>
                  <li>
                     <p>Time spent with friends and family</p>
                  </li>
                  <li>
                     <p>
                        Exploring new ways to make art &mdash; especially vector
                        art!
                     </p>
                  </li>
                  <li>
                     <p>
                        In-depth plot/character analysis on my favourite shows
                     </p>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default About;

import React, { useState } from "react";
import "./About.scss";

import TechInfo from "../data/TechInfo";
import Tech from "./Tech";
import ResumeBtn from "./ResumeBtn";
import SocialsBar from "./SocialsBar";

function About({ changeCursorActive }) {
   const [techInFocus, setTechInFocus] = useState("");

   function changeTechInFocus(techName) {
      setTechInFocus(techName);
   }

   return (
      <div id="about-page">
         <div className="content-container">
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
                     I'm a front-end developer based in Toronto and an advocate
                     for <span>continuous learning</span>,{" "}
                     <span>big picture thinking</span> and{" "}
                     <span>smart solutions</span> in both life and work.
                  </p>
                  <p>
                     My career started in a global risk consulting firm where I
                     worked in a fast-paced environment managing multiple client
                     expectations and deadlines. I have strong problem-solving
                     and interpersonal skills with applied experience using data
                     software to enhance process efficiency and usability .
                  </p>
                  <p>
                     I pride myself on being unafraid to dig deep and
                     presevering when faced with a new challenge. Combining my
                     technical foundation and unique experiences, I choose
                     clean, quality code as my weapon of choice to solve
                     problems, innovate and get things done!
                  </p>
               </div>
               <div className="skills">
                  <h5>My Toolkit</h5>
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
                           Exploring new ways to make art &mdash; especially
                           vector art!
                        </p>
                     </li>
                     <li>
                        <p>
                           In-depth plot/character analysis on my favourite
                           shows
                        </p>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;

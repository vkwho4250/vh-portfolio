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
                  I am a web developer who excel in{" "}
                  <span>team environments</span>, working{" "}
                  <span>autonomously</span> and exchanging complex problems for{" "}
                  <span>actionable solutions</span>.
               </p>
               <p>
                  I started out in risk consulting where I had extensive
                  practice <span>meeting client needs</span> by managing
                  projects from <span>conception</span> to{" "}
                  <span>implementation</span>. I'm a <span>problem-solver</span>{" "}
                  and <span>self-starter</span> who prides herself on being{" "}
                  <span>unafraid to dig deep</span> and <span>presevering</span>{" "}
                  when faced with new challenges.
               </p>
               <p>
                  I love that I can be <span>creative</span> and{" "}
                  <span>forever curious</span> with web development the same
                  time I use my <span>methodical personality</span> to write{" "}
                  <span>quality, DRY code</span>. Together, I build{" "}
                  <span>responsive</span> and <span>engaging</span> digital
                  experiences and am eager to continue learning to become a
                  better developer.
               </p>
               <p>
                  Ultimately, my passion lies in{" "}
                  <span>bringing ideas to life</span> and I'm choosing quality
                  code as my weapon of choice to resolve, create and delight!
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

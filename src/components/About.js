import React, { useState } from "react";
import "./About.scss";
import TechInfo from "../data/TechInfo";
import Tech from "./Tech";

function About() {
   const [techInFocus, setTechInFocus] = useState("");

   function changeTechInFocus(techName) {
      setTechInFocus(techName);
   }

   return (
      <div id="about-page" className="page">
         <div className="about">
            <h1>About</h1>
            <div className="content-container">
               <div className="main-content">
                  <div className="image-container">
                     <div className="profile-pic"></div>
                     <p>
                        The best days are the ones under the sun
                        <span>...</span>
                        or in front of it.
                     </p>
                  </div>
                  <div className="main-text">
                     <div className="summary">
                        <h2>
                           <span>Hi, I'm Victoria!</span>
                        </h2>
                        <p>
                           I'm a front-end developer based in Toronto. I'm also
                           an advocate for <span>continuous learning</span>,{" "}
                           <span>big picture thinking</span> and{" "}
                           <span>smart solutions</span> in both life and work.
                        </p>
                        <p>
                           My career started in a global risk consulting firm
                           where I worked in a fast-paced environment managing
                           multiple client expectations and deadlines. I have
                           strong problem-solving and interpersonal skills with
                           applied experience on enhancing process efficiency
                           and usability.
                        </p>
                        <p>
                           Combining my technical foundation and experiences, I
                           am a fast learner committed to writing reusable,
                           quality code for user-friendly web applications.
                        </p>
                     </div>

                     <div className="subsection">
                        <div className="about-me-facts">
                           <h5>Also a huge fan of</h5>
                           <ul>
                              <li>
                                 <p>Deep reflection</p>
                              </li>
                              <li>
                                 <p>Spending time with family</p>
                              </li>
                              <li>
                                 <p>
                                    Exploring new ways to make art &mdash;
                                    especially vector art!
                                 </p>
                              </li>
                              <li>
                                 <p>
                                    Having in-depth analysis on characters and
                                    plots of my favourite shows
                                 </p>
                              </li>
                           </ul>
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
                                    />
                                 );
                              })}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="timeline">
               <div className="ice-city-container"></div>
            </div>
         </div>
      </div>
   );
}

export default About;

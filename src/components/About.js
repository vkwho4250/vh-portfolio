import React, { useState } from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TechInfo from "../data/TechInfo";
import Tech from "./Tech";

function About({ changeCursorActive }) {
   const [techInFocus, setTechInFocus] = useState("");

   function changeTechInFocus(techName) {
      setTechInFocus(techName);
   }

   return (
      <div id="about-page" className="page">
         <div className="content-container">
            <div className="title">
               <h1>
                  <span>About Me</span>
               </h1>
            </div>
            <div className="main-content">
               <div className="image-container">
                  <div className="profile-pic"></div>
                  <p>
                     The best days are the ones under the sun
                     <span>...</span>
                     or in front of it.
                  </p>
                  <ul className="socials">
                     <li
                        onMouseEnter={changeCursorActive}
                        onMouseLeave={changeCursorActive}
                     >
                        <a href="mailto:vkwho4250@gmail.com" target="_blank">
                           <FontAwesomeIcon icon="envelope" className="icon" />
                        </a>
                     </li>
                     <li
                        onMouseEnter={changeCursorActive}
                        onMouseLeave={changeCursorActive}
                     >
                        <a
                           href="https://www.linkedin.com/in/victoria-kw-ho/"
                           target="_blank"
                        >
                           <FontAwesomeIcon
                              icon={["fab", "linkedin-in"]}
                              className="icon"
                           />
                        </a>
                     </li>
                     <li
                        onMouseEnter={changeCursorActive}
                        onMouseLeave={changeCursorActive}
                     >
                        <a href="https://github.com/vkwho4250" target="_blank">
                           <FontAwesomeIcon
                              icon={["fab", "github"]}
                              className="icon"
                           />
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="main-text">
                  <div className="summary">
                     <h2>
                        <span>Hi, I'm Victoria! </span>
                     </h2>
                     <p>
                        I'm a front-end developer based in Toronto and an
                        advocate for <span>continuous learning</span>,{" "}
                        <span>big picture thinking</span> and{" "}
                        <span>smart solutions</span> in both life and work.
                     </p>
                     <p>
                        My career started in a global risk consulting firm where
                        I worked in a fast-paced environment managing multiple
                        client expectations and deadlines. I have strong
                        problem-solving and interpersonal skills with applied
                        experience on enhancing process efficiency and
                        usability.
                     </p>
                     <p>
                        I pride myself on being unafraid to dig deep and
                        presevering when faced with a new challenge. Combining
                        my technical foundation and unique experiences, I choose
                        clean, quality code as my weapon of choice to solve
                        problems, innovate and make an impact.
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
                              <p>Time spent with friends and family</p>
                           </li>
                           <li>
                              <p>
                                 Exploring new ways to make art &mdash;
                                 especially vector art!
                              </p>
                           </li>
                           <li>
                              <p>
                                 In-depth plot/character analysis on my
                                 favourite shows
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
                                    changeCursorActive={changeCursorActive}
                                 />
                              );
                           })}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default About;

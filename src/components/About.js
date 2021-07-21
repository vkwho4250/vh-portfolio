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
            I’m a self-motivated and avid learner who’s passionate about
            exchanging complex problems for actionable solutions. As a result of
            my work experiences, I excel in meeting project goals, contributing
            to collaborative teams, and being resourceful when faced with new
            challenges.
          </p>
          <p>
            I started this journey in November 2020 when I discovered how
            exciting it is create using code and also the vast potential this
            career path has. Being a web developer allows me to be creative and
            curious without compromising the inherent problem-solver in me. I
            love that there’s never a dead-end in web development and am eager
            to learn new and better ways to produce engaging and memorable
            digital experiences that consistently deliver.
          </p>
          <p>
            I always strive to create accessible, intuitive applications
            supported by scalable and efficient code, and am eager to craft them
            amongst awesome people who share my enthusiasm in all things smart
            and creative!
          </p>
        </div>
        <div className="skills">
          <h5
            onClick={changeTechInFocus}
            onMouseEnter={changeCursorActive}
            onMouseLeave={changeCursorActive}
          >
            {techInFocus === null ? "My Toolkit" : "Hide Featured Projects"}
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
                Exploring new ways to make art &mdash; especially vector art!
              </p>
            </li>
            <li>
              <p>
                In-depth plot/character analysis on my favourite novels and
                shows
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;

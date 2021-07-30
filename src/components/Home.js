import React from "react";
import "./Home.scss";
import Animations from "../animation";
import NavBtn from "./NavBtn";

import { motion } from "framer-motion";

function Home({ changeCursorActive }) {
  const navBtnText = [
    {
      text: "Learn More About Me",
      icon: "hand-spock",
      destination: "/#about-page",
    },
    {
      text: "View My Work",
      icon: "laptop-code",
      destination: "/#projects-page",
    },
    {
      text: "Let's Connect",
      icon: "people-arrows",
      destination: "/#contact-page",
    },
  ];

  return (
    <div id="home-page">
      <motion.div
        className="vector-image sun-container"
        initial={{ rotate: 90, opacity: 0 }}
        animate={{ rotate: -330, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      >
        <div className="sun"></div>
      </motion.div>
      <div className="text-container">
        <div className="bg-fade"></div>

        <div className="main-text">
          <motion.div
            className="border"
            variants={Animations.movement}
            initial="initialY"
            custom={20}
            animate="endingXY"
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          <motion.div
            className="intro-headers"
            variants={Animations.movement}
            initial="initialY"
            custom={-20}
            animate="endingXY"
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h5>Welcome! My name is</h5>
            <h1>Victoria</h1>
          </motion.div>
          <motion.div
            className="right-header"
            variants={Animations.movement}
            initial="initialY"
            custom={20}
            animate="endingXY"
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h5>And I'm a</h5>
            <h2>
              <span>Web Developer</span>
            </h2>
            <h2>
              <span>Problem-Solver &</span>
            </h2>
            <h2>
              <span>Creator</span>
              <div className="period"></div>
            </h2>
          </motion.div>
          <motion.div
            className="blurb"
            variants={Animations.movement}
            initial="initialX"
            custom={0}
            animate="endingXY"
            transition={{ duration: 0.5, delay: 1 }}
          >
            <h3>
              With a passion for creative solutions, I'm using code to create
              experiences that resolve, enhance and delight!
            </h3>
          </motion.div>
          <div className="nav-page-container">
            {navBtnText.map((navPage, index) => {
              return (
                <motion.div
                  key={index}
                  variants={Animations.movement}
                  initial="initialY"
                  custom={10}
                  animate="endingXY"
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  <NavBtn
                    text={navPage.text}
                    icon={navPage.icon}
                    destination={navPage.destination}
                    target=""
                    changeCursorActive={changeCursorActive}
                  />
                </motion.div>
              );
            })}
          </div>
          <motion.div
            className="vector-image city-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut", delay: 1 }}
          >
            <motion.div
              className="ice-city-container"
              intial={{ y: 0 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                times: [0, 0.5, 1],
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;

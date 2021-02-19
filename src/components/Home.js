import React, { useState } from "react";
import "./Home.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as IceCityscape } from "../assets/SVG/iceberg.svg";

function Home() {
   const [waterOpacity, setWaterOpacity] = useState(0.9);

   function hoverOpacity(e) {
      if (e.type === "mouseenter") {
         setWaterOpacity(0.9 - e.target.getAttribute("index") * 0.25);
      } else {
         setWaterOpacity(0.9);
      }
   }

   return (
      <div id="home-page" className="home page">
         <div className="bg">
            <div className="ice-city-container">
               {/* <IceCityscape className="ice-city" /> */}
            </div>
            <div className="water" style={{ opacity: waterOpacity }}></div>
         </div>

         <div className="scroll-container">
            <FontAwesomeIcon icon="chevron-down" className="icon" />
         </div>
         {/* <div className="floater-nav">
            <div>
               <h5>01 / Learn more about me</h5>
               <h5>02 / View my work</h5>
               <h5>03 / Let's connect</h5>
            </div>
         </div> */}
         <div className="home-text">
            <div className="title">
               <div>
                  <h2>Welcome! My name is</h2>
                  <h1>Victoria Ho</h1>
                  <div className="subheading">
                     <h2>and I'm a</h2>
                     <h2>
                        <span>Front-end Developer.</span>
                     </h2>
                     {/* <p>
                        Also a huge fan of <span>problem-solving</span>, deep
                        diving for <span>answers</span> and bringing
                        <span> creative solutions</span> to light.
                     </p> */}
                     <p>
                        With a background in consulting and risk management, I
                        know what it's like to <span>think ahead</span>,
                        <span> dive deep</span> for answers, and
                        <span> persist</span> when confronted with uncertainty.
                     </p>
                  </div>
               </div>
            </div>
            <div className="description">
               <div>
                  {/* <p>
                     With a background in consulting and risk management, I know
                     what it's like to <span>think fast</span>,
                     <span> think smart</span> and <span>persist</span> when
                     confronted with uncertainty.
                  </p> */}
                  <h3>
                     Now? <br /> I do that with code.
                  </h3>
               </div>
               <div className="nav-links">
                  <ul>
                     <li>
                        <h5
                           index="1"
                           onMouseEnter={hoverOpacity}
                           onMouseLeave={hoverOpacity}
                        >
                           01 / Learn more about me
                        </h5>
                     </li>
                     <li>
                        <h5
                           index="2"
                           onMouseEnter={hoverOpacity}
                           onMouseLeave={hoverOpacity}
                        >
                           02 / View my work
                        </h5>
                     </li>
                     <li>
                        <h5
                           index="3"
                           onMouseEnter={hoverOpacity}
                           onMouseLeave={hoverOpacity}
                        >
                           03 / Let's connect
                        </h5>
                     </li>
                  </ul>
                  {/* <h6>or take the wheel and explore!</h6> */}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;

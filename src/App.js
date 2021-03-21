import React, { useState } from "react";
import "./App.scss";

import Cursor from "./components/Cursor";
import NavBar from "./components/NavBar";
import NavSideBar from "./components/NavSideBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
   faExternalLinkAlt,
   faChevronDown,
   faChevronUp,
   faEnvelope,
   faDownload,
   faEllipsisH,
   faHandSpock,
   faLaptopCode,
   faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";

library.add(
   fab,
   faChevronUp,
   faChevronDown,
   faExternalLinkAlt,
   faDownload,
   faEnvelope,
   faEllipsisH,
   faHandSpock,
   faLaptopCode,
   faPeopleArrows
);

function App() {
   const [cursorActive, setCursorActive] = useState(false);

   function changeCursorActive(e) {
      if (e.type === "mouseenter") {
         setCursorActive(true);
      } else {
         setCursorActive(false);
      }
   }

   return (
      <div className="App">
         <Cursor cursorActive={cursorActive} />
         <NavBar changeCursorActive={changeCursorActive} />
         <NavSideBar changeCursorActive={changeCursorActive} />
         <Home changeCursorActive={changeCursorActive} />
         <About changeCursorActive={changeCursorActive} />
         <Projects changeCursorActive={changeCursorActive} />
         <Contact changeCursorActive={changeCursorActive} />
      </div>
   );
}

export default App;

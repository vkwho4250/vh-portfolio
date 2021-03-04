import "./App.scss";

import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import SocialsBar from "./components/SocialsBar";
import NavSideBar from "./components/NavSideBar/NavSideBar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
   faExternalLinkAlt,
   faChevronDown,
   faChevronUp,
   faEnvelope,
   faDownload,
   faInfo,
} from "@fortawesome/free-solid-svg-icons";

library.add(
   fab,
   faChevronUp,
   faChevronDown,
   faExternalLinkAlt,
   faDownload,
   faEnvelope,
   faInfo
);

function App() {
   return (
      <div className="App">
         <NavBar />
         <NavSideBar />
         {/* <SocialsBar /> */}
         <Home />
         <About />
         <Projects />
         <Contact />
      </div>
   );
}

export default App;

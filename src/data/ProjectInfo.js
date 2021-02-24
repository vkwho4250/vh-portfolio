import { faBlackberry } from "@fortawesome/free-brands-svg-icons";

const yahtzee = {
   title: "Yahtzee",
   folder: "yahtzee",
   description: "The classic dice strategy game",
   reasons: [
      "required user participation",
      "involved routine, turn-based operations -- allowed reuse of key functions",
      "game logic covered many of the JavaScript fundamentals",
   ],
   achievements: [
      "to structure code for readability and reusability",
      "the DOM structure and how to access/manipulate elements",
      "where/how to use key JS concepts: conditions, loops, forEach, reduce and more",
      "to comment, debug and google (maniacally) when stuck",
   ],
   tech: ["HTML5", "CSS3", "JavaScript"],
   screenshots: ["yahtzee-1", "yahtzee-2", "yahtzee-3"],
   github: "https://github.com/vkwho4250/JavaScript-Yahtzee",
   site: "https://yahtzee-vkwho.netlify.app/",
};

const vueBulletJournal = {
   title: "Vue Bullet Journal",
   folder: "vue-bj",
   description: "The perfect tool to track and organize",
   achievements: [
      "the underlying structure of component-based frameworks",
      "to use global state management , specifically with Vuex",
      "how to connect front-end with server using a RESTful API",
   ],
   reasons: [
      "items were regularly updated -- perfect practice for state management",
      "contained many reusuable features/components",
      "each user required their own storage space",
   ],
   tech: ["Vue", "Vuex", "Node.js", "MongoDB", "REST API"],
   screenshots: ["vue-bj-1", "vue-bj-2", "vue-bj-2"],
   github: "https://github.com/vkwho4250/vue-bullet-journal",
   site: "https://vue-bullet-journal-vkwho.herokuapp.com/",
};

const reactBulletJournal = {
   title: "React Bullet Journal",
   folder: "react-bj",
   description: "BuJo system in progress",
   achievements: [
      "structuring code for readability and reusability",
      "setting defined goals and following project schedule ",
      "mass googling, debugging",
   ],

   tech: ["React"],
   reasons: [
      "user interaction",
      "basic operations",
      "conditional variable assignments",
   ],
   screenshots: ["1", "2", "3"],
   github: "https://github.com/vkwho4250/react-frontend-journal",
   site: "",
};

const rockPaperScissors = {
   title: "Rock-Paper-Scissors",
   folder: "rps",
   description: "The game that never gets old",
   reasons: [
      "break out of the tutorial trap and test my HTML, CSS and JS knowledge",
      "get a sense of this common design-to-code process",
      "very simple game logic - allowed me to focus on styling and learning the jQuery syntax",
   ],

   achievements: [
      "to translate an idea to a responsive website",
      "how to transition between mobile and desktop designs",
   ],
   tech: ["jQuery", "Responsive Design", "PSD Conversion"],
   screenshots: ["rps-1", "rps-2", "rps-3"],
   github: "https://github.com/vkwho4250/psd-conversion-rps",
   site: "https://rock-paper-scissors-vkwho.netlify.app/",
};

const ProjectInfo = [
   yahtzee,
   vueBulletJournal,
   reactBulletJournal,
   rockPaperScissors,
];

export default ProjectInfo;
